async function afficherDonneesAsync() {
  try {
    fetch("http://13.38.137.68:8000/api/listPlayers")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name);
      });
  } catch (error) {
    console.error("Erreur lors du chargement :", error);
  }
}

afficherDonneesAsync();
console.log("blabla");

async function loadPlayers() {
    try {
        const response = await fetch("http://13.38.137.68:8000/api/listPlayers")

        if (!response.ok) {
            throw new Error ("Erreur HTTP : " + response.status);
        }

        const players = await response.json();
        return players;

    }catch (error) {
        console.log("Erreur load players : ", error);
        return [];
    }
}

async function loadPlayerStats(name) {
  try {
    const players = await loadPlayers();
    const player = players.find((p) => p.name === name);
    if (!player) {
      throw new Error("");
    }
    console.log("name :", player.name);
    console.log("nombre de game jouées", player.gamesPlayed);
    console.log("nombre de kills", player.totalKills);
    console.log("ratio", player.kdRatio);
    return player;
  } catch (error) {
    console.error("bahahaha");
  }
}
