
const inicio = alert("Bienvenido a nuestra pagina web 🥳");
let cookies = prompt("Acepte nuestras Cookies para brindar  mayor seguridad (SI o NO)")

while (cookies != "x") {
    if ((cookies == "SI") || (cookies == "si")) {
        alert("Gracias por aceptar nuestras cookies 😊");
        break;
    } else {
        alert("Acepte nuestras cookies para accerder a nuestra pagina 😉");
    }
    cookies = prompt("Acepte nuestras Cookies para brindar  mayor seguridad")
}


class Mascotas {

    constructor(especie, genero, edad, nombre) {
        this.especie = especie;
        this.genero = genero;
        this.edad = parseInt(edad);//Numeros enteros
        this.nombre = nombre;
    }

    //Metodos
    asignarValoracion(edad) {
        this.edad = edad; //Modificacion o cambio de valoración
    }

}
const nombres = [
    new Mascotas('Perro', 'Macho', 1, 'Juan'),
    new Mascotas('Perro', 'Hembra', 8, 'Maria'),
    new Mascotas('Gato', 'Macho', 4, 'Lucas'),
    new Mascotas('Gato', 'Hembra', 10, 'Micaela'),
    new Mascotas('Pajaro', 'Macho', 1, 'Gervacio'),
    new Mascotas('Pajaro', 'Hembra', 3, 'Mara'),
    new Mascotas('Peces', 'Macho', 1, 'Tomas'),
    new Mascotas('Peces', 'Hembra', 3, 'Laura'),
];


let continuar = true;


while (continuar) {
    let info = prompt('Ingrese especie,genero y edad de su mascota.Separado por una barra diagonal (/) Ej: Pajaro/Hembra/1 (X para salir)')

    if (info.toUpperCase()) {
        alert('Informacion Guardada 😎\n\n' + info);
        continuar = false; //Finalizamos agregado de libros
        break;
    }
   
    let datos = info.split('/');
    //Agregamos los datos del constructor
    let nombre = new Mascotas(datos[0], datos[1], datos[2], datos[3]);
    nombres.push(nombre); //Guardar libro
    nombre.asignarNom(nombres);


}


let informacion = prompt('Elegí una opción:\n1 - Mascotas (A a Z) \n2 - Mascotas (Z a A)\n3 - Mascotas (Mejor a peor especie)\n 4 - Fecha de publicación (Más viejo a más nuevo) ');


function ordenar(informacion, array) {
    let arrayOrdenado = array.slice(0); //slice (COPIA)

    switch (informacion) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.especie.localeCompare(b.especie));
            return nombreAscendente; //Mostramos resultado, 
        case '2':
            return arrayOrdenado.sort((a, b) => b.especie.localeCompare(a.especie));
        //return nombreDescendente;
        case '3':
            return arrayOrdenado.sort((a, b) => b.edad - a.edad);
        case '4':
            return arrayOrdenado.sort((a, b) => a.nombre - b.nombre);
        default:
            alert('No es un criterio válido 🤨');
    }
    informacion = prompt('Elegí una opción:\n1 - Mascotas (A a Z) \n2 - Mascotas (Z a A)\n3 - Mascotas (Mejor a peor especie)\n 4 - Fecha de publicación (Más viejo a más nuevo) ');
}


function crearStringResultado(array) {
    let info = ''; //Se guarda el string que se va a mostrar

    array.forEach(elemento => {
        info += 'Especie ' + elemento.especie + '\nGenero: ' + elemento.genero + '\nEdad: ' + elemento.edad + ' \nNombre: ' + elemento.nombre + '\n\n'
    });

    return info; //Mostramos resultados

}



alert(crearStringResultado(ordenar(informacion, nombres)))


