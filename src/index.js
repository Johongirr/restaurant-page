 import createMenu from './modules/menu';
 import createAbout from './modules/about';
 import createContact from './modules/contact';
 import createGallery from './modules/gallery';

 let isMenyOpen;
 function displayHomePage(e){
     const container = document.querySelector('.header__text-box');
     const div = document.createElement('div');
     div.innerHTML = 
     `
     <h1 class="header__title">
     SZEMSO KEBAB
 </h1>
 <p class="header__paragraph">
     Welcome To One Of The Best Kebab In Warsaw
 </p>
     `
    container.appendChild(div);
}
 document.addEventListener('DOMContentLoaded', displayHomePage);

function displayPageOnTab(e){
    const container = document.querySelector('.header__text-box');
    container.innerHTML = '';
    switch(e.target.id){
        case 'menu':
            createMenu()
        break;
        case 'about':
            createAbout();
        break;
        case 'contact':
            createContact();
        break;
        case 'gallery':
            createGallery();
        break;
        default:
            displayHomePage();
        break;

    }
}

 function displayMenu(e){
     const nav = document.querySelector('nav ul');
     const lis = document.querySelectorAll('nav li');
     lis.style.display = 'block;'
     nav.classList.add('show');
 }

 document.querySelectorAll('.nav__display-tab').forEach(el => el.addEventListener('click',displayPageOnTab))
 // display menu 
 document.querySelector('.hamburger').addEventListener('click',displayMenu)