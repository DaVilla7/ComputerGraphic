function initObject_bleachers(){
    initObject_bleachers_north();
    initObject_bleachers_south();
    initObject_bleachers_east();
    initObject_bleachers_west();
    initObject_seats_north();
    initObject_seats_south();
    initObject_seats_east();
    initObject_seats_west();
    initObject_bleachers_north_east();
    initObject_seats_north_east();
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
        bleacher[2][i].position.set((-5.0-i*0.5)*scale,0,(0.25*scale* (i+1))/2);
        bleacher[2][i].receiveShadow=true;
        bleacher[2][i].castShadow = true;
        scene.add(bleacher[2][i]);
    }
   
}
//东北看台
function initObject_bleachers_north_east(){
    for(var i = 0;i<north_bleachers.length;i++){
        bleacher[0][i] = new THREE.Mesh(new THREE.CubeGeometry(3.75/Math.sin(Math.PI/4)*scale, .5 * Math.sin(Math.PI/4)*scale , 0.25*scale* (i+1)),
        new THREE.MeshLambertMaterial({
                color: color_palette.brown
            })
        );  
        bleacher[0][i].position.set((-4.5-i*0.25)*scale,(-3.0-i*0.25)*scale,(0.25*scale* (i+1))/2);
         // scene.add(bleacher[0][0]);
         bleacher[0][i].receiveShadow=true;
         bleacher[0][i].castShadow = true;
         bleacher[0][i].rotation.z = -45 * Math.PI / 180;
        //  bleacher[0][i].x -=0.625*scale;
        //  bleacher[0][i].y -=0.625*scale;
        scene.add(bleacher[0][i]);
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
        bleacher[3][i].position.set(-(-5.0-i*0.5)*scale,0,(0.25*scale* (i+1))/2);
        bleacher[3][i].receiveShadow=true;
        bleacher[3][i].castShadow = true;
        scene.add(bleacher[3][i]);
    }
   
}

//北看台座椅
function initObject_seats_north(){
    for (var j = 0;j<north_bleachers.length;j++){
        for(var i = 0 ;i<seats_north_south_num/2;i++){
            //底座
            var color_seat;
            if(i >=seats_north_south_num/8 && i<seats_north_south_num/4 || (i >seats_north_south_num/4+1 && i<=seats_north_south_num/2)){
                color_seat = color_palette.white;
            }
            else{
                color_seat = color_palette.red;
            }
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .4*scale , .05*scale),
            new THREE.MeshLambertMaterial({
                    color: color_seat
                })
            );  
            seat.position.set(ground_length/2-.4*scale-i*0.45*scale,(-3.5-0.5*j)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
            //靠背
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .05*scale , .4*scale),
            new THREE.MeshLambertMaterial({
                    color: color_seat
                })
            );  
            seat.position.set(ground_length/2-.4*scale-i*0.45*scale,(-3.5-0.5*j-0.225)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
        }
        
        for(var i = 0 ;i<seats_north_south_num/2;i++){
            var color_seat;
            if(i >=seats_north_south_num/8 && i<seats_north_south_num/4 || (i >seats_north_south_num/4+1 && i<=seats_north_south_num/2)){
                color_seat = color_palette.white;
            }
            else{
                color_seat = color_palette.red;
            }
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .4*scale , .05*scale),
            new THREE.MeshLambertMaterial({
                    color: color_seat
                })
            );  
            seat.position.set(-.4*scale/2-i*0.45*scale,(-3.5-0.5*j)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .05*scale , .4*scale),
            new THREE.MeshLambertMaterial({
                    color: color_seat
                })
            );  
            seat.position.set(-.4*scale/2-i*0.45*scale,(-3.5-0.5*j-0.225)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
        }
    }
    
}

//南看台座椅
function initObject_seats_south(){
    for (var j = 0;j<south_bleachers.length;j++){
        for(var i = 0 ;i<seats_north_south_num/2;i++){
            var color_seat;
            if(i >=seats_north_south_num/8 && i<seats_north_south_num/4 || (i >seats_north_south_num/4+1 && i<=seats_north_south_num/2)){
                color_seat = color_palette.white;
            }
            else{
                color_seat = color_palette.red;
            }
            //底座
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .4*scale , .05*scale),
            new THREE.MeshLambertMaterial({
                    color: color_seat
                })
            );  
            seat.position.set(ground_length/2-.4*scale-i*0.45*scale,-(-3.5-0.5*j)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
            //靠背
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .05*scale , .4*scale),
            new THREE.MeshLambertMaterial({
                    color: color_seat
                })
            );  
            seat.position.set(ground_length/2-.4*scale-i*0.45*scale,-(-3.5-0.5*j-0.225)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
        }

        for(var i = 0 ;i<seats_north_south_num/2;i++){
            var color_seat;
            if(i >=seats_north_south_num/8 && i<seats_north_south_num/4 || (i >seats_north_south_num/4+1 && i<=seats_north_south_num/2)){
                color_seat = color_palette.white;
            }
            else{
                color_seat = color_palette.red;
            }
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .4*scale , .05*scale),
            new THREE.MeshLambertMaterial({
                    color: color_seat
                })
            );  
            seat.position.set(-.4*scale/2-i*0.45*scale,-(-3.5-0.5*j)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .05*scale , .4*scale),
            new THREE.MeshLambertMaterial({
                    color: color_seat
                })
            );  
            seat.position.set(-.4*scale/2-i*0.45*scale,-(-3.5-0.5*j-0.225)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
        }
    }
    
}

//东看台座椅
function initObject_seats_east(){
    for (var j = 0;j<east_bleachers.length;j++){
        for(var i = 0 ;i<seats_east_west_num;i++){
            var color_seat;
            if(i >=seats_east_west_num/3 && i<2*seats_east_west_num/3 ){
                color_seat = color_palette.white;
            }
            else{
                color_seat = color_palette.red;
            }
            //底座
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .4*scale , .05*scale),
            new THREE.MeshLambertMaterial({
                    color: color_seat
                })
            );  
            seat.position.set(-(5.0 + j*0.5)*scale,(-2.05 + i*0.5)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
            //靠背
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.05*scale, .4*scale , .4*scale),
            new THREE.MeshLambertMaterial({
                    color: color_seat
                })
            );  
            seat.position.set(-(5.0 + 0.225+j*0.5)*scale,(-2.05 + i*0.5)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
        }

    }
    
}

//西看台座椅
function initObject_seats_west(){
    for (var j = 0;j<west_bleachers.length;j++){
        for(var i = 0 ;i<seats_east_west_num;i++){
            //底座
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .4*scale , .05*scale),
            new THREE.MeshLambertMaterial({
                    color: color_palette.red
                })
            );  
            seat.position.set((5.0 + j*0.5)*scale,(-2.05 + i*0.5)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
            //靠背
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.05*scale, .4*scale , .4*scale),
            new THREE.MeshLambertMaterial({
                    color: color_palette.red
                })
            );  
            seat.position.set((5.0 + 0.225+j*0.5)*scale,(-2.05 + i*0.5)*scale,(0.25 + 0.05/2+(0.25*j)) *scale);
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            scene.add(seat);
        }

    }
    
}

//东北看台座椅
function initObject_seats_north_east(){
    var bottom_seats = 0;
    for (var j = 0;j<north_bleachers.length;j++){
        bottom_seats+=1;
        bottom_seats_dup = bottom_seats;
        if(bottom_seats == 1){
            bottom_seats_dup = bottom_seats+1;
        }
        for(var i = 0 ;i<bottom_seats_dup;i++){
            //底座
            var color_seat;
            
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .4 * Math.sin(Math.PI/4)*scale , .05*scale),
            new THREE.MeshLambertMaterial({
                    color: color_palette.red
                })
            );  
            // seat.position.set((-4.5)*scale,(-3)*scale,(0.25 + 0.05/2) *scale);   
            seat.position.set(((-4.5-j*0.5*Math.sin(Math.PI/4)*Math.sin(Math.PI/4))+(i*.5)*Math.sin(Math.PI/4))*scale,((-3-j*0.5*Math.sin(Math.PI/4)*Math.sin(Math.PI/4))-(i*.5)*Math.sin(Math.PI/4))*scale,(0.25 + 0.05/2+(0.25*j)) *scale);            
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            seat.rotation.z = -45 * Math.PI / 180;
            scene.add(seat);
            //靠背
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .05*scale , .4*scale),
            new THREE.MeshLambertMaterial({
                    color: color_palette.red
                })
            );  
            seat.position.set(((-4.5-0.1220-j*0.5*Math.sin(Math.PI/4)*Math.sin(Math.PI/4))+(i*.5)*Math.sin(Math.PI/4))*scale,((-3-0.1220-j*0.5*Math.sin(Math.PI/4)*Math.sin(Math.PI/4))-(i*.5)*Math.sin(Math.PI/4))*scale,(0.25 + 0.05/2+(0.25*j)) *scale);            
            
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            seat.rotation.z = -45 * Math.PI / 180;
            scene.add(seat);
        }
        for(var i = 0 ;i<bottom_seats_dup;i++){
            //底座
            var color_seat;
            
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .4 * Math.sin(Math.PI/4)*scale , .05*scale),
            new THREE.MeshLambertMaterial({
                    color: color_palette.white
                })
            );  
            // seat.position.set((-4.5)*scale,(-3)*scale,(0.25 + 0.05/2) *scale);   
            seat.position.set(((-4.5-j*0.5*Math.sin(Math.PI/4)*Math.sin(Math.PI/4))-(i*.5)*Math.sin(Math.PI/4))*scale,((-3-j*0.5*Math.sin(Math.PI/4)*Math.sin(Math.PI/4))+(i*.5)*Math.sin(Math.PI/4))*scale,(0.25 + 0.05/2+(0.25*j)) *scale);            
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            seat.rotation.z = -45 * Math.PI / 180;
            scene.add(seat);
            //靠背
            var seat = new THREE.Mesh(new THREE.CubeGeometry(.4*scale, .05*scale , .4*scale),
            new THREE.MeshLambertMaterial({
                    color: color_palette.white
                })
            );  
            // seat.position.set(((-4.5-0.1220-j*0.5*Math.sin(Math.PI/4)*Math.sin(Math.PI/4))+(i*.5)*Math.sin(Math.PI/4))*scale,((-3-0.1220-j*0.5*Math.sin(Math.PI/4)*Math.sin(Math.PI/4))-(i*.5)*Math.sin(Math.PI/4))*scale,(0.25 + 0.05/2+(0.25*j)) *scale);            
            seat.position.set(((-4.5-0.1220-j*0.5*Math.sin(Math.PI/4)*Math.sin(Math.PI/4))-(i*.5)*Math.sin(Math.PI/4))*scale,((-3-0.1220-j*0.5*Math.sin(Math.PI/4)*Math.sin(Math.PI/4))+(i*.5)*Math.sin(Math.PI/4))*scale,(0.25 + 0.05/2+(0.25*j)) *scale);            
            
            seat.castShadow = true;
            // bleacher[0][i].position.set(0,(-3.5-i*0.5)*scale,(0.25*scale* (i+1))/2);
            seat.rotation.z = -45 * Math.PI / 180;
            scene.add(seat);
        }
        
       
    }
    
}

