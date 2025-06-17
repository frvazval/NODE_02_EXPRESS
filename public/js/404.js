function errorClick() {
    const h1 = document.querySelector('h1');
    if (h1) {
        // Genera un color hexadecimal aleatorio
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        h1.style.color = randomColor;
    }
}

const h1 = document.querySelector('h1');
if (h1) {
    h1.onclick = errorClick;
}