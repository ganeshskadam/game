const relatedVideos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Epic Headshots and Insane Gameplay!',
    category: 'Skills',
    views: '1.2M views',
    duration: '15:21',
    likes: '34.7K',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '3JZ_D3ELwOQ',
    title: 'Fastest Reflexes in Ranked Match',
    category: 'Skills',
    views: '1.4M views',
    duration: '13:45',
    likes: '41.2K',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'l482T0yNkeo',
    title: 'Pro Squad Wipe Masterclass',
    category: 'Skills',
    views: '1.3M views',
    duration: '11:12',
    likes: '29.8K',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'Zi_XLOBDo_Y',
    title: 'Clutch Comeback Under Pressure',
    category: 'Skills',
    views: '960K views',
    duration: 'LIVE',
    likes: '22.3K',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '9bZkp7q19f0',
    title: 'Sniper Montage: Perfect AWM Kills',
    category: 'Skills',
    views: '890K views',
    duration: '9:50',
    likes: '19.4K',
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1000&q=80',
  },
];

const state = {
  activeVideo: relatedVideos[0],
  liked: false,
};

const frame = document.getElementById('video-frame');
const title = document.getElementById('video-title');
const views = document.getElementById('video-views');
const titleBottom = document.getElementById('video-title-bottom');
const viewsBottom = document.getElementById('video-views-bottom');
const likeCount = document.getElementById('like-count');
const likeCountBottom = document.getElementById('like-count-bottom');
const likeButtons = [
  document.getElementById('like-button'),
  document.getElementById('like-button-bottom'),
];
const relatedList = document.getElementById('related-list');

function createRelatedItem(video) {
  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'related-item';
  item.innerHTML = `
    <img class="related-item__thumb" src="${video.thumbnail}" alt="${video.title} thumbnail" loading="lazy" />
    <span class="related-item__badge">${video.category}</span>
    <div class="related-item__meta">
      <p>${video.views}</p>
      <p>${video.duration}</p>
    </div>
  `;

  item.addEventListener('click', () => {
    state.activeVideo = video;
    state.liked = false;
    renderPlayer();
  });

  return item;
}

function renderRelated() {
  relatedList.innerHTML = '';
  relatedVideos
    .filter((video) => video.id !== state.activeVideo.id)
    .map(createRelatedItem)
    .forEach((item) => relatedList.appendChild(item));
}

function renderPlayer() {
  const current = state.activeVideo;
  frame.src = `https://www.youtube.com/embed/${current.id}?rel=0`;
  title.textContent = current.title;
  titleBottom.textContent = current.title;
  views.textContent = current.views;
  viewsBottom.textContent = current.views;
  likeCount.textContent = current.likes;
  likeCountBottom.textContent = current.likes;

  likeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(state.liked));
  });

  renderRelated();
}

function handleLike() {
  state.liked = !state.liked;
  likeButtons.forEach((button) => {
    button.classList.add('is-liked');
    button.setAttribute('aria-pressed', String(state.liked));
    window.setTimeout(() => button.classList.remove('is-liked'), 360);
  });
}

likeButtons.forEach((button) => button.addEventListener('click', handleLike));

renderPlayer();
