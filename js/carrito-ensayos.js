const tituloEnsayos = document.getElementById('title-ensayos');
tituloEnsayos.textContent = "Ensayos";
tituloEnsayos.className = 'title-subsection';

const itemsEnsayos = document.getElementById('itemsEnsayos');
const templateCardEnsayos = document.getElementById('template-card-ensayos').content;
const fragment = document.createDocumentFragment();
let carrito = {}


document.addEventListener('DOMContentLoaded', () => {
    fetchDataEnsayos();
})

itemsEnsayos.addEventListener('click', e => {
    addCarrito(e);
})

const fetchDataEnsayos = async () => {
    try {
        const res = await fetch('api.json');
        const response = await res.json();
        const data = response.filter((producto) => producto.genero === "ensayo")
        pintarCardsEnsayos(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCardsEnsayos = data => {
    data.forEach(producto => {
        templateCardEnsayos.querySelector('h5').textContent = producto.titulo;
        templateCardEnsayos.querySelector('.price').textContent = producto.precio;
        templateCardEnsayos.querySelector('img').setAttribute("src", producto.thumbnailUrl);
        templateCardEnsayos.querySelector('.btn-primary').dataset.id = producto.id;
        const clone = templateCardEnsayos.cloneNode(true);
        fragment.appendChild(clone);
    })
    itemsEnsayos.appendChild(fragment);
}