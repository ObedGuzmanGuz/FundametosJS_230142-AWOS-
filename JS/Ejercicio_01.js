// comentaruios de una sola linea

/*
comentarios multi linea
*/


// Ejercicios 01: Declaracion de Variables
// a) Var

var minombre= "OBED";
var misapellidos;
var miedad=19;

//El onjeto de consola nos permite enviar a la terminal y poder visualizar el valor de una variable o resultado de una funcion o metodo

console.log(minombre,misapellidos);

misapellidos= "Guzman Flores";
console.log("Ya que ambas fueron incializadas vuelvo a intentar leerlas",minombre, misapellidos);

//Una varuiable puede cambiar en el proceso de ejecucion del prgrama.

// b) Const

// const miuniversidad="Universidad Tecnologica de Xicotepec de Juarez";
 



console.warn("-------------Declaracion de la variables del tipo constante usando: conts");
const miuniversidad="Universidad Tecnologica de Xicotepec de Juarez";
const mimatricula=230142;
console.log("Hola ", minombre," ",misapellidos,"Se que estudias actialmente en : ", miuniversidad,"asignaron la matricula : ",mimatricula, "y tienes una edad de: ",miedad,"años");

//Para saber el tipo de dato que tiene una variable o constante podemos utilizar la funcion typeOf()

console.log("Analizando los datos puedo deducir que: ")
console.log("Mi nombre es del tipo:",typeof(minombre));
console.log("Mis apellidos es del tipo:",typeof(miuniversidad));
console.log("Mi universidad es del tipo:",typeof(miuniversidad));
console.log("Mi edad es del tipo:",typeof(miedad));
console.log("Mi matricula es del tipo:",typeof(mimatricula));


// c) LET 
let mifechanacimiento= "2005-04-23";
let micolorfavorito;

console.warn("---- Declaracion de Variable Locales usando: Let");
console.log("Genial, te vpy conociendo mejor, ahoara sé que tunnaciste el ", mifechanacimiento,"y tu color favorito es:mmmmm dejame pensar...");
micolorfavorito="rojo";
console.log(`Creo que es ${micolorfavorito}, le atine?`); //La manera de mnezclar textos fijos con el valor actual de las vatiables se le conoce como: interporacion y deben inicar y finalizar on un backit - title inversa
console.log("Analizando los datos puedo deducir que: ")
console.log("Mi fecha de nacimiento es del tipo:",typeof(mifechanacimiento));
console.log("Mi fecha de color favorito es del tipo:",typeof(micolorfavorito));



































