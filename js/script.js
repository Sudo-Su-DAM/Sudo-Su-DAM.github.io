function go() {
    if (
        document.form.password.value === "admin" &&
        document.form.login.value === "admin"
    ) {
        window.location.href = "../inicio/";
    } else {
        const el = document.getElementById("ocultarNotificacion");
        if (el) {
            el.id = "mostrarNotificacion";
        }

        const paragraphs = document.querySelectorAll("p");
        paragraphs.forEach(p => {
            p.textContent = "Error: usuario o contraseña incorrectos";
        });
    }
}

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
    go();
});
