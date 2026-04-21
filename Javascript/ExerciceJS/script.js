// les Variable en Javascript 
let Nom="Niyomwungere";
let Prenom="Richard";
const pays ="Burundi";
let age=30;
const PI = 3.14;
console.log(`Mon pays natale c'est le ${pays}`);

console.log(`Le Premiere Variable que j'ai cree c'est ${Nom}`);
console.log(`Voici la variable qui contient un nombre ${age}`)

//les types des donnees en Javascript 
//2 number 
//3. Boolen
// -----les String 

let kenya = "Le pays d'afrique de l'EAC"
const Mystring = "My Name";

console.log(Mystring);
let  HelloSentence ="Hello "+ Nom
console.log(HelloSentence);

//Avec les `back-tick `
let MyName = `This is my name ${Nom} ${Prenom}`
console.log(MyName);
const premierecaractere=kenya[0];
console.log(premierecaractere);
console.log(premierecaractere);
console.log(`Longeuer le la variable Kenya et de : ${kenya.length} `);
//convertir tous les texte de la variable en majuscule
console.log(kenya.toUpperCase());
//les ------Number ------


let numbere = 65;
console.log(numbere*3);
///---lesFonctions ,les Tabeau et les Objects

// 1 .les Fonctions ------------------

function Bonjours(Nom){
    return("Bonjours  " +Nom)
}
let message =Bonjours(Prenom)
console.log(message);

// 2. les Tableaux ------------------

let fruits = ["Banane","Pomme","Orange"];
console.log(fruits[0]);
console.log(fruits.length);
fruits.push("Mangue");
console.log(fruits);

// 3.1 Tous les differents methodes de manipulation des tableau


// 3. les Objects ------------------

let personne = {
    nom: "Niyomwungere",
    prenom: "Richard",
    age: 30,
    pays: "Burundi"
};
console.log(personne.nom);
console.log(personne["prenom"]); 
