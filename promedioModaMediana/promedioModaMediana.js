


function calcularPromedio(lista){
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++ ){
        sumaLista = sumaLista + lista[i]
    };

    PromedioLista = sumaLista/ lista.length;
    return PromedioLista;
};
