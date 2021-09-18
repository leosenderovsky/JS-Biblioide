export class UI {
    addContact(contact) {
        const contactAdd = document.getElementById('name')
     }
     resetForm() {
         document.getElementById("contact").reset();
     }
     
     showMessage(message, cssClass) {
         const div = document.createElement("div");
         div.className = `alert alert-${cssClass} mt-2 text-center font-weight-bold`;
         div.appendChild(document.createTextNode(message));
     
         const container = document.querySelector("#contact-container");
         const app = document.querySelector("#contact");
     
         container.insertBefore(div, app);        
     
         setTimeout(function () {
           document.querySelector(".alert");
         }, 40000);
       }           
 }   