// var container, scene, camera, renderer, controls, stats;
var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();

// custom global variables
var android;

// the following code is from
//    http://catchvar.com/threejs-animating-blender-models
var animOffset       = 0,   // starting frame of animation
	walking         = false,
	duration        = 1000, // milliseconds to complete animation
	keyframes       = 20,   // total number of animation frames
	interpolation   = duration / keyframes, // milliseconds per frame
	lastKeyframe    = 0,    // previous keyframe
	currentKeyframe = 0;
	
// init();
// animate();

function init_player() 
{
	
	
	var jsonLoader = new THREE.JSONLoader();
	jsonLoader.load( "models/android-animations.js", addModelToScene );
	// addModelToScene function is called back after model has loaded
	
	// var ambientLight = new THREE.AmbientLight(0x111111);
	// scene.add(ambientLight);
	
}

function addModelToScene( geometry, materials ) 
{
	// for preparing animation
	for (var i = 0; i < materials.length; i++)
		materials[i].morphTargets = true;
		
	var material = new THREE.MeshFaceMaterial( materials );
	android = new THREE.Mesh( geometry, material );
    android.scale.set(0.1*scale,0.1*scale,0.1*scale);
    android.rotation.x = 90 * Math.PI / 180;
    android.castShadow = true;
	scene.add( android );
}

function update_player()
{
	// delta = change in time since last call (seconds)
	delta = clock.getDelta(); 
	var moveDistance = 1.5 * scale * delta;
	walking = false;

	if (Gamepad.supported) 
	{
		var pads = Gamepad.getStates();
        var pad = pads[0]; // assume only 1 player.
        if (pad) 
		{
			
			// adjust for deadzone.
			if (Math.abs(pad.leftStickX + pad.rightStickX) > 0.3)
			{
				android.rotation.y -= delta * (pad.leftStickX + pad.rightStickX);
				walking = true;
			}
			if (Math.abs(pad.leftStickY + pad.rightStickY) > 0.2)
			{
				android.translateZ( -moveDistance * (pad.leftStickY + pad.rightStickY) );
				walking = true;
			}
			if ( pad.faceButton0 || pad.faceButton1 || pad.faceButton2 || pad.faceButton3 || pad.select || pad.start )
			{ 
			    android.position.set(0,0,0);
				android.rotation.set(0,0,0);
			}
			
        }
	}
	
	// move forwards / backwards
	if ( keyboard.pressed("down") )
		android.translateZ( -moveDistance );
	if ( keyboard.pressed("up") )
		android.translateZ(  moveDistance );
	// rotate left/right
	if ( keyboard.pressed("left") )
		android.rotation.y += delta;
	if ( keyboard.pressed("right") )
		android.rotation.y -= delta;
	
	
	var walkingKeys = ["up", "down", "left", "right"];
	for (var i = 0; i < walkingKeys.length; i++)
	{
		if ( keyboard.pressed(walkingKeys[i]) )
			walking = true;
	}
	
	controls.update();
	stats.update();
}
