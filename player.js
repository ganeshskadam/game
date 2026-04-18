const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Epic Headshots and Insane Gameplay!', category: 'Skills', views: '1.2M views', duration: '15:21', likes: '34.7K', thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80' },
  { id: '3JZ_D3ELwOQ', title: 'Fastest Reflexes in Ranked Match', category: 'Skills', views: '1.4M views', duration: '13:45', likes: '41.2K', thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80' },
  { id: 'l482T0yNkeo', title: 'Pro Squad Wipe Masterclass', category: 'Skills', views: '1.3M views', duration: '11:12', likes: '29.8K', thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1000&q=80' },
  { id: 'Zi_XLOBDo_Y', title: 'Clutch Comeback Under Pressure', category: 'Skills', views: '960K views', duration: 'LIVE', likes: '22.3K', thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80' },
  { id: '9bZkp7q19f0', title: 'Sniper Montage: Perfect AWM Kills', category: 'Skills', views: '890K views', duration: '9:50', likes: '19.4K', thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1000&q=80' },
];

const state = { current: videos[0], liked: false };

const frame = document.getElementById('video-frame');
const title = document.getElementById('video-title');
const views = document.getElementById('video-views');
const titleBottom = document.getElementById('video-title-bottom');
const viewsBottom = document.getElementById('video-views-bottom');
const likeCount = document.getElementById('like-count');
const likeCountBottom = document.getElementById('like-count-bottom');
const likeButtons = [document.getElementById('like-button'), document.getElementById('like-button-bottom')];
const related = document.getElementById('related-list');

function relatedItem(video) {
  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'related-item video-card';
  item.innerHTML = `
    <img src="${video.thumbnail}" alt="${video.title} thumbnail" loading="lazy" />
    <span class="badge">${video.category}</span>
    <div class="related-item__meta"><span>${video.views}</span><span>${video.duration}</span></div>
  `;
  item.addEventListener('click', () => {
    state.current = video;
    state.liked = false;
    render();
  });
  return item;
}

function renderRelated() {
  related.innerHTML = '';
  videos.filter((video) => video.id !== state.current.id).map(relatedItem).forEach((item) => related.appendChild(item));
}

function render() {
  frame.src = `https://www.youtube.com/embed/${state.current.id}?rel=0`;
  title.textContent = state.current.title;
  views.textContent = state.current.views;
  titleBottom.textContent = state.current.title;
  viewsBottom.textContent = state.current.views;
  likeCount.textContent = state.current.likes;
  likeCountBottom.textContent = state.current.likes;
  likeButtons.forEach((btn) => btn.setAttribute('aria-pressed', String(state.liked)));
  renderRelated();
}

function onLike() {
  state.liked = !state.liked;
  likeButtons.forEach((btn) => {
    btn.classList.add('pulse');
    btn.setAttribute('aria-pressed', String(state.liked));
    setTimeout(() => btn.classList.remove('pulse'), 350);
  });
}

likeButtons.forEach((btn) => btn.addEventListener('click', onLike));
render();
