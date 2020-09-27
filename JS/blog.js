const blogContainer = document.querySelector('.blog-container')

//create element and render article
function renderArticle(doc){
    let article = document.createElement('article');
    let image = document.createElement('img');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let a = document.createElement('a');
    let i = document.createElement('i');

    article.setAttribute('class','blog');
    image.setAttribute('src',`${doc.data().image}`);
    h3.textContent = doc.data().h3;
    p.textContent = doc.data().p;
    a.setAttribute('class','btn');
    a.setAttribute('href','article.html');
    a.textContent = "readMore";
    i.setAttribute('class','fas fa-chevron-right');




    article.appendChild(image);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(a);

     
    blogContainer.appendChild(article);
}



//getting article

db.collection('Sibo').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderArticle(doc);
        console.log(doc.data())
    })
})

//reading more on the article
var a = document.getElementById('readmore').addEventListener('click',getmore)
function getmore(e){
    e.preventDefault();
    db.collection('readmoreArticle').add()
}


//create element and rendering newsletter
function renderEmail(doc){
    let email = document.createElement('email');

    email.setAttribute('class',putemail);

    emailBox.appendChild(email);

}

//saving newsletter

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('Sibo-newsletter').add({ 
        email: form.email.value,
    })
    form.email.value = '' 
})


//getting newsletter

db.collection('Sibo-newletter').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderEmail(doc);
        console.log(doc.data())
    })
})