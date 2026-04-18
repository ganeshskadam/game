const validCodes = new Set(['ULTRA5', 'FREEFIRE', 'LEGEND12']);

const players = [
  { name: 'Aiden', role: 'Sniper', image: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=800&q=80' },
  { name: 'Laura', role: 'Support', image: 'https://images.unsplash.com/photo-1613679075231-91ca815f3f8f?auto=format&fit=crop&w=800&q=80' },
  { name: 'Shane', role: 'Assault', image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=800&q=80' },
  { name: 'Jessica', role: 'Strategist', image: 'https://images.unsplash.com/photo-1601412436469-dfc0bd0c8f70?auto=format&fit=crop&w=800&q=80' },
];

const playersGrid = document.getElementById('players-grid');
const joinForm = document.getElementById('join-form');
const joinCard = document.getElementById('join-card');
const teamCodeInput = document.getElementById('team-code');
const joinMessage = document.getElementById('join-message');

function createPlayerCard(player) {
  const card = document.createElement('article');
  card.className = 'player-card glass';
  card.innerHTML = `
    <div class="avatar"><img src="${player.image}" alt="${player.name} avatar" loading="lazy" /></div>
    <h3 style="margin:0;font-size:1.5rem;font-weight:900">${player.name}</h3>
    <p style="margin:.28rem 0 0;font-size:.84rem;color:var(--muted);font-weight:700">${player.role}</p>
    <p style="margin:.62rem 0 0;display:flex;justify-content:center;align-items:center;gap:7px;font-size:.75rem;font-weight:800;color:#8df7b6">
      <span class="online-dot"></span> ONLINE
    </p>
  `;
  return card;
}

players.map(createPlayerCard).forEach((card) => playersGrid.appendChild(card));

joinForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const code = teamCodeInput.value.trim().toUpperCase();

  if (!validCodes.has(code)) {
    joinMessage.textContent = 'Invalid team code. Please try again.';
    joinMessage.style.color = '#ff8888';
    joinCard.classList.remove('shake');
    joinCard.classList.add('shake');
    return;
  }

  joinMessage.textContent = 'Joined successfully! Welcome to Unstoppable Legends.';
  joinMessage.style.color = '#8df7b6';
  joinCard.classList.remove('shake');
});
