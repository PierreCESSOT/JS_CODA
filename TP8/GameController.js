class GameController {
  constructor() {
    // Server sends updates at 20 ticks per second
    this.SERVER_TICK_RATE = 20;
    // Duration between two server ticks in milliseconds
    this.SERVER_INTERVAL = 1000 / this.SERVER_TICK_RATE;

    this.Game = new Game();
    this.name = localStorage.getItem("name");
    this.serverUrl = localStorage.getItem("url");
    this.spritePath = localStorage.getItem("spritePath");

    this.inputState = {
      up: false,
      down: false,
      left: false,
      right: false,
      attack: false,
    };

    console.log("Bienvenue", this.name);
    console.log("Connexion au serveur :", this.serverUrl);

    this.socket = new WebSocket(this.serverUrl);

    // Permanently bind "this" at the instance of the GameController class
    this.loop = this.loop.bind(this);

    // Regulates framerate to keep 60fps
    requestAnimationFrame(this.loop);
  }

  initsocket() {
    this.socket.onopen = () => {
      console.log("Connected to server");

      this.socket.send(
        JSON.stringify({
          name: this.pseudo,
          skinPath: this.skinPath,
        }),
      );
    };

    this.socket.onmessage = (event) => {
      console.log(event.data); // chaîne JSON
      const data = JSON.parse(event.data);
      this.Game.update(data);
    };
  }

  initInput() {
    // Quand une touche est pressée
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "z":
          this.inputState.up = true;
          break;

        case "s":
          this.inputState.down = true;
          break;

        case "q":
          this.inputState.left = true;
          break;

        case "d":
          this.inputState.right = true;
          break;

        case "e":
          this.inputState.attack = true;
          break;
      }
    });

    // Quand une touche est relâchée
    window.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "z":
          this.inputState.up = false;
          break;

        case "s":
          this.inputState.down = false;
          break;

        case "q":
          this.inputState.left = false;
          break;

        case "d":
          this.inputState.right = false;
          break;

        case "e":
          this.inputState.attack = false;
          break;
      }
    });
  }

  startInputSender() {
    setInterval(() => {
        if (this.socket.readyState === this.socket.OPEN) {
          this.socket.send(JSON.stringify({
          type: "input",
          input: this.inputState,
        }));
    }
  }, this.SERVER_INTERVAL);
}

  // === Main render loop ===
  loop(timestamp) {
    // Request the next frame
    requestAnimationFrame(this.loop);
  }
}

// === Start the Game controller by instantiating the GameController class ===
// This line will execute the constructor (e.g, launch the frontend)
new GameController();
