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

class Libro {
    constructor(titulo, autor, editorial, genero, precio) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
        this.precio = parseFloat(precio);
        this.stock = true;
    }
    sumaIva() {
        this.precio = this.precio * 1.21
    }
}
const libro1 = new Libro ("El guión", "Robert McKee", "Alba Editorial", "manual", 2900, true);
const libro2 = new Libro ("El viaje del escritor", "Christopher Vogler", "Ma Non Troppo", "ensayo", 2481, true);
const libro3 = new Libro ("Las aguas bajan turbias", "Eduardo Borrás", "Biblos", "guion", 792, true);
const libro4 = new Libro ("Érase una vez en Hollywood", "Quentin Tarantino", "Reservoir Books", "ficcion", 3665, true);

libro1.sumaIva ();
libro2.sumaIva ();
libro3.sumaIva ();
libro4.sumaIva ();

let nombreIngresado = prompt("Ingrese su nombre")
alert(nombreIngresado + ", gracias por visitar nuestra librería");

let generoIngresado = "";

function ingresarGenero () {
    generoIngresado = prompt(nombreIngresado + ", ingrese el género de libro por el cual desea consultar stock: \n manuales \n ensayos \n guiones \n ficciones");
    console.log (nombreIngresado + " desea consultar por stock de " + generoIngresado);
}
ingresarGenero ();

let librosPorGenero ="";

switch (librosPorGenero) {
    case "manuales":
    case "Manuales":
    case "MANUALES":
        alert(nombreIngresado + " estos productos coinciden con su búsqueda de " + generoIngresado + ": \n" + libro1.titulo + "\n" + libro1.autor + "\n" + libro1.editorial + "\n Su precio es de $" + libro1.precio + "\n Su precio + IVA es de $" + libro1.sumaIva);
        break;
    case "ensayos":
    case "Ensayos":
    case "ENSAYOS":
        alert(nombreIngresado + " estos productos coinciden con su búsqueda de " + generoIngresado + ": \n" + libro2.titulo + "\n" + libro2.autor + "\n" + libro2.editorial + "\n Su precio es de $" + libro2.precio + "\n Su precio + IVA es de $" + libro2.sumaIva);
        break;
    case "guiones":
    case "Guiones":
    case "GUIONES":
        alert(nombreIngresado + " estos productos coinciden con su búsqueda de " + generoIngresado + ": \n" + libro3.titulo + "\n" + libro3.autor + "\n" + libro3.editorial + "\n Su precio es de $" + libro3.precio + "\n Su precio + IVA es de $" + libro3.sumaIva);
        break;
    case "ficciones":
    case "Ficciones":
    case "FICCIONES":
        alert(nombreIngresado + " estos productos coinciden con su búsqueda de " + generoIngresado + ": \n" + libro4.titulo + "\n" + libro4.autor + "\n" + libro4.editorial + "\n Su precio es de $" + libro4.precio + "\n Su precio + IVA es de $" + libro4.sumaIva);
        break;
    default:
        alert(nombreIngresado + " su búsqueda no se ajusta a los parámetros establecidos. Por favor, ingrese nuevamente el género de su preferencia"); 
}

librosPorGenero ();

alert(nombreIngresado + ", gracias por consultar stock de libros en nuestra librería");