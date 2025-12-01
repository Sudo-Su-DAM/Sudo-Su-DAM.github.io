function go() {
    const login = document.form.login.value;
    const pass = document.form.password.value;
    const rep = document.form.repeatPassword.value;

    if (!login) {
        // Show notification if login is empty
        const el = document.getElementById("ocultarNotificacion");
        if (el) {
            el.id = "mostrarNotificacion";
        }

        const paragraphs = document.querySelectorAll("p");
        paragraphs.forEach(p => {
            p.textContent = "Error: el campo de login es obligatorio";
        });
        return;
    }

    if (pass === rep) {
        window.location.href = "../../inicio/";
    } else {
        const el = document.getElementById("ocultarNotificacion");
        if (el) {
            el.id = "mostrarNotificacion";
        }

        const paragraphs = document.querySelectorAll("p");
        paragraphs.forEach(p => {
            p.textContent = "Error: las contraseñas no coinciden";
        });
    }
}

document.getElementById("submitregistro").addEventListener("click", function (e) {
    e.preventDefault();
    go();
});
