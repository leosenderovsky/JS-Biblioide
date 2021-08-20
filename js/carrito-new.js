const categoria = document.getElementById('categoria').value;

const titulo = document.getElementById('title-'+categoria);
if (titulo != null) {
    titulo.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1); //"Recomendados";
    titulo.className = 'title-subsection';
}

let carrito = {}

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

if (items != null && templateCard != null) {
    document.addEventListener('DOMContentLoaded', () => {
        fetchDataRecomendados();
    })

    items.addEventListener('click', e => {
        addCarrito(e);
    })

    const filterProduct = (producto) => {
        let aplicaFiltro = false;
        switch (categoria) {
            case 'ensayo':
                aplicaFiltro = producto.genero === "ensayo";
                break;
            case 'recomendado':
                aplicaFiltro = producto.recomendado === true;
        }
        return aplicaFiltro;
    }

    const fetchDataRecomendados = async () => {
        try {
            const res = await fetch('api.json');
            const response = await res.json();
            //const data = response.filter((producto) => producto.recomendado === true)
            const data = response.filter(filterProducto)
            pintarCardsRecomendados(data);
        } catch (error) {
            console.log(error);
        }
    }

    const pintarCardsRecomendados = data => {
        data.forEach(producto => {
            templateCard.querySelector('h5').textContent = producto.titulo;
            templateCard.querySelector('.price').textContent = producto.precio;
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl);
            templateCard.querySelector('.btn-primary').dataset.id = producto.id;
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        })
        items.appendChild(fragment);
    }
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

/*const tituloNovedades = document.getElementById('title-novedades');
if (tituloNovedades != null) {
    tituloNovedades.textContent = "Novedades";
    tituloNovedades.className = 'title-subsection';
}

const itemsNovedades = document.getElementById('itemsNovedades');
const templateCardNovedades = document.getElementById('template-card-novedades').content;
if (itemsNovedades != null && templateCardNovedades != null) {
    itemsNovedades.addEventListener('click', e => {
        addCarrito(e);
    })

    document.addEventListener('DOMContentLoaded', () => {
        fetchDataNovedades();
    })

    const fetchDataNovedades = async () => {
        try {
            const res = await fetch('api.json');
            const response = await res.json();
            const data = response.filter((producto) => producto.nuevo === true)
            pintarCardsNovedades(data);
        } catch (error) {
            console.log(error);
        }
    }

    const pintarCardsNovedades = data => {
        data.forEach(producto => {
            templateCardNovedades.querySelector('h5').textContent = producto.titulo;
            templateCardNovedades.querySelector('.price').textContent = producto.precio;
            templateCardNovedades.querySelector('img').setAttribute("src", producto.thumbnailUrl);
            templateCardNovedades.querySelector('.btn-primary').dataset.id = producto.id;
            const clone = templateCardNovedades.cloneNode(true);
            fragment.appendChild(clone);
        })
        itemsNovedades.appendChild(fragment);
    }
}

const tituloEnsayos = document.getElementById('title-ensayos');
if (tituloEnsayos != null) {
    tituloEnsayos.textContent = "Ensayos";
    tituloEnsayos.className = 'title-subsection';
}

const itemsEnsayos = document.getElementById('itemsEnsayos');
const templateCardEnsayos = document.getElementById('template-card-ensayos').content;
if (itemsEnsayos != null && templateCardEnsayos != null) {
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

            const data = response.filter((producto) => producto.genero === "ensayo" && producto.destacado === true)
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
}

const tituloManuales = document.getElementById('title-manuales');
if (tituloManuales != null) {
    tituloManuales.textContent = "Manuales";
    tituloManuales.className = 'title-subsection';
}

const itemsManuales = document.getElementById('itemsManuales');
const templateCardManuales = document.getElementById('template-card-manuales').content;
if (itemsManuales != null && templateCardManuales != null){
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
            const data = response.filter((producto) => producto.genero === "manual" && producto.destacado === true)
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
}

const tituloGuiones = document.getElementById('title-guiones');
if (tituloGuiones != null) {
    tituloGuiones.textContent = "Guiones";
    tituloGuiones.className = 'title-subsection';
}

const itemsGuiones = document.getElementById('itemsGuiones');
const templateCardGuiones = document.getElementById('template-card-guiones').content;
if (itemsGuiones != null && templateCardGuiones != null) {
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
            const data = response.filter((producto) => producto.genero === "guion" && producto.destacado === true)
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
}

const tituloFicciones = document.getElementById('title-ficciones');

if (tituloFicciones != null) {
    tituloFicciones.textContent = "Ficciones";
    tituloFicciones.className = 'title-subsection';
}

const itemsFicciones = document.getElementById('itemsFicciones');
const templateCardFicciones = document.getElementById('template-card-ficciones').content;

if (itemsFicciones != null && templateCardFicciones != null) {
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
            const data = response.filter((producto) => producto.genero === "ficcion" && producto.destacado === true)
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
}*/