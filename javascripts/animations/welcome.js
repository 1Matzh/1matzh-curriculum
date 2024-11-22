const swiftUpElements = $('.swift-up-text');

swiftUpElements.each(function() {
  const words = $(this).text().split(' ');
  $(this).empty();

  words.forEach(function(el, index) {
    words[index] = `
      <span class="swift-up-span">
        <i class="swift-up-i">${words[index]}</i>
      </span>
    `;
  });

  $(this).html(words.join(' '));

  const children = $('span > i', this);
  children.each(function(index) {
    $(this).css('animation-delay', `${index * .2}s`);
  });
});
