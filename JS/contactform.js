// Listen for a submit of contact form
var contactForm = document.getElementById('contactform')
 console.log(contactForm)
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let obj = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
    }

    db.collection('contactform').add(obj).then(res=>{console.log(res)})
        contactForm.name.value = '',
        contactForm.email.value = '';
        contactForm.subject.value = '';

    // show alert
      document.querySelector('.alert').style.display = 'block';

    //Hide alert after 4s
       setTimeOut(function(){
       document.querySelector('.alert').style.display = 'none';
    }, 4000);

});
    