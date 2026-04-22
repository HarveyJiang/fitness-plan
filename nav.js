// Mobile menu toggle
document.getElementById('menuBtn')?.addEventListener('click', () => {
  document.getElementById('navLinks')?.classList.toggle('open');
});

// Week tabs
document.querySelectorAll('.week-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.week-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.week-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.week)?.classList.add('active');
  });
});

// Set active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  a.classList.toggle('active', a.getAttribute('href') === currentPage);
});
