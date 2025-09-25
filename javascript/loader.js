const loadingScreen = document.getElementById("loader");
const mainScreen = document.getElementById("mainContent");

window.addEventListener('load', function() {
    setTimeout(() => {
        loadingScreen.classList.add('opacity-0');
        mainScreen.classList.remove('opacity-0');
        
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 500);
    }, 800);
});

// Fallback
setTimeout(() => {
    loadingScreen.classList.add('hidden');
    mainScreen.classList.remove('opacity-0');
}, 4000);