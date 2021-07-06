// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado:"+ ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

//console.log("El perímetro del cuadrado es:"+ perimetroCuadrado + "cm");


function areaCuadrado(lado){
    return lado * lado;
}

//console.log("El área del cuadrado es:"+ areaCuadrado + "cm²");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

//console.log(
//"Los lados del triángulo miden: "
    //+ ladoTriangulo1 
    //+ "cm, " 
    //+ ladoTriangulo2
    //+ "cm, " 
    //+ baseTriangulo 
    //+ "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es: " + alturaTriangulo + "cm")

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base
}


function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();


// Código del círculo
console.group("Círculos");
//Radio
//const radioCirculo = 4;
//console.log ("El radio del círculo es: " + radioCirculo + "cm");
//Diámetro

function diametroCirculo(radio){
    return radio *2;
}
//const diametroCirculo = radioCirculo * 2;
//console.log ("El diámetro del círculo es: " + diametroCirculo + "cm");
//PI
const PI = Math.PI;
console.log ("El valor de PI es: " + PI);
//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


//Area

function areaCirculo(radio){
    return (radio * radio) * PI;
}
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log ("El área del círculo es: " + areaCirculo + "cm²");

console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
    
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);
    const perimetro1 = perimetroTriangulo(value1, value2, value3);
  
    alert(perimetro1);
}


function calcularAreaTriangulo() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
    
}

function calcularAlturaTriangulo(ladoa, ladob, base) {
    if (ladoa != ladob){
        console.error("Los lados a y b no son iguales")
    } else {
        const basecuadrado = (base * base) / 4;
        const ladocuadrado = ladoa * ladoa;
        const alturatriangulo = Math.sqrt (ladocuadrado - basecuadrado);
        return alturatriangulo;
    }
}
