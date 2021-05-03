//------variable imagen montañas------------//

let mountains;
//let map;

//--------variables datos-------------//

//sin iformación = 54571//

let data=[4941, 4739, 2303, 2064, 1638, 1493, 1290, 1136, 973, 805, 791, 670, 454, 377, 303, 275, 273, 249, 235, 234, 186, 143, 128, 105, 94, 79, 41, 38, 23, 21, 2];

let namedata=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

//let texto=[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, V, W, X, Y, Z, AA, BB, CC, DD, EE, FF];


/*let labels =[Campesino, Trabajador_de_Finca, Trabajo_Sin_Especificar, Comerciante, Economia_Informal, Empleado, Conductor_Motorista, Otra_Cual, Obrero, Desempleado, Estudiante, Fuerza_Publica, Paramilitar, Pescador, Minero, Administrador_de_Finca, Raspachin, Funcionario_Publico, Seguridad_Privada, Profesional, Ganadero_Hacendado, No_Aplica, Delincuente, Guerrillero, Personal_de_Salud, Ama_de_Casa, Religioso, Trabajador_Sexual, Empresario_Industrial, Pensionado,Grupo_Posdesmovilizacion];*/

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
    
    createCanvas(ancho_c,1000);
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
    rect(y,710-largo,anchobanda - padding,largo);
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

