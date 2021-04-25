//hamburger menu
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


//label checked
$(document).on("change", "input[type='checkbox']", function () {
	$(this).parent()[this.checked ? "addClass" : "removeClass"]("checked");
});







// change currency
// const currency = document.querySelectorAll('#currency');

// function fetchLocation() {
//     fetch('https://extreme-ip-lookup.com/json/')
// .then( res => res.json())
// .then(response => {
//     console.log("Country: ", response.country);
//     if(response.country === 'Austria' || 'Belgium' || 'Bulgaria' || 'Croatia' || 'Cyprus' || 'Czech Republic' || 'Dennmark' || 'Estonia' || 'Finland' || 'France' || 'Germany' || 'Greece' || 'Hungary' || 'Ireland' || 'Italy' || 'Latvia' || 'Lithuania' || 'Luxembourg' || 'Malta' || 'Netherlands' || 'Poland' || 'Portugal' || 'Romania' || 'Slovakia' || 'Slovenia' || 'Spain' || 'Sweden') {
//         for(var i = 0; i < currency.length; i++) {
//             console.log(typeof response.country);
//             currency[i].innerHTML = '€';
//         }
//     }
//     else if(response.country === 'Macedonia') {
//         currency[i].innerHTML = '£';
//     }
//     else {
//         currency[i].innerHTML = '$';
//     }
//  })
//  .catch((data, status) => {
//     console.log('Request failed');
//  });

 
// }

//change currency

$('#currency').html(geoplugin_currencySymbol());
$('.currency').html(geoplugin_currencySymbol());

var result = document.getElementsByClassName("currency")[0].innerHTML;

if(result == '€' || result == '£') {
    $('#currency').html(geoplugin_currencySymbol());
    $('.currency').html(geoplugin_currencySymbol());
}
else if (result == 'лв' || result == 'kn' || result == 'kč' || result == 'kr' || result == 'ft' || result == 'zl') {
    $('#currency').html('€');
    $('.currency').html('€');
}
else {
    $('#currency').html('$');
    $('.currency').html('$');
}


//show details

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

