document.addEventListener('DOMContentLoaded', () => {

  /* ============================
     CONFIG (EDIT THESE)
  ============================ */

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/XXXXXXX'; // your real endpoint
  const WHATSAPP_NUMBER = '9199936648011'; // no +, no spaces

  /* ============================
     FORM SUBMISSION (EMAIL)
  ============================ */

  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formMessage.textContent = '✅ Message sent successfully. We’ll contact you shortly.';
          formMessage.style.color = 'green';
          contactForm.reset();
        } else {
          formMessage.textContent = '❌ Failed to send message. Please try WhatsApp.';
          formMessage.style.color = 'red';
        }
      } catch (error) {
        formMessage.textContent = '❌ Network error. Please use WhatsApp.';
        formMessage.style.color = 'red';
      }
    });
  }

  /* ============================
     WHATSAPP LOGIC
  ============================ */

  function buildWhatsAppMessage() {
    if (!contactForm) return 'Hi, I need help with data recovery.';

    const name = contactForm.querySelector('[name="name"]')?.value || '';
    const email = contactForm.querySelector('[name="email"]')?.value || '';
    const phone = contactForm.querySelector('[name="phone"]')?.value || '';
    const device = contactForm.querySelector('[name="device"]')?.value || '';
    const message = contactForm.querySelector('[name="message"]')?.value || '';

    return encodeURIComponent(
      `Hi Shikhar,
I need help with data recovery.

Name: ${name}
Email: ${email}
Phone: ${phone}
Device: ${device}
Issue: ${message}`
    );
  }

  window.openWhatsApp = function () {
    const text = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, '_blank');
  };

  /* ============================
     MODAL LOGIC
  ============================ */

  const modal = document.getElementById('contact-modal');
  const openHero = document.getElementById('open-contact-modal');
  const openFooter = document.getElementById('open-contact-modal-footer');
  const closeBtn = document.querySelector('.close-button');

  if (openHero) openHero.onclick = () => modal.style.display = 'flex';
  if (openFooter) openFooter.onclick = () => modal.style.display = 'flex';
  if (closeBtn) closeBtn.onclick = () => modal.style.display = 'none';

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

});
