// Variables
let validar = false;
let nombre = "";
let numPromedio = 0;
let escala = 0; 
let nota = 0;
let suma = 0;
let promedio = 0;

// Bienvenida
alert(`Bienvenido al simulador de promedio de notas

Escala de notas del 1 al 7

Para aprobar el ramo se necesita un promedio superior a 7`);

do {    
    nombre = prompt("Ingreso nombre del Alumno:");
} 
while (nombre == ""); 

// Funcion para validar que se ingrese un numero
function validarNumero(num) {
    validar = !isNaN(num);
    if (!validar) {
        alert("No has ingresado un numero");
    }
}

// Funcion escala de nota (1 al 7) 
function escalaNota(escala) {
    if (escala < 1 || escala > 10){
        alert("Escala de notas del 1 al 7");
        validar = false;
    }
}

// Ciclo para ingresar datos
while (!validar) {    
    numPromedio = parseInt(prompt("Ingrese numero de notas a promediar:")); 
    validarNumero(numPromedio);
}

// Ciclo ingreso de notas
for (let i = 1; i <= numPromedio; i++) {
    validar = false;
    while (!validar) {
        nota = Number(prompt("Ingrese nota " + i));
        validarNumero(nota);
        escalaNota(nota);
    }
    suma = suma + nota;
}

// Obtener promedio de notas
promedio = suma / numPromedio;

// Resultado
if (promedio >= 7) {
    alert(`Resultado

    El promedio final es: ${promedio.toFixed(1)}

    El alumno ${nombre} aprobo el ramo`);
} else {
    alert(`Resultado

    El promedio final es: ${promedio.toFixed(1)}
    
    El alumno ${nombre} reprobo el ramo`);
}





