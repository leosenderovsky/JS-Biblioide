const tituloFicciones = document.getElementById('title-ficciones');
tituloFicciones.textContent = "Ficciones";
tituloFicciones.className = 'title-subsection';

const itemsFicciones = document.getElementById('itemsFicciones');
const templateCardFicciones = document.getElementById('template-card-ficciones').content;
const fragment = document.createDocumentFragment();
let carrito = {}


document.addEventListener('DOMContentLoaded', () => {
    fetchDataFicciones();
})

itemsFicciones.addEventListener('click', e => {
    addCarrito(e);
})

const fetchDataFicciones = async () => {
    try {
        const res = await fetch('api.json');
        const response = await res.json();
        const data = response.filter((producto) => producto.genero === "ficcion")
        pintarCardsFicciones(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCardsFicciones = data => {
    data.forEach(producto => {
        templateCardFicciones.querySelector('h5').textContent = producto.titulo;
        templateCardFicciones.querySelector('.price').textContent = producto.precio;
        templateCardFicciones.querySelector('img').setAttribute("src", producto.thumbnailUrl);
        templateCardFicciones.querySelector('.btn-primary').dataset.id = producto.id;
        const clone = templateCardFicciones.cloneNode(true);
        fragment.appendChild(clone);
    })
    itemsFicciones.appendChild(fragment);
}