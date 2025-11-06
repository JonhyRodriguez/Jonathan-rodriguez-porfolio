// Obtener elementos del DOM
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

// Función para enviar el email
const sendEmail = (e) => {
    e.preventDefault();

    // Verificar que EmailJS esté cargado
    if (!emailjs) {
        console.error('EmailJS no está disponible');
        contactMessage.textContent = 'Error: EmailJS no está cargado ❌';
        return;
    }

    // Enviar el formulario
    emailjs.sendForm('service_1y5i5ng', 'template_apoos5x', contactForm, 'euuVgY-6Yp0GdhZAz')
        .then(() => {
            contactMessage.textContent = 'Mensaje enviado! ✔️';
            setTimeout(() => contactMessage.textContent = '', 5000);
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error al enviar el mensaje:', error);
            contactMessage.textContent = 'El mensaje no se envió (error del servidor) ❌';
            setTimeout(() => contactMessage.textContent = '', 5000);
        });
};

// Verificar que el formulario existe antes de añadir el listener
if (contactForm) {
    contactForm.addEventListener('submit', sendEmail);
} else {
    console.error('Formulario de contacto no encontrado');
}