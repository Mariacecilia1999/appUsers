
const $ = (selector) => document.querySelector(selector)


const  btnAddUser = (e) =>{
   e.preventDefault()
   console.log($('#inputName').value)
}

$('#btnAddUser').addEventListener('click', btnAddUser)