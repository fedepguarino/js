//condicional, para saber si el usuario tiene los requisitos para continuar

let edad = parseInt(prompt("Ingrese su edad"))

if(edad >= 18){
    alert("Sos mayor de edad, disfruta de nuestro contendo sin restricciones")
    console.log("Usuario confirma mayoría de edad")
}else{
    alert("No sos mayor, lamentablemente no podes continuar")
    console.log("Usuario informa ser menor de edad")
}

//ciclo por conteo, como sistema de reserva de turnos
for (let i = 0; i < 5; i++){
    let nombreCliente = prompt("Escriba su nombre y apellido para validar el turno")
    alert (`El turno N° ${i} le corresponde a ${nombreCliente}`)
    console.log(nombreCliente)
    console.log(i)
}


function ingresarDatosCalculadora(){
    let primNum = parseInt(prompt("Ingrese el primer num"))
    let segNum = parseInt(prompt("Ingrese el segundo num"))
    let oper = prompt("Ingrese tipo de operacion")
    console.log("El resultado con functions es " + calculadora(primNum, segNum, oper))
    
}
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
    case "+":
    return primerNumero + segundoNumero;
        
    case "-":
    return primerNumero - segundoNumero;
        
    case "*":
    return primerNumero * segundoNumero;
    
    case "/":
    return primerNumero / segundoNumero;
    
    default:
    return 0;
    }
}

//Invocación de función
ingresarDatosCalculadora()


//Creación de objetos que responde a los empleados pre existentes.
const empleado1 = {
    nombre: "Leonardo",
    edad: 35,
    ciudad: "Lanús",
    rol: "Encargado",
    turnoLaboral: "Matutino"
}

const empleado2 = {
    nombre: "Soledad",
    edad: 26,
    ciudad: "Lomas de Zamora",
    rol: "Empleada",
    turnoLaboral: "Matutino"
}

const empleado3 = {
    nombre: "Juan",
    edad: 40,
    ciudad: "Banfield",
    rol: "Encargado",
    turnoLaboral: "Vespertino"
}

const empleado4 = {
    nombre: "Tomás",
    edad: 20,
    ciudad: "Banfield",
    rol: "Empleado",
    turnoLaboral: "Vespertino"
}

//Información prioritaria respecto a los empleados
console.log(empleado1.nombre)
console.log(empleado1.rol)
console.log(empleado1.turnoLaboral)

console.log(empleado2.nombre)
console.log(empleado2.rol)
console.log(empleado2.turnoLaboral)

console.log(empleado3.nombre)
console.log(empleado3.rol)
console.log(empleado3.turnoLaboral)

console.log(empleado4.nombre)
console.log(empleado4.rol)
console.log(empleado4.turnoLaboral)

let i = 0
for(const prop in empleado1){
    i++
    console.log("el valor de la propiedad n° " +i + " es " + empleado1 [prop])
}

//Function para crear objetos para el ingreso de nuevos empleados. Funcion constructora.
function Empleado (nombre, edad, ciudad, rol, turnoLaboral){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.rol = rol;
    this.turnoLaboral = turnoLaboral;

    this.mostrarInfo = function(){
        console.log(`El empleado ${this.nombre} que posée ${this.edad} años de edad es ${this.rol} de la tienda.`)
    }
}
//Instanciación de objeto.
const Empleado5 = new Empleado("Sandra", 28, "La Plata", "Empleada", "Vespertino")
console.log(Empleado5)

//Aplicación de métodos.
Empleado5.mostrarInfo()

//Creacion de un array como carpeta "Recursos Humanos"
const recursosHumanos = []
recursosHumanos.push(empleado1, empleado2, empleado3, empleado4, Empleado5)
console.log(recursosHumanos)

//Recorriendo el array
console.log("Los empleados y sus turnos son:")
for(let elemento of recursosHumanos){
    console.log(elemento.nombre, elemento.rol, elemento.turnoLaboral)
}