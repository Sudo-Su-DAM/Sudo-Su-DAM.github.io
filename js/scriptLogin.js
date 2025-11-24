function go() {
    if (
        document.form.password.value === "admin" &&
        document.form.login.value === "admin"
    ) {
        // Redirect to inicio.html
        window.location.href = "./inicio.html";
    } else {
        alert("Error: usuario o contraseña incorrectos.");
    }
}

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
    go();
});
