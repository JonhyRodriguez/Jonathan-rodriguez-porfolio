const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_nyezyve','template_apoos5x','#contact-form','euuVgY-6Yp0GdhZAz')
        .then(() =>{
            // Show send message 
            contactMessage.textContent = 'Mensaje enviado!✔️'

            // Remuve message after 5 seconds
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            // Clear inputs fields
            contactForm.reset()

        }, () =>{
            // Show error message
            contactMessage.textContent = 'El mensaje no se envió (server error)❌'

            // Remuve message after 5 seconds
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            // Clear inputs fields
            contactForm.reset()
        })
    }

    contactForm.addEventListener('submit', sendEmail)