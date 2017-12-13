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
                camera.position.y = 1000;
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
}

var cube;
function initObject(){
    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial({vertexColors:true});
    var color1 = new THREE.Color(0x444444),color2 = new THREE.Color(0xFF0000);

    //vexter
    var p1 = new THREE.Vector3(-500,0,100);
    var p2 = new THREE.Vector3(100,0,-100);
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push(color1,color2);

    var line = new THREE.Line( geometry , material, THREE.LinePieces );
    scene.add(line);
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
    initObject_mesh();
    renderer.clear();
    renderer.render(scene,camera);
}