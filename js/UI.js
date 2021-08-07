export class UI {
   addUser(_user) {
       const userAdd = document.getElementById('login-message')
       const element = document.createElement('div')
       element.innerHTML = `<div class="card text-center mb-4">
       <div class="card-body">
       <strong>Ya estás logueado, bienvenido a Biblioide</strong>
       </div>
       </div>
       `;
       
       userAdd.appenchild(element);
    }
    resetForm() {
        document.getElementById("login").reset();
    }
    
    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
    
        const container = document.querySelector(".container");
        const app = document.querySelector("login-container");
    
        container.insertBefore(div, app);        
    
        setTimeout(function () {
          document.querySelector(".alert").remove();
        }, 3000);
      }
}



