// select elements - variables
const navbarElem = document.querySelector('.navbar');

// navbar style handler based on page scrolling
function ChangeScrollY(){
    let verticalScroll = document.documentElement.scrollTop;

   if (verticalScroll > 100) {
    navbarElem.classList.add('navbar-sticky')
    } else{
    navbarElem.classList.remove('navbar-sticky')
   }
}

