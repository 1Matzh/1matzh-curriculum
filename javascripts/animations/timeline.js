$(window).scroll(function() {
    const cards = $('.card');
    const totalCards = cards.length;

    const scrollTop = $(window).scrollTop();
    const docHeight = $(document).height() - $(window).height();
    const scrollPercent = scrollTop / docHeight;

    const scrollPerCard = 1.2 / totalCards;

    cards.each(function(index, card) {
        const start = scrollPerCard * index;
        const end = scrollPerCard * (index + 1);
        let fillPercent = 0;

        if (scrollPercent >= start && scrollPercent <= end) {
            fillPercent = ((scrollPercent - start) / (end - start)) * 100;
        } else if (scrollPercent > end) {
            fillPercent = 100;
        }

        if ($(card).hasClass('left')) {
            const gradientLeft = `conic-gradient(
                from 90deg, 
                var(--primary-color) ${fillPercent}%, 
                transparent ${fillPercent}%
            )`;
            $(card).css('--border-gradient-left', gradientLeft);
        } else if ($(card).hasClass('right')) {
            const gradientRight = `conic-gradient(
                from 280deg, 
                var(--primary-color) ${fillPercent}%, 
                transparent ${fillPercent}%
            )`;
            $(card).css('--border-gradient-right', gradientRight);
        }
    });
});