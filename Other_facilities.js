function other_facilities(){
    facilities_screen(); 
    setBillboard();
    cornerFlag();
    goal();
    groundLights();
    nationalFlag();
    // text();
}

//竖柱子
function colume(x,y,radius,length,color){
    var geometry = new THREE.CylinderGeometry( radius*scale, radius*scale, length*scale, 32,32 );
    var material = new THREE.MeshLambertMaterial( {color: color} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(x*scale,y*scale,length*scale/2);
    cylinder.rotation.x = 90 * Math.PI / 180;
    
    cylinder.receiveShadow=true;
    cylinder.castShadow = true;
    scene.add( cylinder );
}

//横柱子
function rows(x,y,z,radius,length){
    var geometry = new THREE.CylinderGeometry( radius*scale, radius*scale, length*scale, 32,32 );
    var material = new THREE.MeshLambertMaterial( {color: 0xBEBEBE} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(x*scale,y*scale,z*scale);
    // cylinder.rotation.x = 90 * Math.PI / 180;
    
    cylinder.receiveShadow=true;
    cylinder.castShadow = true;
    scene.add( cylinder );
}

function getFlag(img,len,wid,high,x,y,z){
    var url = "img/" + img;
    var texture = THREE.ImageUtils.loadTexture(url,null,function(t){
        renderer.render(scene,camera);
    });
 
    var flag = new THREE.Mesh(new THREE.CubeGeometry(len*scale,wid*scale,high*scale),
    new THREE.MeshLambertMaterial({
        // color:color_palette.white, 
        map:texture,
            
        })
    );  
    // mesh_billboard.position.set(0,2.7*scale,0.2*scale);
    flag.position.set(x*scale,y*scale,z*scale);
    flag.receiveShadow=true;
    flag.castShadow = true;
    flag.rotation.z = 225 * Math.PI/180;
    
    scene.add(flag);
}

//大屏幕
function facilities_screen(){
    colume(-6.0,-5,0.2,2.5,color_palette.white);
    var url = "img/board7.jpg";
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


function getBillboard(img,x,y,z,dir){
    // var geometry = new THREE.PlaneGeometry(1*scale,0.4*scale);
    var url = "img/" + img;
    var texture = THREE.ImageUtils.loadTexture(url,null,function(t){
        renderer.render(scene,camera);
    });
 
    var mesh_billboard = new THREE.Mesh(new THREE.CubeGeometry(1*scale,0.02*scale,0.4*scale),
    new THREE.MeshLambertMaterial({
            map:texture,
        })
    );  
    // mesh_billboard.position.set(0,2.7*scale,0.2*scale);
    mesh_billboard.position.set(x*scale,y*scale,z*scale);
    mesh_billboard.receiveShadow=true;
    mesh_billboard.castShadow = true;
    mesh_billboard.rotation.z = 180 * Math.PI/180;
    if(dir == "east"){
        mesh_billboard.rotation.z = 90 * Math.PI / 180;
    }else if(dir == "west"){
        mesh_billboard.rotation.z = -90 * Math.PI / 180
    }
    scene.add(mesh_billboard);
}

function setBillboard(){
    //北看台广告牌
    var img;
    for(var i = -3;i<=3;i++){
        if(i%2 == 0){
            img = "fifa.jpg";
        }else{
            img = "nike1.jpg";
        }
        getBillboard(img,i,-2.7,0.2,"north");
    }
    
    //东看台
    getBillboard("fifa.jpg",-4.4,-1.5,0.2,"east");
    getBillboard("nike1.jpg",-4.4,-0.5,0.2,"east");
    getBillboard("fifa.jpg",-4.4,0.5,0.2,"east");
    getBillboard("nike1.jpg",-4.4,1.5,0.2,"east");

     //西看台
     getBillboard("fifa.jpg",4.4,-1.5,0.2,"west");
     getBillboard("nike1.jpg",4.4,-0.5,0.2,"west");
     getBillboard("fifa.jpg",4.4,0.5,0.2,"west");
     getBillboard("nike1.jpg",4.4,1.5,0.2,"west");

      //南看台广告牌
    var img;
    for(var i = -3;i<=3;i++){
        if(i%2 == 0){
            img = "fifa.jpg";
        }else{
            img = "nike1.jpg";
        }
        getBillboard(img,i,2.8,0.2,"south");
    }

}

//角旗
function cornerFlag(){
    colume(-3.92,-2.4,0.02,0.5,color_palette.white);
    colume(3.92,-2.4,0.02,0.5,color_palette.white);
    colume(-3.92,2.4,0.02,0.5,color_palette.white);
    colume(3.92,2.4,0.02,0.5,color_palette.white);
    getFlag("atm.png",0.20,0.005,0.20,-3.92 + 0.1 * Math.sin(Math.PI/4),-2.4 + 0.1 * Math.sin(Math.PI/4), 0.4);
    getFlag("atm.png",0.20,0.005,0.20,-3.92 + 0.1 * Math.sin(Math.PI/4),2.4 + 0.1 * Math.sin(Math.PI/4), 0.4);
    getFlag("atm.png",0.20,0.005,0.20,3.92 + 0.1 * Math.sin(Math.PI/4),-2.4 + 0.1 * Math.sin(Math.PI/4), 0.4);
    getFlag("atm.png",0.20,0.005,0.20,3.92 + 0.1 * Math.sin(Math.PI/4),2.4 + 0.1 * Math.sin(Math.PI/4), 0.4);
}

//球门
function goal(){
    //东侧
    colume(-3.92,-0.77,0.02,0.7,color_palette.white);
    colume(-3.92,0.77,0.02,0.7,color_palette.white);
    rows(-3.92,0,0.7,0.02,1.57);

    //西侧
    colume(3.92,-0.77,0.02,0.7,color_palette.white);
    colume(3.92,0.77,0.02,0.7,color_palette.white);
    rows(3.92,0,0.7,0.02,1.57);
}

//场灯
var pointLight1;
var pointLight2;
function groundLights(){
    //西北
    colume(5.0,-3.5,0.05,2.8,color_palette.gray);
    colume(5.2,-3.2,0.05,2.8,color_palette.gray);
    var url = "img/light2.jpg";
    var texture = THREE.ImageUtils.loadTexture(url,null,function(t){
        renderer.render(scene,camera);
    });
    var cube = new THREE.Mesh(new THREE.CubeGeometry(1.5*scale, 0.4*scale, 1.5*scale),
    new THREE.MeshLambertMaterial({
            // color: 0x2894FF,
            map:texture,
            // wireframe: false
        })
    );  

    cube.position.set(5.12*scale,-3.4*scale,(2.8+1.5/2)*scale);
     // scene.add(bleacher[0][0]);
     cube.castShadow = true;
     cube.rotation.z = 45 * Math.PI / 180;
    //  cube.rotation.z = Math.PI;
     scene.add(cube);

     
     for(var i = 0;i<4;i++){
        var light;
        var sphereGeom =  new THREE.SphereGeometry( .2*scale, .3*scale, .8*scale ); 
       
        var lightMaterial = new THREE.MeshLambertMaterial( {color: color_palette.white, ambient: 0x0000ff } );
        light = new THREE.Mesh( sphereGeom.clone(), lightMaterial );
        light.position.set(5.45*scale,-2.95*scale,(2.8+0.375/2)*scale+i*.37*scale);
        
        light.castShadow = true;
        scene.add( light );	
        // var spotLight=new THREE.SpotLight(0xffffff);
        // spotLight.position.set(5.45*scale,-2.95*scale,(2.8+0.375/2)*scale+i*.37*scale);
        // spotLight.castShadow=true;
        // spotLight.shadowCameraNear=2*scale;
        // spotLight.shadowCameraFar=10*scale;
        // scene.add(spotLight);

        

        var lightMaterial = new THREE.MeshLambertMaterial( {color: color_palette.white, ambient: 0x0000ff } );
        light = new THREE.Mesh( sphereGeom.clone(), lightMaterial );
        light.position.set(5.20*scale,-3.218*scale,(2.8+0.375/2)*scale+i*.37*scale);
       
        light.castShadow = true;
        scene.add( light );	

        var lightMaterial = new THREE.MeshLambertMaterial( {color: color_palette.white, ambient: 0x0000ff } );
        light = new THREE.Mesh( sphereGeom.clone(), lightMaterial );
        light.position.set(4.92*scale,-3.48*scale,(2.8+0.375/2)*scale+i*.37*scale);
       
        light.castShadow = true;
        scene.add( light );	

        var lightMaterial = new THREE.MeshLambertMaterial( {color: color_palette.white, ambient: 0x0000ff } );
        light = new THREE.Mesh( sphereGeom.clone(), lightMaterial );
        light.position.set(4.675*scale,-3.74*scale,(2.8+0.375/2)*scale+i*.37*scale);
       
        light.castShadow = true;
        scene.add( light );	
     }
     
     
     //西南
     colume(5.0,3.5,0.05,2.8,color_palette.gray);
     colume(5.2,3.2,0.05,2.8,color_palette.gray);

     var cube = new THREE.Mesh(new THREE.CubeGeometry(1.5*scale, 0.4*scale, 1.5*scale),
     new THREE.MeshLambertMaterial({
             // color: 0x2894FF,
             map:texture,
             // wireframe: false
         })
     );  
 
     cube.position.set(5.12*scale,3.4*scale,(2.8+1.5/2)*scale);
      // scene.add(bleacher[0][0]);
      cube.castShadow = true;
      cube.rotation.z = 135 * Math.PI / 180;
     //  cube.rotation.z = Math.PI;
      scene.add(cube);
 
      
      for(var i = 0;i<4;i++){
         var light;
         var sphereGeom =  new THREE.SphereGeometry( .2*scale, .3*scale, .8*scale ); 
        
         var lightMaterial = new THREE.MeshLambertMaterial( {color: color_palette.white, ambient: 0x0000ff } );
         light = new THREE.Mesh( sphereGeom.clone(), lightMaterial );
         light.position.set(5.45*scale,2.95*scale,(2.8+0.375/2)*scale+i*.37*scale);
         
         light.castShadow = true;
         scene.add( light );	

         var lightMaterial = new THREE.MeshLambertMaterial( {color: color_palette.white, ambient: 0x0000ff } );
         light = new THREE.Mesh( sphereGeom.clone(), lightMaterial );
         light.position.set(5.20*scale,3.218*scale,(2.8+0.375/2)*scale+i*.37*scale);
        
         light.castShadow = true;
         scene.add( light );	
 
         var lightMaterial = new THREE.MeshLambertMaterial( {color: color_palette.white, ambient: 0x0000ff } );
         light = new THREE.Mesh( sphereGeom.clone(), lightMaterial );
         light.position.set(4.92*scale,3.48*scale,(2.8+0.375/2)*scale+i*.37*scale);
        
         light.castShadow = true;
         scene.add( light );	
 
         var lightMaterial = new THREE.MeshLambertMaterial( {color: color_palette.white, ambient: 0x0000ff } );
         light = new THREE.Mesh( sphereGeom.clone(), lightMaterial );
         light.position.set(4.675*scale,3.74*scale,(2.8+0.375/2)*scale+i*.37*scale);
        
         light.castShadow = true;
         scene.add( light );	
      }

      var pointColor = "#ccffcc";
      pointLight1 = new THREE.PointLight(pointColor);
      pointLight1.distance = 50*scale;//距离，决定了光线可以照射多远
      pointLight1.intensity = 2;//强度
      pointLight1.position.set(-500*scale,-500*scale,-500*scale);
      scene.add(pointLight1);
    //   
 
      pointLight2 = new THREE.PointLight(pointColor);
      pointLight2.distance = 50*scale;//距离，决定了光线可以照射多远
      pointLight2.intensity = 2;//强度
      pointLight2.position.set(-500*scale,-500*scale,-500*scale);
      scene.add(pointLight2);

      //东南
     colume(-5.0,3.5,0.05,2.8,color_palette.gray);
     colume(-5.2,3.2,0.05,2.8,color_palette.gray);

     var cube = new THREE.Mesh(new THREE.CubeGeometry(1.5*scale, 0.4*scale, 1.5*scale),
     new THREE.MeshLambertMaterial({
             // color: 0x2894FF,
             map:texture,
             // wireframe: false
         })
     );  
 
     cube.position.set(-5.12*scale,3.4*scale,(2.8+1.5/2)*scale);
      // scene.add(bleacher[0][0]);
      cube.castShadow = true;
      cube.rotation.z = 45 * Math.PI / 180;
     //  cube.rotation.z = Math.PI;
      scene.add(cube);
 
      
      for(var i = 0;i<4;i++){
         var light;
         var sphereGeom =  new THREE.SphereGeometry( .2*scale, .3*scale, .8*scale ); 
        
         var lightMaterial = new THREE.MeshLambertMaterial( {color: color_palette.white, ambient: 0x0000ff } );
         light = new THREE.Mesh( sphereGeom.clone(), lightMaterial );
         light.position.set(-5.45*scale,2.95*scale,(2.8+0.375/2)*scale+i*.37*scale);
         
         light.castShadow = true;
         scene.add( light );	

         var lightMaterial = new THREE.MeshLambertMaterial( {color: color_palette.white, ambient: 0x0000ff } );
         light = new THREE.Mesh( sphereGeom.clone(), lightMaterial );
         light.position.set(-5.20*scale,3.218*scale,(2.8+0.375/2)*scale+i*.37*scale);
        
         light.castShadow = true;
         scene.add( light );	
 
         var lightMaterial = new THREE.MeshLambertMaterial( {color: color_palette.white, ambient: 0x0000ff } );
         light = new THREE.Mesh( sphereGeom.clone(), lightMaterial );
         light.position.set(-4.92*scale,3.48*scale,(2.8+0.375/2)*scale+i*.37*scale);
        
         light.castShadow = true;
         scene.add( light );	
 
         var lightMaterial = new THREE.MeshLambertMaterial( {color: color_palette.white, ambient: 0x0000ff } );
         light = new THREE.Mesh( sphereGeom.clone(), lightMaterial );
         light.position.set(-4.675*scale,3.74*scale,(2.8+0.375/2)*scale+i*.37*scale);
        
         light.castShadow = true;
         scene.add( light );	
      }
}

function text(){
    //未实现
    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
	var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
	var materialArray = [ materialFront, materialSide ];
	var textGeom = new THREE.TextGeometry( "Hello, World!", 
	{
		size: 30, height: 4, curveSegments: 3,
		font: "helvetiker", weight: "bold", style: "normal",
		bevelThickness: 1, bevelSize: 2, bevelEnabled: true,
		material: 0, extrudeMaterial: 1
	});
	// font: helvetiker, gentilis, droid sans, droid serif, optimer
	// weight: normal, bold
	
	var textMaterial = new THREE.MeshFaceMaterial(materialArray);
	var textMesh = new THREE.Mesh(textGeom, textMaterial );
	
	textGeom.computeBoundingBox();
	var textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;
	
	textMesh.position.set( -0.5 * textWidth, 50, 100 );
	textMesh.rotation.x = -Math.PI / 4;
    scene.add(textMesh);
    
}

function nationalFlag(){
    for(var i = -4;i<=3;i++){
        colume(i,-6.5,0.05,4,color_palette.white);
    }
    getFlag("agt.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4),-6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("bx.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+1,-6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("dg.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+2,-6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("zl.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+3,-6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("bls.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+4,-6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("fg.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+5,-6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("glby.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+6,-6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("pty.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+7,-6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);

    for(var i = -4;i<=3;i++){
        colume(i,6.5,0.05,4,color_palette.white);
    }
    getFlag("xby.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4),6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("ygl.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+1,6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("bl.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+2,6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("ydl.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+3,6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("kldy.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+4,6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("mxg.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+5,6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("zg.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+6,6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
    getFlag("gsdlj.jpg",1,0.005,0.618,-4 + 1/2 * Math.sin(Math.PI/4)+7,6.5+1/2*Math.sin(Math.PI/4), 4-0.618/2);
}