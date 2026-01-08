:root {
  --accent: #0ea5a4;
  --bg: #0f1724;
  --card: #0b1220;
  --muted: #9aa4b2;
}

* {
  box-sizing: border-box;
}

body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, 'Helvetica Neue', Arial;
  line-height: 1.5;
  margin: 0;
  background: linear-gradient(180deg, #071024 0%, #0b1220 100%);
  color: #e6eef6;
}

a {
  color: var(--accent);
  text-decoration: none;
  cursor: pointer;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 28px;
}

.logo {
  display: flex;
  gap: 12px;
  align-items: center;
}

.logo-mark {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--accent), #06b6d4);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}

nav a {
  margin-left: 18px;
  color: var(--muted);
  font-weight: 600;
}

.container {
  max-width: 1100px;
  margin: 30px auto;
  padding: 0 20px;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 32px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  background: rgba(14, 165, 164, 0.12);
  color: var(--accent);
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 13px;
}

h1 {
  font-size: 38px;
  margin: 12px 0 8px;
}

p.lead {
  color: var(--muted);
  font-size: 16px;
  max-width: 60ch;
}

.cta-row {
  margin-top: 18px;
  display: flex;
  gap: 12px;
  align-items: center;
}

.btn {
  background: var(--accent);
  color: #042024;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 700;
  border: 0;
  cursor: pointer;
}

.btn.ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--muted);
}

.card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.6);
}

.feature {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.feature .ico {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  display: grid;
  place-items: center;
  font-weight: 700;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 22px;
}

.small {
  font-size: 13px;
  color: var(--muted);
}

footer {
  margin-top: 44px;
  padding: 30px 20px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

/* MODAL STYLES */
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  padding-top: 80px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
}

.modal-content {
  background: #0b1220;
  margin: auto;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  animation: popup 0.25s ease-out;
}

@keyframes popup {
  from {
    transform: scale(0.8);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

.close {
  float: right;
  font-size: 28px;
  cursor: pointer;
}

.input {
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: none;
  color: #fff;
}

/* WhatsApp floating button */
#whatsappBtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: #25D366;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  text-decoration: none;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  z-index: 99999;
}

/* Responsive */
@media (max-width:900px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .grid-3 {
    grid-template-columns: 1fr;
  }
}
