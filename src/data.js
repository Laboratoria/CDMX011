// estas funciones son de ejemplo

export const maping = (data) => {
  let posters2 = []

  data.forEach(movie => {
    posters2 += `
    <div class="card_film"> 
      <div class="posterContainer">
        <img src=${movie.poster} class= "posterimg" alt="${movie.title}">
      </div>
      <div class= "movie_info">
        <div class ="movieDate">
          <p class="releaseDate"> ${movie.release_date}</p>         
          <p class = "rate"> Score: <span >${movie.rt_score}</span></p>
        </div>    
        <h2>${movie.title}</h2>        
        <p class="director"> <span class="purpleText"> Director: </span> ${movie.director} </p>
        <p class="producer"> <span class="purpleText"> Producer: </span> ${movie.producer} </p>
        <p class="description"> ${movie.description} </p>
      </div>
    </div>  
    `

  })

  return posters2
};




const sortData = (data) => data.sort((a, b) => a.release_date > b.release_date ? 1 : -1)
export let sortAscending = (data) => sortData(data);
export const sortDescending = (data) => sortAscending(data).reverse();

export const sortAphabetic = (data) => data.sort((a,b) => a.title > b.title ? 1 : -1);

const sortRate = (data) => data.sort((a, b) => a.rt_score - b.rt_score);
export const sortWorst = (data) => sortRate(data);

export const filterData = (data, option) => {
  const filterDirector = data.filter((movie => movie.director === option));
  return filterDirector;
}

export const filterDataCharacters = (data, option) => {
  const filterCharacters = data.filter((movie => movie.movie === option));
  return filterCharacters;
}


export const peopleArray = (data) => {
  let peopleArray = []
  for (let film of data) {
      const character = film.people.map(function (people){
        people.movie = film.title
        return people
      })
    peopleArray= peopleArray.concat(character)
  }
  return peopleArray
}


export const charactersCard = (data) => {
  let characters = []

  data.forEach(movie => {
      characters += `
      <div class="card_character">         
        <div class="photoContainer">
          <img src=${movie.img} class= "photoimg" alt="${movie.name}">
        </div>
        <div class ="characterInfo">
          <div class= "characterData">                   
            <p class = "movie"> Movie: <br> <span>${movie.movie}</span></p>
            <p class="Specie"> Specie <br> <span>${movie.specie}</span></p>         
          </div>
          <h2 class="characterName">${movie.name}</h2>   
        </div>
      </div>
      `
  })
  return characters
};

export const score = (data) => {
  let scoreMovie= [];
for (let i= 0; i < data.length; i++){
  let scoreNumber = parseInt(data[i]["rt_score"]);
  scoreMovie.push(scoreNumber);
}
return scoreMovie;
}



export const computeStats = (data) => {
  const average = data.reduce((a,b) => a + b, 0) / data.length;
  const averageDigits = average.toFixed(2)
  return averageDigits; 
}
