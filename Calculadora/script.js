// Espera a que el documento HTML esté completamente cargado y listo para manipular
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene una referencia al botón de cálculo, al botón de limpiar y al párrafo de resultado
    const calculateButton = document.getElementById('calculate');
    const clearButton = document.getElementById('clear');
    const resultParagraph = document.getElementById('result');

    // Agrega un evento de clic al botón de cálculo
    calculateButton.addEventListener('click', () => {
        // Obtiene los valores ingresados por el usuario para operandos y operador
        const operand1 = parseFloat(document.getElementById('operand1').value);
        const operand2 = parseFloat(document.getElementById('operand2').value);
        const operator = document.getElementById('operator').value;

        // Verifica si los operandos ingresados son números válidos usando isNaN
        if (isNaN(operand1) || isNaN(operand2)) {
            alert('Ingrese números válidos en los campos de operandos.');
            return;
        }

        // Verifica si la cantidad de caracteres en los operandos excede el límite (20 caracteres)
        if (operand1.toString().length > 20 || operand2.toString().length > 20) {
            alert('La cantidad de caracteres ingresados en los operandos es demasiado grande.');
            return;
        }

        // Inicializa una variable para almacenar el resultado de la operación
        let result;

        // Utiliza una estructura de selección (switch) para realizar la operación correspondiente
        switch (operator) {
            case 'suma':
                result = operand1 + operand2;
                break;
            case 'resta':
                result = operand1 - operand2;
                break;
            case 'multiplicacion':
                result = operand1 * operand2;
                break;
            case 'division':
                // Maneja el caso especial de la división por cero
                if (operand2 !== 0) {
                    result = operand1 / operand2;
                } else {
                    result = 'Error: División por cero';
                }
                break;
        }

        // Verifica si el resultado es demasiado grande o pequeño para ser mostrado en la interfaz
        if (result === Infinity || result === -Infinity) {
            resultParagraph.textContent = 'Error: Resultado demasiado grande o pequeño';
        } else {
            // Muestra el resultado en el párrafo de resultado
            resultParagraph.textContent = `Resultado: ${result}`;
        }
    });

    // Agrega un evento de clic al botón de limpiar
    clearButton.addEventListener('click', () => {
        // Limpia los campos de operandos y el párrafo de resultado
        document.getElementById('operand1').value = '';
        document.getElementById('operand2').value = '';
        resultParagraph.textContent = '';
    });
});





