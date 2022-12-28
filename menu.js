const smoothLinks = document.querySelectorAll('a[href^="#"]');
// eslint-disable-next-line no-restricted-syntax
for (const smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', (e) => {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
  document.getElementById('main').style.marginRight = '250px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginRight = '0';
}
