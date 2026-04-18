const validCodes = new Set(['ULTRA5', 'FREEFIRE', 'LEGEND12']);

const players = [
  { name: 'Aiden', role: 'Sniper', image: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=800&q=80' },
  { name: 'Laura', role: 'Support', image: 'https://images.unsplash.com/photo-1613679075231-91ca815f3f8f?auto=format&fit=crop&w=800&q=80' },
  { name: 'Shane', role: 'Assault', image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=800&q=80' },
  { name: 'Jessica', role: 'Strategist', image: 'https://images.unsplash.com/photo-1601412436469-dfc0bd0c8f70?auto=format&fit=crop&w=800&q=80' },
];

const form = document.getElementById('join-form');
const input = document.getElementById('team-code');
const message = document.getElementById('join-message');
const card = document.querySelector('.join-card');
const playersGrid = document.getElementById('players-grid');

function playerCard(player) {
  const card = document.createElement('article');
  card.className = 'player-card video-card';
  card.innerHTML = `
    <div class="player-avatar"><img src="${player.image}" alt="${player.name} avatar" loading="lazy" /></div>
    <h3 style="margin:0;font-size:1.4rem">${player.name}</h3>
    <p class="muted" style="margin:0.25rem 0 0">${player.role}</p>
    <p class="status" style="margin-top:0.7rem"><span class="dot"></span>ONLINE</p>
  `;
  return card;
}

players.map(playerCard).forEach((el) => playersGrid.appendChild(el));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const code = input.value.trim().toUpperCase();

  if (!validCodes.has(code)) {
    message.textContent = 'Invalid team code. Please try again.';
    message.style.color = 'var(--danger)';
    card.classList.add('shake');
    card.style.borderColor = 'rgba(255,107,128,0.8)';
    card.style.boxShadow = '0 0 30px rgba(255,107,128,0.35)';
    setTimeout(() => card.classList.remove('shake'), 350);
    return;
  }

  message.textContent = 'Joined successfully! Welcome to Unstoppable Legends.';
  message.style.color = 'var(--success)';
  card.style.borderColor = 'rgba(86,227,159,0.8)';
  card.style.boxShadow = '0 0 30px rgba(86,227,159,0.35)';
});
