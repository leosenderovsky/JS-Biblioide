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

    //SI LA CATEGORÍA INCLUYE EN EL ID LA PALABRA "DESTACADOS", BORRAMOS ESA PALABRA DEL TÍTULO

    let destacados = "-destacados";

    if(categoria.includes(destacados)) {
      titulo.text(categoria.slice(0, -11))
    }
  } 
  

  //TOMANDO EL ID ITEMS+VALUE CATEGORIA PARA LOS ITEMS DEL CARRITO (EN JS)
  let items = document.getElementById('items-'+categoria);

  //TOMANDO EL ID ITEMS+VALUE CATEGORIA PARA LOS ITEMS DEL CARRITO (EN JQUERY)
  //let items = $('#items-'+categoria);

  const productos = document.getElementById('productos');

  const footer = document.getElementById('footer');

  const comprar = document.getElementById('comprar')

  //TOMANDO EL ID TEMPLATECARD+VALUE CATEGORIA PARA LAS CARDS DEL CARRITO (EN JS)
  let templateCard = document.getElementById('template-card-'+categoria).content;

  const templateFooter = document.getElementById('template-footer').content;

  const templateCarrito = document.getElementById('template-carrito').content;

  //const btnComprar = document.getElementById('template-comprar').content;

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

      //RECUPERAMOS DEL LOCAL STORAGE LOS PRODUCTOS CON LA KEY "CARRITO"
      if(localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
      }
    })

    $(productos).on('click', e => {
      btnAccion(e)
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
    if (e.target.classList.contains('btn-primary')) {      
      openCarrito()
      setCarrito(e.target.parentElement)
    }
    e.stopPropagation() 
  }

  const openCarrito = () => {
    if(($(".table").hide()) && (setCarrito.length != 0)) {
      $(".table").toggle();
      $("#achicar-carrito").show();
      $("#ampliar-carrito").hide();
    }
  }

  const setCarrito = objeto => {
    const producto = {
      id: objeto.querySelector('.btn-primary').dataset.id,
      titulo: objeto.querySelector('h5').textContent,
      precio: objeto.querySelector('.price').textContent,
      cantidad: 1
    }

    // ADICIONARLE UNO MÁS A LA CANTIDAD DEL PRODUCTO CADA VEZ QUE APRIETE COMPRAR

    if(carrito.hasOwnProperty(producto.id)){
      producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}
    pintarCarrito()
  }

  // PINTAMOS EL CARRITO
  const pintarCarrito = () =>{
    //console.log(carrito)
    productos.innerHTML = ''
    Object.values(carrito).forEach(producto => {
      //templateCarrito.querySelector('th').textContent = producto.id
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

    pintarBtnComprar()

    //GUARDAMOS LOS PRODUCTOS EN EL LOCAL STORAGE CON LA KEY "CARRITO"
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }

  // PINTAMOS EL FOOTER DEL CARRITO
  const pintarFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0) {
      footer.innerHTML = `
      <th scope="row" colspan="0" class="subtitle-carrito no-border">Carrito vacío</th>
      `
      return
    }

    // ACUMULADOR DE PRODUCTOS EN EL CARRITO    
    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad,0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    // VACIAR CARRITO
    const btnVaciarCarrito = document.getElementById('vaciar-carrito')
    btnVaciarCarrito.addEventListener('click', () => {
      carrito = {}
      pintarCarrito()
    })
    
  } 

  // PINTAMOS EL BOTON COMPRAR AL AGREGAR CUALQUIER PRODUCTO AL CARRITO
  const pintarBtnComprar = () => {
    if(Object.keys(carrito).length === 0) {
      comprar.innerHTML = ''      
    }else{
      comprar.innerHTML = `
    <th scope="row" class="no-border no-display"></th>
          <td class="no-border no-display"></td>
          <td class="no-border no-display"></td>
          <td class="no-border">
          <button class="btn btn-danger btn-sm" id="btn-comprar">
            Comprar
          </button>
          </td>
    `
    }    

    /* $("#btn-comprar").on('click', e => {
      if(window.confirm('Para confirmar la compra registrate acá')){
        window.location.href='registro.html';
      }
    }) */

    $("#btn-comprar").on('click', e => {
      Swal.fire({
        title: 'Confirmá tu compra',
        text: "Para confirmarla, registrate acá",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#1D4D4F',
        cancelButtonColor: '#6BA8A9',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {
          /* Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ) */
          window.location.href='registro.html';
        }
      })

    })

    
    
    return 

  }
  

  const btnAccion = e => {
    
    //AUMENTAMOS LA CANTIDAD DE X PRODUCTO EN EL CARRITO
    if(e.target.classList.contains('btn-info')) {

      const producto = carrito[e.target.dataset.id]
      producto.cantidad++

      carrito[e.target.dataset.id] = {...producto}
      pintarCarrito()
    }

    //DISMINUIMOS LA CANTIDAD DE X PRODUCTO EN EL CARRITO
    if(e.target.classList.contains('btn-danger')) {

      const producto = carrito[e.target.dataset.id]
      producto.cantidad--

      //SACAMOS EL PRODUCTO DEL CARRITO SI LA CANTIDAD ES IGUAL A CERO
      if(producto.cantidad === 0) {
        delete carrito[e.target.dataset.id]
      }
      pintarCarrito()
    }

    e.stopPropagation()

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

// FUNCIONES PARA ACHICAR Y AGRANDAR LA VENTANA DEL CARRITO

const achicarCarrito = document.getElementById('achicar-carrito')

achicarCarrito.addEventListener('click', () => {
    $(".table").toggle(200);
    $("#achicar-carrito").toggle();
    $("#ampliar-carrito").css("display", "");
    
});


const ampliarCarrito = document.getElementById('ampliar-carrito')

ampliarCarrito.addEventListener('click', () => {
    $(".table").show(200)
    $("#ampliar-carrito").toggle();
    $("#achicar-carrito").toggle();
    $("#ampliar-carrito").css("display", "none");

}); 