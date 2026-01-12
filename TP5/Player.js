class Player {
    constructor(name, skin, position) {
        this.name = name;
        this.skin = skin;
        this.position = position;
        this.level = 1;
        this.max_HP = 100;
        this.current_HP = 100;
        this.regen = 20;
        this.damageAttack = 30;
        this.cooldown = 5;
        this.currentCooldown = 0;
        this.moveSpeed = 10;
        this.isMoving = false;
        this.isAttack = false;
        this.isDead = false;
    }

update(serverPlayer) {
    this.name = serverPlayer.name;
    this.skin = serverPlayer.skin;
    this.position = serverPlayer.position;
    this.level = serverPlayer.level;
    this.max_HP = serverPlayer.maxHP;
    this.current_HP = serverPlayer.currentHP;
    this.regen = serverPlayer.regenHP;
    this.damageAttack = serverPlayer.damageAttack;
    this.cooldown = serverPlayer.cooldown;
    this.currentCooldown = serverPlayer.currentCooldown;
    this.moveSpeed = serverPlayer.moveSpeed;
    this.isMoving = serverPlayer.isMoving;
    this.isAttack = serverPlayer.isAttack;
    this.isDead = serverPlayer.isDead;
}
}

const p1 = new Player("kota", "character-spritesheet.png", {x: 20, y:20})
console.log(p1);