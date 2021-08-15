const tituloGuiones = document.getElementById('title-guiones');
tituloGuiones.textContent = "Guiones";
tituloGuiones.className = 'title-subsection';

const itemsGuiones = document.getElementById('itemsGuiones');
const templateCardGuiones = document.getElementById('template-card-guiones').content;
const fragment = document.createDocumentFragment();
let carrito = {}


document.addEventListener('DOMContentLoaded', () => {
    fetchDataGuiones();
})

itemsGuiones.addEventListener('click', e => {
    addCarrito(e);
})

const fetchDataGuiones = async () => {
    try {
        const res = await fetch('api.json');
        const response = await res.json();
        const data = response.filter((producto) => producto.genero === "guion")
        pintarCardsGuiones(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCardsGuiones = data => {
    data.forEach(producto => {
        templateCardGuiones.querySelector('h5').textContent = producto.titulo;
        templateCardGuiones.querySelector('.price').textContent = producto.precio;
        templateCardGuiones.querySelector('img').setAttribute("src", producto.thumbnailUrl);
        templateCardGuiones.querySelector('.btn-primary').dataset.id = producto.id;
        const clone = templateCardGuiones.cloneNode(true);
        fragment.appendChild(clone);
    })
    itemsGuiones.appendChild(fragment);
}