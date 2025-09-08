document.addEventListener('DOMContentLoaded', function() {
    const message = document.getElementById('mainMessage');
    const revealBtn = document.getElementById('revealBtn');
    const hiddenMessage = document.getElementById('hiddenMessage');
    let clicked = false;
    
    // При наведении на сообщение
    message.addEventListener('mouseenter', function() {
        if (!clicked) {
            message.textContent = 'Иди нахуй';
            message.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ff9a9e 100%)';
        }
    });
    
    message.addEventListener('mouseleave', function() {
        if (!clicked) {
            message.textContent = 'Наведи на меня';
            message.style.background = 'linear-gradient(135deg, #fff6b7 0%, #f6416c 100%)';
        }
    });
    
    // При нажатии на кнопку
    revealBtn.addEventListener('click', function() {
        clicked = true;
        message.textContent = 'Иди нахуй';
        message.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ff9a9e 100%)';
        message.style.transform = 'scale(1.1) rotate(5deg)';
        hiddenMessage.style.display = 'block';
        
        // Анимация кнопки
        revealBtn.textContent = 'Послание доставлено!';
        revealBtn.style.background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
        
        // Создаем конфетти
        setTimeout(createConfetti, 300);
    });
    
    // Функция для создания конфетти
    function createConfetti() {
        const colors = ['#ff6b6b', '#ff9a9e', '#f6416c', '#fff6b7', '#6a11cb', '#2575fc'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-20px';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            
            document.body.appendChild(confetti);
            
            // Анимация падения
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
            });
            
            // Удаляем элемент после анимации
            animation.onfinish = () => confetti.remove();
        }
    }
});
