//scroll to top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const menuTrigger = document.querySelectorAll('[data-open-btn]');
const mobileMenu = document.querySelectorAll('[data-show]');
const closeTrigger = document.querySelectorAll('[data-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < menuTrigger.length; i++) {

    const closeMenu = function() {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    menuTrigger[i].addEventListener('click', function() {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    })

    closeTrigger[i].addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu)
}

//mobile submenu
const submenu = document.querySelectorAll('.sub-trigger');
    submenu.forEach((menu) => menu.addEventListener('click', toggle));

    function toggle() {
        submenu.forEach((item) => item != this ? item.classList.remove('expand') : null);

        if (this.classList != 'expand') {
            this.classList.toggle('expand')
        }
    }


//Tabbed
var tabbedNav = new Swiper('.tabs', {
    slidePerView: 1,
    centeredSlides: true,
    slidesPerGroup: false,
    spaceBetween: 20,
})
var theTab = new Swiper('.tabs-box', {
    slidesPerView: 1,
    autoHeight: true,
    thumbs: {
        swiper: tabbedNav
    },
})

// Define a mock array of products
    
const products = [
    { name: 'Plushie', category: 'Toys', link: 'https://example.com/plushie' },
    { name: 'Bag', category: 'Accessories', page: 'bagindex.html' },
    { name: 'Crochet', category: 'Crafts', link: 'https://example.com/crochet' }
];

function searchProducts(event) {
    event.preventDefault(); // Prevent form submission

    const searchQuery = document.getElementById('searchInput').value;

    // Perform the search logic on the client-side
    const searchResults = products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

    // Clear previous search results
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    // Display search results on the page
    if (searchResults.length > 0) {
        const resultList = document.createElement('ul');
        searchResults.forEach(result => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = result.link; // Set the link URL
            link.textContent = result.name; // Set the link text
            listItem.appendChild(link);
            resultList.appendChild(listItem);
        });
        searchResultsContainer.appendChild(resultList);
    } else {
        searchResultsContainer.textContent = 'No results found.';
    }
}