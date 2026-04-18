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
  card.className = 'hover-card glass-card neon-border rounded-2xl p-4';
  card.innerHTML = `
    <div class="mx-auto mb-3 h-24 w-24 overflow-hidden rounded-full border border-purple-300/60 shadow-[0_0_16px_rgba(138,92,255,0.4)]">
      <img src="${player.image}" alt="${player.name} avatar" class="h-full w-full object-cover" loading="lazy" />
    </div>
    <h3 class="text-center text-2xl font-black">${player.name}</h3>
    <p class="mt-1 text-center text-sm text-slate-300">${player.role}</p>
    <p class="mt-3 flex items-center justify-center gap-2 text-xs font-bold text-emerald-300">
      <span class="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
      ONLINE
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
    joinMessage.className = 'min-h-6 text-center text-sm font-semibold text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.75)]';
    joinCard.classList.remove('border-emerald-300/70', 'shadow-[0_0_30px_rgba(52,211,153,0.28)]');
    joinCard.classList.add('border-red-400/75', 'shadow-[0_0_30px_rgba(248,113,113,0.32)]', 'shake');
    setTimeout(() => joinCard.classList.remove('shake'), 360);
    return;
  }

  joinMessage.textContent = 'Joined successfully! Welcome to Unstoppable Legends.';
  joinMessage.className = 'min-h-6 text-center text-sm font-semibold text-emerald-300 drop-shadow-[0_0_8px_rgba(52,211,153,0.75)]';
  joinCard.classList.remove('border-red-400/75', 'shadow-[0_0_30px_rgba(248,113,113,0.32)]', 'shake');
  joinCard.classList.add('border-emerald-300/70', 'shadow-[0_0_30px_rgba(52,211,153,0.28)]');
});
