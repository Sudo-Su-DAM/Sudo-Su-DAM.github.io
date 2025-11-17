// Añade el año actual al footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simula envío de formulario (sin backend)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  statusEl.textContent = "";
  statusEl.className = "status";

  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const tipo = form.tipo.value.trim();
  const mensaje = form.mensaje.value.trim();

  if (!nombre || !email || !tipo || !mensaje) {
statusEl.textContent = "Por favor, completa todos los campos obligatorios.";
statusEl.classList.add("error");
return;
  }

  // Aquí es donde enviarías los datos a tu backend con fetch/AJAX.
  // Simulamos un envío correcto:
  setTimeout(() => {
statusEl.textContent = "¡Gracias! Hemos recibido tu mensaje y te responderemos pronto.";
statusEl.classList.add("ok");
form.reset();
  }, 400);
});