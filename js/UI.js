export class UI {
   addUser(user) {
       const userAdd = document.getElementById('user-message')
    }
    resetForm() {
        document.getElementById("register").reset();
    }
    
    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2 text-center font-weight-bold`;
        div.appendChild(document.createTextNode(message));
    
        const container = document.querySelector("#shop-container");
        const app = document.querySelector("#register-container");
    
        container.insertBefore(div, app);        
    
        setTimeout(function () {
          document.querySelector(".alert").remove();
        }, 20000);
      }
}



