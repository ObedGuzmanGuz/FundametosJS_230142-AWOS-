//Tipos de Datos en JS
// 1.Undefined
console.warn("----- Tipo de dato Undefined---")
let cliente;
console.log(`El cliente es :  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente="Michelle Sanchez"
console.log(`El cliente es: ${cliente}`)
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente="2005";
console.log(`El cliente es: ${cliente}`)
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declarados
// 2. BOOLEAN
console.warn("------ Tipo de Dato Boleano - TRUE/FALSE");
let espremiun= "No lo se";
console.log(`¿Es el cliente premium?: ${espremiun}`);
console.log(`El tipo de dato de la variable espremiun es: ${typeof(espremiun)}`)
console.log('Asignando el valor "true" a la variable');
espremiun=true
console.log(`El tipo de dato de la variable espremiun es: ${typeof(espremiun)}`)
console.log(`¿Es el cliente premium?: ${espremiun}`);
console.log("Cambiamos el valor de espremium a false")
espremiun=false
if(espremiun)
    console.log("El cliente pago por usar el servicio.");
else
    console.log("El cliente que recibe los servicios gratuitos");
// 3. NUMBER
var cantidad
const costo_producto = 10.50;
let saldo_cuenta = -2500.40;
let monto_transaccion 
console.warn("---Tipo de Dato --Number (Numeros,posuitivos, negativos, decimales, flotantes");
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (Tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de productos`);
console.log(`El importe total de la compra es de: ${cantidad*costo_producto}`);
saldo_cuenta=saldo_cuenta-(cantidad*costo_producto);
console.log(`Tu nuevo saldo es de : ${saldo_cuenta}`);
// El cliente realiza un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha sido reciido, tu nuevo saldo es de : ${saldo_cuenta+monto_transaccion}`);




// String o cadenas de texto


const alumno = "obed";
let producto;
console.warn("--- Tipo de Dato - String (cadena de caracteres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof (alumno)}`);
producto = 'monitor 20 pulgadas'
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof (producto)}`);
//Manipulando los Strings

console.log(`Más adelante podremos transformar el contenido de los Strings usando funcions especificas como convertir a mayusculas: ${alumno} =>${alumno.toUpperCase()}`);
console.log(`o en su dfecto a minisculas: ${producto} => ${producto.toLowerCase()}`);



// const numero = "30"
// const numero2= 30

// console.log(typeof numero)
// console.log(typeof numero2)

// BigInt (Enteros de Dimesnsiones amplias)- Generalmente en sistemas matematicos, fisicos o espaciales dpnde se requiere de una excelente precision numerica
// const numerogrande=  BigInt(918298193281887139831091038173813)
// console.log(typeof numerogrande)
console.warn("-----Tipo de Dato -BIGINT(numero amplio)");
const numerog = 123456789
const numerog2 = 12345678901234567890
let numerog3 = 123456789012345678901234567890
let numerog4 = 1234567890123456789012345678901234567890

console.log(`El primer experimento de un numero grande es: ${numerog}, que si es soportado por Number, y su tipo de datoa es: ${typeof (numerog)}`)


console.log(`El segundo experimento de un numero grande es: ${numerog2}, que si es soportado por Number, y su tipo de datoa es: ${typeof (numerog2)}`)
console.log(`El tercero experimento de un numero grande es: ${numerog3}, que ya no es soportado por Number, y que hay perdida de presicion, y su tipo de dato es: ${typeof (numerog3)}`)
console.log(`El cuarto experimento de un numero grande es: ${numerog4}, que ya no es soportado por Number, y su tipo de datoa es: ${typeof (numerog4)}`)

// Para definir el tipo ded datos BigInit debemos invocar la funcion BigINit o usar una letra "ñ" al final del numero en la asignacion de valor.
// Hay que considerar que los tipos de datos declarados cómo BigInit no son operables con los de tipo number

console.log("Declaramos los valores númericos gran tamaño...")

numerog3 = BigInt(12345678901234567890123456789)
numerog4 = 123456789012345678901234567891234567890n;

console.log(`El segundo experimento de un numero grande es: ${numerog3}, que si es soportado por Number, y su tipo de datoa es: ${typeof (numerog3)}`)
console.log(`El segundo experimento de un numero grande es: ${numerog4}, que si es soportado por Number, y su tipo de datoa es: ${typeof (numerog4)}`)







let numero = 238;



// si intentas ralizar una operacion matematica entre estos dos tipos de datos, obtendremos un error de operacion.
console.log(`El resultado de la operaciom de : numerog4/numero es =a : ${numerog4 / BigInt(numerog)}`);







// const numero= 10
// const numero2 =20

// console.log(numero + Number(numerogrande))



// const numero= "3030"
// const numero2= 30
// console.log(typeof String(numero2))
// console.log(typeof Number(numero))


// Symbol 

console.warn("-----------Tipo de Dato- Symboll");
//Declaramos diferentes variables con valores similares
const numero1 = 2;
const numero2 = 2.0;
const numero3 = "2";
const numero4 = "2.0";
const numero5 = Symbol(2);
const numero6 = Symbol(2.0);
const numero7 = Symbol("2");
const numero8 = Symbol("2.0");
const numero9 = Symbol(2)


// Prueba de comparacion 1: ¿es 2=2.0?
console.log("Prueba de comparacion 1")
if (numero1 == numero2) {
    console.log(`Se han comparado los valores de numero1 y numero2, confirmando que tiene el mismo valor.`)

} else {

    console.log(`Se ha comparado los valores de numero1 y numero2, detectando que  No tiene el mismo valor`);

}

console.log("Prueba de comparacion 2")

// Prueba de comparacion 2: ¿es 2="2"?

if (numero1 == numero3) {
    console.log(`Se han comparado los valores de numero1 y numero3, confirmando que tiene el mismo valor.`)

} else {

    console.log(`Se ha comparado los valores de numero1 y numero3, detectando que  No tiene el mismo valor`);
}



console.log("Prueba de comparacion 3")

// Prueba de comparacion 3: ¿es 2 estrictamente="2"?

if (numero1 === numero3) {
    console.log(`Se han comparado los valores de numero1 y numero3, confirmando que tiene el mismo valor.`)

} else {

    console.log(`Se ha comparado los valores de numero1 y numero3, detectando que  No tiene el mismo valor`);
}


console.log("Prueba de comparacion 4")

// Prueba de comparacion 4: ¿es 2="2.0"?

if (numero1 == numero4) {
    console.log(`Se han comparado los valores de numero1 y numero4, confirmando que tiene el mismo valor.`)

} else {

    console.log(`Se ha comparado los valores de numero1 y numero4, detectando que  No tiene el mismo valor`);
}





console.log("Prueba de comparacion 5")

// Prueba de comparacion 5: ¿es 2="2"?

if (numero1 === numero4) {
    console.log(`Se han comparado los valores de numero1 y numero4, confirmando que tiene el mismo valor.`)

} else {

    console.log(`Se ha comparado los valores de numero1 y numero4, detectando que  No tiene el mismo valor`);
}


console.log("Prueba de comparacion 6")

// Prueba de comparacion 6: ¿es 2=symbol(2)"?

if (numero1 === numero5) {
    console.log(`Se han comparado los valores de numero1 y numero5, confirmando que tiene el mismo valor.`)

} else {

    console.log(`Se ha comparado los valores de numero1 y numero5, detectando que  No tiene el mismo valor`);
}



console.log("Prueba de comparacion 7")

// Prueba de comparacion 7: ¿es symbol(2)=symbol(""2")"?

if (numero5 === numero7) {
    console.log(`Se han comparado los valores de numero5 y numero7, confirmando que tiene el mismo valor.`)

} else {

    console.log(`Se ha comparado los valores de numero5 y numero7, detectando que  No tiene el mismo valor`);
}


console.log("Prueba de comparacion 8")

// Prueba de comparacion 6: ¿es symbol(2)=symbol(2)"?

if (numero5 == numero9) {
    console.log(`Se han comparado los valores de numero5 y numero9, confirmando que tiene el mismo valor.`)

} else {

    console.log(`Se ha comparado los valores de numero5 y numero9, detectando que  No tiene el mismo valor`);
}

// const primerSymbol = Symbol(30)
// const segundoSymbol = Symbol(30)

// console.log(primerSymbol === segundoSymbol)

// console.log(primerSymbol.valueOf())
// console.log(segundoSymbol.valueOf())

//Null 
console.warn("-----------Tipo de Dato- Null(Nulo o vacio9");

//El tipo de dato nulo asigna cuando el sistema o el usuario sbaen de la variable pero prefiren dejarlo vacio, bajo su consentimiento, a diferencua de UNDEFIEND  que es un valor dsconocido asignado por Default por js

let nombreUsuario = null;
let passUsuario = null;
let generousuario = null;
let estatusRelacionSentimental = null;
let fecha_ultimopost;

// Supongamos que estamos progrmando una Red Social , tipo GFacebbok en la que parte de la informacion se publicara en el perfil del usuario.


// Si el usuario no ha iniciado sesión en el dispositivo movil o en la aplicacion web, puede explorara contenido de acceso publico, y no existira informacion para mostrar.

// En la HU(Historias de usuario), que el usuario desea logtearse debera ingresar su numero de telefono o correo electronico y una contraseña que deberemos guardar en las variables previamente declaradas.

// Supongamos que el usuario Obed con correo obed.guz@gmail.com desea ingresar con su contraseña : pas123


nombreUsuario = "obed.guz@gmail.com"
passUsuario = "pas123"

//en este momento de ejecucion del sistema no sabemos su genero, ni su estatus de relacion sentimental.
console.log(`El usuario: ${nombreUsuario} esta iniciando logearse con una contraseña de : ${passUsuario}`);


//Lo que prosigue es que el sistema contejara los datos ingresados con la base de datos, y en caso de que los datos sean correctos comenzara la sesion en la plataforma actualizando estos valores.
//Dado que Obed es del genero masculino y denota que si estatutus de la relacion no ha sido capturado o lo mantiene privado esto genera la actualizacion de los valores de las variables

generousuario = "M"
estatusRelacionSentimental = null;
console.log(`El usuario: ${nombreUsuario}, se ha logeado existosamente, al tener acceso a su informacion de perfil podemos deducir que es el genero ${generousuario} y que su estatus de relacion es: ${estatusRelacionSentimental} y su ultima publicacion la realizo el ${fecha_ultimopost} `);


//Comparando Null vs UNDEFINED
// Si bien UNDEFINED y NULL tienen el mismo valor, no tienen el mismo tipo de dato 

console.log("Comparacion de la equidad entre Undefined y Null:")
console.log(
(fecha_ultimopost==estatusRelacionSentimental)?
    console.log("Ambas variables tienen el mismo valor"):
    console.log("La variables no tienen el mismo valor")

);

    console.log("Comparacion de la identidad entre Undefined y Null:")
  
  console.log(
    (fecha_ultimopost===estatusRelacionSentimental)?
        console.log("Ambas variables tienen el mismo valor y el mismo tipo de dato"):
        console.log("La variables  tienen el mismo valor, pero no el mismo tipo d dato")
    );
// const descuento = null
// console.log(typeof descuento)

// Fuction (Funciones)
console.warn("-----------Tipo de Dato- Fuction(Funciones)");


//Declaramos una funcion que nos permita recibir un  parametro en este caso el nombre de la persona a saludar, y le enviamos un saludo, esta funcion a una constante.

const saludar=  function(nombre){return `Hola, ${nombre}!`}
console.log(saludar('Obed'));
// Que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`)
