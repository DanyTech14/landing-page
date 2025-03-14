document.addEventListener('DOMContentLoaded', () => {
    // Slider de Depoimentos
    const cards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add('active');
    }

    showCard(currentIndex);

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }, 5000);

    // Animação interativa da imagem
    const bookImage = document.querySelector('.book-image');
    const bookContainer = document.querySelector('.book-container');

    bookContainer.addEventListener('mousemove', (e) => {
        const rect = bookContainer.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const tiltX = (y / rect.height) * 20;
        const tiltY = -(x / rect.width) * 20;

        bookImage.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(30px)`;
    });

    bookContainer.addEventListener('mouseleave', () => {
        bookImage.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });

    bookContainer.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = bookContainer.getBoundingClientRect();
        const x = touch.clientX - rect.left - rect.width / 2;
        const y = touch.clientY - rect.top - rect.height / 2;

        const tiltX = (y / rect.height) * 20;
        const tiltY = -(x / rect.width) * 20;

        bookImage.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(30px)`;
    });

    bookContainer.addEventListener('touchend', () => {
        bookImage.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });

    // Animação interativa nos botões
    const buttons = document.querySelectorAll('.cta-button, .whatsapp-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1.05)';
            }, 100);
        });
    });

    // Scroll interativo
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    function handleScroll() {
        scrollElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= windowHeight * 0.8) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chama ao carregar para verificar elementos já visíveis
});