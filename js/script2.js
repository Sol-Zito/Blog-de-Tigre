document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contacto-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtener los valores de los campos
        const name = document.getElementById("name").value.trim();
        const cellphone = document.getElementById("cellphone").value.trim();
        const email = document.getElementById("email").value.trim();
        const selectedOption = document.getElementById("inputState").value;
        const comment = document.getElementById("floatingTextarea2").value.trim();
        const checkbox = document.getElementById("gridCheck");

        // Validar que todos los campos estén completados
        if (name === "" || cellphone === "" || email === "" || selectedOption === "" || comment === "" || !checkbox.checked) {
            alert("Por favor, completa todos los campos del formulario y acepta los términos y condiciones.");
            return false; // Evita que el formulario se envíe
        }

        // Si todos los campos están completados, se puede enviar el formulario
        alert("¡Formulario enviado con éxito!");
        // Aquí podrías enviar el formulario mediante AJAX o cualquier otra acción que desees
        form.reset(); // Limpiar el formulario después de enviarlo
    });
});
