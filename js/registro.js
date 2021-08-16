import { User } from "./user.js";
import { UI } from "./UI.js";

const register = document.getElementById('register-container')
register.className = "register-container"
const form = document.getElementById('register')
form.innerHTML = `
          <div class="form-outline mb-4">
            <input type="name" id="name" class="form-control" required />
            <label for="name" class="form-label">Nombre y apellido</label>
          </div>
          <div class="form-outline mb-4">
            <input type="username" id="username" class="form-control" required />
            <label for="username" class="form-label">Nombre de usuario</label>
          </div>
          <div class="form-outline mb-4">
            <input type="email" id="email" class="form-control" required />
            <label for="email" class="form-label">Email</label>
          </div>
          <div class="form-outline mb-4">
            <input type="password" id="password" class="form-control" required />
            <label for="password" class="form-label">Contraseña</label>
          </div>
          <div class="form-outline mb-4">
            <label class="form-label">Teléfono</label>
            <input id="phone" type="tel" name="phone" />            
            <!--<input type="submit" class="btn" value="Verificar" />-->
          </div>
          <div class="form-outline mb-4">
            <select id="country-dropdown" name="country" class="form-control">
            </select>
            <label class="form-label">País</label>
          </div>
          <div class="form-outline mb-4">
            <input type="city" id="city" class="form-control" />
            <label class="form-label">Ciudad</label>
          </div>
          <div class="form-outline mb-4">
            <input type="address" id="address" class="form-control" />
            <label class="form-label">Dirección</label>
          </div>
          <div class="form-outline mb-4">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3">Recordarme
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Ingresar</button>`
          register.appendChild(form)
  

//document.getElementById("register")
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

  console.log(name, username, email, password, phone, country, city, address);

  const user = new User(name,username, email, password, phone, country, city, address);

  const ui = new UI();

  if (name === "" || username === "" || email === "" || password === "" || phone === "" || country === "" || city === "" || address === "") {
  ui.showMessage("Por favor, complete todos los campos", "danger");
  }

  if (name != "" && username != "" && email != "" && password != "" && phone != "" && country != "" && city != "" && address != "")
  ui.addUser(user);
  //ui.showMessage(username + ", gracias por ingresar en la plataforma", "success");
  //ui.resetForm();

  const userRegister = document.getElementById('register')
  userRegister.className = "subtitle"
  userRegister.innerHTML = "<div>"+ username + ", gracias por registrarte en el sitio de Biblioide, pronto te enviaremos nuestras novedades</div>"    
  register.replaceChild(userRegister, form);

  });
/*
document.getElementById("user-message").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});*/