var GAME = GAME || {};
GAME.BootState = function(game) {};
GAME.BootState.prototype = {
    preload: function() {
    },
    create: function() {
    	// No MultiTouch
        this.input.maxPointers = 1;

        /**
        *The scale.scaleMode setting controls the scaling of our game. The available options are: EXACT_FIT, NO_SCALE and SHOW_ALL; 
        *The first option will scale the game to all the available space (100% width and height, no ratio preserved);
        *the second will disable scaling completely; and 
        *the third will make sure that the game fits in the given dimensions, 
        *but everything will be shown on the screen without hiding any fragments (and the ratio will be preserved). 
        *
        */

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.world.setBounds(0, 0, 1920, 1920);


        this.state.start('Preload');
    }
};