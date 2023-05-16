window.addEventListener('DOMContentLoaded', () => {
    const numberElements = document.querySelectorAll('.text-numbers');
    const textElements = document.querySelectorAll('.text-card');

    numberElements.forEach((element) => {
        const parentElement = element.parentElement;
        const parentHeight = parentElement.clientHeight;

        const desiredFontSize = parentHeight * 0.4;

        element.style.fontSize = `${desiredFontSize}px`;
    });

    textElements.forEach((element) => {
        const parentElement = element.parentElement;
        const parentHeight = parentElement.clientHeight;

        const desiredFontSize = parentHeight * 0.1;

        element.style.fontSize = `${desiredFontSize}px`;
    });
});