import { User } from "./user.js";
import { UI } from "./UI.js";
/*
document.getElementById("login")
document.addEventListener("submit", function (e) {

  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  localStorage.setItem('username', 'username.value');
  localStorage.setItem('email', 'email.value');
  localStorage.setItem('password', 'password.value');
  const user = new User(username, email, password);

  const ui = new UI();

  if (username === "" || email === "" || password === "") {
    ui.showMessage("Por favor, complete todos los campos", "danger");
  }

  if (username != "" && email != "" && password != "") {
    ui.addUser(user);
    ui.showMessage(username + ", gracias por ingresar en la plataforma", "success");
    ui.resetForm();
  }
  
  });

document.getElementById("login-message").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});*/

const login = document.getElementById('login-container')
login.className = "login-container"
const element = document.getElementById('login')
element.innerHTML = `<div class="form-outline mb-4">
  <input type="username" id="username" class="form-control" />
  <label class="form-label" for="form1Example1">Nombre de usuario</label>
</div>
<div class="form-outline mb-4">
  <input type="email" id="email" class="form-control" />
  <label class="form-label" for="form1Example1">Email</label>
</div>
<div class="form-outline mb-4">
  <input type="password" id="password" class="form-control" />
  <label class="form-label" for="form1Example2">Contraseña</label>
</div>
<div class="row mb-4">
  <div class="col d-flex justify-content-center">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
      <label class="form-label" for="form1Example3">
        Recordarme
      </label>
    </div>
  </div>
  <div class="col text-center">
    <a href="registro.html" class="form-label">¿No estás registrado? Registrate acá.</a>
  </div>
</div>
<button type="submit" class="btn btn-primary btn-block">Ingresar</button>`
login.appendChild(element)

document.addEventListener("submit", function (e) {

  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  localStorage.setItem('username', username.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('password', password.value);
  const user = new User(username, email, password);

  const ui = new UI();

  if (username === "" || email === "" || password === "") {
    ui.showMessage("Por favor, complete todos los campos", "danger");
  }

  if (username != "" && email != "" && password != "") {
    ui.addUser(user);
    ui.showMessage(username + ", gracias por ingresar en la plataforma", "success");    
    ui.resetForm();
    let userPanel = document.getElementById("login-message")
    userPanel.innerHTML = "<div>El carrito de " + username +"</div>"  
    element.replaceWith(userPanel)
  }
  
  });

/*document.getElementById("login-message").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});*/
  
  