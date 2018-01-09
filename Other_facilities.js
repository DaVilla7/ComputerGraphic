function other_facilities(){
    facilities_screen(); 
}

function colume(x,y,radius,length){
    var geometry = new THREE.CylinderGeometry( radius*scale, radius*scale, length*scale, 32,32 );
    var material = new THREE.MeshLambertMaterial( {color: 0xBEBEBE} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(x*scale,y*scale,length*scale/2);
    cylinder.rotation.x = 90 * Math.PI / 180;
    
    cylinder.receiveShadow=true;
    cylinder.castShadow = true;
    scene.add( cylinder );
}

function facilities_screen(){
    colume(-6.0,-5.,0.2,2.5);
    var url = "img/board6.jpg";
    var texture = THREE.ImageUtils.loadTexture(url,null,function(t){
        renderer.render(scene,camera);
    });
    var cube = new THREE.Mesh(new THREE.CubeGeometry(5.12*scale, 0.4*scale, 3.23*scale),
    new THREE.MeshLambertMaterial({
            // color: 0x2894FF,
            map:texture,
            // wireframe: false
        })
    );  

    cube.position.set(-6.0*scale,-5*scale,(2.5+2.5/2)*scale);
     // scene.add(bleacher[0][0]);
     cube.castShadow = true;
     cube.rotation.z = -225 * Math.PI / 180;
    //  cube.rotation.z = Math.PI;
     scene.add(cube);
}