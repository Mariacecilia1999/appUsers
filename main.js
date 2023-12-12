const $ = (selector) => document.querySelector(selector)
const id = () => self.crypto.randomUUID()
const get = (key) => JSON.parse(localStorage.getItem(key))
const set = (key, arr) => (localStorage.setItem(key, JSON.stringify(arr)))

const users = [{
   name: 'Ana', 
   id: id()
}]


const adding = () =>{
   return{
      name: $('#inputName').value,
      id: id()
   }
}


const  btnAddUser = (e) =>{
   e.preventDefault()
   const arrNew = [...get('users'), adding()]
   set('users', arrNew)
   showUsers(get('users'))
   $('#inputName').value = ''

}



const showUsers = (arr) =>{
   $('#showUsers').innerHTML = ''
   for(const users of arr){
      $('#showUsers').innerHTML += `<div>
                              <h4>${users.name}</h4>
                           </div>`
   }
}


const  initializer = () =>{
   if(!get('users')){
      set('users', users)
   }else{
      get('users')
   }
   $('#btnAddUser').addEventListener('click', btnAddUser)
   showUsers(get('users'))
}

window.addEventListener('load', initializer)

