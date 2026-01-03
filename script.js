document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.recipe-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const category = card.dataset.category.toLowerCase();
        if (title.includes(query) || category.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});