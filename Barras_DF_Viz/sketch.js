let data=[4941, 4739, 2303, 2064, 1638, 1493, 1290, 1136, 973, 805, 791, 670, 454, 377, 303, 275, 273, 249, 235, 234, 186, 143, 128, 105, 94, 79, 41, 38, 23, 21, 2];

/*
let labels =[Campesino, Trabajador_de_Finca, Trabajo_Sin_Especificar, Comerciante, Economia_Informal, Empleado, Conductor_Motorista, Otra_Cual, Obrero, Desempleado, Estudiante, Fuerza_Publica, Paramilitar, Pescador, Minero, Administrador_de_Finca, Raspachin, Funcionario_Publico, Seguridad_Privada, Profesional, Ganadero_Hacendado, No_Aplica, Delincuente, Guerrillero, Personal_de_Salud, Ama_de_Casa, Religioso, Trabajador_Sexual, Empresario_Industrial, Pensionado,Grupo_Posdesmovilizacion];
*/

//-----variables tamaño canvas------//
let ancho_c = 1900;
let alto_c = 4000;

//-----variables márgenes_ cuadro dentro del canvas------//
let margen ={derecha:10, izquierda:10, superior:10, inferior:10}

//-----variables gráfica_ cuadro dentro del canvas------//

let ancho_g = ancho_c-margen.derecha-margen.izquierda;

let alto_g = alto_c-margen.superior-margen.inferior;

//-------ancho de la barra-------//
let anchobanda=5;





//----------------------------------------//
function setup(){
    createCanvas(ancho_c,alto_c);
    background(66,87,109);
    
    //recuadro dentro del canvas con margenes//
//    push();
//    translate(margen.izquierda, margen.derecha);
    //rect(0,0,ancho_g,alto_g);
    grafico(data);
//    pop();
}


//-------función que crea barras_____//

function barra(y,largo){
    let padding = 5;
    noStroke();
    fill(86,125,157);
    rect(0,y,largo, anchobanda - padding);
}


//-------función para crear el gráfico de barras--------//

function grafico (data){
    anchobanda= 720/data.length;
    
    for(let i=0; i < data.length; i++){
        let mapeo = map(data[i], 0, max(data), 0,ancho_c)
        barra(anchobanda*i, mapeo);
    }
}


