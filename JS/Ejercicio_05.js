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



console.log("%c4. -Manejo de excepciones /(TRY/CAHC)", style_console);

console.log("Intetamos dividir : 0/10, el resultado es:")


try{   //intenta

let result= 0/10;  //dividir 0 entre un entero
console.log(result);
}
catch (error)
{


console.log("Ocurrio un error: "+error.message);
}

console.log(" Intetamos dividir : 10/0, el resultado es:");
try{

    let result= 10/0;
    console.log(result)

    
}catch(error)
{
    console.log("Ocurrio un error: "+ error.message);
}




console.log(" Intetamos dividir : a/10, el resultado es:");
try{


let result= "a"/10;
console.log(result)

}
catch(error)

{

console.log("Ocurrio un error :"+ error.message)

}



console.log(" Intetamos dividir : a/10, el resultado es:");
try{


let result= a/10;
console.log(result)

}
catch(error)

{

console.log("Ocurrio un error :"+ error.message)

}
console.log("Intentamos dividir : el valor de la variables x/ entre el valor de la variable y, el resultado es:")




try{

let x=8, y=2, result=x/y;
console.log(result)

}
catch(error)
{
console.log("Ocurrio un error: "+error.message);



}


console.log("%c5.- Control de ciclos (Break / Continue) ", style_console);

// En alguna ocasiones sera importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo...

console.log("Vamos a contar del 1 al 10...")

for(let num=1; num<11; num++){

console.log(num);

}
console.log("Ahora necesitamos que si llegas al 7 pares de contar.... Suponiendo que solo por hoy es de mala suerte")


for(num = 1; num<=10; num++){
if(num==7)
break;
else
console.log(num)


}


console.log("Ahora necesitamos que si llegas al 7 te saltes ese numero y continues")


for(num=1; num<=10;num++){

if(num==7)
{
continue;

}
console.log(num);
}

console.log("%c6.- Ciclo Iterativo - (FOR) ", style_console);

//controlan el flujo de control de las instrucciones que se les da a la computqadora
//Recorre de manera iterativa (i), de incremental o decremental



console.log("Los dias de la seman son en orde ascedentes son: ")

let dias= ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

for( let i=0; i<dias.length;i++){
console.log(dias[i]);

}


console.log(" Ahora vamos a imprimir los meses en orden descendente")
const meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for(let i=meses.length-1; i>=0;i--){

console.log(meses[i])
}
