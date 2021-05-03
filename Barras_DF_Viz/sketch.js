var circleX = 15;
//------variable imagen montañas------------//

let mountains;
//let map;

//--------variables datos-------------//

//sin iformación = 54571//

let data=[4941, 4739, 2303, 2064, 1638, 1493, 1290, 1136, 973, 805, 791, 670, 454, 377, 303, 275, 273, 249, 235, 234, 186, 143, 128, 105, 94, 79, 41, 38, 23, 21, 2];

//let namedata=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

let namedata=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z","AA","BB","CC","DD","EE","FF"];


//let labels =[Campesino, Trabajador_de_Finca, Trabajo_Sin_Especificar, Comerciante, Economia_Informal, Empleado, Conductor_Motorista, Otra_Cual, Obrero, Desempleado, Estudiante, Fuerza_Publica, Paramilitar, Pescador, Minero, Administrador_de_Finca, Raspachin, Funcionario_Publico, Seguridad_Privada, Profesional, Ganadero_Hacendado, No_Aplica, Delincuente, Guerrillero, Personal_de_Salud, Ama_de_Casa, Religioso, Trabajador_Sexual, Empresario_Industrial, Pensionado,Grupo_Posdesmovilizacion];//

//-----variables tamaño canvas------//

let ancho_c = 1510;
let alto_c = 710;

//-----variables márgenes_ cuadro dentro del canvas------//

let margen ={derecha:10, izquierda:10, superior:10, inferior:10}

//-----variables gráfica_ cuadro dentro del canvas------//

let ancho_g = ancho_c-margen.derecha-margen.izquierda;

let alto_g = 710;


//-------ancho de la barra-------//


let anchobanda=7;




//----------------------------------------//

function preload(){
    mountains = loadImage('img/mountains-02.png');
    //map = loadImage('colombian_map');
   
}

//----------------------------------------//
//1900,800
function setup(){
    
    createCanvas(ancho_c,5000);
    background(255);
    textFont("Fauna One");
    
    //--Rectagulo azul fondo--//
    noStroke();
    fill(66,87,109);
    rect(0,0,ancho_c,alto_c);
    
    //--Imagen montañas--//
    image(mountains,0,360, 1520,350);
 
    //--Gráfico de barras--//
    grafico(data);
    
    //--Nombres de Gráfico de barras--//
    ejex (namedata);   
    
    circulo(data);
    circulo2(data);
    circulo3(data);
    circulo4(data);
    circulo5(data);
    circulo6(data);
    circulo7(data);
    circulo8(data);
    circulo9(data);
    circulo10(data);
    circulo11(data);
    circulo12(data);
    circulo13(data);
}

//-------------------------------------//

function draw(){  
  
    //--Letra--//
    fill (255);
    textSize(20);
    text('Desaparición Forzada',120,40);
    
    fill (255);
    textSize(40);
    text('por Ocupación',120,75);  


}


//-------función que crea barras___//

function barra(y,largo){
    let padding = 15;
    noStroke();
    fill(86,125,157);
    rect(y,710-largo, anchobanda - padding,largo);
    
    
}


//-------función para crear el gráfico de barras--------//

function grafico (data){
    anchobanda= ancho_c/data.length;
    
    for(let i=0; i < data.length; i++){
        let mapeo = map(data[i], 0, max(data), 0,alto_c)
        barra(anchobanda*i, mapeo);
    }
}

// -------función texto barras-------------//

function ejex (namedata){
    fill(23,78,99);
    
    for (let i=0; i < namedata.length; i++){
        text(namedata[i],(i*anchobanda)+12,725)
    }   
}






//------------------------------------------------------//

//------función barras con puntos----//
function circulo(data){
    
    let x1 = 15;
    
    for (let y1=700; y1 <= data[0]; y1=y1+25){
    fill (6,48,61);
    ellipse (x1, y1, 20,20);
    }

}

//------función barras con puntos----//
function circulo2(data){
    
    let x2 = 65;
    
    for (let y2=700; y2 <= data[1]; y2=y2+25){
    
    fill (6,48,61);
    ellipse (x2, y2, 20,20);
    }
 
}

//------función barras con puntos----//
function circulo3(data){
    
    let x3 = 115;
    
    for (let y3=700; y3 <= data[2]; y3=y3+25){
    
    fill (6,48,61);
    ellipse (x3, y3, 20,20);
    }
 
}

//------función barras con puntos----//
function circulo4(data){
    
    let x4 = 163;
    
    for (let y4=700; y4 <= data[3]; y4=y4+25){
    
    fill (6,48,61);
    ellipse (x4, y4, 20,20);
    }
 
}

//------función barras con puntos----//
function circulo5(data){
    
    let x5 = 212;
    
    for (let y5=700; y5 <= data[4]; y5=y5+25){
    
    fill (6,48,61);
    ellipse (x5, y5, 20,20);
    }
 
}

//------función barras con puntos----//
function circulo6(data){
    
    let x6 = 260;
    
    for (let y6=700; y6 <= data[5]; y6=y6+25){
    
    fill (6,48,61);
    ellipse (x6, y6, 20,20);
    }
 
}

//------función barras con puntos----//
function circulo7(data){
    
    let x7 = 310;
    
    for (let y7=700; y7 <= data[6]; y7=y7+25){
    
    fill (6,48,61);
    ellipse (x7, y7, 20,20);
    }
 
}

//------función barras con puntos----//
function circulo8(data){
    
    let x8 = 358;
    
    for (let y8=700; y8 <= data[7]; y8=y8+25){
    
    fill (6,48,61);
    ellipse (x8, y8, 20,20);
    }
 
}

//------función barras con puntos----//
function circulo9(data){
    
    let x9 = 407;
    
    for (let y9=700; y9 <= data[8]; y9=y9+25){
    
    fill (6,48,61);
    ellipse (x9, y9, 20,20);
    }
 
}

//------función barras con puntos----//
function circulo10(data){
    
    let x10 = 455;
    
    for (let y10=700; y10 <= data[9]; y10=y10+25){
    
    fill (6,48,61);
    ellipse (x10, y10, 20,20);
    }
 
}

//------función barras con puntos----//
function circulo11(data){
    
    let x11 = 504;
    
    for (let y11=700; y11 <= data[10]; y11=y11+25){
    
    fill (6,48,61);
    ellipse (x11, y11, 20,20);
    }
 
}


//------función barras con puntos----//
function circulo12(data){
    
    let x12 = 553;
    
    for (let y12=700; y12 <= data[11]; y12=y12+25){
    
    fill (6,48,61);
    ellipse (x12, y12, 15,15);
    }
 
}


//------función barras con puntos----//
function circulo13(data){
    
    let x13 = 600;
    
    for (let y13=700; y13 <= data[12]; y13=y13+25){
    
    fill (6,48,61);
    ellipse (x13, y13, 15,15);
    }
 
}







