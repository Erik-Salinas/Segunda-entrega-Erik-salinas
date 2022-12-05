//Condicional
//Notas de alumnos

 let notas = parseInt(prompt("Ingrese una nota"));

if( notas <= 4){
    alert("Volver a hacer el examen en diciembre 😭");
}
else if( notas <= 5){
    alert("Desaprobado 😩, su nota es"+' ' + notas);
}
else if( notas <= 6){
    alert("Felicidad aprobado con" + ' '+ notas +' ' +"Estudiar mas!! 🤗");
}
else if( notas <= 10){
    alert("Felicidades aprobado con " + notas + "🥳");
}
else{
    alert("Ingrese una nota del 1 al 10 😩")
}  
 
//Ciclos
//Nombre de mascotas

 let mascotas = prompt("Ingrese mascota (perro,gato,loro,tortuga, etc.. 😍)");

while (mascotas != "salir") {
    switch (mascotas) {
        case "perro":
            alert("Juan, Maria, Lucas, Tatiana, Marco, etc..🐶");
            break;
        case "gato":
            alert("Luna, Maxi, Morena, Galleta, Flor etc.. 😺");
            break;
        case "loro":
            alert("Loli, Apolo, Jazmin, Rubi, Coco, etc... 🦜");
            break;
        case "tortuga":
            alert("Pepe, Lorena, Cori, Sol, Antoño, etc... 🐢");
            break;
        default:
            alert("Lo sentimos no tenemos nombre para esa mascota 😩")
            break;
    }
    mascotas = prompt("Ingrese mascota (perro,gato,loro,tortuga, etc.. 😍)");
}  

//Simulador 

let nombrePaceinte = prompt("Ingrese nombre del paciente");
let apellidoPaciente = prompt("Ingrese apellido del paciente")

while (nombrePaceinte != "salir") {
    function precioConsulta(precio) {
        let resultado = 2500 - precio;
        alert("Paciente " + nombrePaceinte + ' ' + apellidoPaciente + ' ' + "su consulta tiene un valor de $" + resultado);
        return resultado;
    }
    
    let precioDescuento = parseInt(prompt("Ingresa el descuento obtenido por la obra social "));

    precioConsulta(precioDescuento);

    nombrePaceinte = prompt("Ingrese nombre del paciente");
    apellidoPaciente = prompt("Ingrese apellido del paciente")
}  








