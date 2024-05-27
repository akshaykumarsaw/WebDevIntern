document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy credentials for demonstration
    const validUsername = "user";
    const validPassword = "pass";

    if (username === validUsername && password === validPassword) {
        window.location.href = "portfolio.html";
    } else {
        alert('Incorrect username or password');
    }
});
