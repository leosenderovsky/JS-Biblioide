const tituloManuales = document.getElementById('title-manuales');
tituloManuales.textContent = "Manuales";
tituloManuales.className = 'title-subsection';

const itemsManuales = document.getElementById('itemsManuales');
const templateCardManuales = document.getElementById('template-card-manuales').content;
const fragment = document.createDocumentFragment();
let carrito = {}


document.addEventListener('DOMContentLoaded', () => {
    fetchDataManuales();
})

itemsManuales.addEventListener('click', e => {
    addCarrito(e);
})

const fetchDataManuales = async () => {
    try {
        const res = await fetch('api.json');
        const response = await res.json();
        const data = response.filter((producto) => producto.genero === "manual")
        pintarCardsManuales(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCardsManuales = data => {
    data.forEach(producto => {
        templateCardManuales.querySelector('h5').textContent = producto.titulo;
        templateCardManuales.querySelector('.price').textContent = producto.precio;
        templateCardManuales.querySelector('img').setAttribute("src", producto.thumbnailUrl);
        templateCardManuales.querySelector('.btn-primary').dataset.id = producto.id;
        const clone = templateCardManuales.cloneNode(true);
        fragment.appendChild(clone);
    })
    itemsManuales.appendChild(fragment);
}