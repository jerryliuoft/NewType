'use strict';

var GAME = GAME || {};
var star;
var texture1;
var texture2;
var texture3;
var stars = [];


GAME.GameState = function (game){};

GAME.GameState.prototype = {
    preload: function (){
        // no loading should be here, be cause preloading should do the job

    },
    create: function (){
        let game= this.game;
        //2 turn on debugger for all phyiscs bodies https://github.com/samme/phaser-plugin-debug-arcade-physics
        game.plugins.add(Phaser.Plugin.DebugArcadePhysics);
        game.debug.arcade.on();
        StarFields.initialize(game);
  
        this.player = new Player(game, 320, 100, "ship");
        CreateUI(game, this.player, stars);
        game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
        //stars = createStarField(game);


        CreateUI(game, this.player, stars);

    },
    update: function (){

        StarFields.update(0.05);
        StarFields.dx = -this.player.deltaX;
        StarFields.dy = -this.player.deltaY;

    },
    render: function (){
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");   
    }
};

