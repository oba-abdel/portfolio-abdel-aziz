const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
const privacy = document.querySelector('#privacy');
document.querySelector('.privacy-button').addEventListener('click', () => privacy.showModal());
privacy.addEventListener('click', event => { if (event.target === privacy) { const box = privacy.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) privacy.close(); } });

const requestForm = document.querySelector('#request-form');
requestForm.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(requestForm);
  const subject = data.get('objet');
  const body = data.get('message').trim() + '\n\n' + data.get('nom').trim();
  const recipient = 'odjoo2a@gmail.com';
  if (event.submitter?.value === 'gmail') {
    const query = new URLSearchParams({view: 'cm', fs: '1', to: recipient, su: subject, body});
    window.open('https://mail.google.com/mail/?' + query, '_blank', 'noopener');
    return;
  }
  window.location.href = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});
