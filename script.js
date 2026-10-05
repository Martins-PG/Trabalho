const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded','false');
}));

const modal = document.querySelector('#modal');
const title = document.querySelector('#modalTitle');
const text = document.querySelector('#modalText');
const modalData = {
  ocorrencia: ['Registro de ocorrência', 'Este projeto é demonstrativo. Para registrar uma ocorrência real, procure os canais oficiais da polícia da sua região. Em emergência, ligue 190.'],
  documentos: ['Certidões e documentos', 'Consulte previamente a unidade responsável para confirmar documentos necessários, horários e formas de atendimento.'],
  protecao: ['Proteção e orientação', 'Se estiver em situação de risco, procure um local seguro e acione o serviço de emergência. Para orientação não emergencial, utilize um canal oficial de atendimento.']
};
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
document.querySelectorAll('[data-modal]').forEach(btn => btn.addEventListener('click', () => {
  const data = modalData[btn.dataset.modal];
  title.textContent = data[0];
  text.textContent = data[1];
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}));
document.querySelector('.modal-close')?.addEventListener('click', closeModal);
document.querySelector('.modal-ok')?.addEventListener('click', closeModal);
modal?.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

document.querySelector('#contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('#formNote').textContent = 'Mensagem registrada apenas nesta demonstração.';
  e.target.reset();
});
document.querySelector('#year').textContent = new Date().getFullYear();