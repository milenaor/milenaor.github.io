//let dataEtnia=[79514, 661, 464,31, 3, 1];

//let namedataEtnia ["sin informacion","Indigena","Afrocolombiano","Raizal","Palenquero","Rom"];

//Variables Canvas//
let MARGIN = 10;
let FIRST_SECTION_HEIGHT = 900;
let BACKGROUND_IMAGE_HEIGHT = 0.4;


function setup() {
    createCanvas(windowWidth-MARGIN, FIRST_SECTION_HEIGHT);
    textFont("Fauna One"); 
    
    for (let i=0; i < 50; i++){
        let x= random (windowWidth-MARGIN);
        let y= random (FIRST_SECTION_HEIGHT);
        let r= 5;
        fill(216, 223, 229);
        ellipse (x,y,r,r):
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