import { User } from "./user.js";
import { UI } from "./UI.js";

document.getElementById("register")
document.addEventListener("submit", function (e) {

  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const country = document.getElementById('country').value;
  const city = document.getElementById('city').value;
  const address = document.getElementById('address').value;

  console.log(name, email, phone, country, city, address);

  const user = new User(name, email, phone, country, city, address);

  const ui = new UI();

  if (name === "" || email === "" || phone === "" || country === "" || city === "" || address === "") {
    ui.showMessage("Por favor, complete todos los campos", "danger");
  }

  if (name != "" && email != "" && phone != "" && country != "" && city != "" && address != "") {
    ui.addUser(user);
    ui.showMessage("Gracias " + name + " por comprar en Bibloide, te va a llegar la orden de compra para abonar a " + email + ".", "success");
    ui.resetForm();
  }
  });

document.getElementById("user-message").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});