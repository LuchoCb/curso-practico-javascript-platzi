
function calcularfMediaAritmética (Lista){
        
    const sumaLista = Lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / Lista.length;
    
    return promedioLista
    
    }

function calcularMediana (valores) {
    const mitadvalores = parseInt (valores.length / 2);

function esPar (numero){
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar (valores.length)) {
    const elemento1 = valores [mitadvalores - 1];
    const elemento2 = valores [mitadvalores];

    const promedioElemento1y2 = calcularfMediaAritmética([
        elemento1,
        elemento2,
    ])

    mediana = promedioElemento1y2

} else {
    mediana = valores [mitadvalores];
}

return mediana
}


// if (lista1 es par) {
//     necesitamos dos Elementos
//      Sacamos el promedio
//      Esa es la mediana
// } else {
    // posición mitad dentro de lista1 es la mediana
//}

//PARA ORGANIZAR LOS NUMEROS CON SORT Y QUE QUEDEN EN ORDEN ASCENDENTE

//OPCIÓN 1

const numeros = [1, 20, 8, 3000, 400]
function compareNumbers(a, b) {
    return a - b;
  }
numeros.sort(compareNumbers);


//OPCIÓN 2
const numeros1 = [1, 20, 8, 3000, 400]
numeros1.sort(function compareNumbers(a, b) {
    return a - b;
  });
console.log (numeros1);