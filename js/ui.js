//UI controller of the game

function CreateUI (game, player, stars){
	console.log ("DEBUG: Creating UI");
    //panel background
    panel = game.add.group(); 
    panel.create(0, 400, 'control_panel');
    

	buttonjump = game.add.button(260, 400, 'buttona', null, this, 0, 1, 0, 1);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
    buttonjump.fixedToCamera = true;  //our buttons should stay on the same place  
    //buttonjump.events.onInputOver.add(function(){player.thruster=true;});
    //buttonjump.events.onInputOut.add(function(){player.thruster=false;});
    buttonjump.events.onInputDown.add(function(){player.thruster= ! player.thruster;});
    //buttonjump.events.onInputUp.add(function(){player.thruster=false;});
    
    buttonleft = game.add.button(0, 500, 'buttonhorizontal', null, this, 0, 1, 0, 1);
    buttonleft.fixedToCamera = true;
    //buttonleft.events.onInputOver.add(function(){player.turnLeft=true;});
    //buttonleft.events.onInputOut.add(function(){player.turnLeft=false;});
    buttonleft.events.onInputDown.add(function(){player.turnLeft = true;});
    buttonleft.events.onInputUp.add(function(){player.turnLeft = false;});

    buttonright = game.add.button(160, 500, 'buttonhorizontal', null, this, 0, 1, 0, 1);
    buttonright.fixedToCamera = true;
    //buttonright.events.onInputOver.add(function(){player.turnRight=true;});
    //buttonright.events.onInputOut.add(function(){player.turnRight=false;});
    buttonright.events.onInputDown.add(function(){player.turnRight = true;});
    buttonright.events.onInputUp.add(function(){player.turnRight = false;});

    createSlider(game, 300, 500, player);
    panel.fixedToCamera = true;

}



function createSlider (game, x ,y, player){

    sliderBg = game.add.sprite(x, y, 'slider_path');
    let sliderPositionY = y + sliderBg.height - game.cache.getImage("slider_button").height;
    slider = game.add.sprite(x, sliderPositionY, 'slider_button');

    //this contains the y value where the slider is at max and min, for ease of caculation of how much force slider was put on
    slider.max = y;
    slider.min = sliderPositionY;
    slider.player = player ;

    sliderBg.fixedToCamera = true;
    slider.fixedToCamera = true;
    slider.inputEnabled = true;
    //enableDrag(lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)
    slider.input.enableDrag();
    slider.input.allowHorizontalDrag = false;
    slider.input.boundsSprite = sliderBg;

    //find the percentage of the slider saved teh start event and stopevent for something else
    //slider.events.onDragStart.add(dragStart);
    slider.events.onDragUpdate.add(sliderUpdate);
    //slider.events.onDragStop.add(dragStop);

}

function sliderUpdate (sprite, pointer, dragX, dragY, snapPoint){
	let value = (sprite.cameraOffset.y - slider.min)/ (slider.max - slider.min);
	//console.log (sprite.player);
	sprite.player.thrusterPower = Math.round(value*sprite.player.thrusterPowerMax);
	//console.log ("DEBUG: value of slider is " + value);

}