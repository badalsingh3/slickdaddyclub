function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Add your logic to check the username and password
    if (username === 'admin' && password === 'admin') {
        // Redirect to another page on successful login
        window.location.href = 'success.html';
    } else {
        document.getElementById('message').innerHTML = 'Incorrect username or password';
    }
}
