export class UI {
    addContact(contact) {
        const contactAdd = document.getElementById('name')
     }
     resetForm() {
         document.getElementById("contact").reset();
     }
     
     showMessage(message, cssClass) {
         const div = document.createElement("div");
         div.className = `alert alert-${cssClass} mt-2`;
         div.appendChild(document.createTextNode(message));
     
         const container = document.querySelector("#contact-container");
         const app = document.querySelector("#contact");
     
         container.insertBefore(div, app);
       }           
 }   