/* This Javascript is for when user clicks it animates the dropdown Hamburger menu */

const menu = document.querySelector('#mobile-menu'); /* This line of code targets the ID mobile-menu as seen in the navbar section */
const menulinks = document.querySelector('.navbar__menu'); /* This line of code targets the ID navbar-menu as seen in the navbar section */

menu.addEventListener('click', function() { /* This line of code is to create a function when the user performs the action 'Click' */
  menu.classList.toggle('is-active'); /* This line of code  toggles and adds a classlist 'is-active' both classes are used in Style CSS */
  menulinks.classList.toggle('active'); /* This line of code  toggles and adds a classlist 'active' both classes are used in Style CSS*/
});

/* Reference from https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle*/