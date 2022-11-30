const menu= document.querySelector('#menu-bar');
const navbar= document.querySelector('.navbar');


menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const bt = document.querySelector('.bt');

bt.onclick = () =>{
    form.style.visibility = 'visible';
}

const closeBnt = document.querySelector('.close-btn');

closeBnt.onclick = ()=>{
    form.style.visibility = 'hidden';
}


const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');

const form = document.querySelector('#form');


const showError = (input,massage) => {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-element error ';
    const small= parentElement.querySelector('small');
    const successIcon = parentElement.querySelectorAll('i')[0];
    const errorIcon = parentElement.querySelectorAll('i')[1];

    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = massage;
   
  
   
}

const showSuccess = (input) => {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-element success';
    const successIcon = parentElement.querySelectorAll('i')[0];
    const errorIcon = parentElement.querySelectorAll('i')[1];
    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
 
  
  
   
}

 
const checkEmpty = (elements)=>{

    elements.forEach( (element)=>{
        if(element.value === ''){
            showError(element,'input required');
        }else{
            showSuccess(element);
        }
    });
}

form.addEventListener('submit', (event) =>{

    event.preventDefault();

    checkEmpty([username,email,password]);
});
