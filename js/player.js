//player class

'use strict'

 function Player(game, x, y, sprite){
	console.log('DEBUG: Creating Player');
    //Movement Variable;
    this.thruster = false;
    this.turnRight = false;
    this.turnLeft = false;
    this.thrusterPowerMax = 60;
    this.thrusterPower = 0;

	Phaser.Sprite.call(this, game, x, y, sprite);
   	this.game.physics.arcade.enable(this);
    this.body.maxVelocity.set(40);
    this.body.drag.set(5);
    this.anchor.set(0.5);
    this.body.collideWorldBounds = true;

	game.add.existing(this);
	this.game = game;

    //  Creates 30 bullets, using the 'bullet' graphic
    this.weapon = this.game.add.weapon(30, 'bullet');
    let weapon = this.weapon;

    //  The bullet will be automatically killed when it leaves the world bounds
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    //  The speed at which the bullet is fired
    weapon.bulletSpeed = 600;
    //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
    weapon.fireRate = 100;

    //  Tell the Weapon to track the 'player' Sprite
    //  With no offsets from the position
    //  But the 'true' argument tells the weapon to track sprite rotation
    weapon.trackSprite(this, 0, 0, true);

	
};
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


Player.prototype.update= function (){
        let sprite = this;

        if (this.thruster)
        {
            this.game.physics.arcade.accelerationFromRotation(sprite.rotation, this.thrusterPower, sprite.body.acceleration);
        }
        else
        {
            sprite.body.acceleration.set(0);
        }
    
        if (this.turnLeft)
        {
            sprite.body.angularVelocity = -300;
        }
        else if (this.turnRight)
        {
            sprite.body.angularVelocity = 300;
            //this.game.camera.x += 4;
            //this.game.camera.unfollow();
        }else{
            sprite.body.angularVelocity = 0;
        }

        if (! this.thruster)
        {
            //this.weapon.fire();
        }
}
