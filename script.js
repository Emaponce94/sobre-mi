// Función para mostrar u ocultar el contenido
function toggleContent(event) {
  event.preventDefault(); 
  const contentDiv = document.querySelector(".content");
  const toggleLink = document.getElementById("toggle-content");

  if (contentDiv.style.display === "none") {
    contentDiv.style.display = "block";
    toggleLink.textContent = "▲ Un poco de lo que me gusta hacer y apasiona";
  } else {
    contentDiv.style.display = "none";
    toggleLink.textContent = "▼ Un poco de lo que me gusta hacer y apasiona";
  }
}

const toggleLink = document.getElementById("toggle-content");


toggleLink.addEventListener("click", toggleContent);

