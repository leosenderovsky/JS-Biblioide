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
  ui.showMessage("Por favor, complete su nombre", "danger");
  }

  if (email === "") {
      ui.showMessage("Por favor, complete su email", "danger")
  }

  if (name != "" && email != "" && libroSearch === "" && message === "") {
      ui.showMessage("Por favor " + name + ", contanos qué libros estás buscando o dejanos tu consulta")
  }

  if (name != "" && email != "" && libroSearch != "" && message != "") {
      ui.addContact(contact)
      ui.showMessage("Gracias " + name + ", por contarnos los libros que estás buscando y dejarnos tu consulta. En breve te estaremos respondiendo y te escribiremos a " + email + " contándote cuando estén los libros de tu interés.")
      ui.resetForm()
  }

  if (name != "" && email != "" && libroSearch != "" && message === "") {
    ui.addContact(contact)
    ui.showMessage("Gracias " + name + ", por contarnos los libros que estás buscando. En breve te escribiremos a " + email + " contándote cuando estén los libros de tu interés.")
    ui.resetForm()
  }

  if (name != "" && email != "" && libroSearch === "" && message != "") {
    ui.addContact(contact)
    ui.showMessage("Gracias " + name + ", por dejarnos tu consulta. En breve te estaremos respondiendo a " + email + ".")
    ui.resetForm()
}
  });