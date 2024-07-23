// In-memory storage for registered users
let users = [];

// Register a new user
function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    // Check if the user already exists
    if (users.find(user => user.username === username)) {
        document.getElementById("registerMessage").textContent = "Username already exists.";
        document.getElementById("registerMessage").style.color = "red";
    } else {
        // Add new user to the users array
        users.push({ username, password });
        document.getElementById("registerMessage").textContent = "Registration successful!";
        document.getElementById("registerMessage").style.color = "green";
    }
}

// Login an existing user
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Check if the credentials match any user
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById("loginMessage").textContent = "Login successful!";
        document.getElementById("loginMessage").style.color = "green";
        showSecuredPage();
    } else {
        document.getElementById("loginMessage").textContent = "Invalid username or password.";
        document.getElementById("loginMessage").style.color = "red";
    }
}

// Show the secured page
function showSecuredPage() {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("securedPage").style.display = "block";
}

// Logout the user
function logout() {
    document.getElementById("registrationForm").style.display = "block";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("securedPage").style.display = "none";
}
