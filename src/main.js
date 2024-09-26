import data from './data/athletes/athletes.js';
import {filterByTeam , filterByMedal, filterBySport} from './data.js';

const root = document.getElementById("root");
const selectByTeam = document.getElementById("countries");
const selectByMedal = document.getElementById("medalSelect");
const selectBySport = document.getElementById("sport");
//Muestra la data en pantalla
function mostrarData(atleta) {
    let card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img")
    img.src = `./${atleta.medal}.png`;
    card.classList.add("icon");
    const names = document.createElement("p");
    card.classList.add("cardName");
    names.innerHTML = atleta.name.toUpperCase();
    const deporte = document.createElement("p");
    card.classList.add("contentcard");
    deporte.innerHTML = "Deporte: " + atleta.sport;
    const evento = document.createElement("p");
    card.classList.add("contentcard");
    evento.innerHTML = "Evento: " + atleta.event;
    const medalla = document.createElement("p");
    card.classList.add("contentcard");
    medalla.innerHTML =  atleta.medal;
    const pais = document.createElement("p");
    card.classList.add("contentcard");
    pais.innerHTML = atleta.team + " (" + atleta.noc + ")";
    const edad = document.createElement("p");
    card.classList.add("contentcard");
    edad.innerHTML = "Edad: " + atleta.age + "años";
    const genero = document.createElement("p");
    card.classList.add("contentcard");
    genero.innerHTML = "Genero: " + atleta.gender;
    const altura = document.createElement("p");
    card.classList.add("contentcard");
    altura.innerHTML = "Estatura: " + atleta.height + "cm";
    const peso = document.createElement("p");
    card.classList.add("contentcard");
    peso.innerHTML = "Peso: " + atleta.weight + "kg";

    card.appendChild(names);
    card.appendChild(img);
    card.appendChild(medalla);
    card.appendChild(pais);
    card.appendChild(evento);
    return card;
}
//Mostrar todas las tarjetas en la primer pantalla
data.athletes.forEach(athletas => {
    let allAthletes = (mostrarData(athletas))
      root.appendChild(allAthletes)
  });


  //Mostrar las tarjetas por pais
selectByTeam.addEventListener("change", function (e) {
    limpiar();
    let allData = (filterByTeam(e.target.value))
    allData.forEach((athletas) => {
        root.appendChild(mostrarData(athletas));
    });
});
//Mostrar las tarjetas por medalla
selectByMedal.addEventListener("change", function (e) {
    limpiar();
    let allData = (filterByMedal(e.target.value))
    allData.forEach((athletas) => {
        root.appendChild(mostrarData(athletas));
    });
});
//Mostrar tarjetas por deporte elegido
selectBySport.addEventListener("change", function (e) {
    limpiar();
    let allData = (filterBySport(e.target.value))
    allData.forEach((athletas) => {
        root.appendChild(mostrarData(athletas));
    });
});

function limpiar() {
    while (root.firstChild) {
        root.removeChild(root.firstChild)
    }
}
