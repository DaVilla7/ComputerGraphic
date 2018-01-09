var renderer;
            function initThree() {
                width = document.getElementById('canvas-frame').clientWidth;
                height = document.getElementById('canvas-frame').clientHeight;
                renderer = new THREE.WebGLRenderer({
                     antialias : true
                });
                renderer.setSize(width, height);
                document.getElementById('canvas-frame').appendChild(renderer.domElement);
                window.addEventListener( 'resize', onWindowResize, false ); 
                renderer.setClearColor(0xFFFFFF, 1.0);
                renderer.shadowMapEnabled=true;

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.left = '0px';
                stats.domElement.style.top = '0px';
                document.getElementById('canvas-frame').appendChild(stats.domElement);
            }

            function onWindowResize() {  
                camera.aspect = window.innerWidth / window.innerHeight;  
                camera.updateProjectionMatrix();  
                renderer.setSize( window.innerWidth, window.innerHeight );  
                controls.handleResize();  
                render();  
            }  

            var camera;
            function initCamera() {
                camera = new THREE.PerspectiveCamera(90, width / height, 1, 10000);
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
                // camera.lookAt({
                //     x : 0,
                //     y : 0,
                //     z : 0
                // });
                // camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );//还有一种是正投影相机THREE.OrthographicCamera,不论远近高低,大小比例都相同(机械图,工程图等为了显示尺寸有时用)  
                // camera.position.z = 500; //相机位置,根据右手坐标系进行判断  
                //今天内容的主角,我并没有在官方文档里找到相关的说明,根据案例里的使用进行摸索  
                controls = new THREE.TrackballControls( camera ); //看来是要给controls控制器传递一个当前使用的相机camera参数  
                controls.rotateSpeed = 2.0;  //按住鼠标左键后拖动查看时的旋转速度  
                controls.zoomSpeed = 1.5;   //用滚轮调整大小(远近)时候的速度  
                controls.panSpeed = 2.0;    //按住鼠标右键后的平移速度  
                controls.noZoom = false;    //如果设置为true, 则禁用 鼠标滚轮调整大小(远近)的功能  
                controls.noPan = false;     //如设置为true, 则禁用 按下鼠标右键平移的功能  
                controls.minDistance = 0;   //设置滚轮能滚到的最近距离  
                controls.maxDistance = 50000;   //设置滚轮能滚到的最远距离  
                controls.staticMoving = true;   //试了一下, 如果设置为false, 则移动速度贼鸡儿快,嗖的一下就不见了, 具体是干啥玩意的没摸清  
                controls.dynamicDampingFactor = 0.3; //动态阻尼, 蛤? 我也不知道是啥,翻译过来就是  
                controls.keys = [ 65, 83, 68 ];  //注释掉貌似效果也没啥区别,反正我是没发现  
  
                /* 
                    原生JS的方法,查看TrackballControls.js源码,对该方法进行了一定程度的重写,是绑定一些,鼠标点击,移动,滚轮,键盘等事件的 
                    这个案例中如果不写这行代码,就无法用controls查看图片了,但是其他案例中并没有该行,但是功能却依然能实现,不知为何 
                */  
                controls.addEventListener( 'change', render );  
            }

var scene;
function initScene(){
    scene = new THREE.Scene();
    // scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );  
}

var ambientLight, hemisphereLight, shadowLight;

function createLights() {

  hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9);

  ambientLight = new THREE.AmbientLight(0xdc8874, .5);

  shadowLight = new THREE.DirectionalLight(0xffffff, .9);
  shadowLight.position.set(150, 350, 350);
  shadowLight.castShadow = true;
  shadowLight.shadow.camera.left = -400;
  shadowLight.shadow.camera.right = 400;
  shadowLight.shadow.camera.top = 400;
  shadowLight.shadow.camera.bottom = -400;
  shadowLight.shadow.camera.near = 1;
  shadowLight.shadow.camera.far = 1000;
  shadowLight.shadow.mapSize.width = 2048;
  shadowLight.shadow.mapSize.height = 2048;

  scene.add(hemisphereLight);
  scene.add(shadowLight);
//   scene.add(ambientLight);
}


var light;
function initLight(){
    //环境光
    // var enLight = new THREE.AmbientLight( "#0c0c0d" );
    // scene.add( enLight );

    //方向光
    light = new THREE.DirectionalLight(color_palette.white,0.5);
    light.position.set(800,800,800);
    light.castShadow = true;
    light.shadowDarkness = 0.3;
    // scene.add(light);

    // light1 = new THREE.DirectionalLight(color_palette.white,1.0);
    // light1.position.set(200,800,800);
    // light1.castShadow = true;
    // light1.shadowDarkness = 0.3;
    // scene.add(light1);
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
    other_facilities();
}

function threeStart(){
    
    initThree();
    initCamera();
    initScene();
    
    initObject();
    createLights();
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
    controls.update();
    // renderer.render( scene, camera );
}

function render() {  
    renderer.render( scene, camera );  
    stats.update();  
}  
// function onWindowResize() {  
//     camera.aspect = window.innerWidth / window.innerHeight;  
//     camera.updateProjectionMatrix();  
//     renderer.setSize( window.innerWidth, window.innerHeight );  
//     controls.handleResize();  
//     render();  
// }  