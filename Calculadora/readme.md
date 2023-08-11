# Calculadora Simple

Esta es una calculadora simple que permite realizar operaciones básicas de suma, resta, multiplicación y división. Fue desarrollada por Emanuel David Ponce como parte de un proyecto práctico de programación web frontend.

## Usuario

Para utilizar la calculadora, sigue estos pasos:

1. Ingresa un número en el campo "Operando 1".
2. Selecciona la operación que deseas realizar en el menú desplegable "Operador".
3. Ingresa otro número en el campo "Operando 2".
4. Haz clic en el botón "Calcular" para ver el resultado de la operación.

La calculadora también incluye una funcionalidad de limpiar campos, simplemente haz clic en el botón "Limpiar" para borrar los valores ingresados.

## Explicación de Código

### Validación de Errores y Números Pequeños

El código de JavaScript (`script.js`) contiene una lógica para garantizar que los valores ingresados sean números válidos y para evitar resultados demasiado grandes o pequeños:

- La función `parseFloat` se utiliza para convertir los valores ingresados en los campos de operandos en números de punto flotante.
- La función `isNaN` se utiliza para verificar si los operandos son números válidos. Si alguno de los operandos no es un número válido, se muestra un `alert` que indica al usuario que debe ingresar números válidos.

### Validación de Resultados

- Luego de realizar la operación seleccionada, el código verifica si el resultado es igual a `Infinity` o `-Infinity`. Estos valores representan situaciones en las que el resultado es demasiado grande (positivo o negativo) para ser manejado como un número finito. Si ocurre, se muestra un mensaje de error correspondiente en el párrafo de resultado.

## Autor

Esta calculadora fue desarrollada por Emanuel David Ponce.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes obtener más información en el archivo [LICENSE](LICENSE).
