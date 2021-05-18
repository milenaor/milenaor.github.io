let data=[4941, 4739, 2303, 2064, 1638, 1493, 1290, 1136, 973, 805, 791, 670, 454, 377, 303, 275, 273, 249, 235, 234, 186, 143, 128, 105, 94, 79, 41, 38, 23, 21, 2];

//let namedata ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z","AA","BB","CC","DD","EE","FF"];

let MARGIN = 10;
let FIRST_SECTION_HEIGHT = 900;
let CIRCLE_RADIUS_FACTOR = 80;
let CIRCLE_SPACE = 5;
let BACKGROUND_IMAGE_HEIGHT = 0.4;


function preload(){
    img_background_map = loadImage('img/colombian_map.png');
    img_background_mountains = loadImage('img/mountains-02.png');
 
}


function setup() {
    createCanvas(windowWidth-MARGIN, 2000);
    textFont("Fauna One"); 
    
} 


function circleBar(x_bar, y_bar, height, space, circle_radius) {
    for (let y=0; y <= height/(space+circle_radius); y=y+1){
        fill (6,48,61);
        noStroke();
        ellipse (x_bar, y_bar-y*(circle_radius+space), circle_radius,circle_radius);
    }
}

 

function draw() {
 
    fill(66,87,109);
    rect(0,0,width-10,FIRST_SECTION_HEIGHT);
    image(img_background_map,width/3,FIRST_SECTION_HEIGHT/15);
    image(img_background_mountains,0,FIRST_SECTION_HEIGHT*(1-BACKGROUND_IMAGE_HEIGHT),width-MARGIN,FIRST_SECTION_HEIGHT*BACKGROUND_IMAGE_HEIGHT);
  
    let bar_number = 30;
    for (let bar=0; bar<=bar_number; bar=bar+1){
        bar_height = map(data[bar], 0, max(data), 0, FIRST_SECTION_HEIGHT - 50);
        circle_radius = width/CIRCLE_RADIUS_FACTOR;
        fill (86,125,157);
        rect(30+bar*(width-70)/bar_number-circle_radius*0.6, FIRST_SECTION_HEIGHT - bar_height - 25, circle_radius*1.2, bar_height+25);
        circleBar(30+bar*(width-70)/bar_number,FIRST_SECTION_HEIGHT - 20,bar_height,CIRCLE_SPACE,circle_radius);
      }
    
     
          
    fill (255);
    textSize(20);
    text('Desaparición Forzada',width/(width/100),FIRST_SECTION_HEIGHT-800);
    
    fill (255);
    textSize(40);
    text('por Ocupación',width/(width/100),FIRST_SECTION_HEIGHT-750); 
       
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}