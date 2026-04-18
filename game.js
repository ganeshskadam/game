const filterOptions = ['All', 'Funny', 'Angry', 'Naughty', 'Skills'];

const gameVideos = [
  { title: 'Epic Headshots', category: 'Skills', views: '1.2M views', thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80' },
  { title: 'Insane Reflexes', category: 'Skills', views: '980K views', thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80' },
  { title: 'Savage One-Taps', category: 'Skills', views: '890K views', thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80' },
  { title: 'Top Shotgun Skills', category: 'Skills', views: '660K views', thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80' },
  { title: 'Funny Grenade Fail', category: 'Funny', views: '1.1M views', thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=900&q=80' },
  { title: 'Angry Rage Moments', category: 'Angry', views: '770K views', thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=80' },
  { title: 'Naughty Car Chase', category: 'Naughty', views: '710K views', thumbnail: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80' },
  { title: 'Perfect AWM Kills', category: 'Skills', views: '800K views', thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=901&q=80' },
  { title: 'Fastest Reflexes', category: 'Skills', views: '1.4M views', thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=900&q=80' },
  { title: 'Pro Squad Wipe', category: 'Skills', views: '1.3M views', thumbnail: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=900&q=80' },
  { title: 'Funny Voice Chat Chaos', category: 'Funny', views: '690K views', thumbnail: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80' },
  { title: 'Angry Comeback Match', category: 'Angry', views: '620K views', thumbnail: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=900&q=80' },
];

const state = {
  filter: 'All',
  query: '',
  visibleCount: 8,
};

const filterChips = document.getElementById('filter-chips');
const gameGrid = document.getElementById('game-grid');
const searchInput = document.getElementById('video-search');
const loadMoreBtn = document.getElementById('load-more');

function createFilterChip(label) {
  const chip = document.createElement('button');
  chip.className = `chip ${label === state.filter ? 'chip--active' : ''}`;
  chip.textContent = label;
  chip.type = 'button';
  chip.addEventListener('click', () => {
    state.filter = label;
    state.visibleCount = 8;
    render();
  });
  return chip;
}

function createVideoCard(video) {
  const card = document.createElement('a');
  card.className = 'video-card video-card--game';
  card.href = 'video-player.html';
  card.innerHTML = `
    <img class="video-card__img" src="${video.thumbnail}" alt="${video.title} thumbnail" loading="lazy" />
    <span class="video-card__badge">${video.category}</span>
    <div class="video-card__meta">
      <p class="video-card__title">${video.title}</p>
      <p class="video-card__views">${video.views}</p>
    </div>
  `;
  return card;
}

function filteredVideos() {
  return gameVideos.filter((video) => {
    const matchesFilter = state.filter === 'All' || video.category === state.filter;
    const matchesSearch = video.title.toLowerCase().includes(state.query.toLowerCase());
    return matchesFilter && matchesSearch;
  });
}

function render() {
  filterChips.innerHTML = '';
  filterOptions.forEach((option) => filterChips.appendChild(createFilterChip(option)));

  const results = filteredVideos();
  const visibleVideos = results.slice(0, state.visibleCount);

  gameGrid.innerHTML = '';
  visibleVideos.map(createVideoCard).forEach((card) => gameGrid.appendChild(card));

  const canLoadMore = results.length > state.visibleCount;
  loadMoreBtn.hidden = !canLoadMore;
}

searchInput.addEventListener('input', (event) => {
  state.query = event.target.value.trim();
  state.visibleCount = 8;
  render();
});

loadMoreBtn.addEventListener('click', () => {
  state.visibleCount += 4;
  render();
});

render();
