// loadComponents.js
function loadComponent(url, selector) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header.html', 'header');
    loadComponent('footer.html', 'footer');
});
