// js/calculator.js
document.getElementById('fence-calculator').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const length = parseFloat(document.getElementById('fence-length').value);
    const height = parseFloat(document.getElementById('fence-height').value);
    const profileType = document.getElementById('profile-type').value;
    
 
    const postsCount = Math.ceil(length / 3); //  
    
    const picketsCount = calculatePicketsCount(length, height);
    const totalCost = calculateTotalCost(picketsCount, postsCount, profileType);
    
    displayResult(picketsCount, postsCount, totalCost);
});

function calculatePicketsCount(length, height) {
    const picketWidth = 0,118; // Ширина одного штакетника в метрах
    const gap = 0,03; // Зазор между штакетниками в метрах
    
    return Math.ceil(length / (picketWidth + gap));
}

function calculateTotalCost(picketsCount, postsCount, profileType) {
    const picketPrice = profileType === 'standard' ? 250 : 350;
    const postPrice = 1200;
    
    return (picketsCount * picketPrice) + (postsCount * postPrice);
}

function displayResult(picketsCount, postsCount, totalCost) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Результаты расчета</h2>
        <p>Количество штакетников: ${picketsCount} шт.</p>
        <p>Количество столбов: ${postsCount} шт.</p>
        <p>Общая стоимость: ${totalCost.toLocaleString()} руб.</p>
    `;
}
