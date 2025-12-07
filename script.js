document.addEventListener('DOMContentLoaded', () => {
    // --- Form Submission Logic ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    // REMINDER: Replace this URL with your actual Formspree endpoint URL
    const formspreeEndpoint = 'YOUR_FORMSPREE_ENDPOINT_HERE'; 

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault(); 
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formMessage.innerHTML = '✅ Thank you for contacting us! We will respond shortly.';
                formMessage.style.color = 'green';
                contactForm.reset();
            } else {
                formMessage.innerHTML = '❌ Oops! There was a problem sending your message.';
                formMessage.style.color = 'red';
            }
        } catch (error) {
            formMessage.innerHTML = '❌ An error occurred: ' + error.message;
            formMessage.style.color = 'red';
        }
    });

    // --- Modal Logic ---
    const modal = document.getElementById("contact-modal");
    // Get the buttons that open the modal
    const openModalButtonHero = document.getElementById("open-contact-modal");
    const openModalButtonFooter = document.getElementById("open-contact-modal-footer");
    // Get the element that closes the modal
    const closeButton = document.querySelector(".close-button");

    // When the user clicks the button, open the modal
    openModalButtonHero.onclick = function() {
        modal.style.display = "flex"; /* Use flex to center the modal */
    }

    openModalButtonFooter.onclick = function() {
        modal.style.display = "flex";
    }

    // When the user clicks on (x), close the modal
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal content, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

