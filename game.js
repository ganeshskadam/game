const filterOptions = ['All', 'Funny', 'Angry', 'Naughty', 'Skills'];

const gameVideos = [
  { title: 'Epic Headshots', category: 'Skills', views: '1.2M views', thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Insane Reflexes', category: 'Skills', views: '980K views', thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Savage One-Taps', category: 'Skills', views: '890K views', thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Top Shotgun Skills', category: 'Skills', views: '660K views', thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Funny Grenade Fail', category: 'Funny', views: '1.1M views', thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Angry Rage Moments', category: 'Angry', views: '770K views', thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Naughty Car Chase', category: 'Naughty', views: '710K views', thumbnail: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Perfect AWM Kills', category: 'Skills', views: '800K views', thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Fastest Reflexes', category: 'Skills', views: '1.4M views', thumbnail: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Pro Squad Wipe', category: 'Skills', views: '1.3M views', thumbnail: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=1000&q=80' },
];

const state = { filter: 'All', query: '', visibleCount: 8 };

const filterChips = document.getElementById('filter-chips');
const gameGrid = document.getElementById('game-grid');
const searchInput = document.getElementById('video-search');
const loadMoreBtn = document.getElementById('load-more');

function createFilterChip(label) {
  const chip = document.createElement('button');
  const active = label === state.filter;
  chip.type = 'button';
  chip.className = `rounded-full border px-4 py-2 text-sm font-bold transition ${
    active
      ? 'border-orange-300 bg-orange-500/25 text-orange-100 shadow-[0_0_18px_rgba(255,122,28,0.45)] scale-105'
      : 'border-white/20 bg-white/10 text-slate-100 hover:border-orange-300/60 hover:bg-orange-500/15'
  }`;
  chip.textContent = label;
  chip.addEventListener('click', () => {
    state.filter = label;
    state.visibleCount = 8;
    render();
  });
  return chip;
}

function createVideoCard(video) {
  const card = document.createElement('a');
  card.href = 'video-player.html';
  card.className = 'group hover-card relative overflow-hidden rounded-2xl border border-white/15 glass-card';
  card.innerHTML = `
    <img src="${video.thumbnail}" alt="${video.title} thumbnail" class="h-52 w-full object-cover transition duration-300 group-hover:scale-110" loading="lazy" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"></div>
    <span class="absolute left-3 top-3 rounded-full bg-purple-500/85 px-2 py-1 text-xs font-bold">${video.category}</span>
    <div class="absolute inset-x-0 bottom-0 p-3">
      <p class="text-base font-black">${video.title}</p>
      <p class="text-sm text-slate-200/90">${video.views}</p>
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

  loadMoreBtn.hidden = results.length <= state.visibleCount;
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
