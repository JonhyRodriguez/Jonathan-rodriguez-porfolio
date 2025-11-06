const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    if (!emailjs) {
        console.error('EmailJS no está disponible');
        contactMessage.textContent = t('emailjsError');
        return;
    }

    emailjs.sendForm('service_1y5i5ng', 'template_apoos5x', contactForm, 'euuVgY-6Yp0GdhZAz')
        .then(() => {
            contactMessage.textContent = t('emailSent');
            setTimeout(() => contactMessage.textContent = '', 5000);
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error al enviar el mensaje:', error);
            contactMessage.textContent = t('emailFail');
            setTimeout(() => contactMessage.textContent = '', 5000);
        });
};

if (contactForm) {
    contactForm.addEventListener('submit', sendEmail);
} else {
    console.error('Formulario de contacto no encontrado');
    contactMessage.textContent = t('formNotFound');
}
