var queries = document.getElementById('queries')

auth.onAuthStateChanged((user) => {
    if(!user) {
        location.assign('./signin.html')
    }
})

const display = (doc) => {
const sections  = document.querySelector('.query-container')
const query = document.createElement('div')
const name = document.createElement('h4')
const subject = document.createElement('p')
const email = document.createElement('p')

email.textContent = doc.email
name.textContent = doc.name
subject.textContent = doc.subject

query.appendChild(name)
query.appendChild(email)
query.appendChild(subject)

sections.appendChild(query)
} 

db.collection('contactform').get().then(resp =>{
    resp.docs.forEach((doc) => display(doc.data()))
})
