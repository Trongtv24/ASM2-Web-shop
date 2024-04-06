
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    const categoryDropdown = document.getElementById('cdropdown');
    const categoryBtn = document.getElementById('dropdownDefaultButton');
    const filterDropdown = document.getElementById('fdropdown');
    const filterBtn = document.getElementById('filterDefaultButton');
    const filterIcon = document.getElementById('filterIcon');
    const dropdownSortCheckbox = document.getElementById('dropdownSortCheckbox');
    const dropdownSortButton = document.getElementById('dropdownSortButton');
    const SortCheckbox = document.getElementById('SortCheckbox');
    const SortButton = document.getElementById('SortButton');
    const sortIcon = document.getElementById('sortIcon');
    const bigSortIcon = document.getElementById('bigSortIcon');
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
        filterDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
        SortCheckbox.classList.add('hidden');
        notifDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
        filterIcon.classList.remove('rotated');
        sortIcon.classList.remove('rotated');
        bigSortIcon.classList.remove('rotated');
    }

    function toggleMenu() {
        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    }

    function toggleCategoryDropdown() {
        categoryDropdown.classList.toggle('flex');
        categoryDropdown.classList.toggle('hidden');
        filterDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
        SortCheckbox.classList.add('hidden');
        notifDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
        filterIcon.classList.remove('rotated');
        sortIcon.classList.remove('rotated');
        bigSortIcon.classList.remove('rotated');
    }

    function toggleNotifDropdown() {
        notifDropdown.classList.toggle('flex');
        notifDropdown.classList.toggle('hidden');
        filterDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
        SortCheckbox.classList.add('hidden');
        categoryDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
        filterIcon.classList.remove('rotated');
        sortIcon.classList.remove('rotated');
        bigSortIcon.classList.remove('rotated');
    }

    function toggleUserDropdown() {
        userDropdown.classList.toggle('flex');
        userDropdown.classList.toggle('hidden');
        filterDropdown.classList.add('hidden');
        notifDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
        SortCheckbox.classList.add('hidden');
        categoryDropdown.classList.add('hidden');
        filterIcon.classList.remove('rotated');
        sortIcon.classList.remove('rotated');
        bigSortIcon.classList.remove('rotated');
    }

    function toggleFilterDropdown() {
        filterDropdown.classList.toggle('flex');
        filterDropdown.classList.toggle('hidden');
        filterIcon.classList.toggle('rotated');
        categoryDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
        SortCheckbox.classList.add('hidden');
        notifDropdown.classList.add('hidden');
        sortIcon.classList.remove('rotated');
        bigSortIcon.classList.remove('rotated');
    }

    function toggleSortDropdown() {
        dropdownSortCheckbox.classList.toggle('flex');
        dropdownSortCheckbox.classList.toggle('hidden');
        sortIcon.classList.toggle('rotated');
        categoryDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
        filterDropdown.classList.add('hidden');
        notifDropdown.classList.add('hidden');
        filterIcon.classList.remove('rotated');
        SortCheckbox.classList.add('hidden');
        bigSortIcon.classList.remove('rotated');
    }

    
    function toggleSortCheckbox() {
      SortCheckbox.classList.toggle('flex');
      SortCheckbox.classList.toggle('hidden');
      bigSortIcon.classList.toggle('rotated');
      categoryDropdown.classList.add('hidden');
      userDropdown.classList.add('hidden');
      filterDropdown.classList.add('hidden');
      dropdownSortCheckbox.classList.add('hidden');
      sortIcon.classList.toggle('rotated');
      notifDropdown.classList.add('hidden');
      filterIcon.classList.remove('rotated');
  }

    function handleDocumentClick(event) {
        const isMenuClicked = event.target.closest('#menu-btn') || event.target.closest('#menu');
        const isCategoryDropdownClicked = event.target.closest('#cdropdown') || event.target.closest('#dropdownDefaultButton');
        const isFilterDropdownClicked = event.target.closest('#fdropdown') || event.target.closest('#filterDefaultButton');
        const isSortDropdownClicked = event.target.closest('#dropdownSortCheckbox') || event.target.closest('#dropdownSortButton');
        const isSortCheckboxClicked = event.target.closest('#SortCheckbox') || event.target.closest('#SortButton');
        const isNotifDropdownClicked = event.target.closest('#dropdownNotification') || event.target.closest('#dropdownNotificationButton');
        const isUserDropdownClicked = event.target.closest('#userDropdown') || event.target.closest('#avatarButton');

        if (!isMenuClicked && !isCategoryDropdownClicked && !isFilterDropdownClicked && !isSortDropdownClicked && !isNotifDropdownClicked && !isUserDropdownClicked && !isSortCheckboxClicked) {
            closeMenu();
            closeDropdowns();
        }
    }

    btn.addEventListener('click', () => {
        toggleMenu();
        closeDropdowns();
    });

    categoryBtn.addEventListener('click', () => {
        toggleCategoryDropdown();
        closeMenu();
    });

    notifButton.addEventListener('click', () => {
        toggleNotifDropdown();
        closeMenu();
    });

    userButton.addEventListener('click', () => {
        toggleUserDropdown();
        closeMenu();
    });

    dropdownSortButton.addEventListener('click', () => {
        toggleSortDropdown();
        closeMenu();
    });

   SortButton.addEventListener('click', () => {
    toggleSortCheckbox();
      closeMenu();
  });

    filterBtn.addEventListener('click', () => {
        toggleFilterDropdown();
        closeMenu();
    });


    document.addEventListener('click', handleDocumentClick);
});


// PRICE BAR

// Get the elements
const rangeInput = document.querySelectorAll('.price-range-input');
const currencyInput = document.querySelectorAll('.currency-input');

// Function to update the currency input
function updateCurrencyInput(index) {
  currencyInput[index].value = rangeInput[index].value;
}

// Add event listener to each range input
rangeInput.forEach((input, index) => {
  input.addEventListener('input', () => updateCurrencyInput(index));
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


document.addEventListener('DOMContentLoaded', function () {
  const productGrid = document.getElementById('productGrid');
  const paginationInfo = document.getElementById('paginationInfo');
  const startRange = document.getElementById('startRange');
  const endRange = document.getElementById('endRange');
  const totalEntries = document.getElementById('totalEntries');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const productsPerPage = 12;

  let currentPage = 1;
  let totalPages;
  let allProducts = [];

  function renderProducts(page) {
    productGrid.innerHTML = '';

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const productsToDisplay = allProducts.slice(startIndex, endIndex);

    productsToDisplay.forEach(product => {
      const productElement = createProductElement(product);
      productGrid.appendChild(productElement);
    });

    updatePaginationInfo(startIndex + 1, endIndex, allProducts.length);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function updatePaginationInfo(start, end, total) {
    startRange.textContent = start;
    endRange.textContent = end;
    totalEntries.textContent = total;
  }

  function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.className = 'border rounded-xl mt-5';
   

    // Construct the product HTML
    productElement.innerHTML = `
    <a href="listings.html?id=${product.id}">
    <div class="loading-overlay">
    <div class="loading-spinner"></div>
  </div>
    <img src="${product.imageSrc}" alt="${product.name}" class="mx-auto object-cover img-content rounded-xl hover:scale-105">
  </a>
      <div class="p-2">
        <div class="flex gap-2 place-items-center md:gap-5">
          <p class="text-sm font-semibold md:text-lg">$${product.price.toFixed(2)}</p>
          <p class="text-sm font-light line-through md:text-base">$${product.discountedPrice.toFixed(2)}</p>
        </div>
        <p class="font-normal text-xs md:font-medium">${product.name}</p>
        <div class="justify-between mt-3 place-items-center md:flex md:mt-2">
          <div class="flex place-items-center mb-2 md:mb-0">
            <svg
              class="w-4 h-4 text-orange me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p class="text-xs ms-2 md:text-sm font-bold">${product.rating.toFixed(2)}</p>
            <span class="w-1 h-1 mx-1.5 bg-orange rounded-full"></span>
            <a href="#" class="text-xs ms-2 underline font-medium hover:no-underline">${product.reviewCount} reviews</a>
          </div>
          <a href="#" class="flex justify-center px-2 py-2 bg-orange text-white rounded-md hover:bg-amber-500 transition duration-500 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden md:flex">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        <span class="md:hidden">Add to cart</span>
        </a>
        </div>
      </div>
    `;

    setTimeout(function () {
      // Hide loading overlay for each element with the class 'loading-overlay'
      document.querySelectorAll(".loading-overlay").forEach(function (overlay) {
          overlay.style.display = "none";
      });
  
      // Show img content for each element with the class 'img-content'
      document.querySelectorAll(".img-content").forEach(function (imgContent) {
          imgContent.style.display = "block";
      });
    }, 3000); // Change the delay time (in milliseconds) as needed

    return productElement;
  }


  function updateButtons() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
  }

  function showPrevPage() {
    if (currentPage > 1) {
      currentPage--;
      updateButtons();
      window.location.reload(); // Reload the current page
    }
  }

  function showNextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      updateButtons();
      renderProducts(currentPage);
    }
  }

  // Load products from JSON
  fetch('js/products.json')
    .then(response => response.json())
    .then(data => {
      allProducts = data.laptops.flatMap(brand => brand.products);
      totalPages = Math.ceil(allProducts.length / productsPerPage);
      renderProducts(currentPage);
      updateButtons();
    })
    .catch(error => console.error('Error fetching products:', error));



  // Add event listeners
  prevButton.addEventListener('click', showPrevPage);
  nextButton.addEventListener('click', showNextPage);

  // Function to display the cart notification
function showCartNotification() {
  const cartNotification = document.getElementById('cart-notification');
  cartNotification.classList.remove('cart-notification');
  cartNotification.classList.add('show-cart');

  // Close the notification after 3 seconds
  setTimeout(() => {
      closeCartNotification();
  }, 3000);
}

// Function to close the cart notification
function closeCartNotification() {
  const cartNotification = document.getElementById('cart-notification');
  cartNotification.classList.add('cart-notification');
  cartNotification.classList.remove('show-cart');
}

// Add to Cart Functionality
window.addToCart = function (productId) {
  // Fetch product information from JSON (if needed)
  fetch('js/listing.json')
      .then(response => response.json())
      .then(data => {
          // Check if the product ID is in the JSON data
          const product = allProducts.find(p => p.id === productId);

          if (product) {
              // Retrieve cart from localStorage
              const storedCart = localStorage.getItem('cart');
              const cart = storedCart ? JSON.parse(storedCart) : [];

              // Add the product to the cart
              cart.push(product);

              // Scroll to the top of the page
              window.scrollTo({ top: 0, behavior: 'auto' });

              // Show cart notification
              showCartNotification();

              // Store the updated cart in localStorage
              localStorage.setItem('cart', JSON.stringify(cart));
          } else {
              console.error('Product not found in the JSON data.');
          }
      })
      .catch(error => console.error('Error fetching product data:', error));
};

// Close Cart Icon
const closeIcon = document.getElementById('close-button');

if (closeIcon) {
  closeIcon.addEventListener('click', closeCartNotification);
}

});



