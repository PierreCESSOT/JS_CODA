const inputPseudo = document.getElementById("NamePlayer");
const startBtn = document.getElementById("join-btn");

startBtn.addEventListener("click", () => {
    const pseudo = inputPseudo.value;

    if (pseudo.trim() === "") {
        alert("Veuillez entrer un pseudo");
    }
    console.log("Pseudo :", pseudo);
});




const skinSelector = document.getElementById("skin-selector");
let selectedSkin = null;

for (let i = 1; i <= 29; i++) {
    // création de canvas
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    canvas.classList.add("skin-canvas");

    skinSelector.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    // Charger le sprite sheet
    const img = new Image();
    img.src = `assets/${i}.png`;

    img.onload = () => {
        ctx.drawImage(
            img,
            0, 10 * 64, 64, 64,   // source x, y, w, h
            0, 0, 64, 64    // destination ""
        );
    };

    // Sélection du skin
    canvas.addEventListener("click", () => {
        // Retirer l'ancienne sélection
        document.querySelectorAll(".skin-canvas").forEach(c => {
            c.classList.remove("skin-selected");
        });

        // Ajouter la nouvelle sélection
        canvas.classList.add("skin-selected");
        selectedSkin = i;

        // Sauvegarder
        localStorage.setItem("selectedSkin", i);

        console.log("Skin sélectionné :", i);



    });
}
const skin = localStorage.getItem("selectedSkin");