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

function contactForm(){
    var submitbutton = document.getElementById('submitbutton');
    if(submitbutton){
        submitbutton.addEventListener('click', function(event){
            var req = new XMLHttpRequest();
            var payload = {};
            payload.name = document.getElementById("contactname").value;
            payload.email = document.getElementById("contactemail").value;
            payload.subject = document.getElementById("contactsubject").value;
            payload.body = document.getElementById("contactbody").value;
            var span = document.getElementById("response");
            req.open('POST', "/", true);
            req.setRequestHeader('Content-Type', 'application/json');
            req.addEventListener('load',function(){
                if(req.status >= 200 && req.status < 400){
                    span.textContent = "Email successfully sent!";
                } else {
                    span.textContent = "An error occurred. Please try again.";
                }
            });
            req.send(JSON.stringify(payload));
            event.preventDefault();
        });
    }
}

if(document.getElementById("submitbutton")){
    document.addEventListener('DOMContentLoaded', contactForm);
}
document.getElementById("bearmode").addEventListener('click', bearMode);