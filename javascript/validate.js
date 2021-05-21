// Get the modal
var successModal = document.getElementById("successModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    successModal.style.display = "none";
    resetForm();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == successModal) {
        successModal.style.display = "none";
        resetForm();
    }
}

function validateForm(){
    const form = document.querySelector('.contact-form');
    var name = form.querySelector('.input-name');
    var email = form.querySelector('.input-email');
    var message = form.querySelector('.input-message');
    var namefail = document.querySelector('.namefail');
    var emailfail = document.querySelector('.emailfail');
    var messagefail = document.querySelector('.messagefail');
    var fail = false;
    
    messagefail.textContent = "";
    emailfail.textContent = "";
    namefail.textContent = "";

    if (message.value == "") {
        messagefail.textContent = "🛈 Field cannot be empty";
        message.select();
        fail = true;
    }
    if (email.value.indexOf("@") <= 0) {
        emailfail.textContent = "🛈 Please enter a valid email address";
        email.select();
        fail = true;
    }
    if (email.value == "") {
        emailfail.textContent = "🛈 Field cannot be empty";
        email.select();
        fail = true;
    }
    if (name.value == "") {
        namefail.textContent = "🛈 Field cannot be empty";
        name.select();
        fail = true;
    }

    if (fail){
        return false;
    }
    submitted=true;
    var successModal = document.getElementById("successModal");
    successModal.style.display = "block";
    return true;
}

function resetForm(){
    document.getElementById("gform").reset();
    //document.querySelector('.namefail').textContent = "";
    //document.querySelector('.emailfail').textContent = "";
    //document.querySelector('.messagefail').textContent = "";
}