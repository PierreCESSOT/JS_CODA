import Game from "./Data/Game.js";
import GameView from "./View/GameView.js";
import GameController from "./Controller/GameController.js";

//Model
const game = new Game();
//View
const gameView = new GameView(game);
//Controller (launch game);
console.log(game, gameView);
const gameController = new GameController(game, gameView);