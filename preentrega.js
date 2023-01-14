//condicional, para saber si el usuario tiene los requisitos para continuar

let edad = (prompt("Ingrese su edad"))

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
