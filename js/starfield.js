//This creates the star field with parallax effect, stolen from https://github.com/jakesgordon/javascript-starfield/blob/master/stars.js

'use strict'

//=============================================================================
// Stars
//=============================================================================

var StarFields = {

  Defaults: {
    stats:      true,
    dx:         -1,
    dy:          0,
    maxspeed:   10,
    layers: [
      { percent:  30, size: { min: 0.4, max: 1.0 }, speed: { min:   1, max:   2 }, colors: [0x111111] }, // 1 in 3 get a tint of red
      { percent:  25, size: { min: 0.6, max: 1.2 }, speed: { min:   2, max:   4 }, colors: [0x333333] }, // 1 in 3 get a tint of red
      { percent:  15, size: { min: 0.8, max: 1.4 }, speed: { min:   4, max:   8 }, colors: [0x555555] }, // 1 in 3 get a tint of red
      { percent:  15, size: { min: 1.0, max: 1.6 }, speed: { min:   8, max:  16 }, colors: [0x777777] },
      { percent:   8, size: { min: 1.2, max: 1.8 }, speed: { min:  16, max:  32 }, colors: [0x999999] },
      { percent:   4, size: { min: 1.4, max: 2.0 }, speed: { min:  32, max:  64 }, colors: [0xBBBBBB] },
      { percent:   2, size: { min: 1.6, max: 2.2 }, speed: { min:  64, max: 128 }, colors: [0xDDDDDD] },
      { percent:   1, size: { min: 1.8, max: 2.4 }, speed: { min: 128, max: 256 }, colors: [0xFFFFFF] }
    ]
  },
  initialize: function (game){
  	this.game = game;
  	this.initLayers (this.Defaults.layers);
  	this.initStars ();
  	//console.log(this.layers);
  	//console.log(this.stars);
  	this.renderStars();
  	this.dx = this.Defaults.dx;
  	this.dy = this.Defaults.dy;
  },
  initStars: function () {
  	let n, layer, count = 4000;
  	let game = this.game;
  	this.stars = [];

  	for (n = 0; n < count; n ++){
  			layer= this.randomLayer();
  			this.stars.push ({
  				layer: layer,
  				color: layer.colors,
  				speed: game.rnd.realInRange(layer.speed.min, layer.speed.max),
  				size:  game.rnd.realInRange(layer.size.min,  layer.size.max),
  				x:     game.world.randomX,
  				y:     game.world.randomY
  			})
  		}
  	},

  	initLayers: function (layers) {
  		let n, sum = 0, l;
  		/*
  		this creates an range dynamically so rand can know which layer the star can be generated on
		ie 1-2 is layer one 2-3 is layer two etc up to 100 percent
		*/
  		for(n = 0 ; n < layers.length ; n++) {
  			l = layers[n];
  			l.min = sum;
  			l.max = sum + l.percent;
  			sum = l.max;
  		}
  		this.layers = layers;
  		console.log (layers);
  	},

  	randomLayer: function() {
  		let i, n = this.game.rnd.integerInRange(0, 100);
  		for(i = 0 ; i < this.layers.length ; i++) {
  			if (n <= this.layers[i].max){
  				//console.log("assigned to layer "+ i + " rand value is "+ n  );
  				return this.layers[i];
  			}
  		}
  	},

  	renderStars: function (){
  		let n;
  		for (n = 0; n < this.stars.length; n ++ ){
  			let current = this.stars[n];
  			current.sprite = this.game.add.image(current.x, current.y, 'star', 0 );
  			current.sprite.scale.setTo(current.size/2, current.size/2);
  			//current.sprite.tint = 0x555555;
  			current.sprite.tint = current.color;
  			  		//console.log(current.color.toString(16));
  			  			//current.sprite.tint = 0x111111;
  		}


  	},

  	update: function(dt) {
  		let star, n, max = this.stars.length;
  		for(n = 0 ; n < max ; n++) {
  			star = this.stars[n].sprite;
  			//console.log(this.stars[n].speed);
  			star.x = star.x + (this.dx * this.stars[n].speed * dt);
  			star.y = star.y + (this.dy * this.stars[n].speed * dt);
  			this.game.world.wrap(star);
  		}
  	}
  //=============================================================================

}; // Stars