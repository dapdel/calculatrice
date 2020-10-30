/* eslint-disable radix */
/* eslint-disable no-param-reassign */
var nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var operations = ["+", "-", "*", "/"];

var messageEcran = document.getElementById("calcul");
var resultat = document.getElementById("resultat");
var touchescliquees = "";
var doubleOperation = false;
var bns = document.getElementsByClassName("bn");

// BOUTONS OPERATIONS
var opHTML = "";
for (var i = 0; i < 4; i++) {
  opHTML += `<button class="bn operations" id="${operations[i]}">${operations[i]}</button>`;
}

var siglesMathematiques = document.getElementById("siglesMathematiques");
siglesMathematiques.innerHTML = opHTML;

// BOUTONS CHIFFRES
var numHTML = "";
for (var j = 1; j < 10; j++) {
  numHTML += `<button class="bn nombre" id="${nombres[j]}">${nombres[j]}</button>`;
}
var chiffres = document.getElementById("chiffres");
chiffres.innerHTML = numHTML;

// DERNIERS BOUTONS
var parHTML = `<button class='bn clear' id='clear'>C</button><button class='bn nombre' id='0'>${nombres[0]}</button><button class='bn egal' id='='>=</button>`;

var particuliers = document.getElementById("particuliers");
particuliers.innerHTML = parHTML;

// FORMATION d'UN NOMBRE A PARTIR D'UN ARRAY DE CHIFFRES DE TYPE NUMBER
function transform(arrayTypeString) {
  console.log("*a*"+arrayTypeString);
  var arrayTypeNumber = [];
  for (var chiffre of arrayTypeString) {
    var chiffreTypeNumber = parseInt(chiffre);
    arrayTypeNumber.push(chiffreTypeNumber);
  }
  var nombre = 0;
  for (var nmbr of arrayTypeNumber) {
    nombre = nombre * 10 + nmbr;
  }
  console.log("*a*"+nombre);
  return (nombre);
}

// TRANSFORMATION ARRAY de CHIFFRES TYPE STRING EN ARRAY de NOMBRES type NUMBER
function calcul(arrayTypeString) {
  console.log("*"+arrayTypeString);
  console.log("*"+typeof arrayTypeString[0]);
  var partieDeArray = [];
  var arraytransforme = [];
  var indice = 0;
  for (var element of arrayTypeString) {
    if (element === "0" || element === "1" || element === "2" || element === "3" || element === "4" || element === "5" || element === "6" || element === "7" || element === "8" || element === "9") {
      partieDeArray.push(element);
    } else if (element === "+" || element === "-" || element === "*" || element === "/" || element === "=") {
      var chiffreTransforme = transform(partieDeArray);
      arraytransforme[indice] = chiffreTransforme;
      indice++;
      arraytransforme[indice] = element;
      partieDeArray = [];
      indice++;
    }
  }
  arraytransforme.pop();
  console.log("*"+arraytransforme);
  return arraytransforme;
}

// FONCTION QUI CALCULE
function calculElemeantaire(nombre1, operation, nombre2) {
  var reponse;
  switch (operation) {
    case "+":
      reponse = nombre1 + nombre2;
      break;
    case "-":
      reponse = nombre1 - nombre2;
      break;
    case "*":
      reponse = nombre1 * nombre2;
      break;
    default:
      if (nombre2===0){
        touchescliquees = "Erreur: division par 0";
        messageEcran.innerHTML = touchescliquees;
        touchescliquees = "";
      } else{
      reponse = nombre1 / nombre2;
    }
  }
  console.log(reponse);
  return reponse;
}

// CALCUL PEMDAS(PRIORITE DES OPERATIONS) D'UN ARRAY AVEC DES NOMBRES TYPE NUMBER et OPERATIONS
function pemdas(array) {
  console.log(array);
  for (var k = 0; k < array.length / 2; k++) {
    // multiplication
    var indiceMult = array.indexOf("*");
    if (indiceMult !== -1) {
      var calcMult = calculElemeantaire(array[indiceMult - 1], "*", array[indiceMult + 1]);
      array[indiceMult - 1] = calcMult;
      var elRetMult = array.splice(indiceMult - 1, 2);
      array[indiceMult - 1] = calcMult;
    }
  }
  for (var m = 0; m < array.length / 2; m++) {
    // division
    var indiceDiv = array.indexOf("/");
    if (indiceDiv !== -1) {
      var calcDiv = calculElemeantaire(array[indiceDiv - 1], "/", array[indiceDiv + 1]);
      array[indiceDiv - 1] = calcDiv;
      var elRetDiv = array.splice(indiceDiv - 1, 2);
      array[indiceDiv - 1] = calcDiv;
    }
  }
  for (var n = 0; n < array.length / 2; n++) {
    // somme
    var indicePlus = array.indexOf("+");
    console.log(indicePlus);
    if (indicePlus !== -1) {
      var calcPlus = calculElemeantaire(array[indicePlus - 1], "+", array[indicePlus + 1]);
      console.log(calcPlus);
      array[indicePlus - 1] = calcPlus;
      console.log(array);
      var elRetPlus = array.splice(indicePlus - 1, 2);
    /////// C ici qu'il y a un bug pour les TRES grands nombres (plus de 15chiffres)!!!
    /////// J'image que c'est lié au fait que celui-ci est exprimé avec un exposant.../////
      console.log(elRetPlus);
      array[indicePlus - 1] = calcPlus;
    }
  }
  for (var p = 0; p < array.length / 2; p++) {
    // soustraction
    var indice = array.indexOf("-");
    if (indice !== -1) {
      var calcSous = calculElemeantaire(array[indice - 1], "-", array[indice + 1]);
      array[indice - 1] = calcSous;
      var elRetsous = array.splice(indice - 1, 2);
      array[indice - 1] = calcSous;
    }
  }
  console.log(array);
  var calculFait = array[0].toFixed(4);
  calculFait = parseFloat(calculFait);
  if(calculFait===NaN){
    touchescliquees = "Erreur: division par 0";
    messageEcran.innerHTML = touchescliquees;
    touchescliquees = "";
    calculFait = "";
  }
  console.log(calculFait);
  return calculFait;
}

// INTERACTIONS AVEC LA CALCULETTE
for (var bn of bns) {
  bn.addEventListener("click", (e) => {
    var resultatFinal = "";
    resultat.innerHTML = resultatFinal;
    if (e.target.id === "clear") {
      touchescliquees = "";
      resultatFinal = "";
      resultat.innerHTML = resultatFinal;
    } else if (e.target.id === "*" || e.target.id === "/" || e.target.id === "+" || e.target.id === "-") {
      if (doubleOperation === true) {
        touchescliquees = "Erreur: 2 opérations consecutives !";
        messageEcran.innerHTML = touchescliquees;
        doubleOperation = false;
      } else {
        touchescliquees += e.target.id;
        doubleOperation = true;
      }
    } else if (e.target.id === "=") {
      if (doubleOperation === true) {
        touchescliquees = "Erreur: 2 opérations consecutives !";
        messageEcran.innerHTML = touchescliquees;
        doubleOperation = false;
      } else {
        touchescliquees += e.target.id;
        var entree = touchescliquees.split("");
        console.log(entree);
        resultatFinal = pemdas((calcul(entree)));
        console.log(resultatFinal);
        resultat.innerHTML = resultatFinal;

      }
    } else {
      touchescliquees += e.target.id;
      doubleOperation = false;
    }
    messageEcran.innerHTML = touchescliquees;
  });
}