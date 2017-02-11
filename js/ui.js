//UI controller of the game

function CreateUI (game, player){
	console.log ("DEBUG: Creating UI");
	buttonjump = game.add.button(260, 200, 'buttona', null, this, 0, 1, 0, 1);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
    buttonjump.fixedToCamera = true;  //our buttons should stay on the same place  
    buttonjump.events.onInputOver.add(function(){player.thruster=true;});
    buttonjump.events.onInputOut.add(function(){player.thruster=false;});
    buttonjump.events.onInputDown.add(function(){player.thruster=true;});
    buttonjump.events.onInputUp.add(function(){player.thruster=false;});
    
    buttonleft = game.add.button(0, 200, 'buttonhorizontal', null, this, 0, 1, 0, 1);
    buttonleft.fixedToCamera = true;
    buttonleft.events.onInputOver.add(function(){player.turnLeft=true;});
    buttonleft.events.onInputOut.add(function(){player.turnLeft=false;});
    buttonleft.events.onInputDown.add(function(){player.turnLeft=true;});
    buttonleft.events.onInputUp.add(function(){player.turnLeft=false;});

    buttonright = game.add.button(160, 200, 'buttonhorizontal', null, this, 0, 1, 0, 1);
    buttonright.fixedToCamera = true;
    buttonright.events.onInputOver.add(function(){player.turnRight=true;});
    buttonright.events.onInputOut.add(function(){player.turnRight=false;});
    buttonright.events.onInputDown.add(function(){player.turnRight=true;});
    buttonright.events.onInputUp.add(function(){player.turnRight=false;});
}