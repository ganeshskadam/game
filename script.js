const freeFireVideos = [
  { title: 'Sniper Dominance', category: 'Skills', views: '1.2M views', thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80' },
  { title: 'Squad Chaos Moments', category: 'Funny', views: '850K views', thumbnail: 'https://images.unsplash.com/photo-1548686304-89d188a80029?auto=format&fit=crop&w=900&q=80' },
  { title: 'Rush Tactics', category: 'Action', views: '940K views', thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=80' },
  { title: 'One Tap Highlights', category: 'Sniper', views: '720K views', thumbnail: 'https://images.unsplash.com/photo-1586182987320-4f376d39d787?auto=format&fit=crop&w=900&q=80' },
  { title: 'No Scope Challenge', category: 'Skills', views: '680K views', thumbnail: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80' },
];

function createVideoCard(video) {
  const card = document.createElement('a');
  card.href = 'video-player.html';
  card.className = 'hover-card relative overflow-hidden rounded-2xl border border-white/15 glass-card group';
  card.innerHTML = `
    <img src="${video.thumbnail}" alt="${video.title} thumbnail" class="h-48 w-full object-cover transition duration-300 group-hover:scale-110" loading="lazy" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"></div>
    <span class="absolute left-3 top-3 rounded-full bg-purple-500/85 px-2 py-1 text-xs font-bold">${video.category}</span>
    <div class="absolute inset-x-0 bottom-0 p-3">
      <p class="text-base font-black">${video.title}</p>
      <p class="text-sm text-slate-200/90">${video.views}</p>
    </div>
  `;
  return card;
}

const grid = document.getElementById('video-grid');
freeFireVideos.map(createVideoCard).forEach((card) => grid.appendChild(card));
