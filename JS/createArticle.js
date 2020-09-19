const create = document.querySelector('#new-article')
const form = document.querySelector("#new-article")






//saving article
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    //console.log("string")
    db.collection('Sibo').add({ 
        title: form.title.value,
        date: form.date.value,
        //image: form.image.value,
        description: form.description.value,
        body: form.body.value,
        name: form.name.value,
        tel: form.tel.value,
        email: form.email.value,
    })
    form.title.value = ''
    form.date.value = ''
    //form.image.value = ''
    form.description.value = ''
    form.body.value = ''
    form.name.value = ''
    form.tel.value = ''
    form.email.value = ''
})