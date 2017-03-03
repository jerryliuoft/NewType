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
  
        this.player = new Player(game, 320, 100, "ship");
        CreateUI(game, this.player, stars);
        game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
        //stars = createStarField(game);
        StarFields.initialize(game);

        CreateUI(game, this.player, stars);

    },
    update: function (){
        //this.game.world.wrap(this.player, 16);
        //updateStarsPostion(this.game, stars);
        StarFields.update(0.05);
    },
    render: function (){
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");   
    }
};

function updateStarsPostion (game, stars, dx, dy){
    for (var i = 0; i < stars.length; i++)
    {
         //  Update the stars y position based on its speed
         stars[i].y += stars[i].speed;
    
         if (stars[i].y > 4000)
         {
             //  Off the bottom of the screen? Then wrap around to the top
             stars[i].x = game.world.randomX;
             stars[i].y = -32;
         }
    
         if (i == 0 || i == 100 || i == 200)
         {
             //  If it's the first star of the layer then we clear the texture
             stars[i].texture.renderXY(star, stars[i].x, stars[i].y, true);
         }
         else
         {
             //  Otherwise just draw the star sprite where we need it
             stars[i].texture.renderXY(star, stars[i].x, stars[i].y, false);
         }
    }
}
function createStarField (game){

    //make some star field
    let maxStarNum = 100;
    let stars = [];

    star = game.make.sprite(0,0, 'star');
    texture1 = game.add.renderTexture(4000, 4000, 'texture1');
    //texture2 = game.add.renderTexture(4000, 4000, 'texture2');
    //texture3 = game.add.renderTexture(4000, 4000, 'texture3');
    game.add.sprite(0, 0, texture1);
    //game.add.sprite(0, 0, texture2);
    //game.add.sprite(0, 0, texture3);
    
    var t = texture1;
    var s = 1;
 /*   
        //  100 sprites per layer
        for (var i = 0; i < 300; i++)
        {
            if (i == 100)
            {
                //  With each 100 stars we ramp up the speed a little and swap to the next texture
                s = 0;
                t = texture2;
            }
            else if (i == 200)
            {
                s = 0;
                t = texture3;
            }
   
            stars.push( { x: game.world.randomX, y: game.world.randomY, speed: s, texture: t });
        }   
        */ 

    for (var i =0; i < maxStarNum; i++){
        stars.push( {x: game.world.randomX, y: game.world.randomY, speed: s, texture: t });
    }
    return stars;
}
