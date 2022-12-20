/* //Condicional
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


 */

////////////////////////////////////////////////////////////////////////////////////////
 const inicio = alert("Bienvenido a nuestra pagina web 🥳");
let cookies = prompt("Acepte nuestras Cookies para brindar  mayor seguridad (SI o NO)")

while(cookies != "x"){
    if((cookies == "SI") || (cookies=="si")){
        alert("Gracias por aceptar nuestras cookies 😊"); 
        break;
    }else{
        alert("Acepte nuestras cookies para accerder a nuestra pagina 😉"); 
    }
        cookies = prompt("Acepte nuestras Cookies para brindar  mayor seguridad")
}


class Mascotas {

    constructor(especie,genero,edad) {
        this.especie = especie;
        this.genero = genero;
        this.edad = parseInt(edad);//Numeros enteros
    }

    //Metodos
    asignarValoracion(edad) {
        this.edad = edad; //Modificacion o cambio de valoración
    }

}
const nombres = [
    new Mascotas('Perro', 'Macho', 1),
    new Mascotas('Perro', 'Hembra', 1),
    new Mascotas('Gato', 'Macho', 1),
    new Mascotas('Gato', 'Hembra', 1),
    new Mascotas('Pajaro', 'Macho', 1),
    new Mascotas('Pajaro', 'Hembra', 1),
];


let continuar = true; 


while (continuar) {
    let info = prompt('Ingrese especie,genero y edad de su mascota.Separado por una barra diagonal (/) Ej: Pajaro/Hembra/1');

    if (info.toUpperCase() == 'X') {
        continuar = false; //Finalizamos agregado de libros
        break;
    }   
                      //Metodo de string
                      //Permite serapar un string
    let datos = info.split('/');
    //Agregamos los datos del constructor
    const libro = new Mascotas(datos[0], datos[1], datos[2], datos[3], datos[4]);
    nombres.push(libro); //Guardar libro
    libro.asignarId(nombres);

}


let criterio = prompt('Elegí el criterio deseado:\n1 - Título (A a Z) \n2 - Título (Z a A)\n3 - Mejor a peor puntuado \n4 - Fecha de publicación (Más viejo a más nuevo)');


function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0); //slice (COPIA)

    switch (criterio) {
        case '1':                               
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.especie.localeCompare(b.especie));
            return nombreAscendente; //Mostramos resultado, 
        case '2':              
            return arrayOrdenado.sort((a, b) => b.especie.localeCompare(a.especie));
            //return nombreDescendente;
        case '3':
            return arrayOrdenado.sort((a,b)=>b.edad-a.edad);
         case '4':
            return arrayOrdenado.sort((a, b) => a.anio - b.anio); 
        default:
            alert('No es un criterio válido');
            break;
    }

}


function crearStringResultado(array){
let info=''; //Se guarda el string que se va a mostrar

array.forEach(elemento => {
    info+='Título: '+ elemento.especie+'\nAutor: '+ elemento.genero + '\nAño de publicación: ' + elemento.edad + ' \n\n'
    
});

return info; //Mostramos resultados

}



alert(crearStringResultado(ordenar(criterio,nombres)))


