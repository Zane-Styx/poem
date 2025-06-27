const poems = [
  {
    title: "For Azy ♥",
    text: "Roses are red,\nViolets are blue,\nI wrote this poem,\nJust thinking of you."
  },
  {
    title: "Distance",
    text: "We met in clicks, across the screen,\nYet every word felt soft and clean.\nNo borders can this bond erase,\nYour love—my heart’s familiar place."
  },
  {
    title: "When You Smile",
    text: "When you smile, my skies turn bright,\nEven distance feels so light.\nThough apart, I feel you near,\nIn every word, your warmth is clear."
  },
  {
    title: "Stay Close",
    text: "In whispers sent through midnight air,\nYour voice is comfort always there.\nThough miles apart, I feel you still,\nInside my chest, your warmth, your will."
  }
];

let index = 0;
const card = document.getElementById('poemCard');

// Show a single poem
function showPoem(i) {
  const poem = poems[i];
  card.classList.remove('show');

  setTimeout(() => {
    card.innerHTML = `<h2>${poem.title}</h2><p>${poem.text}</p>`;
    card.classList.add('show');
  }, 300);
}

// Auto cycle
setInterval(() => {
  index = (index + 1) % poems.length;
  showPoem(index);
}, 5000);

// Swipe support
let touchStartX = 0;
card.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
});

card.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    index = dx < 0 ? (index + 1) % poems.length : (index - 1 + poems.length) % poems.length;
    showPoem(index);
  }
});

// Show first poem
showPoem(index);

const heartContainer = document.getElementById('hearts-container');
const heartEmojis = ['💖', '💗', '💓', '💞', '💕', '❤️'];

function spawnHeartEmoji() {
  const heart = document.createElement('div');
  heart.className = 'heart-emoji';
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = `${Math.random() * 100}%`;
  heart.style.bottom = '-20px';
  heart.style.fontSize = `${Math.random() * 10 + 16}px`;

  heartContainer.appendChild(heart);

  // Remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(spawnHeartEmoji, 300);
