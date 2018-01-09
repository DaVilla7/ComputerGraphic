var keyboard_camera = new THREEx.KeyboardState();
var clock_camera = new THREE.Clock();
// custom global variables
var MovingCube;
var textureCamera, mainCamera;

// intermediate scene for reflecting the reflection
var screenScene, screenCamera, firstRenderTarget, finalRenderTarget;

function movingCamera(){

    var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
    
    textureCamera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
	scene.add(textureCamera);

    var materialArray = [];
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/xpos.png' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/xneg.png' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/ypos.png' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/yneg.png' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/zpos.png' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/zneg.png' ) }));
	var MovingCubeMat = new THREE.MeshFaceMaterial(materialArray);
	var MovingCubeGeom = new THREE.CubeGeometry( 0.5*scale, 0.5*scale, 0.5*scale, 1, 1, 1, materialArray );
	MovingCube = new THREE.Mesh( MovingCubeGeom, MovingCubeMat );
	MovingCube.position.set(0, 0, 1400);
    scene.add( MovingCube );	
    
    screenScene = new THREE.Scene();

    screenCamera = new THREE.OrthographicCamera( 
		window.innerWidth  / -2, window.innerWidth  /  2, 
		window.innerHeight /  2, window.innerHeight / -2, 
		-10000, 10000 );
	screenCamera.position.z = 1;
	screenScene.add( screenCamera );

    var screenGeometry = new THREE.PlaneGeometry( window.innerWidth, window.innerHeight );
	
	firstRenderTarget = new THREE.WebGLRenderTarget( 512, 512, { format: THREE.RGBFormat } );	
	var screenMaterial = new THREE.MeshBasicMaterial( { map: firstRenderTarget } );
	
	var quad = new THREE.Mesh( screenGeometry, screenMaterial );
	// quad.rotation.x = Math.PI / 2;
    screenScene.add( quad );
    
    var planeGeometry = new THREE.CubeGeometry( 3.95*scale, 2.20*scale, 1, 1 );
	finalRenderTarget = new THREE.WebGLRenderTarget( 512, 512, { format: THREE.RGBFormat } );
	var planeMaterial = new THREE.MeshBasicMaterial( { map: finalRenderTarget } );
	var plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.position.set(-5.85*scale,-4.86*scale,(2.5+2.5/2)*scale);
    // plane.position.set(-2*scale,-3*scale,(2.5+2.5/2)*scale);
    plane.rotation.x = 90 * Math.PI / 180;
    plane.rotation.y = -45 * Math.PI / 180;
	// scene.add(plane);
	// pseudo-border for plane, to make it easier to see
	
    

}

function update_movingCamera()
{
	var delta = clock_camera.getDelta(); // seconds.
	var moveDistance = 200 * delta; // 200 pixels per second
	var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second
	
	// local transformations

	// move forwards/backwards/left/right
	if ( keyboard_camera.pressed("W") )
		MovingCube.translateZ( -moveDistance );
	if ( keyboard_camera.pressed("S") )
		MovingCube.translateZ(  moveDistance );
	if ( keyboard_camera.pressed("Q") )
		MovingCube.translateX( -moveDistance );
	if ( keyboard_camera.pressed("E") )
		MovingCube.translateX(  moveDistance );	

	// rotate left/right/up/down
	var rotation_matrix = new THREE.Matrix4().identity();
	if ( keyboard_camera.pressed("A") )
		MovingCube.rotateOnAxis( new THREE.Vector3(0,1,0), rotateAngle);
	if ( keyboard_camera.pressed("D") )
		MovingCube.rotateOnAxis( new THREE.Vector3(0,1,0), -rotateAngle);
	if ( keyboard_camera.pressed("R") )
		MovingCube.rotateOnAxis( new THREE.Vector3(1,0,0), rotateAngle);
	if ( keyboard_camera.pressed("F") )
		MovingCube.rotateOnAxis( new THREE.Vector3(1,0,0), -rotateAngle);
	
	if ( keyboard_camera.pressed("Z") )
	{
		MovingCube.position.set(0,25.1,0);
		MovingCube.rotation.set(0,0,0);
	}
	
	// update the texture camera's position and look direction
	var relativeCameraOffset = new THREE.Vector3(0,0,1);
	var cameraOffset = MovingCube.matrixWorld.multiplyVector3( relativeCameraOffset );
	textureCamera.position.x = cameraOffset.x;
	textureCamera.position.y = cameraOffset.y;
	textureCamera.position.z = cameraOffset.z;
	var relativeCameraLookOffset = new THREE.Vector3(0,0,-1);
	var cameraLookOffset = relativeCameraLookOffset.applyMatrix4( MovingCube.matrixWorld );
	textureCamera.lookAt( cameraLookOffset );
				
	stats.update();
}