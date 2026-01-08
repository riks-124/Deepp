// Configuration
const WHATSAPP_NUMBER = "919936648011"; // no +
const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/XXXX/viewform";

// Set page year
document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Modal controls and contact handlers (kept as globals so inline onclick handlers work)
function openHow() {
  const el = document.getElementById('howModal');
  if (el) el.style.display = 'block';
}

function closeHow() {
  const el = document.getElementById('howModal');
  if (el) el.style.display = 'none';
}

function openContact() {
  const el = document.getElementById('contactModal');
  if (el) el.style.display = 'block';
}

function closeContact() {
  const el = document.getElementById('contactModal');
  if (el) el.style.display = 'none';
}

// WhatsApp setup and helpers
const message = encodeURIComponent(
  "Hi Shikhar, I need help with data recovery. Device details:"
);

function buildWhatsappHref() {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + message;
}

function openWhatsAppFromContact() {
  window.open(buildWhatsappHref(), "_blank");
}

// Initialize whatsapp button href once DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById("whatsappBtn");
  if (btn) {
    btn.href = buildWhatsappHref();
  }
});

// Close modals when clicking outside
window.onclick = function (event) {
  const howModal = document.getElementById('howModal');
  const contactModal = document.getElementById('contactModal');
  if (event.target === howModal) closeHow();
  if (event.target === contactModal) closeContact();
};

// Expose GOOGLE_FORM_LINK for use in inline onclick
window.GOOGLE_FORM_LINK = GOOGLE_FORM_LINK;
