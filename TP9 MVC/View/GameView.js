export default class GameView {
  constructor(game) {
    this.canvas = document.getElementById("toto");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 800;
    this.canvas.height = 500;

    this.game = game;

    this.sprite = new Image();
    this.sprite.src = "assets/23.png";

    this.sprites = {};

    for (let i = 1; i < 30; i++) {
        let skinPath = `assets/${i}.png`;
        this.sprites[skinPath] = new Image();
        this.sprites[skinPath].src = skinPath;
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBackground() {
    this.ctx.fillStyle = "rgb(45, 65, 45)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render() {
    this.clear();
    this.drawBackground();

    for (let id in this.game.players) {
      this.drawPlayer(this.game.players[id]);
    }
  }

  drawPlayer(player) {
        const sprite = this.sprites[player.skinPath];
        const badSprites = ["assets/7.png", "assets/13.png", "assets/18.png",
            "assets/21.png", "assets/24.png", "assets/26.png", "assets/29.png"];
        player.animate();
        let cropX = 0;
        let cropY = 128;
        let cropSize = 64;
        switch (player.direction) {
            case 0:
                cropY = 512;
                break;
            case 1:
                cropY = 704;
                break;
            case 2:
                cropY = 640;
                break;
            case 3:
                cropY = 576;
                break;
        }
        if (player.isWalking) {
            cropX = player.walkSpriteIndex * 64;
        } 
        else if (player.isAttacking || player.attackSpriteIndex > 0) {
            if (!badSprites.includes(player.skinPath)) {
                cropSize = 192;
                switch (player.direction) {
                    case 0:
                        cropY = 3456;
                        break;
                    case 1:
                        cropY = 4032;
                        break;
                    case 2:
                        cropY = 3840;
                        break;
                    case 3:
                        cropY = 3648;
                        break;
                };
                cropX = player.attackSpriteIndex * 192;
            } else {
                cropSize = 128;
                switch (player.direction) {
                    case 0:
                        cropY = 3456;
                        break;
                    case 1:
                        cropY = 3840;
                        break;
                    case 2:
                        cropY = 3712;
                        break;
                    case 3:
                        cropY = 3584;
                        break;
                };
                cropX = player.attackSpriteIndex * 128;
            }

        } else if (player.isDying) {
            cropY = 1280;
            cropX = player.deathSpriteIndex * 64;
        }
        this.ctx.drawImage(
            sprite,
            cropX, cropY, cropSize, cropSize,
            player.renderX * this.canvas.width - (cropSize / 2),
            player.renderY * this.canvas.height - (cropSize / 2), 
            cropSize, 
            cropSize
        );
        this.drawPlayerHUD(player);
        
    }


    drawPlayerHUD(player) {
    let x = player.renderX * this.canvas.width;
    let y = player.renderY * this.canvas.height;
    let ctx = this.ctx;
    let width = 40;
    let hpHeight = 8;
    let cdHeight = 6;

    let hpPositionY = 20;
    let cdPositionY = 12;
    let pseudoPositionY = 28;

    // barre de vie
    let hpRatio = player.hp / player.maxHp;

    //HP du joueur
    ctx.fillStyle = "#4dff00";
    ctx.fillRect(x - 20, y - 40, width * hpRatio, hpHeight);

    // cooldoawn barre
    let cdRatio = 1 - player.currentAttackCooldown / player.attackCooldown;

    ctx.fillStyle = "#0033ff";
    ctx.fillRect(x - 20, y - 30, width * cdRatio, cdHeight);

    //pseudo et le niveau du joeur
    ctx.font = "16px 'Press Start 2P'";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";

    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";

    let text = `${player.name} Lv.${player.lvl}`;

    ctx.strokeText(text, x, y - 40);
    ctx.fillText(text, x, y - 40);
  }
}
