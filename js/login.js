document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("LogInForm");
    const userInput = loginForm.querySelector('.username');
    const passInput = loginForm.querySelector('.password');
    const passField = loginForm.querySelector('.user-password');


    
    const passwordInput = document.getElementById("password");
    const showPasswordIcon = document.getElementById("showPassword");

    showPasswordIcon.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showPasswordIcon.classList.remove("bxs-hide");
            showPasswordIcon.classList.add("bxs-show");
        } else {
            passwordInput.type = "password";
            showPasswordIcon.classList.remove("bxs-show");
            showPasswordIcon.classList.add("bxs-hide");
        }
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.username === userInput.value && u.password === passInput.value);
    
        if (user) {
            let btn = document.querySelector('.lbutton');
            let spinIcon = document.querySelector('.spinner');
            let btnText = document.querySelector(".btn-text");
    
            btn.classList.add('checked');
            spinIcon.classList.add('spin');
            btnText.textContent = "Authenticating...";
    
            // Store the logged-in user in localStorage
            localStorage.setItem("loggedInUser", JSON.stringify(user));
    
            // Redirect after 5 seconds
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 5000);
        } else {
            passField.classList.add("invalid");
        }
    });
    
    
});

