
function calcularPrecioConDescuento(){
    const precioProducto = document.getElementById("inputprecio");
    const valorProducto = precioProducto.value;
    const descuento = document.getElementById("inputdescuento");
    const valorDescuento = descuento.value;
    const precioFinal = ((100 - valorDescuento) * valorProducto / 100 );
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio final del producto es " + precioFinal;
};
