const articlesSection = document.querySelector('#article')
const articleId = localStorage.getItem('article-id')

auth.onAuthStateChanged((user) => {
    if(!user) {
        location.assign('./signin.html')
    }
})

const display = (doc) => {
   const form = document.querySelector('#edit-form')
   const title = form.title
   const description = form.description
   const body = form.body
   const image = form.image

   title.value = doc.subtitle,
   description.value = doc.description,
   body.value = doc.body,
   image.value = doc.image
 updateArticle = document.getElementById('update');
 form.addEventListener('submit', (e)=>{
     e.preventDefault()
     db.collection('Sibo').doc(articleId).update({
         subtitle: title.value,
         body: body.value,
         description: description.value,
         image: image.value
     }).then(res => {
         console.log(res)
    })
 })
}

db.collection('Sibo').doc(articleId).get().then(res => {
    display(res.data())
})
