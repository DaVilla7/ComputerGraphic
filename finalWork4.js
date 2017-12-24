var renderer;
            function initThree() {
                width = document.getElementById('canvas-frame').clientWidth;
                height = document.getElementById('canvas-frame').clientHeight;
                renderer = new THREE.WebGLRenderer({
                     antialias : true
                });
                renderer.setSize(width, height);
                document.getElementById('canvas-frame').appendChild(renderer.domElement);
                renderer.setClearColor(0xFFFFFF, 1.0);
                renderer.shadowMapEnabled=true;

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.left = '0px';
                stats.domElement.style.top = '0px';
                document.getElementById('canvas-frame').appendChild(stats.domElement);
            }

            var camera;
            var controls; //控制器
            function initCamera() {
                camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
                camera.position.x = -800;
                camera.position.y = 800;
                camera.position.z = 800;
                // camera.position.x = 900;
                // camera.position.y = -500;
                // camera.position.z = 200;
                // camera.position.x = 0;
                // camera.position.y = -200;
                // camera.position.z = 1000;
                camera.up.x = 0;
                camera.up.y = 0;
                camera.up.z = 1;
                camera.lookAt({
                    x : 0,
                    y : 0,
                    z : 0
                });
            }

var scene;
function initScene(){
    scene = new THREE.Scene();
}

var light;
function initLight(){
    //环境光
    // var enLight = new THREE.AmbientLight( "#0c0c0d" );
    // scene.add( enLight );

    //方向光
    light = new THREE.DirectionalLight(color_palette.white,2.0);
    light.position.set(800,-800,800);
    light.castShadow = true;
    light.shadowDarkness = 0.6;
    scene.add(light);
    // light = new THREE.PointLight(0x00FF00);
    // light.position.set(200,200,200);
    // scene.add(light);
    
    
    //聚光灯光源
        /**/
        // var spotLight=new THREE.SpotLight(0xffffff);
        // spotLight.position.set(0,20,0);
        // spotLight.castShadow=true;
        // spotLight.target=mesh;//光源照射的方向
        // spotLight.angle=Math.PI/3;//光源的角度
        // spotLight.shadowCameraNear=2;
        // spotLight.shadowCameraFar=20;
        
        // spotLight.shadowCameraVisible=true;
        // scene.add(spotLight);
        // var pointColor = "#ccffcc";
        // var pointLight = new THREE.PointLight(pointColor);
        // pointLight.distance = 1000;//距离，决定了光线可以照射多远
        // pointLight.intensity = 1;//强度
        // scene.add(pointLight);
}

//调色板
var color_palette = {
    white:0xFFFFFF,
    brown:0xD2A375,
    red:0xDA1418,
    gray:0x4C4B50,
    white:0xFFFFFF,
    deep_green1:0x006738
}

//比例尺
var scale = 100;
var ground_length = 8*scale;
var ground_width = 5*scale;
var cube;
var mesh
function initObject_ground(){
    
    var geometry = new THREE.PlaneGeometry(8*scale,5*scale);
    // geometry.vertices[0].uv = new THREE.Vector2(0,0);
    // geometry.vertices[1].uv = new THREE.Vector2(1,0);
    // geometry.vertices[2].uv = new THREE.Vector2(1,1);
    // geometry.vertices[3].uv = new THREE.Vector2(0,1);
    
    var url = "img/ground1.png";
    var texture = THREE.ImageUtils.loadTexture(url,null,function(t){
        renderer.render(scene,camera);
    });
    var material = new THREE.MeshLambertMaterial({map:texture});
    // var material = new THREE.MeshLambertMaterial({color:color_palette.gray});
    var mesh = new THREE.Mesh( geometry,material );
    // mesh.position.x = 10;
    // mesh.position.y  =12;
    // mesh.position.z = -1;
    mesh.receiveShadow = true;
    mesh.position.set(0,0,2);
    scene.add(mesh);
   
}

function initObject_ground_extend(){
    
    var geometry = new THREE.PlaneGeometry(20*scale,15*scale);
    var material = new THREE.MeshLambertMaterial({color:color_palette.deep_green1});
    var mesh = new THREE.Mesh( geometry,material );

    mesh.receiveShadow = true;
    mesh.position.set(0,0,0);
    mesh.receiveShadow=true;
    
    scene.add(mesh);
   
}


// function initObject_bleachers(){
//     bleacher[0][0] = new THREE.Mesh(new THREE.CubeGeometry(8*scale, .5*scale, 0.5*scale),
//     new THREE.MeshBasicMaterial({
//         color: color_palette.brown
//         })
//     );
    
    
//     bleacher[0][1].position.set(0,-3*scale,0);
//     scene.add(bleacher[0][1]);
// }

function initObject_mesh(){
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-500,0,0));
    geometry.vertices.push(new THREE.Vector3(500,0,0));

    for(var i = 0;i<=20;i++){
        var line = new THREE.Line(geometry,new THREE.LineBasicMaterial({color:0x000000,opacity:0.2}));
        line.position.z = (i*50) -500;
        scene.add(line);

        // var line = new THREE.Line(geometry,new THREE.LineBasicMaterial({color:0x000000,opacity:0.2}));
        // line.position.x = (i*50) -500;
        // line.rotation.y = 90 * Math.PI / 180;
        // scene.add(line);
    }
}

function initObject_cube(){
    var cube = new THREE.Mesh(new THREE.CubeGeometry(50, 50, 50),
    new THREE.MeshLambertMaterial({
            color: color_palette.red
        })
    );  
    cube.position.set(0,0,25);
     // scene.add(bleacher[0][0]);
     cube.castShadow = true;
    scene.add(cube);
}

function initObject(){
    initObject_cube();
    
    initObject_bleachers();
    initObject_ground_extend();
    initObject_ground();
}

function threeStart(){
    
    initThree();
    initCamera();
    initScene();
    
    initObject();
    initLight();
    animate();
    // animation();
    // initObject_mesh();
    // renderer.clear();
    // renderer.render(scene,camera);
}

function animation(){
    // mesh.position.z +=1;
    mesh.position.y +=1;
    // mesh.position.z -=1;
    renderer.render(scene,camera);
    requestAnimationFrame(animation);
    stats.update();
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}