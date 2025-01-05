// Scroll to top button functionality
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the last played game index
    let lastPlayedIndex = -1;

    // Random game functionality
    const randomGameBtn = document.querySelector('.random-game-btn');
    const gameCards = document.querySelectorAll('.game-card');
    const gameCardsArray = Array.from(gameCards);

    if (randomGameBtn) {
        randomGameBtn.addEventListener('click', () => {
            let randomIndex;
            // Keep generating a new random index until it's different from the last played
            do {
                randomIndex = Math.floor(Math.random() * gameCardsArray.length);
            } while (randomIndex === lastPlayedIndex && gameCardsArray.length > 1);

            // Update the last played index
            lastPlayedIndex = randomIndex;
            
            // Get the game link and navigate to it
            const randomGame = gameCardsArray[randomIndex];
            const gameLink = randomGame.querySelector('a').href;
            window.location.href = gameLink;
        });
    }
});