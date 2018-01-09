var camera, scene, renderer;
    var mesh;

    init();
    animate();

    function init() {

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        //
        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.x = 0;
        camera.position.y = 50; 
        camera.position.z = 400;
        scene = new THREE.Scene();


        var geometry = new THREE.PlaneGeometry( 500, 300, 1, 1 );
        geometry.vertices[0].uv = new THREE.Vector2(0,0);
        geometry.vertices[1].uv = new THREE.Vector2(2,0);
        geometry.vertices[2].uv = new THREE.Vector2(2,2);
        geometry.vertices[3].uv = new THREE.Vector2(0,2);
        // 纹理坐标怎么弄
        var texture = THREE.ImageUtils.loadTexture("http://n.sinaimg.cn/news/transform/w1000h500/20171212/xH_r-fypnsip9129414.jpg",null,function(t)
        {
        });
        var material = new THREE.MeshBasicMaterial({map:texture});
        var mesh = new THREE.Mesh( geometry,material );
        scene.add( mesh );

        //
        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    }