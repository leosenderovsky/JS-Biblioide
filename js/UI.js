export class UI {
   addUser(user) {
       const userAdd = document.getElementById('login-message')
       /*
       const element = document.createElement('div')
       element.innerHTML = `<div class="card text-center mb-4">
       <div class="card-body">
       <strong>Ya estás logueado, bienvenido a Biblioide</strong>
       </div>
       </div>
       `;
       
       userAdd.appendChild(element);*/
    }
    resetForm() {
        document.getElementById("register").reset();
    }
    
    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2 text-center font-weight-bold`;
        div.appendChild(document.createTextNode(message));
    
        const container = document.querySelector("#register-container");
        const app = document.querySelector("#register");
    
        container.insertBefore(div, app);        
    
        setTimeout(function () {
          document.querySelector(".alert").remove();
        }, 20000);
      }
}



