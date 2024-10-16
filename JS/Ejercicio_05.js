// Repaso de ciclo y sentencias d3e control

//Estilizacion de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalizacion de la salidas de la consola

console.warn("Práctica 07: Arreglos en Java Script");

console.warn("%c1.- Condicionales - Si/Entonces ....(IF)", style_console)

//Le indica al programa que hacer o que no en vase a una prueba logica de verdadero o falso

let fechaActual= new Date();  //Aqui se puede cambiar la fecha 
/* let fechaActual= new Date("2025/06/05   "); */
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

// y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX', 

{

    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false

});

console.log(`en formato local (Mexico): ${fechaLocalMX}`);


// Si es antes  de las doce saluda con un buenos dias

if(fechaActual.getHours() < 12)
console.log(`Buenos dias, hoy es: ${fechaLocalMX}`);

//Existe un extensor de la sentencia if(SI) que es else (en caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad el año.`);
else
    console.log(`Estas en la segunda mitad del año.`);

    //  Que pasa si la validacion tiene varias operaciones

    const anio = fechaActual.getFullYear();
     

    let inicioPrimavera= new Date(anio,2,21);
    let inicioVerano = new Date(anio,5,21);
    let inicioOtonio= new Date(anio,8,23);
    let inicioInvierno= new Date(anio,11,21);
    let estacion;
    let horarioVerano= false;

    if(fechaActual >= inicioPrimavera && fechaActual< inicioVerano){
 console.log("Estamos en PRIMAVERA...")
 console.log("Inica la floracion de muchas plantas")
console.log("Los dias son mas largos y las noches mas cortas...")
console.log("Muchos animales despiertan de la hibernacion..")
estacion="Primavera"
horarioVerano=true;
    }
    else if(fechaActual >= inicioVerano && fechaActual< inicioOtonio){
 console.log("Estamos en VERANO...")
console.log("En esta temporada los abundan los dias soleados y calurosos...")
console.log("En esta temporada el mindice de turismo vacional sube...")
console.log("Mucha gente busca realizar actividades al aire....")
estacion="Verano"
horarioVerano=true;
    }
    else if(fechaActual >= inicioOtonio && fechaActual< inicioInvierno){
 console.log("Estamos en OTONIO...")
console.log("Los arboles suelen cambiar de follaje");
console.log("Se registran temperaturas mas templadas ");
console.log("Los animales comienzan con la recoleccion de alimento y preparan  sus espacios para la hibernancion , incluso algunas aves migram.");
estacion="Otoño"
horarioVerano=true;    
}
else 
{

console.log("Estamos en Invierno ..")
console.log("En este temporada los dias son mas cortos y las noches mas largas .....")
console.log("En akgunas regiones suele nevar....")
console.log("Dado las bajas temperaturas, se recomiendan abrigarse")
estacion="Invierno"
horarioVerano=false
}
console.warn("%c2.- Operador Ternario (Validacion?cumple:no_cumple", style_console)

//En java Script existe una operacion simplificada que valida si una condicion se cumple o no, y que hacer en cada caso
 

const edadPersona=18;
const  mayoriaEdadMX= 18;
const mayoriaEdadUs=21;

let evaluarMayoriaEdad = (edad) =>
    edad >=18 ? "Eres mayor de edad.": "No eres mayor de edad."

console.log("Evaluamos la mayoria de edada de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));

// Sin embargo tenemos que considerar que la mayoria de edada varia en cada pais por cuestiones leagales, por lo que debemos considerar un segundo
// parametro en la evaluacion.

evaluarMayoriaEdad =(edad,pais) => 

    (edad =>18 && pais== "Mx")? `En ${pais} eres mayor de edad `:`En  ${pais} No eres mayor de edad`;
    console.log("Evaluamos la mayoria de edada de una persona en Mexico...")
console.log(evaluarMayoriaEdad(edadPersona, "US"));

console.warn( "%c3.- Switch - Case (Eleccion pór valor definido",style_console);

//Calcuklando tu generacion en base a tu edad

let asignaGeneracion = (antioNacimiento)=>{

switch(true)
{
 case(antioNacimiento<1968):
 return "Baby Bommers";

case (antioNacimiento>1968 && antioNacimiento<= 1980):
    return "Generation X";
case (antioNacimiento>1980 && antioNacimiento<=1994):
    return "Millennials";
    case (antioNacimiento>1994 && antioNacimiento <= 2010):
        return "Centenials";
    
    case (antioNacimiento>2010):
        return "Krysrtal";


}
}


console.log(`Dado que nacio en el año 2005 soy de la generacion: ${asignaGeneracion(1982)}`);


