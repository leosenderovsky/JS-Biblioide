$("#catalogo-title").text("Nuestro catálogo");

const json = "api/api.json";

$.get(json, function (respuesta, estado) {
      if(estado === "success"){
        let catalogo = respuesta;
        for (const producto of catalogo){
          $("#catalogo-main").prepend( `<div class="card">
                                              <div class="card-body">                                                
                                                  <h5 class="card-title">${producto.titulo}</h5>
                                                  <p class="card-text">${producto.autor}<br/>${producto.editorial}</p>
                                              </div>
                                          </div>`);
        }
      }
    });