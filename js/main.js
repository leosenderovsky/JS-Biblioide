// Desafío 4 - Entrega 18/7

let nombreIngresado = prompt("Ingrese su nombre");
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

alert(nombreIngresado + ", usted desea comprar " + resultado + " libros");