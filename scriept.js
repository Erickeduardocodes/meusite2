document.getElementById('expCalculator').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const base = parseFloat(document.getElementById('base').value);
    const exponent = parseFloat(document.getElementById('exponent').value);
    let result;

    if (!isNaN(base) && !isNaN(exponent)) {
        result = Math.pow(base, exponent);
    } else {
        result = 'Por favor, insira números válidos para a base e o expoente';
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
});