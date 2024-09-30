window.addEventListener('scroll', function () {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const scrollPerCard = 1 / totalCards;

    cards.forEach((card, index) => {
        const start = scrollPerCard * index;
        const end = scrollPerCard * (index + 1);
        let fillPercent = 0;

        if (scrollPercent >= start && scrollPercent <= end) {
            fillPercent = ((scrollPercent - start) / (end - start)) * 100;
        } else if (scrollPercent > end) {
            fillPercent = 100;
        }

        if (card.classList.contains('left')) {
            const gradientLeft = `conic-gradient(
                from 90deg, 
                var(--primary-color) ${fillPercent}%, 
                transparent ${fillPercent}%
            )`;
            card.style.setProperty('--border-gradient-left', gradientLeft);
        } else if (card.classList.contains('right')) {
            const gradientRight = `conic-gradient(
                from 280deg, 
                var(--primary-color) ${fillPercent}%, 
                transparent ${fillPercent}%
            )`;
            card.style.setProperty('--border-gradient-right', gradientRight);
        }
    });
});