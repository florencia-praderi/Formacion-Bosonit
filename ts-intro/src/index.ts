/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number{
    return a + b;
}

const sumarFlecha = (a: number, b: number): number =>{
    return a + b;
}

function multiplicar(num1: number, num2?: number, base:number = 2): number{
    return num1 * base;
}

const resultado = multiplicar(4, 4)
console.log(resultado)