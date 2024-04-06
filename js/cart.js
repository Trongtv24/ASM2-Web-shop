document.addEventListener('DOMContentLoaded', function () {
    const cartContainer = document.getElementById('cartContainer');

    // Retrieve cart from localStorage
    const storedCart = localStorage.getItem('cart');
    const cart = storedCart ? JSON.parse(storedCart) : [];

    // Generate HTML for each product in the cart
    const cartHTML = cart.map((product, index) => createProductHTML(product, index)).join('');

    // Set the content of cartContainer with all products
    cartContainer.innerHTML = cartHTML;

    // Attach event listeners to the SVG elements within the product HTML
    attachDeleteEventListeners();

    // Check if the cart is empty
    updateCartDisplay();

    // Fetch viewed products from localStorage
    const storedViewedProducts = localStorage.getItem('viewedProducts');
    const viewedProducts = storedViewedProducts ? JSON.parse(storedViewedProducts) : [];

    // Render viewed products
    renderViewedProducts(viewedProducts);
});

function attachDeleteEventListeners() {
    const deleteIcons = document.querySelectorAll('.delete-icon');
    
    if (deleteIcons.length > 1) {
        deleteIcons.forEach((deleteIcon, index) => {
            deleteIcon.addEventListener('click', function () {
                // Call the function to delete the product from local storage
                deleteProductFromLocalStorage(index);
                // Refresh the displayed products
                updateCartDisplay();
            });
        });
    } else if (deleteIcons.length === 1) {
        // If there's only one product, directly add the event listener
        deleteIcons[0].addEventListener('click', function () {
            // Call the function to delete the product from local storage
            deleteProductFromLocalStorage(0);
            // Refresh the displayed products
            updateCartDisplay();
        });
    }
}

function createProductHTML(product, index) {
    return `
    <div class="drop-shadow-lg bg-white rounded-md p-1 mt-10 mb-5 mx-3 lg:mx-8">
        <div class="flex gap-1">
            <img src="${product.imageSrc.image1}" alt="Image 1" class="w-24 object-contain">
            <div class="block lg:flex gap-7 justify-between">
                <div>
                    <p class="mt-3 text-xs lg:text-base font-medium">${product.model}</p>
                    <p class="hidden lg:flex text-sm text-gray-600">${product.aboutMemory.text}</p>
                </div>
                <div class="flex gap-5 place-items-center mt-2 lg:mt-0 mb-2">
                    <p class="text-sm font-semibold" id="final-price">$${(product.discount.currentPrice + product.shippingCost).toFixed(2)}</p>
                    <button type="button" id="decrement-button" class="bg-gray-100 justify-center border border-gray-300 rounded-lg px-2 py-1" onclick="decrementValue()">
                        <i class='bx bx-minus text-lg mt-1'></i>
                    </button>
                    <p class="text-base" id="increment-input">1</p>
                    <button type="button" id="increment-button" class="flex-shrink-0 bg-orange justify-center rounded-lg px-2 py-1" onclick="incrementValue()">
                        <i class='bx bx-plus text-white text-lg mt-1'></i>
                    </button>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer delete-icon" data-product-index="${index}">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                </svg>
            </div>
        </div>
    </div>`;
}

function deleteProductFromLocalStorage(index) {
    // Retrieve cart from localStorage
    const storedCart = localStorage.getItem('cart');
    const cart = storedCart ? JSON.parse(storedCart) : [];

    // Remove the product at the specified index
    cart.splice(index, 1);

    // Update the local storage with the modified cart
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay() {
    // Retrieve cart from localStorage
    const storedCart = localStorage.getItem('cart');
    const cart = storedCart ? JSON.parse(storedCart) : [];

    // Generate HTML for each product in the cart
    const cartHTML = cart.map((product, index) => createProductHTML(product, index)).join('');

    // Set the content of cartContainer with all products
    cartContainer.innerHTML = cartHTML;

    // Attach event listeners to the SVG elements within the product HTML
    attachDeleteEventListeners();

    // Check if the cart is empty
    const proceedToCheckoutLink = document.getElementById('proceedToCheckout');
    if (cart.length === 0 && proceedToCheckoutLink) {
        // If the cart is empty, display the "No items found" message
        cartContainer.innerHTML = `
            <div class="flex justify-center items-center mt-16">
           <i class='bx bx-cart-add p-3 bg-slate-400 rounded-full text-4xl text-gray-500'></i>
            </div>
            <p class="text-gray-500 flex justify-center items-center">No items in your cart</p>
            <a href="product.html" class="cursor-pointer mx-auto w-64 flex justify-center px-2 py-2 mt-7 bg-orange text-white font-semibold rounded-md hover:bg-amber-500 transition duration-500 ease-in-out">Start Shopping</a>
            `;
        
        // Hide the "Proceed to Checkout" link
        proceedToCheckoutLink.classList.remove('flex');
        proceedToCheckoutLink.classList.add('hidden');
    } else {
        // Show the "Proceed to Checkout" link
        proceedToCheckoutLink.classList.remove('hidden');
        proceedToCheckoutLink.classList.add('flex');
    }
}

// Function to render viewed products
function renderViewedProducts(viewedProducts) {
    const viewedProductsContainer = document.getElementById('viewedProductsContainer');
    const noViewedProducts = document.getElementById('no-item-message');

    // Check if there are viewed products
    if (viewedProducts.length > 0) {
        // Check if the user has viewed at least 5 products
        if (viewedProducts.length >= 5) {
            // Display each viewed product in the container
            const viewedProductsHTML = viewedProducts.map((product, index) => createViewedProductHTML(product, index)).join('');
            viewedProductsContainer.innerHTML = viewedProductsHTML;
        } else {
            // Less than 5 viewed products
            viewedProductsContainer.innerHTML = '';
            noViewedProducts.classList.remove('hidden');
            noViewedProducts.classList.add('flex');
        }
    } else {
        // No viewed products
        viewedProductsContainer.innerHTML = '';
        noViewedProducts.classList.remove('hidden');
        noViewedProducts.classList.add('flex');
    }
}

function createViewedProductHTML(product, index) {
    return`
    <div class="bg-white border rounded-xl mt-5 p-2 h-72">
    <a href="listings.html?id=${product.id}">
        <div class="cart-img">
        <img src="${product.imageSrc.image1}" alt="${product.model}" class=" ">
        </div>
    </a>
    <div class="p-1 mt-5">
        <div class="flex justify-between place-items-center">
            <p class="text-base font-semibold md:text-lg">$${(product.discount.currentPrice).toFixed(2)}</p>
            <p class="text-sm font-light line-through md:text-base">$${(product.discount.originalPrice).toFixed(2)}</p>
        </div>
        <p class="text-xs md:font-normal">${product.model}</p>
    </div>
</div>
    `
}