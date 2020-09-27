const create = document.querySelector('#new-article')
const form = document.querySelector("#new-article")


//saving article
var button = document.getElementById('submit').addEventListener('click', buttonclicked ) 
 function buttonclicked(e) {
    e.preventDefault();
    db.collection('readmoreArticle').add({ 
        image: form.fileToUpload.value,
        h3: form.title.value,
        p: form.body.value,
    })
    form.fileToUpload.value = '';
    form.title.value = '';
    form.body.value = '';
}
