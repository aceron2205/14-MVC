// Function to handle user login
const loginFormHandler = async (event) => {
    console.log("hello");
    event.preventDefault();

    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById("password-input").value.trim();

    if (email && password) {
        try {
            const response = await fetch("/api/users/login", {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: {"Content-Type": "application/json"},
            });

            if (response.ok) {
                document.location.replace("/");
            } else {
                throw new Error("Failed to log in.");
            }
        } catch (error) {
            alert(error.message);
        }
    }
};

// Function to handle user signup
const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById("password-input").value.trim();
    const username = document.getElementById("username-input").value.trim();

    if (email && password) {
        try {
            const response = await fetch("/api/users", {
                method: "POST",
                body: JSON.stringify({username, email, password}),
                headers: {"Content-Type": "application/json"},
            });

            if (response.ok) {
                document.location.replace("/");
            } else {
                throw new Error("Failed to sign up.");
            }
        } catch (error) {
            alert(error.message);
        }
    }
};

const loginForms = document.getElementsByClassName("login-form");
const signupForms = document.getElementsByClassName("signup-form");

for (const form of loginForms) {
    form.addEventListener("submit", loginFormHandler);
}

for (const form of signupForms) {
    form.addEventListener("submit", signupFormHandler);
}
