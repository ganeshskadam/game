const filters = ['All', 'Funny 😄', 'Angry 😡', 'Naughty 😏', 'Skills 🎯'];

const videos = [
  { title: 'Epic Headshots', category: 'Skills', views: '1.2M Views', thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80' },
  { title: 'Insane Reflexes', category: 'Skills', views: '980K Views', thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=800&q=80' },
  { title: 'Savage One-Taps', category: 'Skills', views: '890K Views', thumbnail: 'https://images.unsplash.com/photo-1548686304-89d188a80029?auto=format&fit=crop&w=800&q=80' },
  { title: 'Top Shotgun Skills', category: 'Skills', views: '840K Views', thumbnail: 'https://images.unsplash.com/photo-1586182987320-4f376d39d787?auto=format&fit=crop&w=800&q=80' },
  { title: 'Angry Clutch Win', category: 'Angry', views: '710K Views', thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80' },
  { title: 'Funny Squad Fail', category: 'Funny', views: '690K Views', thumbnail: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80' },
  { title: 'Naughty Car Rush', category: 'Naughty', views: '650K Views', thumbnail: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80' },
  { title: 'Perfect AWM Kills', category: 'Skills', views: '800K Views', thumbnail: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80' },
];

const filtersEl = document.getElementById('filters');
const searchEl = document.getElementById('search-input');
const gridEl = document.getElementById('video-grid');

let activeFilter = 'All';
let searchTerm = '';

function createFilterChip(label) {
  const chip = document.createElement('button');
  chip.className = 'chip';
  chip.type = 'button';
  chip.textContent = label;
  chip.dataset.filter = label.split(' ')[0];
  chip.addEventListener('click', () => {
    activeFilter = chip.dataset.filter;
    renderFilters();
    renderVideos();
  });
  return chip;
}

function createVideoCard(video) {
  const card = document.createElement('article');
  card.className = 'video-card';
  card.innerHTML = `
    <a class="video-thumb" href="video-player.html" aria-label="Open ${video.title}">
      <img src="${video.thumbnail}" alt="${video.title} thumbnail" loading="lazy" />
      <span class="video-category">${video.category}</span>
      <div class="video-overlay"><span>${video.views}</span></div>
    </a>
    <p class="video-title">${video.title}</p>
    <p class="video-views">${video.views}</p>
  `;
  return card;
}

function renderFilters() {
  filtersEl.replaceChildren();
  filters.forEach((label) => {
    const chip = createFilterChip(label);
    if (chip.dataset.filter === activeFilter) {
      chip.classList.add('is-active');
    }
    filtersEl.appendChild(chip);
  });
}

function renderVideos() {
  const filtered = videos.filter((video) => {
    const matchesFilter = activeFilter === 'All' || video.category === activeFilter;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  gridEl.replaceChildren();

  if (!filtered.length) {
    const empty = document.createElement('p');
    empty.textContent = 'No videos found for this filter/search.';
    empty.style.opacity = '0.8';
    gridEl.appendChild(empty);
    return;
  }

  filtered.map(createVideoCard).forEach((card) => gridEl.appendChild(card));
}

searchEl.addEventListener('input', (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderVideos();
});

renderFilters();
renderVideos();
