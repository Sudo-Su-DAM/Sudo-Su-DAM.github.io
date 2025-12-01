function mostrarError(msg) {
    const el = document.getElementById("ocultarNotificacion");
    if (el) el.id = "mostrarNotificacion";

    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => {
        p.textContent = msg;
    });
}

function go() {
    const login = document.form.login.value;
    const pass = document.form.password.value;
    const rep = document.form.repeatPassword.value;

    // All fields required
    if (!login || !pass || !rep) {
        mostrarError("Todos los campos son obligatorios");
        return;
    }

    // Username minimum 4 chars
    if (login.length < 4) {
        mostrarError("El usuario debe tener mínimo 4 caracteres");
        return;
    }

    // Password strength check
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!passRegex.test(pass)) {
        mostrarError("La contraseña debe tener mínimo 8 caracteres, mayúscula, minúscula y símbolo");
        return;
    }

    // Passwords match
    if (pass !== rep) {
        mostrarError("Las contraseñas no coinciden");
        return;
    }

    // All correct → redirect
    window.location.href = "../../inicio/";
}

document.getElementById("submitregistro").addEventListener("click", function (e) {
    e.preventDefault();
    go();
});
