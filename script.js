// Wait for the document to fully load before running the script //
document.addEventListener('DOMContentLoaded', () => {
    
   // 1. Hamburger Menu Functionality (Mobile) //
    
    // Select the hamburger menu button and the list of links //
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Adds an "event listener" for button click //
    hamburgerButton.addEventListener('click', () => {
        // When the button is clicked, it adds or removes the 'active' class from the list of links. //
        // CSS will show or hide the list depending on the presence of this class. //
        navLinks.classList.toggle('active');
    });

    // 2. Smooth Scrolling for Navigation Links //
    
    // Selects all links in the navigation bar //
    const allNavLinks = document.querySelectorAll('.nav-links a');

    // Loop through each link and add a click event listener //
    allNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevents default click behavior (which would be a sharp "jump") //
            event.preventDefault();

            // Gets the ID of the section the link should scroll to (e.g. '#about-us') //
            const targetId = link.getAttribute('href');
            
            // Find the corresponding section element //
            const targetSection = document.querySelector(targetId);

            // If the section exists, scroll to it smoothly //
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // On mobile devices, hide the menu after clicking a link //
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // 3. Smooth Scrolling to "Learn More" Button //
    
    // Select the button in the main section (hero) //
    const scrollToAboutButton = document.getElementById('scroll-to-about');

    // Adds a button click event listener //
    if (scrollToAboutButton) {
        scrollToAboutButton.addEventListener('click', () => {
            // Select the "About Us" section //
            const aboutSection = document.getElementById('about-us');
            
            // Smoothly scroll to the "About Us" section //
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

});