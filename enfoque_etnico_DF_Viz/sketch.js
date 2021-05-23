let dataEtnia=[79514, 661, 464,31, 3, 1];
//79514, 661, 464,31, 3, 1
//let namedataEtnia ["sin informacion","Indigena","Afrocolombiano","Raizal","Palenquero","Rom"];

//Variables Canvas//
let MARGIN = 10;


let BACKGROUND_IMAGE_HEIGHT = 0.4;


function setup() {
    let FIRST_SECTION_HEIGHT = windowHeight-19;
    createCanvas(windowWidth-MARGIN, FIRST_SECTION_HEIGHT);
    textFont("Fauna One"); 
    
    //Sin información //
   for (var i=0; i < dataEtnia[0]; i++){
        var x= random (windowWidth-MARGIN);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        stroke (216, 223, 229);
        strokeWeight (4);
        point (x,y);
    }
    
    
    let r1 = windowWidth*0.15;
    let r2 = windowWidth*0.1;
    let r3 = windowWidth*0.03;
    
    //Indígena//
    for (var i=0; i < dataEtnia[1]; i++){
        var r= random (r1);
        var theta = random (TWO_PI);
        var x= r* cos(theta);
        var y= r*sin (theta);
        var signo= (i%2)*2-1;
        stroke (143, 169, 191);
        strokeWeight (7);
        point (x+windowWidth/4,y+400);
    }
    
    //Afrocolombiano//
     for (var i=0; i < dataEtnia[2]; i++){
        var r= random (r2);
        var theta = random (TWO_PI);
        var x= r* cos(theta);
        var y= r*sin (theta);
        var signo= (i%2)*2-1;
        stroke (7, 58, 86);
        strokeWeight (7);
        point (x+windowWidth*9/16,y+400);
    }
    
    //Raizal, Palenquero, Rom //
     for (var i=0; i < (dataEtnia[3]+dataEtnia[4]+dataEtnia[5]); i++){
        var r= random (r3);
        var theta = random (TWO_PI);
        var x= r* cos(theta);
        var y= r*sin (theta);
        var signo= (i%2)*2-1;
        stroke (75, 94, 107);
        strokeWeight (7);
        point (x+windowWidth*3/4,y+400);
    }
    
}  

function draw() {
 
    //fill(66,87,109);
    //rect(0,0,width-10,FIRST_SECTION_HEIGHT);
          
    fill (66,87,109);
    noStroke ();
    textSize(max(15*windowWidth/1000,15));
    text('Desaparición Forzada',width/(width/100),70);
    
    fill (66,87,109);
    noStroke ();
    textSize(40);
    text('Por Enfoque Étnico',width/(width/100),120); 
       
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}