// TOMANDO EL NOMBRE CATEGORIAS PARA LA VARIABLE CATEGORIAS CON LA QUE VOY A CLASIFICAR EL CATALOGO
const categorias = document.getElementsByName('categorias');

categorias.forEach(categoriaDiv => {
    //TOMANDO EL ATRIBUTO VALOR PARA LA VARIABLE CATEGORIA EN JS
    //let categoria = categoriaDiv.getAttribute('value');

  //TOMANDO EL ATRIBUTO VALOR PARA LA VARIABLE CATEGORIA EN JQUERY
  let categoria = $(categoriaDiv).attr('value');  

  //console.log(categoria);

    //TOMANDO EL ID TITLE+VALUE CATEGORIA PARA EL TITULO (EN JS)
  //let titulo = document.getElementById('title-'+categoria);

    //TOMANDO EL ID TITLE+VALUE CATEGORIA PARA EL TITULO (EN JQUERY)
  let titulo = $('#title-'+categoria);

  if (titulo != null) {
    //APLICANDO TEXTO AL TITULO EN JS
    //titulo.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);

    //APLICANDO TEXTO AL TITULO EN JQUERY
    $(titulo).text(categoria.charAt(0).toUpperCase() + categoria.slice(1));

    //APLICANDO CLASE AL TITULO EN JS
    //titulo.className = 'title-subsection';

    //APLICANDO CLASE AL TITULO EN JQUERY
    $(titulo).addClass('title-subsection');
  }

  //TOMANDO EL ID ITEMS+VALUE CATEGORIA PARA LOS ITEMS DEL CARRITO (EN JS)
  let items = document.getElementById('items-'+categoria);

  //TOMANDO EL ID ITEMS+VALUE CATEGORIA PARA LOS ITEMS DEL CARRITO (EN JQUERY)
  //let items = $('#items-'+categoria);

  const productos = document.getElementById('productos');

  const footer = document.getElementById('footer');

  //TOMANDO EL ID TEMPLATECARD+VALUE CATEGORIA PARA LAS CARDS DEL CARRITO (EN JS)
  let templateCard = document.getElementById('template-card-'+categoria).content;

  const templateFooter = document.getElementById('template-footer').content;

  const templateCarrito = document.getElementById('template-carrito').content;

  let fragment = document.createDocumentFragment();

  let carrito = {}
  
  if (items != null && templateCard != null) {
    
    //addEventListener en JS
    //items.addEventListener('click', e => {
    
    //reemplazo de addEventListener en Jquery
    $(items).on('click', e => {
    addCarrito(e);
    })

    //addEventListener en JS
    //document.addEventListener('DOMContentLoaded', () => {

    //reemplazo de addEventListener en Jquery
    $(document).on('DOMContentLoaded', () => {
      fetchDataProducts();
    })


    //FETCH API.JSON DE PRODUCTOS DEL CATALOGO

    let fetchDataProducts = async () => {
      try {
        const res = await fetch('api/api.json');
        const response = await res.json();
        const data = response.filter(filtrarProducto)
        pintarCards(data);
      } catch (error) {
        console.log(error);
      }
    }

    //FOR EACH PARA PINTAR LAS CARDS CON LOS DATOS DEL JSON

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

  // AGREGAR PRODUCTOS AL CARRITO

  const addCarrito = e => {
    //console.log(e.target)
    //console.log(e.target.classList.contains('btn-primary'))
    if (e.target.classList.contains('btn-primary')) {      
      setCarrito(e.target.parentElement)      
    }
    e.stopPropagation()
  }

  const setCarrito = objeto => {
    //console.log(objeto)
    const producto = {
      id: objeto.querySelector('.btn-primary').dataset.id,
      titulo: objeto.querySelector('h5').textContent,
      precio: objeto.querySelector('.price').textContent,
      cantidad: 1
    }

    // ADICIONARLE UNO MÁS A LA CANTIDAD DEL PRODUCTO CADA VEZ QUE APRETE COMPRAR

    if(carrito.hasOwnProperty(producto.id)){
      producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}
    pintarCarrito()
  }

  const pintarCarrito = () =>{
    //console.log(carrito)
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
      templateCarrito.querySelector('th').textContent = producto.id
      templateCarrito.querySelectorAll('td')[0].textContent = producto.titulo
      templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
      templateCarrito.querySelector('.btn-info').dataset.id = producto.id
      templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
      templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
      const clone = templateCarrito.cloneNode(true)
      fragment.appendChild(clone)
    })
    productos.appendChild(fragment)

    pintarFooter()
  }

  const pintarFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0) {
      footer.innerHTML = `
      <th scope="row" colspan="5">Carrito vacío</th>
      `
    }

    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad,0)
    //console.log(nCantidad)
  }


  // FILTRADO PARA QUE ME MUESTRE EN CADA CATEGORÍA SOLAMENTE LOS PRODUCTOS QUE RESPONDEN A LAS CONDICIONES ESPECIFICADAS
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