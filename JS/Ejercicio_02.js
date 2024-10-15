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
