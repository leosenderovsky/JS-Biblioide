import { Contact } from "./contact-constructor.js";
import { UI } from "./UI-contact.js";


document.getElementById("contact")
document.addEventListener("submit", function (e) {    

  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const country = document.getElementById('country').value;
  const city = document.getElementById('city').value;
  const libroSearch = document.getElementById('libro-search').value;
  const message = document.getElementById('mensaje').value;


  console.log(name, email, country, city, libroSearch, message);

  const ui = new UI();
  
  const contact = new Contact(name, email, country, city, libroSearch, message);  

  if (name === "") {
  //ui.showMessage("Por favor, complete su nombre.", "danger");
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Por favor, completá tu nombre.',
    confirmButtonColor: '#1D4D4F',
  })
  }

  if (email === "") {
      //ui.showMessage("Por favor, complete su email.", "danger")
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completá tu email.',
        confirmButtonColor: '#1D4D4F',
      })
  }

  if (name != "" && email != "" && libroSearch === "" && message === "") {
      //ui.showMessage("Por favor " + name + ", contanos qué libros estás buscando o dejanos tu consulta.")
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ' + name + ', contanos qué libros estás buscando o dejanos tu consulta.',
        confirmButtonColor: '#1D4D4F',
      })
  }

  if (name != "" && email != "" && libroSearch != "" && message != "") {
      ui.addContact(contact)
      //ui.showMessage("Gracias " + name + ", por contarnos los libros que estás buscando y dejarnos tu consulta. En breve te estaremos respondiendo y te escribiremos a " + email + " contándote cuando consigamos " + libroSearch + ".")
      Swal.fire({
        icon: 'success',
        title: 'Gracias por escribirnos',
        text: 'Gracias, ' + name + ', por contarnos los libros que estás buscando y dejarnos tu consulta. En breve te estaremos respondiendo y te escribiremos a ' + email + ' contándote cuando consigamos ' + libroSearch + '.',
        confirmButtonColor: '#1D4D4F',
      })
      ui.resetForm()
  }

  if (name != "" && email != "" && libroSearch != "" && message === "") {
    ui.addContact(contact)
    //ui.showMessage("Gracias " + name + ", por contarnos los libros que estás buscando. En breve te escribiremos a " + email + " contándote cuando consigamos " + libroSearch + ".")
    Swal.fire({
      icon: 'success',
      title: 'Gracias por escribirnos',
      text: 'Gracias, ' + name + ', por contarnos los libros que estás buscando. En breve te escribiremos a ' + email + ' contándote cuando consigamos ' + libroSearch + '.',
      confirmButtonColor: '#1D4D4F',
    })
    ui.resetForm()
  }

  if (name != "" && email != "" && libroSearch === "" && message != "") {
    ui.addContact(contact)
    //ui.showMessage("Gracias " + name + ", por dejarnos tu consulta. En breve te estaremos respondiendo a " + email + ".")
    Swal.fire({
      icon: 'success',
      title: 'Gracias por escribirnos',
      text: 'Gracias, ' + name + ', por dejarnos tu consulta. En breve te estaremos respondiendo a ' + email + '.',
      confirmButtonColor: '#1D4D4F',
    })
    ui.resetForm()
}
  });