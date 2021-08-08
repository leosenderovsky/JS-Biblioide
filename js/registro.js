import { User } from "./user.js";
import { UI } from "./UI.js";

document.getElementById("register")
document.addEventListener("submit", function (e) {

  e.preventDefault();
  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value;
  const country = document.getElementById('country-dropdown').value;
  const city = document.getElementById('city').value;
  const address = document.getElementById('address').value;

  const user = new User(name,username, email, password, phone, country, city, address);

  const ui = new UI();

  if (name === "" || username === "" || email === "" || password === "" || phone === "" || country === "" || city === "" || address === "") {
  ui.showMessage("Por favor, complete todos los campos", "danger");
  }

  ui.addUser(user);
  ui.showMessage(username + ", gracias por ingresar en la plataforma", "success");
  ui.resetForm();
  });

document.getElementById("user-message").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});