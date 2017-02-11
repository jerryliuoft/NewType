'use strict';

var GAME = GAME || {};
/**
* preload state that loads all assets and shows load bar
*
*/

GAME.PreloadState = function (game){

};
GAME.PreloadState.prototype= {

	preload: function() {

		//this.asset.cropEnabled = true;
		// load the sprite in the middle of the screen
		//this.asset = this.add.sprite (GAME.GAME_WIDTH/2, GAME.GAME_HEIGHT/2, 'preloadBar');
		//this.asset.anchor.setTo (0.5,0.5);
		//set this as preloader sprite
		//this.load.setPreloadSprite(this.asset);

		// when this.ready turns true = game finished loading, load next state
		this.ready = false;
		// load a sprite for loader image
		let game = this.game;

		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    	game.load.image('background','assets/debug-grid-1920x1920.png');
    	game.load.image('bullet', 'assets/shmup-bullet.png');
    	game.load.image('ship', 'assets/thrust_ship.png');

    	//load UIs
    	game.load.spritesheet('buttonvertical', 'assets/buttons/button-vertical.png',64,64);
   		game.load.spritesheet('buttonhorizontal', 'assets/buttons/button-horizontal.png',96,64);
   		game.load.spritesheet('buttondiagonal', 'assets/buttons/button-diagonal.png',64,64);
   		game.load.spritesheet('buttona', 'assets/buttons/button-round-a.png',96,96);
   		game.load.spritesheet('buttonb', 'assets/buttons/button-round-b.png',96,96);
   		game.load.image('slider_path', 'assets/buttons/slider-path.png');
    	game.load.image('slider_button', 'assets/buttons/slider-button.png');

	},

	create:function (){

	},
	update:function (){
		if(this.ready ){
			this.game.state.start('Game');
		}
	},
	onLoadComplete: function(){
		this.ready = true;
	},

};