let dataEtnia=[79514, 661, 464,31, 3, 1];
//79514, 661, 464,31, 3, 1
//let namedataEtnia ["sin informacion","Indigena","Afrocolombiano","Raizal","Palenquero","Rom"];

//Variables Canvas//
let MARGIN = 10;
let FIRST_SECTION_HEIGHT = 800;
let BACKGROUND_IMAGE_HEIGHT = 0.4;


function setup() {
    createCanvas(windowWidth-MARGIN, FIRST_SECTION_HEIGHT);
    textFont("Fauna One"); 
    
    //Sin información //
    for (var i=0; i < dataEtnia[0]; i++){
        var x= random (windowWidth-MARGIN);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        stroke (216, 223, 229);
        strokeWeight (5);
        point (x,y);
    }
    
    //Indígena//
     for (var i=0; i < dataEtnia[1]; i++){
        var x= random (windowWidth-MARGIN);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        stroke (143, 169, 191);
        strokeWeight (5);
        point (x,y);
    }
    
    //Afrocolombiano//
     for (var i=0; i < dataEtnia[2]; i++){
        var x= random (windowWidth-MARGIN);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        stroke (7, 58, 86);
        strokeWeight (5);
        point (x,y);
    }
    
    //Raizal//
     for (var i=0; i < dataEtnia[3]; i++){
        var x= random (windowWidth-MARGIN);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        stroke (75, 94, 107);
        strokeWeight (5);
        point (x,y);
    }
    
    //Palenquero//
    for (var i=0; i < dataEtnia[4]; i++){
        var x= random (windowWidth-MARGIN);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        stroke (164, 179, 193);
        strokeWeight (5);
        point (x,y);
    }
    
    //Rom//
     for (var i=0; i < dataEtnia[5]; i++){
        var x= random (windowWidth-MARGIN);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        stroke (30, 42, 54);
        strokeWeight (5);
        point (x,y);
    }
    
}  

function draw() {
 
    //fill(66,87,109);
    //rect(0,0,width-10,FIRST_SECTION_HEIGHT);
          
    fill (66,87,109);
    noStroke ();
    textSize(20);
    text('Desaparición Forzada',width/(width/100),FIRST_SECTION_HEIGHT-750);
    
    fill (66,87,109);
    noStroke ();
    textSize(40);
    text('Por Enfoque Étnico',width/(width/100),FIRST_SECTION_HEIGHT-700); 
       
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}