//alert("HOLA BIENVENIDO AL PARCIAL")
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => card.style.borderColor = '#25D366'); // Color WhatsApp
    card.addEventListener('mouseleave', () => card.style.borderColor = 'rgba(0,0,0,.125)'); // Color original
});