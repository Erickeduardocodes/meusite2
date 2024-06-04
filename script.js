document.getElementById('logCalculator').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const base = parseFloat(document.getElementById('base').value);
    const value = parseFloat(document.getElementById('value').value);
    let result;

    if (base > 0 && base !== 1 && value > 0) {
        result = Math.log(value) / Math.log(base);
    } else {
        result = 'Base deve ser > 0 e != 1, e Valor deve ser > 0';
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
});