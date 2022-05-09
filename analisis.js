
//Helpers no son parte de la lógica pero las necesitmos también llamadas Uties

function esPar (numerito){
    return (numerito % 2 === 0);
}


function calcularfMediaAritmética (lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;    
}

//Calculadora de Medianas

function medianaSalarios(lista) {
    const mitad = parseInt (lista.length / 2); //parseint quita los decimales de una operación.

    if (esPar(lista.length)){
        const personitaMitad1 = lista [mitad - 1];
        const personitaMitad2 = lista [mitad];

        const mediana = calcularfMediaAritmética([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }

}

//Mediana General

const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColsorted = salariosCol.sort(
    function(Salarya, Salaryb){
        return Salarya - Salaryb;
    }
);

const medianaGeneralCol = medianaSalarios (salariosColsorted)

//medianda del top 10%

const spliceStart = (salariosColsorted.length * 90)/100;
const spliceCount = salariosColsorted.length - spliceStart;

const salariosColtop10 = salariosColsorted.splice(
    spliceStart, 
    spliceCount
);

const medianatop10Col = medianaSalarios(salariosColtop10)

console.log ( {
    medianaGeneralCol,
    medianatop10Col,

});