const $ = (selector) => document.querySelector(selector)
const id = () => self.crypto.randomUUID()

const users = [{
   name: 'Ana', 
   id: id()
}]


const  btnAddUser = (e) =>{
   e.preventDefault()
   users.push({
      name: $('#inputName').value,
      id: id()
})
$('#inputName').value = ''
console.log(users)
}



$('#btnAddUser').addEventListener('click', btnAddUser)