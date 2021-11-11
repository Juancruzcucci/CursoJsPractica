//
////Eleccion de figura
//const figuraElegida = prompt("Que figura quiere saber? Elija 1 para cuadrado, 2 para triangulo y 3 para circulo!!");
//if(figuraElegida ==1){
//    //Cuadrado
//    //ingreso de datos
//    const ladoCuadrado = parseInt(prompt("Ingresa el lado de tu cuadradro"));
    //Perimetro
       // const perimetroCuadrado = ladoCuadrado *4;
    //Area
        //const areaCuadrado = ladoCuadrado * ladoCuadrado;
//    //Dato final
//    alert("El perimetro de tu cuadrado es " + perimetroCuadrado + " y el area de tu cuadrado es " + areaCuadrado + "."); 
//}else if(figuraElegida == 2){
//
//    //Triangulo
//    //ingreso de datos
//    const ladotriangulo1 = parseInt(prompt("ingresa el primer lado de tu triangulo"));
//    const ladotriangulo2 = parseInt(prompt("ingresa el segundo lado de tu triangulo"));
//    const basetriangulo = parseInt(prompt("ingresa la base  de tu triangulo"));
//    const alturaTriangulo = parseInt(prompt("ingresa la altura  de tu triangulo"));
//    //Perimetro
//    const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 +basetriangulo;
//    //Area
//    const areaTriangulo = (alturaTriangulo * basetriangulo) /2;
//    //dato final   
//    alert("El perimetro de tu triangulo es " + perimetroTriangulo + " y el area de tu triangulo es " + areaTriangulo + ".");
//} else if(figuraElegida == 3){
//    //Circulo
//    //Ingreso de datos
//    const radiocirculo = parseInt(prompt("ingresa el radio de tu circulo"));
//    //Perimetro
//    const PI = 3.14;
//    const diametroCirculo = radiocirculo * 2;
//    const perimetroCirculo = diametroCirculo * PI;
//    //Area 
//    const areaCirculo = (radiocirculo * radiocirculo) * PI;
//    //dato final
//    alert("El perimetro de tu circulo es " + perimetroCirculo + " y el area de tu circulo es " + areaCirculo + ".");
//
//
//} else {
//    alert("Datos erroneos. Recarga la pagina. SOLO PODES USAR 1, 2 O 3!!");
//};



//Conectado con HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = value * 4;
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = value * value;
    alert(area);
};
//Triangulo



function calcularPerimetroTriangulo(){
//lado1
const ladotriangulo1 = document.getElementById("inputLadoTriangulo1");
const valorLado1 = parseInt(ladotriangulo1.value); 
//lado2
const ladotriangulo2 = document.getElementById("inputLadoTriangulo2");
const valorLado2 = parseInt(ladotriangulo2.value); 
//lado3
const baseTriangulo = document.getElementById("inputBaseTriangulo");
const valorBase = parseInt(baseTriangulo.value);
//Perimetro
const perimetroTriangulo = valorLado1 + valorLado2 + valorBase;
alert(perimetroTriangulo);
};


function calcularAreaTriangulo(){
    //lado1
    const ladotriangulo1 = document.getElementById("inputLadoTriangulo1");
    const valorLado1 = parseInt(ladotriangulo1.value); 
    //lado2
    const ladotriangulo2 = document.getElementById("inputLadoTriangulo2");
    const valorLado2 = parseInt(ladotriangulo2.value); 
    //lado3
    const baseTriangulo = document.getElementById("inputBaseTriangulo");
    const valorBase = parseInt(baseTriangulo.value);
    //Altura
    const alturaTriangulo = document.getElementById("inputAlturaTriangulo");
    const valorAltura = parseInt(alturaTriangulo.value);
    //Perimetro
    const areaTriangulo = (valorBase * valorAltura) / 2;
    alert(areaTriangulo);
    };


//Circulo
function calcularPerimetroCirculo(){
    const radioCirculo = document.getElementById("inputRadio");
    const valorRadio = parseInt(radioCirculo.value);
    const perimetroCirculo = (valorRadio * 2) * Math.PI;
    alert(perimetroCirculo);
}


function calcularAreaCirculo(){
    const radioCirculo = document.getElementById("inputRadio");
    const valorRadio = parseInt(radioCirculo.value);
    const AreaCirculo = (valorRadio * valorRadio) * Math.PI;
    alert(AreaCirculo);
}




    

