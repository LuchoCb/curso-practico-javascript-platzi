// const lista1 = [
//     100,
//     200,
//     300,
//     500
// ];

// let sumaLista1 = 0;

// for (let i = 0; i < lista1.length; i++){
//     sumaLista1 = sumaLista1 + lista1 [i];
// }



function calcularfMediaAritmética (Lista){
//     let sumaLista = 0;

// for (let i = 0; i < Lista.length; i++){
//     sumaLista = sumaLista + Lista [i];
// }

const sumaLista = Lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista / Lista.length;

return promedioLista

}
