# Juego de Piedra, Papel o Tijeras

¡Bienvenido al juego de Piedra, Papel o Tijeras! Este es un juego clásico en el que compites contra la computadora para ver quién elige la mejor opción.

## Cómo Jugar

1. Ingresa tu nombre en el campo de texto y selecciona la cantidad máxima de rondas que deseas jugar. Luego haz clic en "Iniciar Juego".
2. Verás tres imágenes: Piedra, Papel y Tijeras. Haz clic en la imagen que elijas para tu jugada.
3. La computadora también hará su elección automáticamente.
4. Al final de cada ronda, se mostrará quién ganó esa ronda y se actualizarán los puntajes.
5. El juego se jugará durante el número máximo de rondas que seleccionaste. Una vez completadas todas las rondas, se mostrará el ganador final.

## Reglas

- Piedra vence a Tijeras.
- Tijeras vencen a Papel.
- Papel vence a Piedra.

## Puntuación

- El puntaje del jugador aumentará si ganas una ronda.
- El puntaje de la computadora aumentará si pierdes una ronda.
- Si ambos jugadores eligen lo mismo, la ronda terminará en empate.

## Reiniciar el Juego

- Si deseas volver a jugar, simplemente haz clic en el botón "Reiniciar Juego". Puedes cambiar tu nombre y la cantidad máxima de rondas antes de reiniciar.

¡Diviértete jugando al emocionante juego de Piedra, Papel o Tijeras! ¿Tienes lo que se necesita para vencer a la computadora?

## Detalles codigó

- index.html
En este archivo se establece la estructura principal de la página del juego. Se implementan los siguientes elementos:

Entrada de Nombre y Selección de Rondas: Se incluye un campo de texto donde el jugador puede ingresar su nombre y un campo numérico para seleccionar la cantidad máxima de rondas. Además, hay un botón "Iniciar Juego" que inicia la partida.

Opciones de Juego: Se presentan tres imágenes correspondientes a las opciones de "Piedra", "Papel" y "Tijeras". Cada imagen tiene el atributo data-option que representa la elección del jugador.

Resultados de Rondas y Puntuación: En esta sección, se muestra el resultado de cada ronda, incluyendo las elecciones del jugador y la computadora, así como el resultado de la ronda. También se muestran los puntajes del jugador, la computadora y los empates.

Botón de Reinicio: El botón "Reiniciar Juego" permite al jugador restablecer la partida y los puntajes a su configuración inicial.

- styles.css
En este archivo de hoja de estilos se definen los aspectos visuales del juego para mejorar la apariencia y la interacción. Los puntos clave de implementación incluyen:

Interacción Visual con Opciones: Se utiliza CSS para aplicar una transformación de escala cuando el jugador coloca el cursor sobre una opción. Esto proporciona una retroalimentación visual cuando el jugador interactúa con las imágenes.
script.js

- El archivo JavaScript se encarga de la lógica del juego y la interacción del usuario. Aquí se implementa lo siguiente:

Interacción de Usuario: Se captura el nombre del jugador y la cantidad máxima de rondas seleccionada por el usuario.

Selección de Opciones: Se implementa la funcionalidad para que el jugador pueda hacer clic en las opciones de juego y jugar una ronda contra la computadora.

Determinación del Ganador: Se implementa la lógica para determinar el ganador de cada ronda en función de las reglas del juego.

Actualización de Puntajes: Se actualizan los puntajes del jugador, la computadora y los empates en la interfaz después de cada ronda.

Control de Flujo del Juego: Se gestiona el flujo del juego para garantizar que se jueguen la cantidad de rondas seleccionada y se anuncie el ganador final al finalizar el juego.

Reinicio del Juego: Se proporciona la capacidad de reiniciar el juego, restableciendo los puntajes y permitiendo que el jugador juegue nuevamente.

Estos elementos y funcionalidades se combinan para crear una experiencia de juego interactiva y entretenida de Piedra, Papel o Tijeras. Cada parte del código contribuye a diferentes aspectos del juego, desde la interfaz de usuario hasta la lógica de juego y el control del flujo.

## Autor

Juego desarrollado por Emanuel David Ponce.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes obtener más información en el archivo [LICENSE](LICENSE).