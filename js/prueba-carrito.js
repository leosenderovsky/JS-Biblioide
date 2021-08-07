const itemsRecomendados = document.getElementById('itemsRecomendados');
const templateCardRecomendados = document.getElementById('template-card-recomendados').content;
const fragment = document.createDocumentFragment();
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchDataRecomendados();
})

itemsRecomendados.addEventListener('click', e => {
    addCarrito(e);
})

const fetchDataRecomendados = async () => {
    try {
        const res = await fetch('api.json');
        const response = await res.json();
        const data = response.filter((producto) => producto.recomendado === true)
        pintarCardsRecomendados(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCardsRecomendados = data => {
    data.forEach(producto => {
        templateCardRecomendados.querySelector('h5').textContent = producto.titulo;
        templateCardRecomendados.querySelector('.card-text').textContent = producto.precio;
        templateCardRecomendados.querySelector('img').setAttribute("src", producto.thumbnailUrl);
        templateCardRecomendados.querySelector('.btn-primary').dataset.id = producto.id;
        const clone = templateCardRecomendados.cloneNode(true);
        fragment.appendChild(clone);
    })
    itemsRecomendados.appendChild(fragment);
}

const addCarrito = e => {
    if(e.target.classList.contains('btn-primary')){
        console.log(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    console.log(objeto);
    const producto = {
        id: objeto.querySelector('.btn-primary').dataset.id,
        titulo: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1,
    }
    console.log(producto);
}

const itemsEnsayos = document.getElementById('itemsEnsayos');
const templateCardEnsayos = document.getElementById('template-card-ensayos').content;

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
        templateCardEnsayos.querySelector('.card-text').textContent = producto.precio;
        templateCardEnsayos.querySelector('img').setAttribute("src", producto.thumbnailUrl);
        templateCardEnsayos.querySelector('.btn-primary').dataset.id = producto.id;
        const clone = templateCardEnsayos.cloneNode(true);
        fragment.appendChild(clone);
    })
    itemsEnsayos.appendChild(fragment);
}

const itemsManuales = document.getElementById('itemsManuales');
const templateCardManuales = document.getElementById('template-card-manuales').content;

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
        templateCardManuales.querySelector('.card-text').textContent = producto.precio;
        templateCardManuales.querySelector('img').setAttribute("src", producto.thumbnailUrl);
        templateCardManuales.querySelector('.btn-primary').dataset.id = producto.id;
        const clone = templateCardManuales.cloneNode(true);
        fragment.appendChild(clone);
    })
    itemsManuales.appendChild(fragment);
}

const itemsGuiones = document.getElementById('itemsGuiones');
const templateCardGuiones = document.getElementById('template-card-guiones').content;

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
        templateCardGuiones.querySelector('.card-text').textContent = producto.precio;
        templateCardGuiones.querySelector('img').setAttribute("src", producto.thumbnailUrl);
        templateCardGuiones.querySelector('.btn-primary').dataset.id = producto.id;
        const clone = templateCardGuiones.cloneNode(true);
        fragment.appendChild(clone);
    })
    itemsGuiones.appendChild(fragment);
}

const itemsFicciones = document.getElementById('itemsFicciones');
const templateCardFicciones = document.getElementById('template-card-ficciones').content;

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
        templateCardFicciones.querySelector('.card-text').textContent = producto.precio;
        templateCardFicciones.querySelector('img').setAttribute("src", producto.thumbnailUrl);
        templateCardFicciones.querySelector('.btn-primary').dataset.id = producto.id;
        const clone = templateCardFicciones.cloneNode(true);
        fragment.appendChild(clone);
    })
    itemsFicciones.appendChild(fragment);
}

