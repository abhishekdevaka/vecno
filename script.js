// script.js
function calculateMarkup() {
    let currentPrice = document.getElementById('currentPrice').value;
    let markupPrice = (currentPrice * 0.30) + 8500;
    document.getElementById('markupPrice').textContent = markupPrice.toFixed(2) + ' SGD';
}
