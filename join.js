const validCodes = new Set(['ULTRA5', 'FREEFIRE', 'LEGEND12']);

const players = [
  {
    name: 'Aiden',
    role: 'Skills',
    image: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Laura',
    role: 'Skills',
    image: 'https://images.unsplash.com/photo-1613679075231-91ca815f3f8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Shane',
    role: 'Skills',
    image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Jessica',
    role: 'Skills',
    image: 'https://images.unsplash.com/photo-1601412436469-dfc0bd0c8f70?auto=format&fit=crop&w=800&q=80',
  },
];

const playersGrid = document.getElementById('players-grid');
const joinForm = document.getElementById('join-form');
const joinCard = document.getElementById('join-card');
const teamCodeInput = document.getElementById('team-code');
const joinMessage = document.getElementById('join-message');

function createPlayerCard(player) {
  const card = document.createElement('article');
  card.className = 'player-card';
  card.innerHTML = `
    <img class="player-card__img" src="${player.image}" alt="${player.name} avatar" loading="lazy" />
    <span class="player-card__role">${player.role}</span>
    <div class="player-card__meta">
      <h3>${player.name}</h3>
      <p><span class="online-dot"></span> ONLINE</p>
    </div>
  `;
  return card;
}

players.map(createPlayerCard).forEach((card) => playersGrid.appendChild(card));

joinForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const code = teamCodeInput.value.trim().toUpperCase();

  if (!validCodes.has(code)) {
    joinMessage.textContent = 'Invalid team code. Please try again.';
    joinMessage.className = 'join-message is-error';
    joinCard.classList.remove('is-success');
    joinCard.classList.add('is-error');
    return;
  }

  joinMessage.textContent = 'Joined successfully! Welcome to Unstoppable Legends.';
  joinMessage.className = 'join-message is-success';
  joinCard.classList.remove('is-error');
  joinCard.classList.add('is-success');
});
