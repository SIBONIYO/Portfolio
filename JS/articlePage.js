const articlesSection = document.querySelector('#article')
const articleId = localStorage.getItem('article-id')

const display = (doc) => {
    const article = document.createElement('article')
    const title = document.createElement('h2')
    const image = document.createElement('img')
    const body = document.createElement('p')
    const description = document.createElement('h4')

    title.textContent = doc.subtitle
    image.src = doc.image
    body.textContent = doc.body
    description.textContent = doc.description

    article.appendChild(title)
    article.appendChild(image)
    article.appendChild(description)
    article.appendChild(body)

    articlesSection.appendChild(article)

    const deleteArticle = document.querySelector('#delete');
    deleteArticle.addEventListener('click', () => {
        db.collection('Sibo').doc(articleId).delete().then(() => {
            location.assign('./blog.html')
        })
    })
}

db.collection('Sibo').doc(articleId).get().then(res => {
    display(res.data())
})

const displayComments = (doc) => {
    const comments = document.querySelector('#comments')
    const comment = document.createElement('div')
    const email = document.createElement('i')
    const name = document.createElement('h5')
    const body = document.createElement('p')

    body.textContent = doc.body
    name.textContent = doc.name
    email.textContent = doc.email

    comment.appendChild(name)
    comment.appendChild(email)
    comment.appendChild(body)

    comments.appendChild(comment)
} 
db.collection('comments').where("articleId",'==', articleId).get().then(resp =>{
    resp.docs.forEach((doc) => displayComments(doc.data()))
})

const commentForm = document.querySelector('#commentForm')
commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
  let obj = {

    name: commentForm.name.value,
    email: commentForm.email.value,
    body: commentForm.body.value,
    articleId,
  }

  db.collection('comments').add(obj).then(res =>{
      commentForm.name.value = ''
      commentForm.email.value = ''
      commentForm.body.value = ''
      console.log(res)
  })
    
})