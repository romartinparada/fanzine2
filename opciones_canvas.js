 
 //los cambios fueron agregados sin tocar los demás datos de variable y agregando la librerias de p5.play
           



------------------------------------------------------------------



            var fanzine;
            let x = 0;
            let y = 0;
    

            // comenzamos con p5.js
            function preload(){
                fanzine = createSprite(170,175, 350,350);
                    //agruegé dos animaciones al sprite
                    var animation = fanzine.addAnimation( 'abriendo','sprite/fanzine001.png','sprite/fanzine004.png' );
                        fanzine.addAnimation('cerrando', 'sprite/cerrando001.png', 'sprite/cerrando004.png');
                
            }
                
                
            function setup() {
                var canvas = createCanvas(w, h);
                canvas.parent("#p5");                
            }

            function draw() {
                fill(0);

               //si el mouse se encuentra dentro del área del fanzine, se reproduce la animación de este abriendose
                if((75<mouseX)&&(275>mouseX)&&(0<mouseY)&&(350>mouseY)) { 
                    fanzine.changeAnimation('abriendo');  
                    x = x + 1;               
                }

                //si el mouse se encuentra fuera del área del fanzine, luego de haber estado adentro, se reproduce la animación de este cerrandose
                else {

                    if (x===10){
                    fanzine.changeAnimation('cerrando');
                    y = y + 1;
                    }
                        
                }

                drawSprites();
                

                if(x===10){
                  if((75<mouseX)&&(275>mouseX)&&(0<mouseY)&&(350>mouseY)){
                        noLoop(); //si se cumple el primer ciclo de animación de 'abriendo' y se sigue dentro del area, esta se pausa
                       }
                    else {
                        x=0; //si se cumple el primer ciclo de animación de 'abriendo' y se sale del area, se puede reproducir el if nuevamente
                       }  
                }
                           
                if(y===10){
                    if((75<mouseX)&&(275>mouseX)&&(0<mouseY)&&(350>mouseY)){
                        y=0; //si se cumple el primer ciclo de animación de 'cerrando' y se entra al area, se puede reproducir el if nuevamente
                       }
                    else {
                        noLoop(); //si se cumple el primer ciclo de animación de 'cerrando' y se sigue fuera del area, esta se pausa
                       } 
                }              
                
                
            }



-----------------------------------------------------------------------------------




            var fanzine;
            var img;
            let x = 0;
            let y = 0;
            let s = 10;
    

            // comenzamos con p5.js
            function preload(){
                fanzine = createSprite(170,175, 350,350);
                    //
                    var animation = fanzine.addAnimation( 'abriendo','sprite/fanzine001.png','sprite/fanzine004.png' );
                        fanzine.addAnimation('cerrando', 'sprite/cerrando001.png', 'sprite/cerrando004.png');
                img = loadImage('sprite/fanzine001.png');
            }
                
                
            function setup() {
                var canvas = createCanvas(w, h);
                canvas.parent("#p5");             
            }

            function draw() {
                fill(0);
                
                //si el mause se encuentra en el area de la pantalla donde se ubica en canvas, se sibuja el sprite, cumpliendo la función drawAnimation
                if((-500<mouseX)&&(400>mouseX)&&(0<mouseY)&&(400>mouseY)) {
                    drawSprites();
                    drawAnimations();
                }

            }
                
            function drawAnimations(){
                
                
                //si el mouse se encuentra dentro del área del fanzine, se reproduce la animación de este abriendose
                if((75<mouseX)&&(275>mouseX)&&(0<mouseY)&&(350>mouseY)&&(x<=10)) { 
                    fanzine.changeAnimation('abriendo');  
                    x = x + 1; 
                    if(x===10){
                        noLoop(); //luego de cumplirce el primer ciclo de la animación se detiene
                    }
                  }

                //si el mouse se encuentra fuera del área del fanzine, luego de haber estado adentro, se reproduce la animación de este cerrandose
                if ((75>mouseX)||(275<mouseX)&&(0>mouseY)||(350<mouseY)&&(10<x<=20)){
                    fanzine.changeAnimation('cerrando');
                    x = x + 1;
                     if(x===20){
                        noLoop(); //luego de cumplirce el primer ciclo de la animación 'abriendose' y el de 'cerrandose' se detiene
                    }
                    } 

            }


            function windowResized() {
                resizeCanvas(w, h);
            }





-----------------------------------------------------------------------------------------

