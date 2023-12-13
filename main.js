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
                              <a onclick="deleteUser('${users.id}')">Eliminar</a>
                              <a onclick="connectedUser('${users.id}')">Conectado</a>
                           </div>`
   }
}

const deleteUser = (id) =>{
   const findUser = get('users').find(user => user.id === id)
   const filterUsers = get('users').filter(user => user.id != findUser.id)
   set('users', filterUsers)

   set('usersDeletes',[...get('usersDeletes'),findUser])

   showUsers(get('users'))
   showDelete(get('usersDeletes'))
}

const showDelete = (arr) =>{
   $('#deleted').innerHTML = '<h2>Eliminadas:</h2>'
  for(const deleteUser of arr){
         $('#deleted').innerHTML += `<h3>${deleteUser.name}</<h3>`
      }
   }


const connectedUser = (id) =>{
   const findConnected = get('users').find(user => user.id === id)
   console.log(findConnected)
   const filter = get('users').filter(user => user.id !== findConnected.id)
   console.log(filter)
   set('users', filter)
   set('connected',[...get('connected'),findConnected])
   showUsers(get('users'))
}


const  initializer = () =>{
   if(!get('users')){
      set('users', users)
   }else{
      get('users')
      if(get('users').length >= 1){
         showUsers(get('users'))
      }
   }
   if(!get('usersDeletes')){
      set('usersDeletes', [])
   }else{
      get('usersDeletes')
      if(get('usersDeletes').length >= 1){
      showDelete(get('usersDeletes'))
   }}
   if(!get('connected')){
      set('connected', [])
   }

   $('#btnAddUser').addEventListener('click', btnAddUser)
}

window.addEventListener('load', initializer)

