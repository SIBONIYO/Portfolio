const create = document.querySelector('#new-article')
const form = document.querySelector("#new-article")
auth.onAuthStateChanged((user) => {
  if(!user) {
      location.assign('./signin.html')
  }
})
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let obj = {

    image: form.fileToUpload.value,
    subtitle: form.subtitle.value,
    description: form.description.value,
    body: form.body.value,
  }
  console.log(obj)

  db.collection('Sibo').add(obj)
    form.fileToUpload.value = '',
    form.subtitle.value = '';
    form.description.Value = '';
    form.body.Value = '';
    
    console.log(submit)

})

