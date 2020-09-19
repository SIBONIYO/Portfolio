function validation(){
    alert('Submited successfully')
}
const username = document.getElementById('username')
const password = document.getElementById('password')
const submit= document.getElementById('submit')
const errorElement= document.getElementById('error')
const login = document.querySelector('#submit')
const form = document.querySelector('#form')

form.addEventListener ('submit', (e)=> { 
    let message = []
    if (username.value === '' || username.value == null)
    messages.push('username is required')
    
    if (password.value === '' || password.value == null)
    messages.push ( 'password is required')

    if (messages.length > 0)
    e.preventDefault()
    errorElement.innerText = messages.join(',')
}) 

//create element and render signin
function renderSignin(docs){
    let li = document.createElement('li');
    let username = document.createElement('span');
    let password = document.createElement('span');
}

    li.setAttribute('data-id', doc.id);
        username.textContent = doc.data().username;
        password.textContent = doc.date().password;

    li.appendchild(username);
    li.appendchild(password);

    login.appendchild(li);


//saving info address signin
form.addEventListener('Login', (e) =>{
    e.preventDefault();
    db.collection('Sibo-signin').add({ 
        username: form.username.value,
        password: form.password.value,
    })
    form.username.value = ''
    form.password.value = ''
})


//getting info address Signin

db.collection('Sibo-signin').get().then((snapshot) =>{
    snapshot.docs.forEach(docs =>{
        //renderArticle(doc);
        console.log(docs.data())
    })
})

