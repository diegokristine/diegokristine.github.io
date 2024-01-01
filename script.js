const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconclose=document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const isPasswordVisible = passwordInput.getAttribute('data-show') === 'true';

    if (isPasswordVisible) {
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('data-show', 'false');
    } else {
        passwordInput.setAttribute('type', 'text');
        passwordInput.setAttribute('data-show', 'true');
    }
}