import data from './data/athletes/athletes.js';
 //variable ordena alfabeticamente por nombre del atleta
 export const names= data.athletes
  names.sort((a,b)=>{
    if (a.name>b.name){
      return 1;
    } else if (a.name<b.name){
      return -1;
    }
    return 0;
  });
  //Funcion para ordenar alfabeticamente
// export function sortAtoZ (data){
//     let nameAtoZ= data.sort((a,b)=>{
//       if (a.name>b.name){
//         return 1;
//       } else if (a.name<b.name){
//         return -1;
//       }
//       return 0;
//     })
//     return nameAtoZ;
// }
  //filtra por equipo(pais) 
export function filterByTeam (countries){
  let dataByTeam= data.athletes.filter(function(team){  
 if(team.team== countries){
   return team;
 }
})
return dataByTeam;
}
//filtra por medalla 
export function filterByMedal(medals){
  let dataByMedal = data.athletes.filter(function(medal){
    if(medal.medal== medals){
      return medal;
    }
  })
  return dataByMedal;
}
//filtra por deporte 
export function filterBySport(sports){
  let dataBySport = data.athletes.filter(function(sport){
    if(sport.sport== sports){
      return sport;
    }
  })
  return dataBySport;
}
