document.addEventListener('DOMContentLoaded', () => {
    const readMoreLinks = document.querySelectorAll('.read-more');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const closeButton = document.querySelector('.close');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor action
            const content = link.getAttribute('data-content');
            popupText.textContent = content;
            popup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close the popup if clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});