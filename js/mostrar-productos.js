const categorias = document.getElementsByName('categorias');

categorias.forEach(categoriaDiv => {
  let categoria = categoriaDiv.getAttribute('value');

  //console.log(categoria);
  let titulo = document.getElementById('title-'+categoria);

  if (titulo != null) {
    titulo.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
    titulo.className = 'title-subsection';
  }

  let items = document.getElementById('items-'+categoria);
  let templateCard = document.getElementById('template-card-'+categoria).content;
  let fragment = document.createDocumentFragment();
  if (items != null && templateCard != null) {
    items.addEventListener('click', e => {
      addCarrito(e);
    })

    document.addEventListener('DOMContentLoaded', () => {
      fetchDataProducts();
    })

    let fetchDataProducts = async () => {
      try {
        const res = await fetch('api.json');
        const response = await res.json();
        const data = response.filter(filtrarProducto)
        pintarCards(data);
      } catch (error) {
        console.log(error);
      }
    }

    let pintarCards = data => {
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
  const filtrarProducto = producto => {
    /*return producto.nuevo === true;*/
    let aplicaFiltro = false;
    switch (categoria) {
      case 'ensayos':
        aplicaFiltro = producto.genero === "ensayo";
        break;
      case 'ensayos-destacados':
        aplicaFiltro = producto.genero === "ensayo" && producto.destacado === true;
        break;
      case 'ficciones':
        aplicaFiltro = producto.genero === "ficcion";
        break;
      case 'ficciones-destacados':
        aplicaFiltro = producto.genero === "ficcion" && producto.destacado === true;
        break;
      case 'guiones':
        aplicaFiltro = producto.genero === "guion";
        break;
      case 'guiones-destacados':
        aplicaFiltro = producto.genero === "guion" && producto.destacado === true;
        break;
      case 'manuales':
        aplicaFiltro = producto.genero === "manual";
        break;
      case 'manuales-destacados':
        aplicaFiltro = producto.genero === "manual" && producto.destacado === true;
        break;
      case 'novedades':
        aplicaFiltro = producto.nuevo === true;
        break;
      case 'recomendados':
        aplicaFiltro = producto.recomendado === true;
        break;
    }
    return aplicaFiltro;
  }
});

