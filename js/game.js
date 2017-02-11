'use strict';

var GAME = GAME || {};

GAME.GameState = function (game){};

GAME.GameState.prototype = {
    preload: function (){
        // no loading should be here, be cause preloading should do the job

    },
    create: function (){


        this.game.add.tileSprite(0, 0, 1920, 1920, 'background');
        this.player = new Player(this.game, 320, 100, "ship");
        CreateUI(this.game, this.player);

    },
    update: function (){
        this.game.world.wrap(this.player, 16);
        this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

    },
    render: function (){
    }
};
