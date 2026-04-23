// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const nav = document.querySelector('nav');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }

  // --- Animated Counter Stats ---
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  function animateCounters() {
    if (hasAnimated) return;
    hasAnimated = true;

    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const startTime = Date.now();

      const updateCount = () => {
        const now = Date.now();
        const progress = (now - startTime) / duration;

        if (progress < 1) {
          const current = Math.floor(progress * target);
          stat.textContent = current.toLocaleString();
          requestAnimationFrame(updateCount);
        } else {
          stat.textContent = target.toLocaleString();
        }
      };

      updateCount();
    });
  }

  // Trigger animation when stats section is in view
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
});

// --- Close Mobile Menu ---
function closeMenu() {
  const nav = document.querySelector('nav');
  nav.classList.remove('active');
}

// --- Toggle FAQ accordion ---
function toggleFaq(button) {
  button.classList.toggle('active');
  const answer = button.nextElementSibling;
  answer.classList.toggle('active');
}

// --- Parallax scrolling effect ---
const parallaxBg = document.getElementById('parallaxBg');
if (parallaxBg) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  });
}

// --- Modal Functions ---
function openHow() {
  document.getElementById('howModal').style.display = 'block';
}

function closeHow() {
  document.getElementById('howModal').style.display = 'none';
}

function openContact() {
  document.getElementById('contactModal').style.display = 'block';
}

function closeContact() {
  document.getElementById('contactModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const howModal = document.getElementById('howModal');
  const contactModal = document.getElementById('contactModal');
  if (event.target === howModal) closeHow();
  if (event.target === contactModal) closeContact();
}

