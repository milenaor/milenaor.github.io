let dataEtnia=[79514, 661, 464,31, 3, 1];
//79514, 661, 464,31, 3, 1
//let namedataEtnia ["sin informacion","Indigena","Afrocolombiano","Raizal","Palenquero","Rom"];

//Variables Canvas//
let MARGIN = 10;


let BACKGROUND_IMAGE_HEIGHT = 0.4;

function preload(){
    img_background_ilustracionEtnia = loadImage('img/ilustracion2.png');

}


function setup() {
    let FIRST_SECTION_HEIGHT = 1300;
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
        point (x+windowWidth/2,y+FIRST_SECTION_HEIGHT*5/16);
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
        point (x+windowWidth/2,y+FIRST_SECTION_HEIGHT*11/16);
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
        point (x+windowWidth/2,y+FIRST_SECTION_HEIGHT*29/32);
    }
    
}  

function draw() {
    
    image(img_background_ilustracionEtnia,windowWidth/11,windowHeight/11);
    //image(img_background_ilustracionEtnia,windowWidth*9/12,windowHeight*2/3);
    //image(img_background_ilustracionEtnia,windowWidth/11,windowHeight*7/6);
    
    //fill(66,87,109);
    //rect(0,0,width-10,FIRST_SECTION_HEIGHT);
   
          
    fill (66,87,109);
    noStroke ();
    textSize(max(10*windowWidth/1000,10));
    text('Desaparición Forzada',windowWidth/3,70);
    
    fill (66,87,109);
    noStroke ();
    textSize(max(30*windowWidth/1000,30));
    text('Por Enfoque Étnico',windowWidth/3,120);
    
    fill (66,87,109);
    noStroke ();
    textSize(max(10*windowWidth/1000,10));
    text('Vìctimas Indígenas',windowWidth/2,710);
    
    fill (66,87,109);
    noStroke ();
    textSize(max(30*windowWidth/1000,30));
    text('661',windowWidth/2,680);
    
    fill (66,87,109);
    noStroke ();
    textSize(max(10*windowWidth/1000,10));
    text('Vìctimas Afrocolombianas',windowWidth/2,1117);
    
    fill (66,87,109);
    noStroke ();
    textSize(max(30*windowWidth/1000,30));
    text('464',windowWidth/2,1087);
    
    fill (66,87,109);
    noStroke ();
    textSize(max(10*windowWidth/1000,10));
    text('Vìctimas Raizales, Palenqueras y rom',windowWidth/2,1290);
  
       
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}