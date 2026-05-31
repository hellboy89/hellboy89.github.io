const state = {
  cara: 0,
  coroa: 0,
  history: [],
  flipping: false,
};

const frases = {
  cara: [
    "Destino decidiu! Vai em frente. 🚀",
    "O universo disse SIM! 🌟",
    "Cara! Confie no acaso.",
    "Sinal verde do cosmos! ✨",
    "A moeda falou. Obedeça. 😄",
  ],
  coroa: [
    "Talvez não seja a hora... 🤔",
    "Reavalie, pode ser melhor assim.",
    "O acaso tem outros planos! 🌀",
    "Coroa! Respire e repense.",
    "O universo sugeriu uma pausa. ⏸️",
  ],
};

function getRandomFrase(tipo) {
  const lista = frases[tipo];
  return lista[Math.floor(Math.random() * lista.length)];
}

function getStreakMessage(history) {
  if (history.length < 3) return null;
  const last3 = history.slice(-3);
  const tipo = last3[0];
  if (last3.every(r => r === tipo)) {
    const count = history.slice().reverse().findIndex(r => r !== tipo);
    const streak = count === -1 ? history.length : count;
    if (streak >= 3) {
      return `${streak}x ${tipo === 'cara' ? '🟢' : '🔴'} seguidos — sorte ou destino?`;
    }
  }
  return null;
}

function updateStats() {
  document.getElementById('statCara').textContent = state.cara;
  document.getElementById('statCoroa').textContent = state.coroa;
  document.getElementById('statTotal').textContent = state.cara + state.coroa;

  const total = state.cara + state.coroa;
  const pct = total === 0 ? 50 : Math.round((state.cara / total) * 100);
  document.getElementById('progressCara').style.width = pct + '%';

  const streak = getStreakMessage(state.history);
  const badge = document.getElementById('streakBadge');
  if (streak) {
    badge.textContent = streak;
    badge.classList.add('visible');
  } else {
    badge.classList.remove('visible');
  }
}

function renderHistory() {
  const list = document.getElementById('historyList');
  list.innerHTML = '';

  if (state.history.length === 0) {
    list.innerHTML = '<span class="history-empty">Nenhum resultado ainda...</span>';
    return;
  }

  // mostra os últimos 20
  const recent = state.history.slice(-20);
  recent.forEach(r => {
    const el = document.createElement('div');
    el.className = `history-item ${r}`;
    el.title = r.charAt(0).toUpperCase() + r.slice(1);
    el.textContent = r === 'cara' ? '😊' : '👑';
    list.appendChild(el);
  });
}

function jogar() {
  if (state.flipping) return;
  state.flipping = true;

  const btn = document.getElementById('btnJogar');
  const coin = document.getElementById('coin');
  const resultText = document.getElementById('resultText');
  const resultMsg = document.getElementById('resultMsg');

  btn.disabled = true;
  resultText.className = 'result-text loading visible';
  resultText.textContent = 'JOGANDO...';
  resultMsg.classList.remove('visible');

  // gera resultado justo
  const arr = new Uint8Array(1);
  crypto.getRandomValues(arr);
  const resultado = (arr[0] & 1) ? 'cara' : 'coroa';

  // define rotação final da moeda
  const finalRotation = resultado === 'cara' ? 1440 : 1620; // 1440=cara, 1620=coroa (180 a mais)
  coin.style.setProperty('--final-rotation', finalRotation + 'deg');

  // inicia animação
  coin.classList.remove('result-cara', 'result-coroa', 'flipping');
  void coin.offsetWidth; // reflow
  coin.classList.add('flipping');

  setTimeout(() => {
    // atualiza estado
    state[resultado]++;
    state.history.push(resultado);

    // mostra resultado
    resultText.className = `result-text ${resultado} visible`;
    resultText.textContent = resultado.toUpperCase();

    resultMsg.textContent = getRandomFrase(resultado);
    resultMsg.classList.add('visible');

    coin.classList.remove('flipping');
    coin.classList.add(`result-${resultado}`);

    updateStats();
    renderHistory();

    state.flipping = false;
    btn.disabled = false;
  }, 1050);
}

function clearHistory() {
  state.cara = 0;
  state.coroa = 0;
  state.history = [];

  const resultText = document.getElementById('resultText');
  const resultMsg = document.getElementById('resultMsg');
  resultText.className = 'result-text';
  resultText.textContent = '';
  resultMsg.classList.remove('visible');

  const coin = document.getElementById('coin');
  coin.classList.remove('result-cara', 'result-coroa');

  updateStats();
  renderHistory();
}

// Teclado: espaço ou enter joga
document.addEventListener('keydown', e => {
  if (e.code === 'Space' || e.code === 'Enter') {
    e.preventDefault();
    jogar();
  }
});

// Inicializa
renderHistory();
updateStats();
