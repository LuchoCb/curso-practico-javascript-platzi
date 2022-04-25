function alturaTI (lado1, lado2, Base){
    if (lado1 === lado2 && Base != lado1)
        return alert (Math.sqrt ((lado1 * lado1) - (Base * Base)/4));
    else alert ("No es isoceles");
}

function calcularAlturaTI(){
    const input = document.getElementById ("InputL1T"); //nos permite obtener el elemento HTML//
    const Input2 = document.getElementById ("InputL2T");
    const Input3 = document.getElementById ("InputBT");
    const value1 = Number(input.value);
    const value2 = Number (Input2.value);
    const value3 = Number (Input3.value);

    const AlturaTI = alturaTI (value1,value2,value3);
}

// 5.9160797830996169// El del man

