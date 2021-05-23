let dataEtnia=[79514, 661, 464,31, 3, 1];
//79514, 661, 464,31, 3, 1
//let namedataEtnia ["sin informacion","Indigena","Afrocolombiano","Raizal","Palenquero","Rom"];

//Variables Canvas//
let MARGIN = 10;
let FIRST_SECTION_HEIGHT = 5000;
let BACKGROUND_IMAGE_HEIGHT = 0.4;


function setup() {
    createCanvas(windowWidth-MARGIN, FIRST_SECTION_HEIGHT);
    textFont("Fauna One"); 
    
    //Sin información //
    for (var i=0; i < dataEtnia[0]; i++){
        var x= random (windowWidth-MARGIN-250);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        fill(216, 223, 229);
        ellipse (x,y,r,r);
    }
    
    //Indígena//
     for (var i=0; i < dataEtnia[1]; i++){
        var x= random (windowWidth-MARGIN-250);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        fill(143, 169, 191);
        ellipse (x,y,r,r);
    }
    
    //Afrocolombiano//
     for (var i=0; i < dataEtnia[2]; i++){
        var x= random (windowWidth-MARGIN-250);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        fill(7, 58, 86);
        ellipse (x,y,r,r);
    }
    
    //Raizal//
     for (var i=0; i < dataEtnia[3]; i++){
        var x= random (windowWidth-MARGIN-250);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        fill(75, 94, 107);
        ellipse (x,y,r,r);
    }
    
    //Palenquero//
    for (var i=0; i < dataEtnia[4]; i++){
        var x= random (windowWidth-MARGIN-250);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        fill(164, 179, 193);
        ellipse (x,y,r,r);
    }
    
    //Rom//
     for (var i=0; i < dataEtnia[5]; i++){
        var x= random (windowWidth-MARGIN-250);
        var y= random (FIRST_SECTION_HEIGHT);
        var r= 18;
        fill(30, 42, 54);
        ellipse (x,y,r,r);
    }
    
}  

function draw() {
 
    //fill(66,87,109);
    //rect(0,0,width-10,FIRST_SECTION_HEIGHT);
          
    fill (66,87,109);
    textSize(20);
    text('Desaparición Forzada',width/(width/100),FIRST_SECTION_HEIGHT-850);
    
    fill (66,87,109);
    textSize(40);
    text('Por Enfoque Étnico',width/(width/100),FIRST_SECTION_HEIGHT-800); 
       
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}