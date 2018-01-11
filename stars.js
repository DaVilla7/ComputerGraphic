
var earth;
var moon;
var lava;
var Mercury;
var Uranus;
function initSkyBox(){
    var materialArray = [];
    materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/star5.jpg' ) }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/star5.jpg' ) }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/star5.jpg' ) }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/star5.jpg' ) }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/star5.jpg' ) }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/star5.jpg' ) }));
    for (var i = 0; i < 6; i++)
       materialArray[i].side = THREE.BackSide;
    var skyboxMaterial = new THREE.MeshFaceMaterial( materialArray );
    var skyBoxLen = scale * 100;
    var skyboxGeom = new THREE.CubeGeometry( skyBoxLen, skyBoxLen, skyBoxLen, 1, 1, 1 );
    
    var skybox = new THREE.Mesh( skyboxGeom, skyboxMaterial );
    // skybox.position.set(0,0,skyBoxLen/2-2);
    scene.add( skybox );
    // var sphereGeom =  new THREE.SphereGeometry( 20*scale, 16*scale, 8*scale ); 

    var sphereGeom =  new THREE.SphereGeometry( .4*scale, .32*scale, .16*scale ); 
    var moonTexture = THREE.ImageUtils.loadTexture( 'images/moon.jpg' );
	var moonMaterial = new THREE.MeshLambertMaterial( { map: moonTexture, color: 0xff8800, ambient: 0x0000ff } );
	moon = new THREE.Mesh( sphereGeom.clone(), moonMaterial );
    moon.position.set(5*scale, -5*scale, 5*scale);
    moon.receiveShadow = true;
    moon.castShadow = true;
    scene.add( moon );	
    
    // var sphereGeom =  new THREE.SphereGeometry( 20*scale, 16*scale, 8*scale ); 
    var sphereGeom =  new THREE.SphereGeometry( .6*scale, .4*scale, .2*scale ); 
    var lavaTexture = THREE.ImageUtils.loadTexture( 'images/lava.jpg' );
	var lavaMaterial = new THREE.MeshLambertMaterial( { map: lavaTexture, color: 0xff8800, ambient: 0x0000ff } );
	lava = new THREE.Mesh( sphereGeom.clone(), lavaMaterial );
    lava.position.set(5*scale, 5*scale, 7*scale);
    lava.castShadow = true;
    scene.add( lava );	
    
    var sphereGeom =  new THREE.SphereGeometry( .4*scale, .32*scale, .16*scale ); 
    var earthTexture = THREE.ImageUtils.loadTexture( 'images/earth-day.jpg' );
	var earthMaterial = new THREE.MeshLambertMaterial( { map: earthTexture } );
	earth = new THREE.Mesh( sphereGeom.clone(), earthMaterial );
	earth.position.set(-2*scale, -5*scale, 4*scale);
    scene.add( earth );	
    
    var sphereGeom =  new THREE.SphereGeometry( .4*scale, .32*scale, .16*scale ); 
    var MercuryTexture = THREE.ImageUtils.loadTexture( 'images/Mercury.jpg' );
	var MercuryMaterial = new THREE.MeshLambertMaterial( { map: MercuryTexture, color: 0xff8800, ambient: 0x0000ff } );
	Mercury = new THREE.Mesh( sphereGeom.clone(), MercuryMaterial );
	Mercury.position.set(-2*scale, -2*scale, 4*scale);
    scene.add( Mercury );	
    
    var sphereGeom =  new THREE.SphereGeometry( .8*scale, .64*scale, .32*scale ); 
    var UranusTexture = THREE.ImageUtils.loadTexture( 'images/Uranus.jpg' );
	var UranusMaterial = new THREE.MeshLambertMaterial( { map: UranusTexture, color: 0xff8800, ambient: 0x0000ff } );
	Uranus = new THREE.Mesh( sphereGeom.clone(), UranusMaterial );
	Uranus.position.set(-0*scale, -7*scale, 6*scale);
	scene.add( Uranus );	
}


function rotation_self(object){
    object.rotation.z += 0.02*Math.PI;
}

function rotation_public(object,angle,direction){
    // var clock = new THREE.Clock(); //时间跟踪
    // //圆周运动
    // var time = clock.getElapsedTime() * 1;
    // object.position.x = Math.cos( time ) * 100;
    // object.position.y = Math.sin( time ) * 10;
    if(direction == 'horizontal'){
        object.position.x=Math.cos(-angle*Math.PI)*object.position.x-Math.sin(angle*Math.PI)*object.position.y;
        object.position.y=Math.cos(-angle*Math.PI)*object.position.y-Math.sin(-angle*Math.PI)*object.position.x;
    }
    else if(direction == 'vertical'){
        object.position.y=Math.cos(-angle*Math.PI)*object.position.y-Math.sin(angle*Math.PI)*object.position.z;
        object.position.z=Math.cos(-angle*Math.PI)*object.position.z-Math.sin(-angle*Math.PI)*object.position.y;
    }
    
}
