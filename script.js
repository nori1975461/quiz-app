const questions = [
  {
    question: '日本で最も長い川はどれですか？',
    choices: ['利根川', '信濃川', '木曽川', '淀川'],
    answer: 1,
  },
  {
    question: '富士山の標高として正しいものはどれですか？',
    choices: ['3,566 m', '3,676 m', '3,776 m', '3,876 m'],
    answer: 2,
  },
  {
    question: '世界で最も面積が大きい国はどこですか？',
    choices: ['カナダ', 'アメリカ', '中国', 'ロシア'],
    answer: 3,
  },
  {
    question: '光が1秒間に進む距離として最も近いものはどれですか？',
    choices: ['約30万 km', '約3万 km', '約300万 km', '約3,000 km'],
    answer: 0,
  },
  {
    question: 'ノーベル賞を設立したアルフレッド・ノーベルの出身国はどこですか？',
    choices: ['デンマーク', 'ノルウェー', 'フィンランド', 'スウェーデン'],
    answer: 3,
  },
  {
    question: '元素記号「Au」が表す元素はどれですか？',
    choices: ['銀', '銅', '金', 'アルミニウム'],
    answer: 2,
  },
  {
    question: '日本の国会は衆議院と何院で構成されますか？',
    choices: ['元老院', '参議院', '貴族院', '上院'],
    answer: 1,
  },
  {
    question: '太陽系で最も大きな惑星はどれですか？',
    choices: ['土星', '天王星', '海王星', '木星'],
    answer: 3,
  },
  {
    question: '「モナ・リザ」を描いた画家はだれですか？',
    choices: ['ミケランジェロ', 'ラファエロ', 'レオナルド・ダ・ヴィンチ', 'ボッティチェリ'],
    answer: 2,
  },
  {
    question: '水の化学式として正しいものはどれですか？',
    choices: ['H₂O₂', 'HO', 'H₃O', 'H₂O'],
    answer: 3,
  },
];

const TOTAL = questions.length;

let currentIndex = 0;
let score = 0;

const screenStart  = document.getElementById('screen-start');
const screenQuiz   = document.getElementById('screen-quiz');
const screenResult = document.getElementById('screen-result');

const progressBar    = document.getElementById('progress-bar');
const questionCount  = document.getElementById('question-count');
const questionText   = document.getElementById('question-text');
const choicesEl      = document.getElementById('choices');
const feedbackEl     = document.getElementById('feedback');
const btnNext        = document.getElementById('btn-next');
const scoreText      = document.getElementById('score-text');
const scoreComment   = document.getElementById('score-comment');

document.getElementById('btn-start').addEventListener('click', startQuiz);
btnNext.addEventListener('click', nextQuestion);
document.getElementById('btn-retry').addEventListener('click', startQuiz);

function showScreen(screen) {
  [screenStart, screenQuiz, screenResult].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  showScreen(screenQuiz);
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentIndex];

  progressBar.style.width = (currentIndex / TOTAL * 100) + '%';
  questionCount.textContent = `問題 ${currentIndex + 1} / ${TOTAL}`;
  questionText.textContent = q.question;

  feedbackEl.className = 'feedback hidden';
  feedbackEl.textContent = '';
  btnNext.classList.add('hidden');

  choicesEl.innerHTML = '';
  q.choices.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = text;
    btn.addEventListener('click', () => selectAnswer(i));
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  const q = questions[currentIndex];
  const isCorrect = selectedIndex === q.answer;

  if (isCorrect) score++;

  const choiceBtns = choicesEl.querySelectorAll('.choice-btn');
  choiceBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    if (i === selectedIndex && !isCorrect) btn.classList.add('incorrect');
  });

  feedbackEl.className = 'feedback ' + (isCorrect ? 'correct-fb' : 'incorrect-fb');
  feedbackEl.textContent = isCorrect
    ? '正解！'
    : `不正解… 正解は「${q.choices[q.answer]}」です。`;

  const isLast = currentIndex === TOTAL - 1;
  btnNext.textContent = isLast ? '結果を見る' : '次の問題へ';
  btnNext.classList.remove('hidden');
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < TOTAL) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  progressBar.style.width = '100%';
  scoreText.textContent = `${TOTAL}問中 ${score}問 正解`;
  scoreComment.textContent = getComment(score);
  showScreen(screenResult);
}

function getComment(s) {
  if (s === TOTAL) return '完璧です！素晴らしい！';
  if (s >= TOTAL - 1) return 'あと一歩！よくできました！';
  if (s >= Math.ceil(TOTAL / 2)) return '半分以上正解！なかなかです！';
  return 'もう一度挑戦してみましょう！';
}
