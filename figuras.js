
//Eleccion de figura
const figuraElegida = prompt("Que figura quiere saber? Elija 1 para cuadrado, 2 para triangulo y 3 para circulo!!");
if(figuraElegida ==1){
    //Cuadrado
    //ingreso de datos
    const ladoCuadrado = parseInt(prompt("Ingresa el lado de tu cuadradro"));
    //Perimetro
    const perimetroCuadrado = ladoCuadrado *4;
    //Area
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    //Dato final
    alert("El perimetro de tu cuadrado es " + perimetroCuadrado + " y el area de tu cuadrado es " + areaCuadrado + "."); 
}else if(figuraElegida == 2){

    //Triangulo
    //ingreso de datos
    const ladotriangulo1 = parseInt(prompt("ingresa el primer lado de tu triangulo"));
    const ladotriangulo2 = parseInt(prompt("ingresa el segundo lado de tu triangulo"));
    const basetriangulo = parseInt(prompt("ingresa la base  de tu triangulo"));
    const alturaTriangulo = parseInt(prompt("ingresa la altura  de tu triangulo"));
    //Perimetro
    const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 +basetriangulo;
    //Area
    const areaTriangulo = (alturaTriangulo * basetriangulo) /2;
    //dato final   
    alert("El perimetro de tu triangulo es " + perimetroTriangulo + " y el area de tu triangulo es " + areaTriangulo + ".");
} else if(figuraElegida == 3){
    //Circulo
    //Ingreso de datos
    const radiocirculo = parseInt(prompt("ingresa el radio de tu circulo"));
    //Perimetro
    const PI = 3.14;
    const diametroCirculo = radiocirculo * 2;
    const perimetroCirculo = diametroCirculo * PI;
    //Area 
    const areaCirculo = (radiocirculo * radiocirculo) * PI;
    //dato final
    alert("El perimetro de tu circulo es " + perimetroCirculo + " y el area de tu circulo es " + areaCirculo + ".");


} else {
    alert("Datos erroneos. Recarga la pagina. SOLO PODES USAR 1, 2 O 3!!");
};








