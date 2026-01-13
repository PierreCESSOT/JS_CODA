class Player {
    constructor(name, skin, position) {
        this.name = name;
        this.skin = skin;
        this.position = position;
        this.WalkSpiriteDuration = 2;
        this.WalkSpiriteIndex = 0;
        this.WalkSpiriteNumber = 9;
        this.currentWalkSpiritStep = 0;
        this.currentAttackSpiritStep = 
        this.currentDieSpiritStep = 
        this.level = 1;
        this.max_HP = 100;
        this.current_HP = 100;
        this.regen = 20;
        this.damageAttack = 30;
        this.cooldown = 5;
        this.currentCooldown = 0;
        this.moveSpeed = 10;
        this.isWalking = false;
        this.isAttacking = false;
        this.isDying = false;
    }


update(serverPlayer) {
    this.name = serverPlayer.name;
    this.skin = serverPlayer.skin;
    this.position = serverPlayer.position;
    this.WalkSpiriteDuration = serverPlayer.WalkSpiriteDuration;
    this.WalkSpiriteIndex = serverPlayer.WalkSpiriteIndex;
    this.WalkSpiriteNumber = serverPlayer.WalkSpiriteNumber;
    this.currentWalkSpiritStep = serverPlayer.currentWalkSpiritStep;
    this.currentAttackSpiritStep = serverPlayer.currentDieSpiritStep;
    this.currentDieSpiritStep = serverPlayer.currentDieSpiritStep;
    this.level = serverPlayer.level;
    this.max_HP = serverPlayer.maxHP;
    this.current_HP = serverPlayer.currentHP;
    this.regen = serverPlayer.regenHP;
    this.damageAttack = serverPlayer.damageAttack;
    this.cooldown = serverPlayer.cooldown;
    this.currentCooldown = serverPlayer.currentCooldown;
    this.moveSpeed = serverPlayer.moveSpeed;
    this.isWalking = serverPlayer.isWalking;
    this.isAttacking = serverPlayer.isAttacking;
    this.isDying = serverPlayer.isDying;
}
}


const p1 = new Player("kota", "character-spritesheet.png", {x: 20, y:20})
console.log(p1);


animate() {
    if(this.isWalking) {

        this.currentWalkSpiriteStep++;
        if (this.currentWalkSpiriteStep >= this.WalkSpiriteDuration) {
            this.currentWalkSpiriteStep = 0;
            this.WalkSpiriteIndex++;
        }

        if (this.WalkSpiriteIndex >= this.WalkSpiriteNumber) {
            this.WalkSpiriteIndex = 0;
        }

    }
    else if(this.isAttacking) {

        this.currentAttackSpiriteStep++;
        if (this.currentAttackSpiriteStep >= this.WalkSpiriteDuration) {
            this.currentAttackSpiriteStep = 0;
            this.WalkSpiriteIndex++;
        }
        
        if (this.WalkSpiriteIndex >= this.WalkSpiriteNumber) {
            this.WalkSpiriteIndex = 0;
        }

    }
    else if(this.isDying) {

    }
    else {

    }
}


console.log("Walk Animation :\n");
console.log("isWalking = ", this.isWalking);
console.log("WalkSpritIndex = ", this.WalkSpiriteIndex, "/", this.WalkSpiriteNumber);
console.log("this.currentWalkSpiritStep = ", this.currentWalkSpiriteStep, "/", this.WalkSpiriteDuration);