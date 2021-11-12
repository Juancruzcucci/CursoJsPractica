
// function calcularPrecioConDescuento(){
//     const precioProducto = document.getElementById("inputprecio");
//     const valorProducto = precioProducto.value;
//     const descuento = document.getElementById("inputdescuento");
//     const valorDescuento = descuento.value;
//     const precioFinal = ((100 - valorDescuento) * valorProducto / 100 );
//     const resultado = document.getElementById("resultado");
//     resultado.innerText = "El precio final del producto es " + precioFinal;
// };



function calcularPrecioConDescuento(){
    const precioProducto = document.getElementById("inputprecio");
    const valorProducto = precioProducto.value;
    let descuentoElegido = document.getElementById("descuentoElegido");
    // const resultado = document.getElementById("resultado");
    

    // let desc10 = document.getElementById("desc10");
    // let desc25 = document.getElementById("desc25");
    // let desc40 = document.getElementById("desc40");
   
    if(descuentoElegido.value === 'Cupon 10% descuento'){
        const precioFinal = valorProducto * 90 /100;
        resultado.innerText = "El precio final del producto es " + precioFinal;
    } else if(descuentoElegido.value === 'Cupon 25% descuento'){
        const precioFinal = valorProducto * 75 /100;
        resultado.innerText = "El precio final del producto es " + precioFinal;
    } else {
        const precioFinal = valorProducto * 60 /100;
        resultado.innerText = "El precio final del producto es " + precioFinal;
    }
};


