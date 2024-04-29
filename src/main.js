import {info, speciesFilter, genderFilter, episodesFilter, sortFilter } from './data.js';



//Para mostrar la imagen y nombre de los personajes


function printCharacters(data) { //declaramos funcion

  let all = ''  // declaramo all vacio ya que se guardaran los datos en esa variable
  data.forEach((objeto) => { // serealiza un foreach para verificar los datos del arreglo
          
          //concatenamos all con el template para mostrar el nombre del personaje y la imagen
  all += `<div class="tarjetas"><div class="front-card"><img src = ${objeto.image} class="image"> </img><h1 class='name'> ${objeto.name}</h1></div>
          <div class="back-card"><h2 class="id">Id: ${objeto.id}</h2> <h2 class="status">Status: ${objeto.status}</h2><h2 class="gender">Gender: ${objeto.gender}</h2><h3 class="species"> Specie: ${objeto.species}</h3><h4 class='origin'> Origin: ${objeto.origin.name}</h4></div></div>`
  });   //

  document.getElementById('articles').innerHTML = all; //devuelve elemento content y agrego all a content. Nodo all se adjunta a nodo padre content
}
// meto argumento info en mi funcion allCharacters, ahi cambiare argumento para que guarde los datos nuevos que se le metan 

printCharacters(info);


// funcion change en select species(especies)
document.getElementById("species").addEventListener("change", function(e) {
    let filteredData= speciesFilter(info,e.target.value);
    console.log(filteredData)
    printCharacters(filteredData)
})

// funcion change en select gender(genero)
document.getElementById("gender").addEventListener("change", function(e) {
 let filteredData= genderFilter(info,e.target.value);
console.log(filteredData)
printCharacters(filteredData)
})

// funcion change en select episodes(episodios)
document.getElementById("episodes").addEventListener("change", function(e) {
    let filteredData= episodesFilter(info,e.target.value);
    console.log(filteredData)
    printCharacters(filteredData)
})

// funcion change en select orden az-za (ascendente y descendente)
document.getElementById('ordenA').addEventListener('change', function(e) {

  let filteredDataSort = sortFilter(info, e.target.value);
  console.log(filteredDataSort)
  printCharacters(filteredDataSort)
 
})

  const clear = document.getElementById('clear'); // boton borrar 
  clear.addEventListener('click', function() {
    document.getElementById('ordenA').value = 'Select an option';
    document.getElementById('species').value = 'Select an option';
    document.getElementById('gender').value = 'Select an option';
    document.getElementById('episodes').value = 'Select an option';
    printCharacters(info);
});