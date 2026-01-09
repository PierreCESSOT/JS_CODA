// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Déclarer le tableau pour stocker les notes
let notes = [];
// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
let note_maximum = 20;

// Itérer autant de fois qu'on a de notes aléatoires à générer
for (let i = 0; i < taille; i++) {
    // Générer une note aléatoire entre 0 et note_maximum (inclus)
    let note = Math.floor(Math.random() * (note_maximum + 1));
    // Ajouter la note générée au tableau
    notes.push(note);
}

/* partie 1
let minimum = notes[0];

for(let i=0; i<=notes.length; i++){
    if(notes[i] < minimum){
        minimum = notes[i];
    }
}

let maximum = notes[0];

for(let i=0; i<=notes.length; i++){
    if(notes[i] > maximum){
        maximum = notes[i];
    }
}

console.log(taille);
console.log(minimum);
console.log(maximum);
console.log(notes);

// partie 2
let minimum = notes[0];
let indice_min = 0;

for(let i=0; i<=notes.length; i++){
    if(notes[i] < minimum){
        minimum = notes[i];
        indice_min = i
    }
}

console.log(taille);
console.log(minimum);
console.log(indice_min);
console.log(notes);

// partie 3
let minimum = notes[0];
let indice_min = 0;
let stock = notes[0];

for(let i=0; i<=notes.length; i++){
    if(notes[i] < minimum){
        minimum = notes[i];
        indice_min = i;
    }
}

notes[0] = minimum;
notes[indice_min] = stock;

console.log(taille);
console.log(minimum);
console.log(indice_min);
console.log(notes);

// partie 4
let minimum = notes[0];
let stock = 0;

for(let i=0; i<=notes.length; i++){
    let indice_min = i;
    for(let j=i+1; j< notes.length; j++) {
        if(notes[j] < notes[indice_min])
        indice_min = j;
    }
    if(notes[indice_min] < notes[i]){
        stock = notes[i];
        notes[i] = notes[indice_min];
        notes[indice_min] = stock;
    }
console.log(notes);
}


notes[0] = minimum;


console.log(taille);
console.log(minimum);
console.log(notes);
*/
// partie 5

let minimum = notes[0];
let stock = 0;

console.log(notes);
for(let i=0; i<=notes.length; i++){
    let indice_min = i;
    for(let j=i+1; j< notes.length; j++) {
        if(notes[j] < notes[indice_min])
        indice_min = j;
    }
    if(notes[indice_min] < notes[i]){
        stock = notes[i];
        notes[i] = notes[indice_min];
        notes[indice_min] = stock;
    }
}
console.log(notes);


notes[0] = minimum;
