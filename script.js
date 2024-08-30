const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const thankYouMessage = document.getElementById('thankYouMessage');

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    thankYouMessage.style.display = 'block';
    setTimeout(() => {
        thankYouMessage.style.display = 'none';
    }, 3000);
});
