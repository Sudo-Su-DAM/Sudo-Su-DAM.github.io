function go() {
    if (
        document.form.password.value === "admin" &&
        document.form.login.value === "admin"
    ) {
        window.location.href = "./inicio.html";
    } else {
        // Change element ID to show the notification
        const el = document.getElementById("ocultarNotificacion");
        if (el) {
            el.id = "mostrarNotificacion"; // rename the ID
        }

        // Update all <p> elements with the error message
        const paragraphs = document.querySelectorAll("p");
        paragraphs.forEach(p => {
            p.textContent = "Error: usuario o contraseña incorrectos"; // set error message
        });
    }
}

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
    go();
});
