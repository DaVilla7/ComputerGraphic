function initObject_bleachers(){
    initObject_bleachers_north();
    initObject_bleachers_south();
    initObject_bleachers_east();
    initObject_bleachers_west();
    initObject_seats_north();
}
//北看台
function initObject_bleachers_north(){
    for(var i = 0;i<north_bleachers.length;i++){
        bleacher[0][i] = new THREE.Mesh(new THREE.CubeGeometry(8*scale, .5*scale , 0.25*scale* (i+1)),
        new THREE.MeshLambertMaterial({
                color: color_palette.brown
            })
        );  
        bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
         // scene.add(bleacher[0][0]);
         bleacher[0][i].receiveShadow=true;
         bleacher[0][i].castShadow = true;
        scene.add(bleacher[0][i]);
    }
   
}
//南看台
function initObject_bleachers_south(){
    for(var i = 0;i<south_bleachers.length;i++){
        bleacher[1][i] = new THREE.Mesh(new THREE.CubeGeometry(8*scale, .5*scale , 0.25*scale* (i+1)),
        new THREE.MeshLambertMaterial({
                color: color_palette.brown
            })
        );  
        bleacher[1][i].position.set(0,-(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
        bleacher[1][i].receiveShadow=true;
        bleacher[1][i].castShadow = true;
        scene.add(bleacher[1][i]);
    }
   
}
//东看台
function initObject_bleachers_east(){
    for(var i = 0;i<east_bleachers.length;i++){
        bleacher[2][i] = new THREE.Mesh(new THREE.CubeGeometry(.5*scale, 5*scale , 0.25*scale* (i+1)),
        new THREE.MeshLambertMaterial({
                color: color_palette.brown
            })
        );  
        bleacher[2][i].position.set((-4.8-i*0.5)*scale,0,(0.25*scale* (i+1))/2);
        bleacher[2][i].receiveShadow=true;
        bleacher[2][i].castShadow = true;
        scene.add(bleacher[2][i]);
    }
   
}

//西看台
function initObject_bleachers_west(){
    for(var i = 0;i<west_bleachers.length;i++){
        bleacher[3][i] = new THREE.Mesh(new THREE.CubeGeometry(.5*scale, 5*scale , 0.25*scale* (i+1)),
        new THREE.MeshLambertMaterial({
                color: color_palette.brown
            })
        );  
        bleacher[3][i].position.set(-(-4.8-i*0.5)*scale,0,(0.25*scale* (i+1))/2);
        bleacher[3][i].receiveShadow=true;
        bleacher[3][i].castShadow = true;
        scene.add(bleacher[3][i]);
    }
   
}

function initObject_seats_north(){
    for (var j = 0;j<north_bleachers.length;j++){
        for(var i = 0 ;i<seats_north_south_num/2;i++){
            //底座
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .4*scale , .05*scale),
            new THREE.MeshLambertMaterial({
                    color: color_palette.red
                })
            );  
            seat.position.set(ground_length/2-.4*scale-i*0.45*scale,(-3.5-0.5*j)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
            //靠背
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .05*scale , .4*scale),
            new THREE.MeshLambertMaterial({
                    color: color_palette.red
                })
            );  
            seat.position.set(ground_length/2-.4*scale-i*0.45*scale,(-3.5-0.5*j-0.225)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
        }

        for(var i = 0 ;i<seats_north_south_num/2;i++){
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .4*scale , .05*scale),
            new THREE.MeshLambertMaterial({
                    color: color_palette.red
                })
            );  
            seat.position.set(-.4*scale/2-i*0.45*scale,(-3.5-0.5*j)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .05*scale , .4*scale),
            new THREE.MeshLambertMaterial({
                    color: color_palette.red
                })
            );  
            seat.position.set(-.4*scale/2-i*0.45*scale,(-3.5-0.5*j-0.225)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
        }
    }
    
}