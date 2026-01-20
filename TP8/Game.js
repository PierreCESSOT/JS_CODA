// Exemple de message recu par le backend, à utiliser pour vos tests :
const backendData = {
   "isRunning":true,
   "isOver":false,
   "timer":190.6000000000091,
   "players":{
      "3cd71bbb-6a6b-4d4e-80e3-107130328a27":{
         "name":"blabla",
         "skinPath":"./spritesheets/3.png",
         "position":[
            0.5600000000000003,
            0.17999999999999977
         ],
         "lvl":1,
         "hp":100,
         "maxHp":100,
         "hpRegenRate":10,
         "speed":0.2,
         "direction":3,
         "isAttacking":false,
         "isWalking":false,
         "isDying":false,
         "attackCooldown":1,
         "currentAttackCooldown":0
      },
      "28ead291-fcea-4b41-a596-d3c876c49a53":{
         "name":"bloublou",
         "skinPath":"./spritesheets/4.png",
         "position":[
            0.44,
            0.19
         ],
         "lvl":1,
         "hp":100,
         "maxHp":100,
         "hpRegenRate":10,
         "speed":0.2,
         "direction":0,
         "isAttacking":false,
         "isWalking":false,
         "isDying":false,
         "attackCooldown":1,
         "currentAttackCooldown":0
      }
   }
};

class game {
    constructor() {
        this.isRunning = true; 
        this.isOver = false;
        this.timer = 100;
        this.players = {};
    }

update(gameStateFromServer) {
    this.isRunning = gameStateFromServer.isRunning;
    this.isOver = gameStateFromServer.isOver;
    this.timer = gameStateFromServer.timer;

    for(const id in gameStateFromServer.players) {
        const data = gameStateFromServer.players[id];

        if(!this.players[id]) {
            this.players[id] = new Player(id, data.name, data.skinPath, data.position);

        } else {
            this.players[id].update(data);
        }

    for(const id in this.players) {
        if(!gameStateFromServer.players[id]){
            delete this.players[id]
        }else {
            this.players[id].update(data);
        }
    }

    }
}
}

const tabId = Object.keys(backendData.players);
console.log(tabId);

for (let i = 0; i < tabId.length; i++){
   const player = new Player(tabId[i], backendData.players[tabId[i]].name, backendData.players[tabId[i]].skinPath, backendData.players[tabId[i]].position);
   console.log(player);
}


console.log("==========Instance de la Game 1==========");

const game1 = new game();
game1.update(backendData);
console.log(structuredClone(game1));

console.log("==========MetaData Test==========");
backendData.isOver = true;
backendData.timer = 192;
backendData.players["28ead291-fcea-4b41-a596-d3c876c49a53"].name =
  "MetaDataTEST";
backendData.players["3cd71bbb-6a6b-4d4e-80e3-107130328a27"].hp = 2;
game1.update(backendData);
console.log(structuredClone(game1));

console.log("==========AddPlayer Test==========");
const newPlayer = "new-player-666";

backendData.players[newPlayer] = {
  name: "Le Petit Nouveau",
  skinPath: "./assets/1.png",
  position: [0.5, 0.5],
  lvl: 1,
  hp: 100,
  maxHp: 100,
  hpRegenRate: 10,
  speed: 0.2,
  direction: 1,
  isAttacking: false,
  isWalking: true,
  isDying: false,
  attackCooldown: 1,
  currentAttackCooldown: 0,
};

game1.update(backendData);
console.log(structuredClone(game1));

console.log("==========DeletePlayer Test==========");

delete backendData.players[newPlayer];
game1.update(backendData);
console.log(structuredClone(game1));