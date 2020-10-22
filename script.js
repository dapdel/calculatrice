/* eslint-disable radix */
/* eslint-disable no-param-reassign */
var nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var operations = ["+", "-", "*", "/"];

// boutons opération
var opHTML = "";
for (var i = 0; i < 4; i++) {
  opHTML += `<button class="bn operations" id="${operations[i]}">${operations[i]}</button>`;
}

var siglesMathematiques = document.getElementById("siglesMathematiques");
siglesMathematiques.innerHTML = opHTML;

// boutons chiffres
var numHTML = "";
for (var j = 1; j < 10; j++) {
  numHTML += `<button class="bn nombre" id="${nombres[j]}">${nombres[j]}</button>`;
}
var chiffres = document.getElementById("chiffres");
chiffres.innerHTML = numHTML;

// derniers boutons
var parHTML = `<button class='bn clear' id='clear'>C</button><button class='bn nombre' id='0'>${nombres[0]}</button><button class='bn egal' id='='>=</button>`;

var particuliers = document.getElementById("particuliers");
particuliers.innerHTML = parHTML;

// transformation array de nombres de type string vers une array de nombres de type number
function transform(arrayTypeString) {
  var arrayTypeNumber = [];
  for (var chiffre of arrayTypeString) {
    var chiffreTypeNumber = parseInt(chiffre);
    arrayTypeNumber.push(chiffreTypeNumber);
  }

  var nombre = 0;
  for (var nmbr of arrayTypeNumber) {
    nombre = nombre * 10 + nmbr;
  }
  return (nombre);
}

// fonction qui calcule
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
      reponse = nombre1 / nombre2;
  }
  return reponse;
}

// calcul pemdas d'un array nombre type number avec operations
function pemdas(array) {
  for (var k = 0; k < array.length / 2; k++) {
    // multiplication
    var indiceMult = array.indexOf("*");
    console.log(indiceMult);
    if (indiceMult !== -1) {
      var calcMult = calculElemeantaire(array[indiceMult - 1], "*", array[indiceMult + 1]);
      console.log(calcMult);
      array[indiceMult - 1] = calcMult;
      console.log(array);
      var elRetMult = array.splice(indiceMult - 1, 2);
      console.log(elRetMult);
      array[indiceMult - 1] = calcMult;
    }
  }
  for (var m = 0; m < array.length / 2; m++) {
    // division
    var indiceDiv = array.indexOf("/");
    console.log(indiceDiv);
    if (indiceDiv !== -1) {
      var calcDiv = calculElemeantaire(array[indiceDiv - 1], "/", array[indiceDiv + 1]);
      console.log(calcDiv);
      array[indiceDiv - 1] = calcDiv;
      console.log(array);
      var elRetDiv = array.splice(indiceDiv - 1, 2);
      console.log(elRetDiv);
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
      console.log(elRetPlus);
      array[indicePlus - 1] = calcPlus;
    }
  }
  for (var p = 0; p < array.length / 2; p++) {
    // soustraction
    var indice = array.indexOf("-");
    console.log(indice);
    if (indice !== -1) {
      var calcSous = calculElemeantaire(array[indice - 1], "-", array[indice + 1]);
      console.log(calcSous);
      array[indice - 1] = calcSous;
      console.log(array);
      var elRetsous = array.splice(indice - 1, 2);
      console.log(elRetsous);
      array[indice - 1] = calcSous;
    }
  }
  console.log(array);
  var calculFait = array[0].toFixed(4);
  calculFait = parseFloat(calculFait);
  console.log(typeof calculFait);
  return calculFait;
}


/*

var x = 1.500;
var noZeroes = x.toString();
console.log(noZeroes);

function decimalesOuPas(nombre3) {
  var regex = /[0]$/;
  if (regex.test(array[0]) === 0) {
    var calculFait = array[0].toFixed();
  } else{
    var calculFait = array[0].toFixed(4);
  }
  return calculFait;
}
var test9 = 456.0000;
console.log(decimalesOuPas(test9));
var test6 = [136, "*", 45, "-", 125, "*", 223, "/", 12, "+", 45];
var test7 = test6.indexOf("*");
console.log(test7);
var test8 = pemdas(test6);
console.log(test8);
*/

// calcul d'un array type string
function calcul(arrayTypeString) {
  var partieDeArray = [];
  var arraytransforme = [];
  var indice = 0;
  for (var element of arrayTypeString) {
    if (element === "0" || element === "1" || element === "2" || element === "3" || element === "4" || element === "5" || element === "6" || element === "7" || element === "8" || element === "9") {
      partieDeArray.push(element);
      // console.log(partieDeArray);
    } else if (element === "+" || element === "-" || element === "*" || element === "/" || element === "=") {
      var test10 = transform(partieDeArray);
      console.log(test10);
      arraytransforme[indice] = test10;
      indice++;
      // console.log(arraytransforme);
      arraytransforme[indice] = element;
      partieDeArray = [];
      indice++;
    }
  }
  arraytransforme.pop();
  return arraytransforme;
}
/*
var test4 = ["1", "3", "5", "+", "4", "5", "-", "1", "8", "9", "="];
var test5 = calcul(test4);
console.log(test5);
console.log(test5.indexOf("+"));
*/
// rechercher les information de cliquage
var messageEcran = document.getElementById("ecran");
var touchescliquees = "";
var doubleOperation = false;
var bns = document.getElementsByClassName("bn");
for (var bn of bns) {
  bn.addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      touchescliquees = "";
    } else if (e.target.id === "*" || e.target.id === "/" || e.target.id === "+" || e.target.id === "-") {
      if (doubleOperation === true) {
        touchescliquees = "";
        console.log("Erreur: ne pas rentrer deux opérations consecutives");
        // consolelog à changer...
      } else {
        touchescliquees += e.target.id;
        doubleOperation = true;
      }
    } else if (e.target.id === "=") {
      if (doubleOperation === true) {
        touchescliquees = "";
        console.log("Erreur: ne pas rentrer deux opérations consecutives");
        // consolelog à changer...
      } else {
        touchescliquees += e.target.id;
        var entree = touchescliquees.split("");
        console.log(entree);
        var fin = pemdas((calcul(entree)));
        console.log(fin);
      }
    } else {
      touchescliquees += e.target.id;
      doubleOperation = false;
    }
    // console.log(touchescliquees);
    messageEcran.innerHTML = touchescliquees;
  });
}

/*
function decimalesOuPas(nombre3) {
  var regex = /[0]$/;
  var retour2 = nombre3;
  if (regex.test(nombre3) === 0) {
    nombre3.toFixed();
    retour2 = nombre3.toFixed();
  }
  return retour2;
}
var test9 = 456.1200;
console.log(decimalesOuPas(test9));

function suite(array){
    i = 0;
    for(elmnt of array){
        if (elmnt !===)
    }

};
*/

/*
ESSAI 1
var nombresurEcran = document.getElementById("ecran");
var ChiffresEcran = "";
var ChiffresAffiches = "";
var bns = document.getElementsByClassName('bn');

for (var bn of bns) {
  bn.addEventListener('click', (e) => {
    console.log("on m'a cliq.targetué!");
    if (e.target.id==="clear"){
        ChiffresEcran = "";
    }
    else if (e.target.id==="*"||e.target.id==="/"||e.target.id==="+"||e.target.id==="-"){
        var n1 = parseInt(ChiffresEcran);
        var op = e.target.id
        console.log(typeof(n1));
        ChiffresEcran = "";
    }
    else if (e.target.id==="="){
        var n2 = parseInt(ChiffresEcran);
        console.log(n2);
        var a = n1 + n2;
        console.log(a);

    }
    else{
        ChiffresEcran += e.target.id;
    }

console.log(ChiffresEcran);
nombresurEcran.innerHTML =ChiffresEcran;
  });
}
*/

/*
ESSAI 2
var nombresurEcran = document.getElementById("ecran");
var ChiffresEcran = "";
var ChiffresAffiches = "";
var bns = document.getElementsByClassName('bn');
var donnees = [];
var nombreRetenu = 0;

for (var bn of bns) {
  bn.addEventListener('click', (e) => {
    console.log("on m'a cliq.targetué!");
    if (e.target.id==="clear"){
        ChiffresEcran = "";
        var donnees = [];
    }
    else if (e.target.id==="*"||e.target.id==="/"||e.target.id==="+"||e.target.id==="-"){

        ChiffresEcran += e.target.id;
        donnees.push(nombreRetenu);
        console.log(donnees);
        nombreRetenu = e.target.id;
        console.log(donnees);
        donnees.push(nombreRetenu);
        nombreRetenu = 0;
        console.log(donnees);
    }
    else if (e.target.id==="egal"){
        ChiffresEcran = (no1 + no);
    }
    else{
        ChiffresEcran += e.target.id;
        var nombreClique = nombres[e.target.id];
        nombreRetenu = nombreRetenu * 10 + nombreClique;
        console.log(nombreRetenu);
        //console.log(typeof(no));
    }

//console.log(ChiffresEcran);
nombresurEcran.innerHTML =ChiffresEcran;
  });
}
*/

/* ESSAI 3
var nombresurEcran = document.getElementById("ecran");
var ChiffresEcran = "";
var ChiffresAffiches = "";
var bns = document.getElementsByClassName('bn');
var donneesTotale = [];
var nombreRetenu = 0;

for (var bn of bns) {
  bn.addEventListener('click', (e) => {
    console.log("on m'a cliq.targetué!");
    if (e.target.id==="clear"){
        ChiffresEcran = "";
        var donnees = [];
        console.log(donnees);
    }
    else if (e.target.id==="*"||e.target.id==="/"||e.target.id==="+"||e.target.id==="-"){
        var donnees = [];
        ChiffresEcran += e.target.id;
        donnees.push(nombreRetenu);
        console.log(donnees);
        nombreRetenu = e.target.id;
        console.log(donnees);
        donnees.push(nombreRetenu);
        nombreRetenu = 0;
        console.log(donnees);
    }
    els

    e if (e.target.id==="egal"){
        ChiffresEcran = (no1 + no);
    }
    else{
        ChiffresEcran += e.target.id;
        var nombreClique = nombres[e.target.id];
        nombreRetenu = nombreRetenu * 10 + nombreClique;
        console.log(nombreRetenu);
        //console.log(typeof(no));
    }
    console.log(donnees);
//console.log(ChiffresEcran);
nombresurEcran.innerHTML =ChiffresEcran;
  });
}
*/
