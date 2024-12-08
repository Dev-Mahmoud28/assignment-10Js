var logOut = document.querySelector('#logOut');
var userName = document.querySelector('#userName');
var localName = JSON.parse(localStorage.getItem('username'));

userName.innerText = `Welcome ${localName}`;

logOut.addEventListener('click', function(){
    window.location = './index.html';
    localStorage.removeItem('username');
})

