/*const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

items.addEventListener('click', e => {
    addCarrito(e);
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        // console.log(data);
        pintarCards(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.titulo;
        templateCard.querySelector('.card-text').textContent = producto.precio;
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl);
        templateCard.querySelector('.btn-primary').dataset.id = producto.id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
}

const addCarrito = e => {
    //console.log(e.target);
    //console.log(e.target.classList.contains('btn-primary'));
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
/*
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

items.addEventListener('click', e => {
    addCarrito(e);
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        // console.log(data);
        pintarCards(data);
    } catch (error) {
        console.log(error);
    }
}
const pintarCards = data => {
    var arrayProductos = [];
    const ensayos = arrayProductos.filter(producto => producto.genero == ensayo);

    for (let producto of ensayos) {
        
        let contenedor = document.createElement("div");
        document.write(`<h2>${producto.genero}</h2>`);
        data.forEach(producto => {
            templateCard.querySelector('h5').textContent = producto.titulo;
            templateCard.querySelector('.card-text').textContent = producto.precio;
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl);
            templateCard.querySelector('.btn-primary').dataset.id = producto.id;
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        });
        items.appendChild(fragment);
        document.body.appendChild(contenedor);                        
    }
}*/


const tituloRecomendados = document.getElementById("recomendados");
tituloRecomendados.innerHTML = "Recomendados"
tituloRecomendados.className = 'title-subsection';
document.body.appendChild(tituloRecomendados);

const items = document.getElementById('items');
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetchDataRecomendados();
})

items.addEventListener('click', e => {
    addCarrito(e);
})


const fetchDataRecomendados = async () => {
    try {
        const res = await fetch('api.json');
        const response = await res.json();
        const data = response.filter((producto) => producto.recomendado === true)
        // console.log(data);
        pintarCardsRecomendados(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCardsRecomendados = data => {
    data.forEach(producto => {
        const libro = document.createElement("div");
        libro.innerHTML = `<img src='${producto.thumbnailUrl}' alt='${producto.titulo}' />
                            <h5> ${producto.titulo}</h5>
                            <h6> ${producto.autor}</h6>
                            <p> $ ${producto.precio}</p>
                            <button class='btn-primary'>Comprar</button>
            </div>`;
        libro.className = 'text';
        const clone = libro.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
}

const tituloEnsayos = document.createElement("h2");
tituloEnsayos.innerHTML = "Ensayos"
tituloEnsayos.className = 'title-subsection';
document.body.appendChild(tituloEnsayos);

document.addEventListener('DOMContentLoaded', () => {
    fetchDataEnsayos();
})

const fetchDataEnsayos = async () => {
    try {
        const res = await fetch('api.json');
        const response = await res.json();
        const data = response.filter((producto) => producto.genero === "ensayo")
        // console.log(data);
        pintarCardsEnsayos(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCardsEnsayos = data => {
    data.forEach(producto => {
        const libro = document.createElement("div");
        libro.innerHTML = `<img src='${producto.thumbnailUrl}' alt='${producto.titulo}' />
                            <h5> ${producto.titulo}</h5>
                            <h6> ${producto.autor}</h6>
                            <p> $ ${producto.precio}</p>
                            <button class='btn-primary'>Comprar</button>
            </div>`;
        libro.className = 'text';
        const clone = libro.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
}


const addCarrito = e => {
    //console.log(e.target);
    //console.log(e.target.classList.contains('btn-primary'));
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