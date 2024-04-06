

// Search display function
document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById('searchBtn');
    const searchBox = document.querySelector('.search-box');
    const closeBtn = document.getElementById('closeBtn');

    searchBtn.addEventListener('click', function () {
        searchBox.style.display = 'flex';
        searchBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        searchBox.style.display = 'none';
        searchBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    });
});


// LANGUAGE DROPDOWN

document.addEventListener("DOMContentLoaded", function () {
    const selectedLanguage = document.getElementById('selectedLanguage');
    const languageList = document.getElementById('languageList');

    selectedLanguage.addEventListener('click', function () {
        languageList.style.display = (languageList.style.display === 'block') ? 'none' : 'block';
    });

    languageList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            selectedLanguage.textContent = event.target.textContent;
            languageList.style.display = 'none';

            // Add logic to change language based on the selected language (event.target.dataset.lang)
            // For example, you can call a function to update content based on the selected language.
        }
    });

    // Close the language list if the user clicks outside of it
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.language-container')) {
            languageList.style.display = 'none';
        }
    });
});



// DROPDOWNS 


document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    const categoryDropdown = document.getElementById('cdropdown');
    const categoryBtn = document.getElementById('dropdownDefaultButton');
    const notifButton = document.getElementById('dropdownNotificationButton');
    const notifDropdown = document.getElementById('dropdownNotification');
    const userDropdown = document.getElementById('userDropdown');
    const userButton = document.getElementById('avatarButton');

    function closeMenu() {
        if (nav.classList.contains('flex')) {
            toggleMenu();
        }
    }
    
    function closeDropdowns() {
        categoryDropdown.classList.add('hidden');
        notifDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
    }

    function toggleMenu() {
        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    }

    function toggleCategoryDropdown() {
        categoryDropdown.classList.toggle('flex');
        categoryDropdown.classList.toggle('hidden');
        notifDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
    }

    function toggleNotifDropdown() {
        notifDropdown.classList.toggle('flex');
        notifDropdown.classList.toggle('hidden');
        categoryDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
    }

    function toggleUserDropdown() {
        userDropdown.classList.toggle('flex');
        userDropdown.classList.toggle('hidden');
        notifDropdown.classList.add('hidden');
        categoryDropdown.classList.add('hidden');
    }

    function handleDocumentClick(event) {
        const isMenuClicked = event.target.closest('#menu-btn') || event.target.closest('#menu');
        const isCategoryDropdownClicked = event.target.closest('#cdropdown') || event.target.closest('#dropdownDefaultButton');
        const isNotifDropdownClicked = event.target.closest('#dropdownNotification') || event.target.closest('#dropdownNotificationButton');
        const isUserDropdownClicked = event.target.closest('#userDropdown') || event.target.closest('#avatarButton');

        if (!isMenuClicked && !isCategoryDropdownClicked && !isNotifDropdownClicked && !isUserDropdownClicked) {
            closeMenu();
            closeDropdowns();
        }
    }

    btn.addEventListener('click', () => {
        toggleMenu();
        closeDropdowns();
    });

    
    notifButton.addEventListener('click', () => {
        toggleNotifDropdown();
        closeMenu();
    });
    
    userButton.addEventListener('click', () => {
        toggleUserDropdown();
        closeMenu();
    });
    
    categoryBtn.addEventListener('click', () => {
        toggleCategoryDropdown();
        closeMenu();
    });

    document.addEventListener('click', handleDocumentClick);
});

