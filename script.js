const freeFireVideos = [
  { title: 'Sniper Dominance', category: 'Skills', views: '1.2M views', thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Squad Chaos Moments', category: 'Funny', views: '850K views', thumbnail: 'https://images.unsplash.com/photo-1548686304-89d188a80029?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Rush Tactics', category: 'Action', views: '940K views', thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1000&q=80' },
  { title: 'One Tap Highlights', category: 'Sniper', views: '720K views', thumbnail: 'https://images.unsplash.com/photo-1586182987320-4f376d39d787?auto=format&fit=crop&w=1000&q=80' },
  { title: 'No Scope Challenge', category: 'Skills', views: '680K views', thumbnail: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=80' },
];

function createVideoCard(video) {
  const card = document.createElement('a');
  card.href = 'video-player.html';
  card.className = 'video-card';
  card.innerHTML = `
    <img src="${video.thumbnail}" alt="${video.title} thumbnail" loading="lazy" />
    <span class="badge">${video.category}</span>
    <div class="video-card__meta">
      <h3>${video.title}</h3>
      <p>${video.views}</p>
    </div>
  `;
  return card;
}

const grid = document.getElementById('video-grid');
freeFireVideos.map(createVideoCard).forEach((card) => grid.appendChild(card));
