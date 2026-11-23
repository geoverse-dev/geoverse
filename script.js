// Minimal, dependency-free project category filtering.
const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-categories]');
const empty = document.querySelector('#empty-state');
filters.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  cards.forEach(card => {
    const show = selected === 'all' || card.dataset.categories.split(' ').includes(selected);
    card.hidden = !show;
    if (show) count++;
  });
  empty.hidden = count !== 0;
}));
