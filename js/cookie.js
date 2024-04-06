const cookieBox = document.querySelector('.cookieBox');
const buttons = document.querySelectorAll('.cookieBtn');

const showCookie = () => {
    // If the user has already set the cookie, return
    if (document.cookie.includes('cookieBy')) return;

    cookieBox.classList.add('showcookie');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            cookieBox.classList.remove('showcookie');

            // If the button clicked has acceptBtn id, set the cookie with a default user
            if (button.id === 'acceptBtn') {
                const defaultUser = 'yourDefaultUser';
                document.cookie = `cookieBy=${defaultUser}; max-age=${60 * 60 * 24 * 30}`;
            }
        });
    });
};

// Add a delay of 3 seconds (3000 milliseconds)
window.addEventListener('load', () => {
    setTimeout(showCookie, 3000);
});
