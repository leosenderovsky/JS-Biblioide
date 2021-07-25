// Desafío 4 - Entrega 18/7

/*let nombreIngresado = prompt("Ingrese su nombre");
alert(nombreIngresado + ", gracias por visitar nuestra librería");

let cantidadEnsayos = 0;
let cantidadManuales = 0;
let cantidadGuiones = 0;
let cantidadFicciones = 0;

function ingresarCantidadLibros () {
    cantidadEnsayos = parseInt(prompt(nombreIngresado + ", ingrese cuántos ensayos desea comprar"));
    console.log (nombreIngresado + " desea comprar " + cantidadEnsayos + " ensayos");

    cantidadManuales = parseInt(prompt(nombreIngresado + ", ingrese cuántos manuales desea comprar"));
    console.log (nombreIngresado + " desea comprar " + cantidadManuales + " manuales");

    cantidadGuiones = parseInt(prompt(nombreIngresado + ", ingrese cuántos libros de guiones desea comprar"));
    console.log (nombreIngresado + " desea comprar " + cantidadGuiones + " libros de guiones");

    cantidadFicciones = parseInt(prompt(nombreIngresado + ", ingrese cuántos libros de ficción desea comprar"));
    console.log (nombreIngresado + " desea comprar " + cantidadFicciones + " libros de ficción");

}
ingresarCantidadLibros ();

function sumar(cantidadEnsayos, cantidadManuales, cantidadGuiones, cantidadFicciones) {
    return cantidadEnsayos + cantidadManuales + cantidadGuiones + cantidadFicciones;
}
let resultado = sumar(cantidadEnsayos, cantidadManuales, cantidadGuiones, cantidadFicciones);
sumar ();

alert(nombreIngresado + ", usted desea comprar " + resultado + " libros");*/



// Desafío 5 - Entrega 21/7

/*class Libro {
    constructor(titulo, autor, editorial, genero, precio) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
        this.precio = parseFloat(precio);
        this.stock = true;
        this.precioIva = this.precio * 1.21;
    }
}
const libro1 = new Libro ("El guión", "Robert McKee", "Alba Editorial", "manual", 2900, true);
const libro2 = new Libro ("El viaje del escritor", "Christopher Vogler", "Ma Non Troppo", "ensayo", 2481, true);
const libro3 = new Libro ("Las aguas bajan turbias", "Eduardo Borrás", "Biblos", "guion", 792, true);
const libro4 = new Libro ("Érase una vez en Hollywood", "Quentin Tarantino", "Reservoir Books", "ficcion", 3665, true);


let nombreIngresado = prompt("Ingrese su nombre")
alert(nombreIngresado + ", gracias por visitar nuestra librería");

let generoIngresado = "";

function ingresarGenero() {
    generoIngresado = prompt(nombreIngresado + ", ingrese el género de libro por el cual desea consultar stock: \n manuales \n ensayos \n guiones \n ficciones").toLowerCase();
    console.log(nombreIngresado + " desea consultar por stock de " + generoIngresado);

    switch (generoIngresado) {
        case "manuales":
            alert(nombreIngresado + ", estos productos coinciden con su búsqueda de " + generoIngresado + ": \nTítulo: " + libro1.titulo + "\nAutor: " + libro1.autor + "\nEditorial: " + libro1.editorial + "\nPrecio: $ " + libro1.precio + "\nPrecio + IVA: $ " + libro1.precioIva);
        break;
        case "ensayos":
            alert(nombreIngresado + ", estos productos coinciden con su búsqueda de " + generoIngresado + ": \nTítulo: " + libro2.titulo + "\nAutor: " + libro2.autor + "\nEditorial: " + libro2.editorial + "\nPrecio: $ " + libro2.precio + "\nPrecio + IVA: $ " + libro2.precioIva);
        break;
        case "guiones":
            alert(nombreIngresado + ", estos productos coinciden con su búsqueda de " + generoIngresado + ": \nTítulo: " + libro3.titulo + "\nAutor: " + libro3.autor + "\nEditorial: " + libro3.editorial + "\nPrecio: $ " + libro3.precio + "\nPrecio + IVA: $ " + libro3.precioIva);
        break;
        case "ficciones":
            alert(nombreIngresado + ", estos productos coinciden con su búsqueda de " + generoIngresado + " \nTítulo: " + libro4.titulo + "\nAutor: " + libro4.autor + "\nEditorial: " + libro4.editorial + "\nPrecio: $ " + libro4.precio + "\nPrecio + IVA: $ " + libro4.precioIva);
        break;
        default:
            alert(nombreIngresado + ", su búsqueda no se encuadra dentro de los géneros específicados, por favor, vuelva a ingresar el género por el cual desea consultar stock");
            ingresarGenero();
        break;

  }
}
ingresarGenero();


alert(nombreIngresado + ", gracias por consultar stock de libros en nuestra librería");*/


// --------------------------

// Desafío 6 - Entrega 25/7 - Arrays

//CONSTRUCTOR

class Libro {
    constructor(id, titulo, autor, editorial, genero, precio) {
        this.id = parseFloat(id);
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
        this.precio = parseFloat(precio);
        this.stock = true;
        this.precioIva = this.precio * 1.21;
    }
}

// ARRAY PUSH PARA SUMAR LIBROS

const libros = [];
libros.push (new Libro (23, "El cine según Hitchcock", "Francois Truffaut", "Alianza Editorial", "ensayo", 1600, true));
libros.push (new Libro (57, "Un lugar en el mundo", "Adolfo Aristarain", "Cantaro", "guion", 490, true));
libros.push (new Libro (68, "El guión", "Robert McKee", "Alba Editorial", "manual", 2900, true));
libros.push (new Libro (34, "El viaje del escritor", "Christopher Vogler", "Ma Non Troppo", "ensayo", 2481, true));
libros.push (new Libro (123, "Las aguas bajan turbias", "Eduardo Borrás", "Biblos", "guion", 792, true));
libros.push (new Libro (305, "Érase una vez en Hollywood", "Quentin Tarantino", "Reservoir Books", "ficcion", 3665, true));

for (const Libro of libros) {
    console.log(Libro.id, Libro.titulo, Libro.precio, Libro.precioIva);
}

// ARRAY PARA TRIMEAR EL STRING

if (typeof titulo == 'string')
titulo = titulo.trim ();

if (typeof autor == 'string')
autor = autor.trim ();

if (typeof editorial == 'string')
editorial = editorial.trim ();

if (typeof genero == 'string')
genero = genero.trim ();

// ARRAY PARA VER LOS LIBROS BARATOS

const baratos = libros.filter(Libro => Libro.precioIva < 2500);
console.log (baratos);

// ARRAY PARA VER LOS LIBROS CAROS

const caros = libros.filter(Libro => Libro.precioIva > 2500);
console.log (caros);

// ARRAY PARA VER LOS LIBROS NUEVOS

const nuevos = libros.filter(Libro => Libro.id > 300);
console.log (nuevos);
