document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate');
    const resultParagraph = document.getElementById('result');

    calculateButton.addEventListener('click', () => {
        const operand1 = parseFloat(document.getElementById('operand1').value);
        const operand2 = parseFloat(document.getElementById('operand2').value);
        const operator = document.getElementById('operator').value;

        if (isNaN(operand1) || isNaN(operand2)) {
            resultParagraph.textContent = 'Error: Ingrese números válidos';
            return;
        }

        let result;
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
                if (operand2 !== 0) {
                    result = operand1 / operand2;
                } else {
                    result = 'Error: División por cero';
                }
                break;
        }

        if (result === Infinity || result === -Infinity) {
            resultParagraph.textContent = 'Error: Resultado demasiado grande o pequeño';
        } else {
            resultParagraph.textContent = `Resultado: ${result}`;
        }
    });
});




