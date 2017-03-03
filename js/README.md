# This contains all the backend code base
* phaser.min - minified phaser
* preload - contains just the preloading, this loads all the files, and does the loading bar
* main - contains all the game states, starting with preloading.

Backlog

add background 
camera following player
add onscreen control
* turn left/ right  -
* thruster control -
	** this currently has problem where the thruster would not push the other way when ship is turned.
* 

Need special camera handling
* set bound to camera
* do offset of camera where the ship is on the top half of the screen
* rotating camerea, this can be done at the end  because it is not trivial, This is abandoned because found discussion about it introducing dizzyness
* camera will be its own class
* one method of dynamic camera is having a rotating point around the player, and the camera will track that, result should be that camera always centers infront of the player, so front view is maximized, where rear view is not visible.


