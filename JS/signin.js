
const errorElement= document.getElementById('error')
const login = document.querySelector('#submit')
const form = document.querySelector('#form')

form.addEventListener ('submit', (e)=> { 
    e.preventDefault()

    auth.signInWithEmailAndPassword(form.email.value, form.password.value)
    .then(user => {
      location.assign('./Dashboard.html')

    })
    .catch((error) => {
      console.log(error)
      });
  //  if (password = true (
  //      login.setAttribute('href','dashboard.html'),
  //      login.addEventListener('click',(e)=>
  //      e.preventDefault(),
  //      console.log(res.data()))
  //      ));
}) 
