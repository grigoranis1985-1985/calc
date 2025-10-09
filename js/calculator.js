 document.getElementById('fence-calculator').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем значения из формы
            const fenceLength = parseFloat(document.getElementById('fence-length').value);
            const fenceHeight = parseFloat(document.getElementById('fence-height').value);
            const profileType = document.getElementById('profile-type').value;
            
            // Проверяем корректность введенных данных
            if (isNaN(fenceLength) || isNaN(fenceHeight) || fenceLength <= 0 || fenceHeight < 0.5 || fenceHeight > 3) {
                alert('Пожалуйста, введите корректные значения длины и высоты забора.');
                return;
            }
            
            // Расчет поперечин
            const crossbarLengthPerRow = fenceLength * 2; // Две линии поперечин
            const crossbarCount = Math.ceil(crossbarLengthPerRow / 6); // Округляем в большую сторону
            
            // Расчет стоимости (условные цены)
            const profilePrices = {
                'standard': 500,
                'premium': 800
            };
            
            const crossbarPricePerMeter = 150;
            const totalCost = (fenceLength * fenceHeight * profilePrices[profileType]) + 
                             (crossbarCount * 6 * crossbarPricePerMeter);
            
            // Обновляем результаты
            document.getElementById('result-length').textContent = fenceLength + ' м';
            document.getElementById('result-height').textContent = fenceHeight + ' м';
            document.getElementById('result-profile').textContent = 
                profileType === 'standard' ? 'Стандартный' : 'Премиум';
            document.getElementById('result-crossbars').textContent = crossbarCount + ' шт';
            document.getElementById('result-crossbars-length').textContent = (crossbarCount * 6) + ' м';
            document.getElementById('result-cost').textContent = Math.round(totalCost) + ' руб';
            
            // Показываем блок с результатами
            document.getElementById('result').style.display = 'block';
        });