const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.innerHTML = '<h1>Thank you for contacting us! We will add your location to the map and table as soon as possible.</h1>';
    });
}