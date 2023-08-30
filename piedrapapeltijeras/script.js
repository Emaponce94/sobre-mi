// Definición de las opciones de juego
const options = ["Piedra", "Papel", "Tijeras"];

// Variables de puntuación, rondas y nombre de jugador
let playerScore = 0; // Puntuación del jugador
let pcScore = 0; // Puntuación de la computadora
let maxRounds = 5; // Máximo de rondas por juego
let draws = 0; // Empates
let roundsPlayed = 0; // Rondas jugadas
let playerName = ""; // Nombre del jugador

// Elementos HTML relevantes
const optionElements = document.querySelectorAll(".option"); // Selección de elementos con la clase "option" (imágenes de opciones)
const playerNameInput = document.getElementById("name"); // Elemento de entrada para el nombre del jugador
const maxRoundsInput = document.getElementById("max-rounds"); // Elemento de entrada para el máximo de rondas
const playerScoreElement = document.getElementById("player-score"); // Elemento para mostrar la puntuación del jugador
const pcScoreElement = document.getElementById("pc-score"); // Elemento para mostrar la puntuación de la computadora
const drawsElement = document.getElementById("draws"); // Elemento para mostrar la cantidad de empates
const resultsElement = document.querySelector(".results"); // Elemento para mostrar los resultados del juego
const resetButton = document.getElementById("reset"); // Botón de reinicio

// Listener para capturar el nombre del jugador ingresado
playerNameInput.addEventListener("change", () => {
    playerName = playerNameInput.value;
});

// Loop para asignar funcionalidad a las opciones de juego
optionElements.forEach(option => {
    option.addEventListener("click", () => {
        if (!playerName) { // Validación: si no se ha ingresado el nombre
            alert("Por favor, ingresa tu nombre antes de comenzar el juego.");
            return; // Sale de la función si no se ingresó el nombre
        }

        if (roundsPlayed < maxRounds) { // Verificar si aún no se han jugado todas las rondas
            const playerOption = option.getAttribute("data-option"); // Obtener la opción seleccionada por el jugador
            const pcOption = options[Math.floor(Math.random() * options.length)]; // Elegir una opción aleatoria para la PC

            const result = determineWinner(playerOption, pcOption); // Determinar el ganador
            updateScore(result); // Actualizar la puntuación

            resultsElement.textContent = `Jugador eligió ${playerOption}, PC eligió ${pcOption}. ${result}`;

            roundsPlayed++;

            if (roundsPlayed === maxRounds) { // Si se han jugado todas las rondas
                const winnerMessage = playerScore > pcScore ?
                    `Felicitaciones ${playerName}, Ganaste` :
                    pcScore > playerScore ?
                    "Game Over" :
                    "Empate!";

                alert(`Finalizó el juego. ${winnerMessage}`);
                optionElements.forEach(option => option.removeEventListener("click", handleOptionClick));
            }
        }
    });
});

// Evento de cambio en el input de máximo de rondas
maxRoundsInput.addEventListener("change", () => {
    maxRounds = 5; // Ajustar el valor máximo de rondas (actualmente está fijo en 5)
    resetGame(); // Reiniciar el juego con el nuevo número máximo de rondas
});

// Evento de clic en el botón de reinicio
resetButton.addEventListener("click", () => {
    playerNameInput.value = ""; // Vaciar el campo de entrada de nombre
    maxRoundsInput.value = "5"; // Restaurar el valor predeterminado del input de rondas
    playerName = ""; // Reiniciar también el nombre del jugador
    resetGame(); // Llamar a la función para reiniciar el juego
});

// Función para reiniciar el juego
function resetGame() {
    playerScore = 0; // Reiniciar la puntuación del jugador
    pcScore = 0; // Reiniciar la puntuación de la computadora
    draws = 0; // Reiniciar el contador de empates
    roundsPlayed = 0; // Reiniciar el contador de rondas jugadas
    playerScoreElement.textContent = "0"; // Actualizar el elemento de puntuación del jugador
    pcScoreElement.textContent = "0"; // Actualizar el elemento de puntuación de la computadora
    drawsElement.textContent = "0"; // Actualizar el elemento de empates
    resultsElement.textContent = "Elige una opción para empezar."; // Restaurar el mensaje de resultados
    optionElements.forEach(option => option.addEventListener("click", handleOptionClick)); // Agregar eventos nuevamente a las opciones
}

// Función para determinar al ganador
function determineWinner(playerOption, pcOption) {
    if (playerOption === pcOption) { // Si hay un empate
        draws++; // Incrementar el contador de empates
        drawsElement.textContent = draws; // Actualizar el elemento de empates en la página
        return "Empate!"; // Devolver el mensaje de empate
    } else if (
        (playerOption === "Piedra" && pcOption === "Tijeras") ||
        (playerOption === "Papel" && pcOption === "Piedra") ||
        (playerOption === "Tijeras" && pcOption === "Papel")
    ) {
        return "Jugador gana!"; // Devolver el mensaje de victoria del jugador
    } else {
        return "PC gana!"; // Devolver el mensaje de victoria de la PC
    }
}

// Función para actualizar la puntuación
function updateScore(result) {
    if (result === "Jugador gana!") { // Si el jugador gana
        playerScore++; // Incrementar la puntuación del jugador
        playerScoreElement.textContent = playerScore; // Actualizar el elemento de puntuación del jugador en la página
    } else if (result === "PC gana!") { // Si la PC gana
        pcScore++; // Incrementar la puntuación de la PC
        pcScoreElement.textContent = pcScore; // Actualizar el elemento de puntuación de la PC en la página
    }
}
