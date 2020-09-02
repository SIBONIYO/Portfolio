
// Listen for form submit
document.getElementById('signin-form').addEventListener('submit', submitform);

function submitform(e){
    e.preventDefault();

    //Get values 
    var username = getInputVal('username');
    var password = getInputVal('password');
    
    console.log(name)

}

// Function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}
