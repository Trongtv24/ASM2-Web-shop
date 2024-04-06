// Function to get the logged-in user from localStorage
function getLoggedInUser() {
    return JSON.parse(localStorage.getItem("loggedInUser"));
}

// Function to check if a user is logged in
function isLoggedIn() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    return loggedInUser !== null; // Returns true if a user is logged in, false otherwise
}

// Function to update the 'name' and 'useremail' divs with the logged-in user's information
function updateUserInfo() {
    const loggedInUser = getLoggedInUser();
    if (loggedInUser) {
        const name = document.getElementById('name');
        const useremail = document.getElementById('useremail');

        name.innerHTML = loggedInUser.username;
        useremail.innerHTML = loggedInUser.email;
    }
}

// Function to update the visibility of the avatarButton based on the user's authentication status
function updateAvatarVisibility() {
    const avatarButton = document.getElementById('avatarButton');
    if (avatarButton) {
        avatarButton.classList.toggle('hidden', !isLoggedIn());
    }
}

// Function to update the visibility of the notifButton based on the user's authentication status
function updateNotifVisibility() {
    const dropdownNotificationButton = document.getElementById('dropdownNotificationButton');
    if (dropdownNotificationButton) {
        dropdownNotificationButton.classList.toggle('hidden', !isLoggedIn());
    }
}

// Function to sign out the user
function signOut() {
    // Clear the user details from localStorage
    localStorage.removeItem('loggedInUser');

    // Redirect to the login page or any other desired page
    window.location.href = 'index.html';
}

// Call the updateUserInfo and updateAvatarVisibility and updateNotifVisibility functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    updateUserInfo();
    updateAvatarVisibility();
    updateNotifVisibility();
});

// Call the signOut function when the sign-out button is clicked
const signOutButton = document.getElementById('signOutButton');
if (signOutButton) {
    signOutButton.addEventListener('click', signOut);
}

// Select all buttons with the class 'ctabuttons'
const ctaButtons = document.querySelectorAll('.ctabuttons');

// Function to hide login and signup buttons if a user is logged in
function hideButtons() {
    if (isLoggedIn()) {
        ctaButtons.forEach(button => button.classList.add('hidden'));
    } else {
        ctaButtons.forEach(button => button.classList.remove('hidden'));
    }
}

// Call hideButtons when the page loads
document.addEventListener('DOMContentLoaded', hideButtons);


