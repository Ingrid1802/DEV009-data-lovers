const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

// Comandos para hacer la función de desaparecer la página principal y aparecer la página dos.

const botonAbajo = document.getElementById("botonAbajo");
botonAbajo.addEventListener("click", Continuar);

function Continuar() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "block";
}

const botonArriba = document.getElementById("botonArriba");
botonArriba.addEventListener("click", Subir);

function Subir() {
  document.getElementById("section2").style.display = "none";
  document.getElementById("section1").style.display = "block";
}

import championsData from "./data/lol/lol.js";

let champions = Object.values(championsData.data);

document.addEventListener("DOMContentLoaded", () => {
  todos();
});

const luchadorLink = document.getElementById("luchador-link");
luchadorLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = Object.values(championsData.data).filter((champion) =>
    champion.tags.includes("Fighter")
  );
  championContainer.innerHTML = "";
  todos();
});

const tiradorLink = document.getElementById("tirador-link");
tiradorLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = Object.values(championsData.data).filter((champion) =>
    champion.tags.includes("Marksman")
  );
  championContainer.innerHTML = "";
  todos();
});

const magoLink = document.getElementById("mago-link");
magoLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = Object.values(championsData.data).filter((champion) =>
    champion.tags.includes("Mage")
  );
  championContainer.innerHTML = "";
  todos();
});

const asesinoLink = document.getElementById("asesino-link");
asesinoLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = Object.values(championsData.data).filter((champion) =>
    champion.tags.includes("Assassin")
  );
  championContainer.innerHTML = "";
  todos();
});

const tanqueLink = document.getElementById("tanque-link");
tanqueLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = Object.values(championsData.data).filter((champion) =>
    champion.tags.includes("Tank")
  );
  championContainer.innerHTML = "";
  todos();
});

const apoyoLink = document.getElementById("apoyo-link");
apoyoLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = Object.values(championsData.data).filter((champion) =>
    champion.tags.includes("Support")
  );
  championContainer.innerHTML = "";
  todos();
});

const todosLink = document.getElementById("todos-link");
todosLink.addEventListener("click", (event) => {
  event.preventDefault();
  champions = Object.values(championsData.data);
  championContainer.innerHTML = "";
  todos();
});

const championContainer = document.getElementById("container_img");

function todos() {
  championContainer.innerHTML = "";
  for (let championKey in champions) {
    const champion = champions[championKey];
    const championImageURL = champion.img;
    const championElement = document.createElement("div");
    championElement.classList.add("champion-container");

    const imgElement = document.createElement("img");
    imgElement.src = championImageURL;
    imgElement.alt = championKey;
    imgElement.classList.add("champion-image");

    const nameElement = document.createElement("p");
    nameElement.classList.add("champion-name");
    nameElement.textContent = champion.name;

    championElement.appendChild(imgElement);
    championElement.appendChild(nameElement);
    championContainer.appendChild(championElement);
  }
}


