const loginModal = document.getElementById('loginModal');
const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('closeLogin');
const loginForm = document.getElementById('loginForm');

openLogin.addEventListener('click',()=>{
loginModal.classList.add('active');
});

closeLogin.addEventListener('click',()=>{
loginModal.classList.remove('active');
});

loginForm.addEventListener('submit',(e)=>{

e.preventDefault();

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if(password.length < 6){
alert('Password must contain at least 6 characters');
return;
}

alert(`Welcome back ${email}`);
loginModal.classList.remove('active');
loginForm.reset();

});
