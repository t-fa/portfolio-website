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

document.getElementById("bearmode").addEventListener('click', bearMode);