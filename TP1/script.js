/*
// partie 1
const classe = { name: "B1"};
console.log(classe)
let nombre = 25;
console.log(nombre)
let valid = true;
console.log(valid)

// partie 2
let eleve = {
    name: "pierre",
    note_maths: 15,
    note_francais: 12
};
console.log(eleve)
console.log(eleve.name)
console.log(eleve.note_maths)
console.log(eleve.note_francais)
// partie 3
let eleve1 = {
    name: "pierre",
    note_maths: 15,
    note_francais: 12
};

let eleve2 = {
    name: "nathan",
    note_maths: 16,
    note_francais: 13
};

let eleve3 = {
    name: "gabriel",
    note_maths: 17,
    note_francais: 13
};

let eleve_array = [eleve1, eleve2, eleve3];

for (let i = 0; i < eleve_array.length; i++) {
    console.log(eleve_array[i].name)
}
//partie 4
let eleve1 = {
    name: "pierre",
    note_maths: 15,
    note_francais: 12,
    moyenne: (15+12)/2
};

let eleve2 = {
    name: "nathan",
    note_maths: 16,
    note_francais: 13,
    moyenne: (16+13)/2
};

let eleve3 = {
    name: "gabriel",
    note_maths: 17,
    note_francais: 14,
    moyenne: (17+14)/2
};

let eleve_array = [eleve1, eleve2, eleve3];

for (let i = 0; i < eleve_array.length; i++) {
    console.log(eleve_array[i].name)
    console.log(eleve_array[i].moyenne)
}
// partie 5
let eleve1 = {
    name: "pierre",
    note_maths: 8,
    note_francais: 10,
    moyenne: (8+10)/2
};

let eleve2 = {
    name: "nathan",
    note_maths: 16,
    note_francais: 13,
    moyenne: (16+13)/2
};

let eleve3 = {
    name: "gabriel",
    note_maths: 17,
    note_francais: 14,
    moyenne: (17+14)/2
};

let eleve_array = [eleve1, eleve2, eleve3];

for (let i = 0; i < eleve_array.length; i++) {
    console.log(eleve_array[i].name)
    console.log(eleve_array[i].moyenne)

if (eleve_array[i].moyenne > 10) {
console.log("Admis")
}
else {
    console.log("Refusé")
}
}
//Partie 6
let eleve1 = {
    name: "pierre",
    note_maths: 8,
    note_francais: 10,
    moyenne: (8+10)/2
};

let eleve2 = {
    name: "nathan",
    note_maths: 16,
    note_francais: 13,
    moyenne: (16+13)/2
};

let eleve3 = {
    name: "gabriel",
    note_maths: 17,
    note_francais: 14,
    moyenne: (18+14)/2
};

let eleve_array = [eleve1, eleve2, eleve3];

for (let i = 0; i < eleve_array.length; i++) {
    console.log(eleve_array[i].name)
    console.log(eleve_array[i].moyenne)

if (eleve_array[i].moyenne >= 16) {
console.log("Très bien")
}
else if (eleve_array[i].moyenne >= 14){
console.log("Bien")
}
else if (eleve_array[i].moyenne >= 12){
console.log("Assez bien")
}
else if (eleve_array[i].moyenne >= 10){
console.log("Passable")
}
else {
    console.log("Insuffisant")
}
}
*/
// Partie 7
let eleve1 = {
    name: "pierre",
    note_maths: 8,
    note_francais: 10,
    moyenne: (8+10)/2
};

let eleve2 = {
    name: "nathan",
    note_maths: 16,
    note_francais: 13,
    moyenne: (16+13)/2
};

let eleve3 = {
    name: "gabriel",
    note_maths: 17,
    note_francais: 14,
    moyenne: (18+14)/2
};

let eleve_array = [eleve1, eleve2, eleve3];

for (let i = 0; i < eleve_array.length; i++) {
    console.log(eleve_array[i].name)
    console.log(eleve_array[i].moyenne)

if (eleve_array[i].moyenne >= 16) {
console.log("Très bien")
}
else if (eleve_array[i].moyenne >= 14){
console.log("Bien")
}
else if (eleve_array[i].moyenne >= 12){
console.log("Assez bien")
}
else if (eleve_array[i].moyenne >= 10){
console.log("Passable")
}
else {
    console.log("Insuffisant")
}
}

let i = 0;
let compteur = 0;

while (i < eleve_array.length) {
    if (eleve_array[i].moyenne >= 10)
        compteur++
i++;
}

console.log(compteur)