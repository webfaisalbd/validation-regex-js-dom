let myName=document.getElementById('name');
let email=document.getElementById('email');
let phone=document.getElementById('phone');


// name validation 
myName.addEventListener('input',function(){
    let myNameValue=myName.value;

    let pattern=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

    if(!pattern.test(myNameValue)){
        myName.style.background='red';
    }
    else {
        myName.style.background='green';
    }
})



// email validation 
email.addEventListener('input',function(){
    let emailValue=email.value;

    let pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(!pattern.test(emailValue)){
        email.style.background='red';
    }
    else {
        email.style.background='green';
    }
})



// phone validation 
phone.addEventListener('input',function(){
    let phoneValue=phone.value;

    let pattern=/(\+88|88)?(01)[3|4|5|6|7|8|9]{1}[0-9]{8}/

    if(!pattern.test(phoneValue)){
        phone.style.background='red';
    }
    else {
        phone.style.background='green';
    }
})



