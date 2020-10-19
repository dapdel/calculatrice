var nombres = [0,1,2,3,4,5,6,7,8,9];
var operations = ["+","-","*","/"];

//boutons opération
var opHTML = "";
for (var i=0; i<4; i++){
    opHTML += `<button class="bn operations" id="${operations[i]}">${operations[i]}</button>`;
};
var siglesMathematiques = document.getElementById("siglesMathematiques");
siglesMathematiques.innerHTML = opHTML;

//boutons chiffres
numHTML = "";
for (var j=1; j<10; j++){
numHTML += `<button class="bn nombre" id="${nombres[j]}">${nombres[j]}</button>`
};
var chiffres = document.getElementById("chiffres");
chiffres.innerHTML =numHTML;

//derniers boutons
parHTML='<button class="bn clear" id="clear">C</button><button class="bn nombre" id="0">'+ nombres[0] +'</button><button class="bn egal" id="=">=</button>';

var particuliers = document.getElementById("particuliers");
particuliers.innerHTML = parHTML;

//fonction qui transforme une serie de nombres de type string d'une array en un nombre de type number
function transform(arrayTypeString){ 
    var arrayTypeNumber=[];
    for (var chiffre of arrayTypeString) {
       var chiffreTypeNumber = parseInt(chiffre);
       arrayTypeNumber.push(chiffreTypeNumber);
      };

    var nombre = 0;
    for (var nmbr of arrayTypeNumber) { 
        var nombre = nombre * 10 + nmbr;
        };
    return(nombre);
}

//fonction qui calcule
function calculElemeantaire(nombre1, operation, nombre2){
    var reponse;
    switch(operation) {
        case "+":
            reponse = nombre1 + nombre2;
            break;
        case "-":
            reponse = nombre1 - nombre2;
            break;
        case "*":
            reponse = nombre1 * nombre2;
            break;
        break;  
        default:
            reponse = nombre1 / nombre2;
      };
      return reponse;
}

// rechercher les information de cliquage
var messageEcran = document.getElementById("ecran");
var touchescliquees = "";
var doubleOperation = false;
var bns = document.getElementsByClassName('bn');
for (var bn of bns) {
    bn.addEventListener('click', (e) => {
        //console.log("on m'a cliq.targetué!");
        if (e.target.id==="clear"){
            touchescliquees = "";
        }
    
        else if (e.target.id==="*"||e.target.id==="/"||e.target.id==="+"||e.target.id==="-"||e.target.id==="="){
            if(doubleOperation === true){
                touchescliquees = "";
                alert("Erreur: ne pas rentrer deux opérations consecutives");
            }else{
                touchescliquees += e.target.id;
                doubleOperation = true;
                }   
            }
       
        else{
            touchescliquees += e.target.id;
            doubleOperation = false;
        } 
    //console.log(touchescliquees);
    messageEcran.innerHTML = touchescliquees;
    var entree = touchescliquees.split("");
    console.log(entree);
    });
};

/*fonction qui calcule d'un array type string*/
function calcul(arrayTypeString){
    var partieDeArray = [];
    var arraytransforme = [];
    var indice = 0;
    for (element of arrayTypeString){
        
        if (element ==="0"|| element ==="1"|| element ==="2"|| element ==="3"|| element ==="4"|| element ==="5"|| element ==="6"|| element ==="7"|| element ==="8"|| element ==="9"){
            partieDeArray.push(element);
            console.log(partieDeArray);
        }
        else if (element ==="+"|| element ==="-"|| element ==="*"|| element ==="/"|| element ==="="){
            var test6 = transform(partieDeArray);
            console.log(test6);
            arraytransforme[indice] = test6;
            indice++;
            //console.log(arraytransforme);
            arraytransforme[indice] = element;
            partieDeArray=[];
            indice++;
        }
    }
    arraytransforme.pop();
return arraytransforme;
}
var test4 = ["1","3","5","+","4","5","-","1","8","9","="];
var test5 = calcul (test4);
console.log(test5);
console.log(test5.indexOf("+"));
/*
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
/*ESSAI 3
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
}*/














