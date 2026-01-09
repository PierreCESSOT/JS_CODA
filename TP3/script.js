/*
// partie 1
// Taille aléatoire entre 7 et 10
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Liste prénoms
let first_name = ["Pierre", "Nathan", "Gabriel", "Thomas", "Maeva", "Louise", "Nathanael", "Marion", "Marine", "Lili"];

// Note max
let note_maximum = 20;

// Tableau des élèves
let eleves = [];

for (let i = 0; i < taille; i++) {

    // Choisir un prénom aléatoire
    let prenom = first_name[Math.floor(Math.random() * first_name.length)];

    // Générer les 3 notes aléatoires
    let noteFrancais = Math.floor(Math.random() * (note_maximum + 1));
    let noteMaths = Math.floor(Math.random() * (note_maximum + 1));
    let noteHistoire = Math.floor(Math.random() * (note_maximum + 1));

    let eleve = {
        prenom: prenom,
        noteFrancais: noteFrancais,
        noteMaths: noteMaths,
        noteHistoire: noteHistoire,
        moyenne: 0,
    };

    eleves.push(eleve);
}

// Affichage du tableau
console.log("Nombre d'élèves :", eleves.length);
console.log(eleves);

// Calculer la moyenne
let moyenne = 0;
for (let i = 0; i < eleves.length; i++) {
    moyenne = (eleves[i].noteFrancais + eleves[i].noteMaths + eleves[i].noteHistoire) / 3
    eleves[i].moyenne=moyenne;
    console.log(eleves[i].prenom + " - " + eleves[i].moyenne)
}

// partie 2
// Taille aléatoire entre 7 et 10
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Liste prénoms
let first_name = ["Pierre", "Nathan", "Gabriel", "Thomas", "Maeva", "Louise", "Nathanael", "Marion", "Marine", "Lili"];

// Note max
let note_maximum = 20;

// Tableau des élèves
let eleves = [];

for (let i = 0; i < taille; i++) {

    // Choisir un prénom aléatoire
    let prenom = first_name[Math.floor(Math.random() * first_name.length)];

    // Générer les 3 notes aléatoires
    let noteFrancais = Math.floor(Math.random() * (note_maximum + 1));
    let noteMaths = Math.floor(Math.random() * (note_maximum + 1));
    let noteHistoire = Math.floor(Math.random() * (note_maximum + 1));

    let eleve = {
        prenom: prenom,
        noteFrancais: noteFrancais,
        noteMaths: noteMaths,
        noteHistoire: noteHistoire,
        moyenne: 0,
    };

    eleves.push(eleve);
}

// Affichage du tableau
console.log("Nombre d'élèves :", eleves.length);
console.log(eleves);

// Calculer la moyenne
let moyenne = 0;
for (let i = 0; i < eleves.length; i++) {
    moyenne = (eleves[i].noteFrancais + eleves[i].noteMaths + eleves[i].noteHistoire) / 3
    eleves[i].moyenne=moyenne;
    console.log(eleves[i].prenom + " - " + eleves[i].moyenne)
}

let min = eleves[0].moyenne;
let max = eleves[0].moyenne;

for (let i = 0; i < eleves.length; i++) {
    if (eleves[i].moyenne < min) {
        min = eleves[i].moyenne;
    }
    if (eleves[i].moyenne > max) {
        max = eleves[i].moyenne;
    }
}

console.log("Plus petite moyenne :", min);
console.log("Plus grande moyenne :", max);

// partie 3
// Taille aléatoire entre 7 et 10
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Liste prénoms
let first_name = ["Pierre", "Nathan", "Gabriel", "Thomas", "Maeva", "Louise", "Nathanael", "Marion", "Marine", "Lili"];

// Note max
let note_maximum = 20;

// Tableau des élèves
let eleves = [];

for (let i = 0; i < taille; i++) {

    // Choisir un prénom aléatoire
    let prenom = first_name[Math.floor(Math.random() * first_name.length)];

    // Générer les 3 notes aléatoires
    let noteFrancais = Math.floor(Math.random() * (note_maximum + 1));
    let noteMaths = Math.floor(Math.random() * (note_maximum + 1));
    let noteHistoire = Math.floor(Math.random() * (note_maximum + 1));

    let eleve = {
        prenom: prenom,
        noteFrancais: noteFrancais,
        noteMaths: noteMaths,
        noteHistoire: noteHistoire,
        moyenne: 0,
    };

    eleves.push(eleve);
}

// Affichage du tableau
console.log("Nombre d'élèves :", eleves.length);
console.log(eleves);

// Calculer la moyenne
let moyenne = 0;
for (let i = 0; i < eleves.length; i++) {
    moyenne = (eleves[i].noteFrancais + eleves[i].noteMaths + eleves[i].noteHistoire) / 3
    eleves[i].moyenne=moyenne;
    console.log(eleves[i].prenom + " - " + eleves[i].moyenne)
}

let min = eleves[0].moyenne;
let max = eleves[0].moyenne;
let indice_min = 0;

for (let i = 0; i < eleves.length; i++) {
    if (eleves[i].moyenne < min) {
        min = eleves[i].moyenne;
        indice_min = i;
    }
    if (eleves[i].moyenne > max) {
        max = eleves[i].moyenne;
    }
}

console.log("Plus petite moyenne :", min);
console.log("Plus grande moyenne :", max);
console.log("Indice min :", indice_min);
*/
// partie 4
// Taille aléatoire entre 7 et 10
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Liste prénoms
let first_name = ["Pierre", "Nathan", "Gabriel", "Thomas", "Maeva", "Louise", "Nathanael", "Marion", "Marine", "Lili"];

// Note max
let note_maximum = 20;

// Tableau des élèves
let eleves = [];

for (let i = 0; i < taille; i++) {

    // Choisir un prénom aléatoire
    let prenom = first_name[Math.floor(Math.random() * first_name.length)];

    // Générer les 3 notes aléatoires
    let noteFrancais = Math.floor(Math.random() * (note_maximum + 1));
    let noteMaths = Math.floor(Math.random() * (note_maximum + 1));
    let noteHistoire = Math.floor(Math.random() * (note_maximum + 1));

    let eleve = {
        prenom: prenom,
        noteFrancais: noteFrancais,
        noteMaths: noteMaths,
        noteHistoire: noteHistoire,
        moyenne: 0,
    };

    eleves.push(eleve);
}

// Affichage du tableau
console.log("Nombre d'élèves :", eleves.length);
console.log(eleves);

// Calculer la moyenne
let moyenne = 0;
for (let i = 0; i < eleves.length; i++) {
    moyenne = (eleves[i].noteFrancais + eleves[i].noteMaths + eleves[i].noteHistoire) / 3
    eleves[i].moyenne=moyenne;
    console.log(eleves[i].prenom + " - " + eleves[i].moyenne.toFixed(2))
}

let min = eleves[0].moyenne;
let max = eleves[0].moyenne;
let indice_min = 0;


for (let i = 0; i < eleves.length; i++) {
    if (eleves[i].moyenne < min) {
        min = eleves[i].moyenne;
        indice_min = i;
    }
    if (eleves[i].moyenne > max) {
        max = eleves[i].moyenne;
    }
}
let stock = eleves[0];
eleves[0] = eleves[indice_min];
eleves[indice_min] = stock;

console.log("Plus petite moyenne :", min);
console.log("Plus grande moyenne :", max);
console.log("Indice min :", indice_min);