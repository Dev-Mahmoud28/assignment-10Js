var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var eyeIcon = document.getElementById('eyeIcon');
var empty = document.getElementById('empty');
var exist = document.getElementById('exist');
var loginBtn = document.getElementById('login');
var validEmail = document.getElementById('validEmail');
var validPass = document.getElementById('validPass');
var accountList = [];
var key = 'account';
var regex = {
    'email': /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    'password': /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
};


loginBtn.addEventListener('click', ()=> {
    window.location = './index.html'
});

if(localStorage.getItem(key) !== null) {
    accountList = JSON.parse(localStorage.getItem(key));
}

function addAccount() {
    var account = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value
    };
    if(account.name == '' || account.email == '' || account.password == ''){
       empty.classList.remove('d-none');
       exist.classList.add('d-none');
       return;
    }
    empty.classList.add('d-none');

    if(!regex['email'].test(account.email)){
        validEmail.classList.remove('d-none');
        validPass.classList.add('d-none');
        return;
    }
    validEmail.classList.add('d-none');

    if(!regex['password'].test(account.password)){
        validPass.classList.remove('d-none');
        return;
    }
    validPass.classList.add('d-none');
    
    if(accountList.some(e => e.email === account.email)){
        exist.classList.remove('d-none'); 
        return
    }
    accountList.push(account);
    localStorage.setItem(key, JSON.stringify(accountList));
    exist.classList.add('d-none');
    alert('Signed Up Successfuly');
    window.location = './index.html'
};

function showPass(){
    if(eyeIcon.classList.contains('fa-eye-slash')){
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
        passwordInput.setAttribute('type', 'text');
    }else if(eyeIcon.classList.contains('fa-eye')){
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
        passwordInput.setAttribute('type', 'password');
    }
}