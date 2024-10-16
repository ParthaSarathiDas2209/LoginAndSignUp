// Show the registration form when "Register here" is clicked
document.getElementById('register-link').addEventListener('click', function() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
});

// Show the login form when "Login here" is clicked
document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
});

// Show the password reset modal when "Forgot Password?" is clicked
document.getElementById('forgot-password').addEventListener('click', function() {
    document.getElementById('password-reset-modal').style.display = 'flex';
});

// Close the password reset modal
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('password-reset-modal').style.display = 'none';
});


// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this[0].value;
    const password = this[1].value;

    if (username && password) {
        alert(`Logged in as: ${username}`);
        this.reset(); // Clear the input fields
    }
});

// Handle registration form submission
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this[0].value;
    const email = this[1].value;
    const password = this[2].value;

    if (username && email && password) {
        alert(`Registered as: ${username}`);
        this.reset(); // Clear the input fields
        document.getElementById('register').style.display = 'none'; // Switch to login
        document.getElementById('login').style.display = 'block'; // Show login form
    }
});


// Handle password reset form submission
document.getElementById('password-reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this[0].value;

    if (email) {
        alert(`Password reset link sent to: ${email}`);
        this.reset(); // Clear the input fields
        document.getElementById('password-reset-modal').style.display = 'none'; // Close modal
    }
});

// Close modal if the user clicks outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('password-reset-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});