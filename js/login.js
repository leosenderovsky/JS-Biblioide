import { User } from "./user.js";
import { UI } from "./UI.js";

document.getElementById("login")
document.addEventListener("submit", function (e) {

  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = new User(username, email, password);

  const ui = new UI();

  if (username === "" || email === "" || password === "") {
  ui.showMessage("Por favor, complete todos los campos", "danger");
  }

  ui.addUser(user);
  ui.showMessage(username + ", gracias por ingresar en la plataforma", "success");
  ui.resetForm();
  });

document.getElementById("login-message").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});

