
let loginForm = document.getElementById('loginForm');

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let username = document.getElementById('username');
    let password = document.getElementById('password');

    if (username.value == "" || password.value == ""){
        alert("Make sure you input a value in both fields");
    } else {
        alert("This form has been succefully submitted");
        console.log(`This form has a username of ${username.value} and password of ${password.value}`)

        username.value == "";
        password.value == "";
    }
})