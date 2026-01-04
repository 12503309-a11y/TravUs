document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('footer .tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
    });
  });
});