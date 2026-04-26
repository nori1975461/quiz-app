// ---- 問題データ ----
const allQuestions = [
  // 地理
  { question: '日本で最も長い川はどれですか？', choices: ['利根川', '信濃川', '木曽川', '淀川'], answer: 1, category: '地理' },
  { question: '世界で最も面積が大きい国はどこですか？', choices: ['カナダ', 'アメリカ', '中国', 'ロシア'], answer: 3, category: '地理' },
  { question: '富士山の標高として正しいものはどれですか？', choices: ['3,566 m', '3,676 m', '3,776 m', '3,876 m'], answer: 2, category: '地理' },
  { question: 'アフリカ大陸最高峰の山はどれですか？', choices: ['モンブラン', 'エベレスト', 'キリマンジャロ', 'アコンカグア'], answer: 2, category: '地理' },
  { question: '日本の最南端に位置する島はどれですか？', choices: ['与那国島', '沖ノ鳥島', '南鳥島', '西ノ島'], answer: 1, category: '地理' },
  { question: 'ナイル川が流れる大陸はどこですか？', choices: ['アジア', 'ヨーロッパ', 'アフリカ', '南アメリカ'], answer: 2, category: '地理' },

  // 科学
  { question: '光が1秒間に進む距離として最も近いものはどれですか？', choices: ['約30万 km', '約3万 km', '約300万 km', '約3,000 km'], answer: 0, category: '科学' },
  { question: '水の化学式として正しいものはどれですか？', choices: ['H₂O₂', 'HO', 'H₃O', 'H₂O'], answer: 3, category: '科学' },
  { question: '元素記号「Au」が表す元素はどれですか？', choices: ['銀', '銅', '金', 'アルミニウム'], answer: 2, category: '科学' },
  { question: '太陽系で最も大きな惑星はどれですか？', choices: ['土星', '天王星', '海王星', '木星'], answer: 3, category: '科学' },
  { question: '人体で最も大きな臓器はどれですか？', choices: ['肝臓', '肺', '皮膚', '心臓'], answer: 2, category: '科学' },
  { question: 'DNAの塩基の正しい組み合わせはどれですか？', choices: ['アデニンとシトシン', 'アデニンとチミン', 'グアニンとチミン', 'シトシンとチミン'], answer: 1, category: '科学' },

  // 歴史
  { question: 'ノーベル賞を設立したアルフレッド・ノーベルの出身国はどこですか？', choices: ['デンマーク', 'ノルウェー', 'フィンランド', 'スウェーデン'], answer: 3, category: '歴史' },
  { question: '日本の国会は衆議院と何院で構成されますか？', choices: ['元老院', '参議院', '貴族院', '上院'], answer: 1, category: '歴史' },
  { question: '第二次世界大戦が終結した年はいつですか？', choices: ['1943年', '1944年', '1945年', '1946年'], answer: 2, category: '歴史' },
  { question: '江戸幕府を開いた人物はだれですか？', choices: ['豊臣秀吉', '織田信長', '徳川家康', '徳川秀忠'], answer: 2, category: '歴史' },
  { question: 'フランス革命が起きた年はいつですか？', choices: ['1776年', '1789年', '1804年', '1815年'], answer: 1, category: '歴史' },
  { question: '万里の長城を建設した国はどこですか？', choices: ['日本', 'モンゴル', '朝鮮', '中国'], answer: 3, category: '歴史' },

  // 文化
  { question: '「モナ・リザ」を描いた画家はだれですか？', choices: ['ミケランジェロ', 'ラファエロ', 'レオナルド・ダ・ヴィンチ', 'ボッティチェリ'], answer: 2, category: '文化' },
  { question: '「第九（歓喜の歌）」を作曲した音楽家はだれですか？', choices: ['モーツァルト', 'バッハ', 'ショパン', 'ベートーヴェン'], answer: 3, category: '文化' },
  { question: '「吾輩は猫である」の作者はだれですか？', choices: ['森鷗外', '夏目漱石', '芥川龍之介', '太宰治'], answer: 1, category: '文化' },
  { question: 'オリンピックの五輪マークは何色ありますか？', choices: ['4色', '5色', '6色', '7色'], answer: 1, category: '文化' },
  { question: '「ゲルニカ」を描いた芸術家はだれですか？', choices: ['サルバドール・ダリ', 'パブロ・ピカソ', 'ワシリー・カンディンスキー', 'アンリ・マティス'], answer: 1, category: '文化' },
  { question: '俳句の季語として「春」を表す言葉はどれですか？', choices: ['紅葉', '雪', '桜', '花火'], answer: 2, category: '文化' },
];

const TIMER_SEC = 10;
const HISTORY_KEY = 'quizHistory';

let questions = [];
let currentIndex = 0;
let score = 0;
let selectedCategory = 'すべて';
let selectedCount = 5;
let timerInterval = null;
let timeLeft = TIMER_SEC;
let currentChoices = [];

// ---- DOM refs ----
const screenStart   = document.getElementById('screen-start');
const screenQuiz    = document.getElementById('screen-quiz');
const screenResult  = document.getElementById('screen-result');
const screenHistory = document.getElementById('screen-history');

const progressBar   = document.getElementById('progress-bar');
const questionCount = document.getElementById('question-count');
const questionText  = document.getElementById('question-text');
const choicesEl     = document.getElementById('choices');
const feedbackEl    = document.getElementById('feedback');
const btnNext       = document.getElementById('btn-next');
const timerEl       = document.getElementById('timer');
const scoreText     = document.getElementById('score-text');
const scoreComment  = document.getElementById('score-comment');
const historyList   = document.getElementById('history-list');

// ---- イベント登録 ----
document.getElementById('btn-start').addEventListener('click', startQuiz);
btnNext.addEventListener('click', nextQuestion);
document.getElementById('btn-retry').addEventListener('click', () => showScreen(screenStart));
document.getElementById('btn-history').addEventListener('click', showHistory);
document.getElementById('btn-to-history').addEventListener('click', showHistory);
document.getElementById('btn-back').addEventListener('click', () => showScreen(screenStart));
document.getElementById('btn-clear-history').addEventListener('click', clearHistory);

document.querySelectorAll('#category-btns .toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#category-btns .toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCategory = btn.dataset.value;
  });
});

document.querySelectorAll('#count-btns .toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#count-btns .toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCount = btn.dataset.value === 'all' ? 'all' : parseInt(btn.dataset.value, 10);
  });
});

// ---- 画面切り替え ----
function showScreen(screen) {
  [screenStart, screenQuiz, screenResult, screenHistory].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// ---- クイズ開始 ----
function startQuiz() {
  let pool = selectedCategory === 'すべて'
    ? [...allQuestions]
    : allQuestions.filter(q => q.category === selectedCategory);

  pool = pool.sort(() => Math.random() - 0.5);

  if (selectedCount !== 'all') {
    pool = pool.slice(0, Math.min(selectedCount, pool.length));
  }

  if (pool.length === 0) {
    alert('選択したカテゴリに問題がありません。');
    return;
  }

  questions = pool;
  currentIndex = 0;
  score = 0;
  showScreen(screenQuiz);
  renderQuestion();
}

// ---- 問題描画 ----
function renderQuestion() {
  const q = questions[currentIndex];
  const total = questions.length;

  progressBar.style.width = (currentIndex / total * 100) + '%';
  questionCount.textContent = `問題 ${currentIndex + 1} / ${total}`;
  questionText.textContent = q.question;

  feedbackEl.className = 'feedback hidden';
  feedbackEl.textContent = '';
  btnNext.classList.add('hidden');

  currentChoices = q.choices
    .map((text, i) => ({ text, correct: i === q.answer }))
    .sort(() => Math.random() - 0.5);

  choicesEl.innerHTML = '';
  currentChoices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice.text;
    btn.addEventListener('click', () => selectAnswer(i));
    choicesEl.appendChild(btn);
  });

  startTimer();
}

// ---- タイマー ----
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = TIMER_SEC;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeExpired();
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerEl.textContent = timeLeft;
  timerEl.className = 'timer' + (timeLeft <= 10 ? ' danger' : '');
}

function timeExpired() {
  const correctText = currentChoices.find(c => c.correct).text;
  choicesEl.querySelectorAll('.choice-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (currentChoices[i].correct) btn.classList.add('correct');
  });
  feedbackEl.className = 'feedback incorrect-fb';
  feedbackEl.textContent = `時間切れ！正解は「${correctText}」です。`;
  const isLast = currentIndex === questions.length - 1;
  btnNext.textContent = isLast ? '結果を見る' : '次の問題へ';
  btnNext.classList.remove('hidden');
}

// ---- 回答選択 ----
function selectAnswer(selectedIndex) {
  clearInterval(timerInterval);
  const isCorrect = currentChoices[selectedIndex].correct;
  const correctText = currentChoices.find(c => c.correct).text;
  if (isCorrect) score++;

  choicesEl.querySelectorAll('.choice-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (currentChoices[i].correct) btn.classList.add('correct');
    if (i === selectedIndex && !isCorrect) btn.classList.add('incorrect');
  });

  feedbackEl.className = 'feedback ' + (isCorrect ? 'correct-fb' : 'incorrect-fb');
  feedbackEl.textContent = isCorrect
    ? '正解！'
    : `不正解… 正解は「${correctText}」です。`;

  const isLast = currentIndex === questions.length - 1;
  btnNext.textContent = isLast ? '結果を見る' : '次の問題へ';
  btnNext.classList.remove('hidden');
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

// ---- 結果 ----
function showResult() {
  clearInterval(timerInterval);
  progressBar.style.width = '100%';
  const total = questions.length;
  scoreText.textContent = `${total}問中 ${score}問 正解`;
  scoreComment.textContent = getComment(score, total);
  saveHistory(score, total);
  showScreen(screenResult);
}

function getComment(s, total) {
  if (s === total) return '完璧です！素晴らしい！';
  if (s >= total - 1) return 'あと一歩！よくできました！';
  if (s >= Math.ceil(total / 2)) return '半分以上正解！なかなかです！';
  return 'もう一度挑戦してみましょう！';
}

// ---- スコア履歴 ----
function saveHistory(s, total) {
  const history = loadHistory();
  history.unshift({
    date: new Date().toLocaleString('ja-JP'),
    category: selectedCategory,
    count: selectedCount === 'all' ? '全問' : `${selectedCount}問`,
    score: s,
    total,
  });
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 20)));
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function showHistory() {
  const history = loadHistory();
  if (history.length === 0) {
    historyList.innerHTML = '<p class="no-history">まだ履歴がありません</p>';
  } else {
    historyList.innerHTML = history.map(h => `
      <div class="history-item">
        <div class="history-meta">
          <span class="category-badge">${h.category}</span>
          <span>${h.count}</span>
          <span class="history-date">${h.date}</span>
        </div>
        <div class="history-score">${h.total}問中 <span class="history-score-num">${h.score}問</span> 正解</div>
      </div>
    `).join('');
  }
  showScreen(screenHistory);
}

function clearHistory() {
  if (!confirm('履歴をすべて削除しますか？')) return;
  localStorage.removeItem(HISTORY_KEY);
  historyList.innerHTML = '<p class="no-history">まだ履歴がありません</p>';
}
