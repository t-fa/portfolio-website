// DOM manipulation for bear mode
function bearMode(){
    var bare = document.getElementById("bare");
    if(bare){
        bare.textContent = "bear";
    }
    var bearimg = "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
    var p = document.getElementById("mainp");
    if(p){
        p.textContent = "This is me thinking about computers:";
    }
    var img = document.getElementById("mainimg");
    if(img){
        img.src = bearimg;
    }
    var name = document.getElementById("name");
    if(name){
        name.textContent = "a bear";
    }
    var contact = document.getElementById("contacthello");
    if(contact){
        contact.textContent = "Send honey!";
    }
}

// sends an AJAX request to nodemailer to send an email and validates input
function contactForm(){
    var submitbutton = document.getElementById('submitbutton');
    if(submitbutton){
        submitbutton.addEventListener('click', function(event){
            var req = new XMLHttpRequest();
            var span = document.getElementById("response");
            var payload = {};
            payload.name = document.getElementById("contactname").value;
            payload.email = document.getElementById("contactemail").value;
            payload.subject = document.getElementById("contactsubject").value;
            payload.body = document.getElementById("contactbody").value;
            if(validateInput()){
                req.open('POST', "/", true);
                req.setRequestHeader('Content-Type', 'application/json');
                req.addEventListener('load',function(){
                    if(req.status >= 200 && req.status < 400){
                        span.textContent = "Email successfully sent!";
                        document.getElementById("contactname").value = "";
                        document.getElementById("contactemail").value = "";
                        document.getElementById("contactsubject").value = "";
                        document.getElementById("contactbody").value = "";
                    } else {
                        span.textContent = "An error occurred. Please try again.";
                    }
                });
                req.send(JSON.stringify(payload));
            }
            event.preventDefault();
        });
    }
}

function validateInput(){
    var span = document.getElementById("response");
    var payload = {};
    payload.name = document.getElementById("contactname").value;
    payload.email = document.getElementById("contactemail").value;
    payload.subject = document.getElementById("contactsubject").value;
    payload.body = document.getElementById("contactbody").value;

    // check for null
    if(payload.name === ""){
        span.textContent = "Name cannot be blank! ";
        span.classList.add("error");
        return false;
    }
    if(payload.email === ""){
        span.textContent = "Email cannot be blank! ";
        span.classList.add("error");
        return false;
    }
    if(payload.subject === ""){
        span.textContent = "Subject cannot be blank! ";
        span.classList.add("error");
        return false;
    }
    if(payload.body === ""){
        span.textContent = "Body cannot be blank! ";
        span.classList.add("error");
        return false;
    }

    // check for valid email
    if(!validateEmail(payload.email)){
        span.textContent = "Please enter a valid email!";
        span.classList.add("error");
        return false;
    }

    if(payload.name && payload.email && payload.subject && payload.body){
        span.textContent = "";
        span.classList.remove("error");
        return true;
    }
}

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

if(document.getElementById("submitbutton")){
    document.addEventListener('DOMContentLoaded', contactForm);
}
document.getElementById("bearmode").addEventListener('click', bearMode);