var renderer;
function initThree() {
    width = document.getElementById('canvas-frame').clientWidth;
    height = document.getElementById('canvas-frame').clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias : true
    });
    renderer.setSize(width, height);
    document.getElementById('canvas-frame').appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 1.0);

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.getElementById('canvas-frame').appendChild(stats.domElement);
}

var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 0;
    camera.position.y = 800;
    camera.position.z = 0;
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
light = new THREE.DirectionalLight(0xFF0000,1.0,0);
light.position.set(100,100,100);
scene.add(light);
light = new THREE.PointLight(0x00FF00);
light.position.set(0,0,300);
scene.add(light);
}

var cube;
var mesh
function initObject(){
    
var geometry = new THREE.CylinderGeometry(100,150,400);
var material = new THREE.MeshLambertMaterial({color:0xFFFFFF});
// var color1 = new THREE.Color(0x444444),color2 = new THREE.Color(0xFF0000);
mesh = new THREE.Mesh(geometry,material);
mesh.position = new THREE.Vector3(0,0,0);
scene.add(mesh);
// var grassGroud = new THREE.PlaneGeometry(500,300,1,1);
// grassGroud.vertices[0].uv = new THREE.Vector2(0,0);
// grassGroud.vertices[1].uv = new THREE.Vector2(2,0);
// grassGroud.vertices[2].uv = new THREE.Vector2(2,2);
// grassGroud.vertices[3].uv = new THREE.Vector2(0,2);

// var grassGroundUrl = "http://pic.qiantucdn.com/58pic/19/70/63/10K58PICMaf_1024.jpg";
// var texture = THREE.ImageUtils.loadTexture(grassGroundUrl,null,function(t){});
// var material = new THREE.MeshBasicMaterial({map:texture});
// var mesh = new THREE.Mesh(grassGroud,material);
// scene.add(mesh);

}

var grassGroud;
function initGrassGround(){
    var grassGroud = new THREE.PlaneGeometry(1024,807);
    grassGroud.vertices[0].uv = new THREE.Vector2(0,0);
    grassGroud.vertices[1].uv = new THREE.Vector2(2,0);
    grassGroud.vertices[2].uv = new THREE.Vector2(2,2);
    grassGroud.vertices[3].uv = new THREE.Vector2(0,2);

    var grassGroundUrl = "http://pic.qiantucdn.com/58pic/19/70/63/10K58PICMaf_1024.jpg";
    var texture = THREE.ImageUtils.loadTexture(grassGroundUrl,null,function(t){});
    var material = new THREE.MeshBasicMaterial({map:texture});
    var mesh = new THREE.Mesh(grassGroud,material);
    scene.add(mesh);
}

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

function threeStart(){
initThree();
initCamera();
initScene();
initLight();
// initGrassGround();
initObject();
animation();
// initObject_mesh();
// renderer.clear();
// renderer.render(scene,camera);
}

function animation(){
mesh.position.x -=1;
// mesh.position.y -=1;
// mesh.position.z -=1;
renderer.render(scene,camera);
requestAnimationFrame(animation);
stats.update();
}

// function animate() {
//     requestAnimationFrame( animate );
//     renderer.render( scene, camera );
// }