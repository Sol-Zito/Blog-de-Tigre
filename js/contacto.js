document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contacto-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos
    const name = document.getElementById("name").value.trim();
    const cellphone = document.getElementById("cellphone").value.trim();
    const email = document.getElementById("email").value.trim();
    const selectedOption = document.getElementById("optionsSelected").value;
    const comment = document.getElementById("messageUser").value.trim();
    const checkbox = document.getElementById("gridCheck");

    // Validar que todos los campos estén completados
    if (
      name === "" ||
      cellphone === "" ||
      email === "" ||
      selectedOption === "" ||
      !checkbox.checked
    ) {
      Swal.fire({
        // title: "Debes completar todos los campos del formulario.",
        text: `Debes completar todos los campos del formulario.`,
        icon: "error",
      });

      return false; // Evita que el formulario se envíe
    }

    Swal.fire({
      title: "¡Formulario enviado con éxito!",
      text: `Pronto recibira informacion sobre ${selectedOption}`,
      icon: "success",
    });
    // Si todos los campos están completados, se puede enviar el formulario

    // Aquí podrías enviar el formulario mediante AJAX o cualquier otra acción que desees
    form.reset(); // Limpiar el formulario después de enviarlo
  });
});
