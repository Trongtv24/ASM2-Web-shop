document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("registrationForm");
    const userField = signupForm.querySelector('.newuser');
    const userInput = userField.querySelector('.username');
    const emailField = signupForm.querySelector('.email-field');
    const emailInput = emailField.querySelector('.email');
    const passField = signupForm.querySelector('.create-password');
    const passInput = passField.querySelector('.password');
    const cPassField = signupForm.querySelector('.confirm-password');
    const cPassInput = cPassField.querySelector('.cPassword');

    // EMAIL VALIDATION
    function checkEmail() {
        const emailpattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
        if (!emailInput.value.match(emailpattern)) {
            emailField.classList.add("invalid");
        } else {
            emailField.classList.remove("invalid");
        }
    }

    // Hide and show password
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm_password");
    const showPasswordIcon = document.getElementById("showPassword");
    const showConfirmPasswordIcon = document.getElementById("showConfirmPassword");

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

    showConfirmPasswordIcon.addEventListener("click", () => {
        if (confirmPasswordInput.type === "password") {
            confirmPasswordInput.type = "text";
            showConfirmPasswordIcon.classList.remove("bxs-hide");
            showConfirmPasswordIcon.classList.add("bxs-show");
          } else {
            confirmPasswordInput.type = "password";
            showConfirmPasswordIcon.classList.remove("bxs-show");
            showConfirmPasswordIcon.classList.add("bxs-hide");
          }
    });

    // Password Validation
    function createPass() {
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8}$/;

        if (!passInput.value.match(passPattern)) {
            passField.classList.add("invalid");
        } else {
            passField.classList.remove("invalid");
        }
    }

    //confirm Password Validation
    function confirmPass() {
        if (passInput.value !== cPassInput.value || cPassInput.value === '') {
            cPassField.classList.add("invalid");
        } else {
            cPassField.classList.remove("invalid");
        }
    }

    // DISABLED BUTTON
    const termsCheckbox = document.getElementById("remember");
    const registerBtn = document.getElementById("registerButton");
    termsCheckbox.addEventListener("change", function () {
        registerBtn.disabled = !termsCheckbox.checked;
    });

    // Add an event listener to the registration form
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        checkEmail();
        createPass();
        confirmPass();

        emailInput.addEventListener('keyup', checkEmail);
        passInput.addEventListener('keyup', createPass);
        cPassInput.addEventListener('keyup', confirmPass);

        if (!emailField.classList.contains('invalid') && !passField.classList.contains('invalid') && !cPassField.classList.contains('invalid')) {

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const isUsernameTaken = users.some(u => u.username === userInput.value);

            if (isUsernameTaken) {
                userField.classList.add("invalid");
            } else {
                userField.classList.remove("invalid");
                users.push({ username: userInput.value, email: emailInput.value, password: passInput.value });
                localStorage.setItem('users', JSON.stringify(users));

                // Additional code for the button click
                let btn = document.querySelector('.button');
                spinIcon = document.querySelector('.spinner');
                btnText = document.querySelector(".btn-text");

                btn.classList.add('checked');
                spinIcon.classList.add('spin');
                btnText.textContent = "Registering...";

                // Redirect after 2 seconds
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 5000);
            }
        }
    });
});
