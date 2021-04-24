const menuBtn = document.querySelector('.hamburger-menu');
const hamburger = document.querySelector('.hamburger-menu-button');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));


        showMenu = true;
    }
    else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

let detailsBusinessShow = false;
let detailsBasicShow = false;
let detailsPremiumShow = false;
const showBusiness = document.querySelector('.show-business');
showBusiness.addEventListener('click', showBusinessDetails);
const showPremium = document.querySelector('.show-premium');
showPremium.addEventListener('click', showPremiumDetails);
const showBasic = document.querySelector('.show-basic');
showBasic.addEventListener('click', showBasicDetails);

const detailsBusiness = document.querySelector('.business-details');
const detailsPremium = document.querySelector('.premium-details');
const detailsBasic = document.querySelector('.basic-details');

function showBusinessDetails() {
    if(!detailsBusinessShow) {
        showBusiness.classList.add('show');
        detailsBusiness.classList.add('visible');
        detailsBusinessShow = true;
    }
    else {
        showBusiness.classList.remove('show');
        detailsBusiness.classList.remove('visible');
        detailsBusinessShow = false;
    }
}
function showPremiumDetails() {
    if(!detailsPremiumShow) {
        showPremium.classList.add('show');
        detailsPremium.classList.add('visible');
        detailsPremiumShow = true;
    }
    else {
        showPremium.classList.remove('show');
        detailsPremium.classList.remove('visible');
        detailsPremiumShow = false;
    }
}
function showBasicDetails() {
    if(!detailsBasicShow) {
        showBasic.classList.add('show');
        detailsBasic.classList.add('visible');
        detailsBasicShow = true;
    }
    else {
        showBasic.classList.remove('show');
        detailsBasic.classList.remove('visible');
        detailsBasicShow = false;
    }
}