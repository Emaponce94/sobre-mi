// Función para mostrar u ocultar el contenido
function toggleContent() {
  const contentDiv = document.querySelector(".content");
  const toggleButton = document.getElementById("toggle-content");

  if (contentDiv.style.display === "none") {
    contentDiv.style.display = "block";
    toggleButton.textContent = "Ocultar contenido";
  } else {
    contentDiv.style.display = "none";
    toggleButton.textContent = "Mostrar contenido";
  }
}

// Obtenemos el botón por su ID
const toggleButton = document.getElementById("toggle-content");

// Agregamos un evento de clic al botón
toggleButton.addEventListener("click", toggleContent);
