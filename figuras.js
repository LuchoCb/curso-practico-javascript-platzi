//código del cuadrado

console.group("Cuadrado")

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado (lado){
        return (lado * lado) + "cm2";
}

//console.log("El área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd()

//código del Triángulo

console.group("Triángulo")

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm"
    );

console.log("La altura del triángulo es: " + alturaTriangulo + "cm");*/

function perimetroTriangulo (ladoT1, ladoT2, baseT){
    return ladoT1 + ladoT2 + baseT;
}

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
//console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangul (baseT, alturaT){
    return (baseT * alturaT) / 2;
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2 
//console.log("El área del triángulo es: " + areaTriangulo + "cm2");

console.groupEnd()

//código del Circulo

console.group("Circulo")

//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + "cm");

function diametroCirculo (radioC){
    return radioC *2;
}

//const diametroCirculo = radioCirculo * 2;
//console.log("El dimetro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI);


//circunferencia

function PerimetroCirculo (radio){
    const diametro = diametroCirculo (radio)
    return diametro * PI;
}

//const PerimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del Circulo es: " + PerimetroCirculo + "cm");

//Área

function AreaC (radio) {
    return (radio * radio) * PI;
}

// const areaCirculo = (radioCirculo * radioCirculo)  * PI;
// console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd()

//Aquí interactuamos con HTML

function calcularPC (){
    const input = document.getElementById ("InputCuadrado"); //nos permite obtener el elemento HTML//
    const value = input.value; // este es el valor que escribieron los usuarios, se llama con la variable input . y el valor//

    const perimetro = perimetroCuadrado (value);
    alert (perimetro);
}

function calcularAC (){
    const input = document.getElementById ("InputCuadrado"); //nos permite obtener el elemento HTML//
    const value = input.value; // este es el valor que escribieron los usuarios, se llama con la variable input . y el valor//

    const area = areaCuadrado (value);
    alert (area);
}

function calcularPT(){
    const input = document.getElementById ("InputTL1"); //nos permite obtener el elemento HTML//
    const Input2 = document.getElementById ("InputTL2");
    const Input3 = document.getElementById ("InputTL3");
    const value1 = Number(input.value);
    const value2 = Number (Input2.value);
    const value3 = Number (Input3.value);

    const perimetroT = perimetroTriangulo (value1,value2,value3);
    alert (perimetroT);
}


function calcularAT (){
    const input = document.getElementById ("InputBT"); //nos permite obtener el elemento HTML//
    const Input2 = document.getElementById ("InputAT");
    const value1 = Number(input.value);
    const value2 = Number (Input2.value);

    const areaT = areaTriangul (value1,value2);
    alert (areaT);
}

function calcularDC(){
    const input = document.getElementById ("InputRC"); //nos permite obtener el elemento HTML//
    const value = Number (input.value);

    const diametroC = diametroCirculo (value);
    alert (diametroC);
}

function calcularPCi(){
    const input = document.getElementById ("InputRC"); //nos permite obtener el elemento HTML//
    const value = Number (input.value);

    const perimetroC = PerimetroCirculo (value);
    alert (perimetroC);
}

function calcularACi(){
    const input = document.getElementById ("InputRC"); //nos permite obtener el elemento HTML//
    const value = Number (input.value);

    const areaCi = AreaC (value);
    alert (areaCi);
}