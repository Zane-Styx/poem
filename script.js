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
  },
  {
    title: "The Things I Should've Done",
    text: "Now I'm stuck\nreimagining things—\nthinking maybe if I did this,\nmaybe if I did that,\nwe wouldn't have ended like this.\n\nMaybe if I tried harder,\nyou wouldn’t have left.\n\nI'm sorry\nif I was too much.\nSorry I made you do\nwhat you didn’t want to.\nSorry I took away\nthe thing that made you smile.\n\nI'm sorry\nI didn’t believe in you\nthe way I should have.\n\nI was stuck in my past,\nin a place where trust\nwas a stranger.\nBecause of that,\nI never trusted you fully.\n\nAnd I know—\nthat’s on me.\n\nIt’s okay to hate me.\nIt’s okay if you don’t want me anymore.\nJust know this:\n\nI never hated meeting you.\nYou left something in my heart,\nso deep,\nso carved into me,\nthat no one else\nwill ever be able\nto reach it."
  },
  {
    title: "Even Stars Die",
    text: "I love you—\nbut I guess everything has an end.\nEven the beautiful stars die,\nand maybe\nwe were just like them.\n\nBut I don’t hate you for leaving.\nNo—\nit was my fault.\nI thought I was doing things right,\nbut I was blind.\n\nI hurt you.\n\nI said words I never should have,\nand though I kept saying\n“I’m not like your past,”\nin the end—\nI was just like them.\n\nI thought I knew how to love you\nthe right way.\nI thought I was different.\nBut I was wrong.\n\nNow I have to watch you walk away,\nand all I can say\nis\nI’m sorry.\n\nI broke the promise\nthat I wouldn’t become\nanother scar\non your heart.\n\nMaybe us\nsplitting apart\nis for the better.\nBecause if we stayed—\nwe’d only keep hurting each other."
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
