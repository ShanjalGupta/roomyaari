const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});

function validation(){
  var password1= document.getElementsByClassName("input-box");
var pattern=/^[0-9]{8,}$/;
   if(!pattern.test(password1))
   {
    alert("password should be more than 8 characters");
   
    password1.focus();
    return false;
   }
else{
  return true;  
}  
}    



