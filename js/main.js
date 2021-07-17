function solicitarNombre () {
    let nombreIngresado = prompt("Ingrese su nombre");
    alert(nombreIngresado + ", gracias por visitar nuestra librería");
}
solicitarNombre ();

function ingresarCantidadLibros () {
    let cantidadEnsayos = parseInt(prompt(nombreIngresado + ", ingrese cuántos ensayos desea comprar"));
    console.log (nombreIngresado + "desea comprar" + cantidadEnsayos + "ensayos");

    let cantidadManuales = parseInt(prompt(nombreIngresado + ", ingrese cuántos manuales desea comprar"));
    console.log (nombreIngresado + "desea comprar" + cantidadManuales + "manuales");

    let cantidadGuiones = parseInt(prompt(nombreIngresado + ", ingrese cuántos libros de guiones desea comprar"));
    console.log (nombreIngresado + "desea comprar" + cantidadGuiones + "libros de guiones");

    let cantidadFicciones = parseInt(prompt(nombreIngresado + ", ingrese cuántos libros de ficción desea comprar"));
    console.log (nombreIngresado + "desea comprar" + cantidadFicciones + "libros de ficción");

}
ingresarCantidadLibros ();

function sumar(cantidadEnsayos, cantidadManuales, cantidadGuiones, cantidadFicciones) {
    return cantidadEnsayos + cantidadManuales + cantidadGuiones + cantidadFicciones;
}
let resultado = sumar(cantidadEnsayos, cantidadManuales, cantidadGuiones, cantidadFicciones);
sumar ();
alert(nombreIngresado + ", usted desea comprar" + resultado + "libros");