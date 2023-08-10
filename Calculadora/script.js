// Espera a que el documento HTML esté completamente cargado y listo para manipular
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene una referencia al botón de cálculo y al párrafo de resultado
    const calculateButton = document.getElementById('calculate');
    const resultParagraph = document.getElementById('result');

    // Agrega un evento de clic al botón de cálculo
    calculateButton.addEventListener('click', () => {
        // Obtiene los valores ingresados por el usuario para operandos y operador
        const operand1 = parseFloat(document.getElementById('operand1').value);
        const operand2 = parseFloat(document.getElementById('operand2').value);
        const operator = document.getElementById('operator').value;

        // Verifica si los operandos ingresados son números válidos
        if (isNaN(operand1) || isNaN(operand2)) {
            resultParagraph.textContent = 'Error: Ingrese números válidos';
            return;
        }

        // Inicializa una variable para almacenar el resultado de la operación
        let result;

        // Utiliza una estructura de selección para realizar la operación correspondiente
        switch (operator) {
            case 'sum':
                result = operand1 + operand2;
                break;
            case 'subtract':
                result = operand1 - operand2;
                break;
            case 'multiply':
                result = operand1 * operand2;
                break;
            case 'divide':
                // Maneja el caso especial de la división por cero
                if (operand2 !== 0) {
                    result = operand1 / operand2;
                } else {
                    result = 'Error: División por cero';
                }
                break;
        }

        // Verifica si el resultado es demasiado grande o pequeño para mostrar
        if (result === Infinity || result === -Infinity) {
            resultParagraph.textContent = 'Error: Resultado demasiado grande o pequeño';
        } else {
            // Muestra el resultado en el párrafo de resultado
            resultParagraph.textContent = `Resultado: ${result}`;
        }
    });
});




