// LOADING INDICATOR

document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay to reduce the speed at which the site is rendered
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 1000); // Change the delay time (in milliseconds) as needed
});