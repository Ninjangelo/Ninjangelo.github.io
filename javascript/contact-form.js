import emailjs from '@emailjs/browser';

emailjs.init({
    publicKey: "ETd_MNbvhSb8LUd8V",
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_7t5l6j4', 'template_finzdvt', this)
    .then(() => {
        console.log('SUCCESS!');
    }, (error) => {
        console.log('FAILED...', error);
    });
});