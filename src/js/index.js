import {saludo, despedida} from "./modules/example"
import {activeMenu} from './modules/active-menu'

// saludo()
// despedida()
activeMenu()

let contact = document.getElementById('contact')

document.addEventListener('click', ()=> {
  let checket = document.querySelectorAll('input[type="radio"]')
  console.log(checket);

  for (let i = 0; i < checket.length; i++) {
    if (checket[i].checked && checket[i].value == 'si') {
      contact.style.display = "block"
    } else if(checket[i].checked && checket[i].value == 'no') {
      contact.style.display = "none"
    }
  }

})
