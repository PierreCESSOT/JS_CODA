/*
// partie 1
genererEleves();
function genererEleves() {

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
    console.log(eleves[i].prenom + " - " + eleves[i].moyenne);
}
console.log(genererEleves)
}

// partie 2
genererEleves();
function genererEleves() {

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

// Calculer la moyenne
let moyenne = 0;
for (let i = 0; i < eleves.length; i++) {
    moyenne = (eleves[i].noteFrancais + eleves[i].noteMaths + eleves[i].noteHistoire) / 3
    eleves[i].moyenne=moyenne;
}
return eleves;
}
console.log(genererEleves());

function afficherEleves(tableau) {
    for (let i = 0; i < tableau.length; i++){
        console.log(tableau[i].prenom + " - " + tableau[i].moyenne);
    }

}
afficherEleves(genererEleves());

// partie 3
genererEleves();
function genererEleves() {

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

// Calculer la moyenne
let moyenne = 0;
for (let i = 0; i < eleves.length; i++) {
    moyenne = (eleves[i].noteFrancais + eleves[i].noteMaths + eleves[i].noteHistoire) / 3
    eleves[i].moyenne=moyenne;
}
return eleves;
}
console.log(genererEleves());

function afficherEleves(tableau) {
    for (let i = 0; i < tableau.length; i++){
        console.log(tableau[i].prenom + " - " + tableau[i].moyenne);
    }

}
//afficherEleves(genererEleves());

function trouverMoyenneMin(tableau,indexDepart){

let min = tableau[indexDepart].moyenne;
let indice_min = indexDepart;

for (let i = 0; i < tableau.length; i++) {
    if (tableau[i].moyenne < min) {
        min = tableau[i].moyenne;
        indice_min = i;
    }
}

return indice_min;
}
let tableauEleve = genererEleves();
afficherEleves(tableauEleve);
console.log(trouverMoyenneMin(tableauEleve,0));

// partie 4
genererEleves();
function genererEleves() {

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

// Calculer la moyenne
let moyenne = 0;
for (let i = 0; i < eleves.length; i++) {
    moyenne = (eleves[i].noteFrancais + eleves[i].noteMaths + eleves[i].noteHistoire) / 3
    eleves[i].moyenne=moyenne;
}
return eleves;
}
console.log(genererEleves());

function afficherEleves(tableau) {
    for (let i = 0; i < tableau.length; i++){
        console.log(tableau[i].prenom + " - " + tableau[i].moyenne);
    }

}
//afficherEleves(genererEleves());

function trouverMoyenneMin(tableau,indexDepart){

let min = tableau[indexDepart].moyenne;
let indice_min = indexDepart;

for (let i = 0; i < tableau.length; i++) {
    if (tableau[i].moyenne < min) {
        min = tableau[i].moyenne;
        indice_min = i;
    }
}

return indice_min;
}
let tableauEleve = genererEleves();
afficherEleves(tableauEleve);
console.log(trouverMoyenneMin(tableauEleve,0));
afficherDonnees(tableauEleve);

function afficherDonnees(tableau) {

    // Nombre d'élèves
    console.log("Nombre d'élèves :", tableau.length);

    // Trouver la moyenne min et max
    let min = tableau[0].moyenne;
    let max = tableau[0].moyenne;

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i].moyenne < min) {
            min = tableau[i].moyenne;
        }
        if (tableau[i].moyenne > max) {
            max = tableau[i].moyenne;
        }
    }

    console.log("Moyenne la plus basse :", min);
    console.log("Moyenne la plus haute :", max);
}

// partie 5
genererEleves();
function genererEleves() {

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

// Calculer la moyenne
let moyenne = 0;
for (let i = 0; i < eleves.length; i++) {
    moyenne = (eleves[i].noteFrancais + eleves[i].noteMaths + eleves[i].noteHistoire) / 3
    eleves[i].moyenne=moyenne;
}
return eleves;
}
console.log(genererEleves());

function afficherEleves(tableau) {
    for (let i = 0; i < tableau.length; i++){
        console.log(tableau[i].prenom + " - " + tableau[i].moyenne);
    }

}
//afficherEleves(genererEleves());

function trouverMoyenneMin(tableau,indexDepart){

let min = tableau[indexDepart].moyenne;
let indice_min = indexDepart;

for (let i = 0; i < tableau.length; i++) {
    if (tableau[i].moyenne < min) {
        min = tableau[i].moyenne;
        indice_min = i;
    }
}

return indice_min;
}

function afficherDonnees(tableau) {

    // Nombre d'élèves
    console.log("Nombre d'élèves :", tableau.length);

    // Trouver la moyenne min et max
    let min = tableau[0].moyenne;
    let max = tableau[0].moyenne;

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i].moyenne < min) {
            min = tableau[i].moyenne;
        }
        if (tableau[i].moyenne > max) {
            max = tableau[i].moyenne;
        }
    }

    console.log("Moyenne la plus basse :", min);
    console.log("Moyenne la plus haute :", max);
}


console.log("Après swap");
swap(tableauEleve, 2, 4);
afficherEleves(tableauEleve);

function swap(tableau, indexA, indexB) {
    let temp = tableau[indexA];
    tableau[indexA] = tableau[indexB];
    tableau[indexB] = temp;
}


// partie 6
genererEleves();
function genererEleves() {

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

// Calculer la moyenne
let moyenne = 0;
for (let i = 0; i < eleves.length; i++) {
    moyenne = (eleves[i].noteFrancais + eleves[i].noteMaths + eleves[i].noteHistoire) / 3
    eleves[i].moyenne=moyenne;
}
return eleves;
}
console.log(genererEleves());

function afficherEleves(tableau) {
    for (let i = 0; i < tableau.length; i++){
        console.log(tableau[i].prenom + " - " + tableau[i].moyenne);
    }

}
//afficherEleves(genererEleves());

function trouverMoyenneMin(tableau,indexDepart){

let min = tableau[indexDepart].moyenne;
let indice_min = indexDepart;

for (let i = 0; i < tableau.length; i++) {
    if (tableau[i].moyenne < min) {
        min = tableau[i].moyenne;
        indice_min = i;
    }
}

return indice_min;
}

function afficherDonnees(tableau) {

    // Nombre d'élèves
    console.log("Nombre d'élèves :", tableau.length);

    // Trouver la moyenne min et max
    let min = tableau[0].moyenne;
    let max = tableau[0].moyenne;

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i].moyenne < min) {
            min = tableau[i].moyenne;
        }
        if (tableau[i].moyenne > max) {
            max = tableau[i].moyenne;
        }
    }

    console.log("Moyenne la plus basse :", min);
    console.log("Moyenne la plus haute :", max);
}

let tableauEleve = genererEleves();
console.log("Après swap");
swap(tableauEleve, 2, 4);
afficherEleves(tableauEleve);

function swap(tableau, indexA, indexB) {
    let temp = tableau[indexA];
    tableau[indexA] = tableau[indexB];
    tableau[indexB] = temp;
}



afficherEleves(tableauEleve);
console.log("Tri par sélection");
triParSelection(tableauEleve);
afficherEleves(tableauEleve);

//tri parselection 
function triParSelection(tableau) {
    for (let i = 0; i < tableau.length; i++) {

        let indice_min = i;

        for (let j = i + 1; j < tableau.length; j++) {
            if (tableau[j].moyenne < tableau[indice_min].moyenne) {
                indice_min = j;
            }
        }

        // Swap correct
        let temp = tableau[i];
        tableau[i] = tableau[indice_min];
        tableau[indice_min] = temp;
    }
}

triParSelection(tableauEleve);
console.log(tableauEleve);

function triParSelection(tableau) {
    for (let i = 0; i < tableau.length; i++) {

        let indice_min = i;

        for (let j = i + 1; j < tableau.length; j++) {
            if (tableau[j].moyenne < tableau[indice_min].moyenne) {
                indice_min = j;
            }
        }

        // Swap correct
        let temp = tableau[i];
        tableau[i] = tableau[indice_min];
        tableau[indice_min] = temp;
    }
}
*/

//parti 7
genererEleves();
function genererEleves() {

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

// Calculer la moyenne
let moyenne = 0;
for (let i = 0; i < eleves.length; i++) {
    moyenne = (eleves[i].noteFrancais + eleves[i].noteMaths + eleves[i].noteHistoire) / 3
    eleves[i].moyenne=moyenne;
}
return eleves;
}


function afficherEleves(tableau) {
    for (let i = 0; i < tableau.length; i++){
        console.log(tableau[i].prenom + " - " + tableau[i].moyenne);
    }

}
//afficherEleves(genererEleves());

function trouverMoyenneMin(tableau,indexDepart){

let min = tableau[indexDepart].moyenne;
let indice_min = indexDepart;

for (let i = 0; i < tableau.length; i++) {
    if (tableau[i].moyenne < min) {
        min = tableau[i].moyenne;
        indice_min = i;
    }
}

return indice_min;
}

function afficherDonnees(tableau) {

    // Nombre d'élèves
    console.log("Nombre d'élèves :", tableau.length);

    // Trouver la moyenne min et max
    let min = tableau[0].moyenne;
    let max = tableau[0].moyenne;

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i].moyenne < min) {
            min = tableau[i].moyenne;
        }
        if (tableau[i].moyenne > max) {
            max = tableau[i].moyenne;
        }
    }

    console.log("Moyenne la plus basse :", min);
    console.log("Moyenne la plus haute :", max);
}



function swap(tableau, indexA, indexB) {
    let temp = tableau[indexA];
    tableau[indexA] = tableau[indexB];
    tableau[indexB] = temp;
}





//tri parselection 
function triParSelection(tableau) {
    for (let i = 0; i < tableau.length; i++) {

        let indice_min = i;

        for (let j = i + 1; j < tableau.length; j++) {
            if (tableau[j].moyenne < tableau[indice_min].moyenne) {
                indice_min = j;
            }
        }

        // Swap correct
        let temp = tableau[i];
        tableau[i] = tableau[indice_min];
        tableau[indice_min] = temp;
    }
}


function triParSelection(tableau) {
    for (let i = 0; i < tableau.length; i++) {

        let indice_min = i;

        for (let j = i + 1; j < tableau.length; j++) {
            if (tableau[j].moyenne < tableau[indice_min].moyenne) {
                indice_min = j;
            }
        }

        // Swap correct
        let temp = tableau[i];
        tableau[i] = tableau[indice_min];
        tableau[indice_min] = temp;
    }
}

//appel de fonctions
console.log(genererEleves());

let tableauEleve = genererEleves();
console.log("Après swap");
swap(tableauEleve, 2, 4);
afficherEleves(tableauEleve);

afficherEleves(tableauEleve);
console.log("Tri par sélection");
triParSelection(tableauEleve);
afficherEleves(tableauEleve);

triParSelection(tableauEleve);
console.log(tableauEleve);
