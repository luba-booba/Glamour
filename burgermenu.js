// Select the hamburger menu and the navigation menu
const hamburger = document.querySelector('.hamburger');
const topnav = document.querySelector('.topnav');

// Log the elements to confirm they're selected correctly
console.log("Hamburger:", hamburger);
console.log("Topnav:", topnav);

// Add a click event listener to toggle the 'active' class
hamburger.addEventListener('click', () => {
    console.log("Hamburger clicked!"); // Debugging click event
    topnav.classList.toggle('active');
});
