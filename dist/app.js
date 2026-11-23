const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('.copy-email').addEventListener('click', async () => { const status = document.querySelector('.copy-status'); try { await navigator.clipboard.writeText('odjoo2a@gmail.com'); status.textContent = 'Adresse email copiée.'; } catch { status.textContent = 'Vous pouvez copier cette adresse : odjoo2a@gmail.com'; } });
const privacy = document.querySelector('#privacy');
document.querySelector('.privacy-button').addEventListener('click', () => privacy.showModal());
privacy.addEventListener('click', event => { if (event.target === privacy) { const box = privacy.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) privacy.close(); } });
