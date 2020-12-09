const navToggle = document.querySelector('#nav-toggle')
const navMenu = document.querySelector('#nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const img = document.querySelectorAll('.work-img img');

var bLazy = new Blazy({});

function showMenu() {
    navMenu.classList.toggle('show');

    if(navMenu.classList.contains('show')) {
        navToggle.innerHTML= '&times;'
        navToggle.style = 'cursor: pointer;'
        navToggle.style = 'font-weight: 100;'
        navToggle.style = 'font-size: 3rem;'
    } else {
        navToggle.innerHTML = '&#9776;';
        navToggle.style = 'cursor: pointer;'
        navToggle.style = 'font-weight: 100;';
        
    }
    
}

function addActive(e) {
    let element = e.target;
    navLink.forEach(link => {
        link.classList.remove('active');
    })
    if(element.classList.contains('nav-link')) {
        // ADD ACTIVE CLASS
        element.classList.add('active')



        // REMOVE MOBILE MENU
        navMenu.classList.remove('show');
        
        if(navMenu.classList.contains('show')) {
            navToggle.innerHTML= '&times;'
            navToggle.style = 'cursor: pointer;'
            navToggle.style = 'font-weight: 100;'
            navToggle.style = 'font-size: 3rem;'
        } else {
            navToggle.innerHTML = '&#9776;';
            navToggle.style = 'cursor: pointer;'
            navToggle.style = 'font-weight: 100;';
            
        }
    }
}

navMenu.addEventListener('click', addActive);

navToggle.addEventListener('click', showMenu);

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// <!-- SCROLL HOME -->
sr.reveal('.home-title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home-img', {delay: 400})
sr.reveal('.home-social-icon', {interval: 200})

// <!-- SCROLL ABOUT
sr.reveal('.about-img', {})
sr.reveal('.about-subtitle', {delay: 200})
sr.reveal('about-text', {delay:400})

// SCROLL SKILLS
sr.reveal('.skills-subtitle', {})
sr.reveal('.skills-text', {delay: 200})
sr.reveal('.skills-data', {interval: 200})
sr.reveal('.skills-img', {delay: 400})

// //SCROLL work
// sr.reveal('.work', {interval:200})

// // scroll contact
// sr.reveal('.contact-input', {interval:200})
