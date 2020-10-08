 const blogContainer = document.querySelector('.blog-container')
//create element and render article
function renderArticle(doc){
    let article = document.createElement('article');
    let subtitle = document.createElement('h3');
    let description = document.createElement('h4');
    let body = document.createElement('div');
    let readMore = document.createElement('a');
    let image = document.createElement('img');

    article.setAttribute('class','article');
    subtitle.textContent = doc.data().subtitle;
    description.textContent = doc.data().description;
    body.textContent = doc.data().body.slice(0,100) + '...';
    image.src = doc.data().image
    image.setAttribute('class', 'image-preview')

    readMore.setAttribute('class','btn');
    readMore.setAttribute('href','articlepage.html');
    readMore.textContent = "readMore";
    
    readMore.addEventListener('click', () => {
        localStorage.setItem('article-id', doc.id)
    })

    // localStorage.setItem("articleId", doc.id)

    article.appendChild(subtitle);
    article.appendChild(image);
    article.appendChild(description);
    article.appendChild(body);
    article.appendChild(readMore);

     
    blogContainer.appendChild(article);
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
    let email = document.createElement('email');

    email.setAttribute('class',putemail);

    emailBox.appendChild(email);

}

//saving newsletter

form=document.getElementById('newsletter');
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