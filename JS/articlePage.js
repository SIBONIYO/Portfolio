const blogContainer = document.querySelector('.blog-container')


//create element and render article
function renderArticle(doc){
    let article = document.createElement('article');
    let image = document.createElement('img');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    article.setAttribute('class','blog');
    image.setAttribute('src',`${doc.data().image}`);
    h3.textContent = doc.data().h3;
    p.textContent = doc.data().p;
    

    article.appendChild(image);
    article.appendChild(h3);
    article.appendChild(p);


     
    blogContainer.appendChild(article);
}



//getting article

db.collection('readmoreArticle').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderArticle(doc);
        console.log(doc.data())
    })
})