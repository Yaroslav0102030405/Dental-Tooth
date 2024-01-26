const currentPageUrl = './services.html';

const linkEl = document.querySelector(
  `.header-menu__link[href="${currentPageUrl}"]`,
);

console.log(linkEl);
linkEl.classList.add('current');
