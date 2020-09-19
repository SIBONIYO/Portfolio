const readMore =  document.querySelector('#readmore');
const form = document.querySelector('#newsletter')
const submit = document.querySelector('button')

//create element and render article
function renderArticle(doc){
    let li = document.createElement('li');
    let title = document.createElement('span');
    let date = document.createElement('span');
    let image = document.createElement('span');
    let description = document.createElement('span');
    let body = document.createElement('span');
    let name = document.createElement('span');
    let tel = document.createElement('span');
    let email = document.createElement('span')




    li.setAttribute('data-id',doc.id);
    title.textContent = doc.data().title;
    date.textContent = doc.data().date;
    image.imagearea = doc.data().image;
    description.textContent = doc.data().description;
    body.textContent = doc.data().body;
    name.textContent = doc.data().name;
    tel.textcontent = doc.data().tel;
    email.textContent = doc.data().email;



    li.appendChild(title);
    li.appendChild(date);
    li.appendChild(image);
    li.appendChild(description);
    li.appendChild(body);
    li.appendChild(name);
    li.appendChild(tel);
    li.appendChild(email);

    readMore.appendChild(li);
}

//getting article

db.collection('Sibo').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderArticle(doc);
        console.log(doc.data())
    })
})

//create element and rendering newsletter
function renderEmail(doc){
    let li = document.createElement('li');
    let email = document.createElement('span')

    li.setAttribute('data-id',doc.id);
    email.textContent = doc.data().email;

    li.appendChild(email);

    submit.appendChild(li);

}


//getting newsletter

db.collection('Sibo-newletter').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderEmail(doc);
        console.log(doc.data())
    })
})


//saving newsletter

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('Sibo-newsletter').add({ 
        email: form.email.value,
    })
    form.email.value = '' 
})