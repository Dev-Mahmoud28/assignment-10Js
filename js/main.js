var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var signUpBtn = document.getElementById('signUp');
var fillMsg = document.getElementById('fillMsg');
var success = document.getElementById('success');
var warning = document.getElementById('warning');
var eyeIcon = document.getElementById('eyeIcon');
var localAccount = JSON.parse(localStorage.getItem('account'));



signUpBtn.addEventListener('click', () => {
    window.location = './signup.html';
});

function login() {
    if(emailInput.value == '' || passwordInput.value == ''){
        return fillMsg.classList.remove('d-none');
    }
    for (var i = 0; i < localAccount.length; i++) {
        if(emailInput.value === localAccount[i].email && passwordInput.value === localAccount[i].password){
            fillMsg.classList.add('d-none');
            window.location = './home.html';
            localStorage.setItem('username', JSON.stringify(localAccount[i].name));
            warning.classList.add('d-none');
            return;
        }else {
            warning.classList.remove('d-none');
        }
    }
}

function showPass(){
    if(eyeIcon.classList.contains('fa-eye-slash')){
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
        passwordInput.setAttribute('type', 'text');
    }else if(eyeIcon.classList.contains('fa-eye')){
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
        passwordInput.setAttribute('type', 'password');
    }
}

