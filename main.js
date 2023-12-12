const $ = (selector) => document.querySelector(selector)
const id = () => self.crypto.randomUUID()
const get = (key) => JSON.parse(localStorage.getItem(key))
const set = (key, arr) => (localStorage.setItem(key, JSON.stringify(arr)))

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
   set('users', users)
}


const  initializer = () =>{
   if(!get('users')){
      set('users', users)
   }else{
      get('users')
   }
   $('#btnAddUser').addEventListener('click', btnAddUser)
}

window.addEventListener('load', initializer)

