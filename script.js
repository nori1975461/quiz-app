// ---- 問題データ ----
const allQuestions = [
  // 動物
  { question: '陸上で最も速く走れる動物はどれですか？', choices: ['ライオン', 'チーター', 'トラ', '馬'], answer: 1, category: '動物' },
  { question: '世界で最も大きな動物はどれですか？', choices: ['ゾウ', 'キリン', 'シロナガスクジラ', 'ジンベイザメ'], answer: 2, category: '動物' },
  { question: 'タコの足は何本ですか？', choices: ['6本', '8本', '10本', '12本'], answer: 1, category: '動物' },
  { question: '日本の国鳥はどれですか？', choices: ['タンチョウヅル', 'キジ', 'ウグイス', 'トキ'], answer: 1, category: '動物' },
  { question: 'コウモリが暗闇でも飛べる理由はなんですか？', choices: ['目が光る', '超音波を使う', '暗闇でも目が見える', 'においで判断する'], answer: 1, category: '動物' },
  { question: '世界で最も大きな鳥（飛べない）はどれですか？', choices: ['ペンギン', 'エミュー', 'ダチョウ', 'ヒクイドリ'], answer: 2, category: '動物' },
  { question: 'カエルの子供（幼生）を何といいますか？', choices: ['さなぎ', 'オタマジャクシ', 'ようちゅう', 'こざかな'], answer: 1, category: '動物' },
  { question: '首が最も長い動物はどれですか？', choices: ['ラクダ', 'ウマ', 'キリン', 'ゾウ'], answer: 2, category: '動物' },
  { question: 'ペンギンの主な生息地はどこですか？', choices: ['北極', '南極・南半球', 'アフリカ', 'アジア'], answer: 1, category: '動物' },
  { question: '象の鼻には約何本の筋肉があるといわれていますか？', choices: ['約100本', '約1,000本', '約40,000本', '約4本'], answer: 2, category: '動物' },

  // スポーツ
  { question: 'サッカーの試合で1チームが出せる選手の数は何人ですか？', choices: ['9人', '10人', '11人', '12人'], answer: 2, category: 'スポーツ' },
  { question: 'オリンピックの聖火はどの国から運ばれてきますか？', choices: ['アメリカ', 'フランス', 'ギリシャ', 'イギリス'], answer: 2, category: 'スポーツ' },
  { question: '野球でバッターが3回ストライクを取られることを何といいますか？', choices: ['アウト', '三振', 'フォアボール', 'チェンジ'], answer: 1, category: 'スポーツ' },
  { question: 'テニスで「40-40」になった状態を何といいますか？', choices: ['タイブレーク', 'マッチポイント', 'デュース', 'アドバンテージ'], answer: 2, category: 'スポーツ' },
  { question: 'マラソンの正式な距離はおよそ何kmですか？', choices: ['40 km', '42 km', '42.195 km', '45 km'], answer: 2, category: 'スポーツ' },
  { question: 'バスケットボールの試合で1チームに出られる選手の数は何人ですか？', choices: ['4人', '5人', '6人', '7人'], answer: 1, category: 'スポーツ' },
  { question: 'サッカーのPKでボールを置く場所からゴールラインまでの距離は何mですか？', choices: ['8 m', '9 m', '11 m', '13 m'], answer: 2, category: 'スポーツ' },
  { question: 'バレーボールのコートで1チームの人数は何人ですか？', choices: ['5人', '6人', '7人', '8人'], answer: 1, category: 'スポーツ' },
  { question: '水泳の4つの泳法に含まれないのはどれですか？', choices: ['クロール', 'バタフライ', 'サイドストローク', '背泳ぎ'], answer: 2, category: 'スポーツ' },
  { question: 'サッカーのワールドカップは何年に1度開催されますか？', choices: ['2年', '4年', '6年', '8年'], answer: 1, category: 'スポーツ' },

  // 食べ物
  { question: '豆腐の主な原料はなんですか？', choices: ['小麦', '米', '大豆', 'とうもろこし'], answer: 2, category: '食べ物' },
  { question: 'チョコレートの原料となる植物の実はどれですか？', choices: ['コーヒー豆', 'カカオ豆', 'バニラビーンズ', 'ナッツ'], answer: 1, category: '食べ物' },
  { question: 'お餅を作るときに使う米の種類はどれですか？', choices: ['うるち米', 'もち米', '玄米', '発芽米'], answer: 1, category: '食べ物' },
  { question: '世界三大珍味に含まれるのはどれですか？', choices: ['マグロ', 'サーモン', 'キャビア', 'アワビ'], answer: 2, category: '食べ物' },
  { question: '納豆の原料はなんですか？', choices: ['小豆', '黒豆', '大豆', '白いんげん豆'], answer: 2, category: '食べ物' },
  { question: 'ラーメンの発祥の国はどこですか？', choices: ['日本', '韓国', '中国', '台湾'], answer: 2, category: '食べ物' },
  { question: 'ハンバーガーの発祥の国はどこですか？', choices: ['ドイツ', 'アメリカ', 'イギリス', 'フランス'], answer: 1, category: '食べ物' },
  { question: 'お酢の主成分（酸性の成分）はなんですか？', choices: ['クエン酸', '乳酸', '酢酸', 'リンゴ酸'], answer: 2, category: '食べ物' },
  { question: 'ビタミンCを特に多く含む果物はどれですか？', choices: ['バナナ', 'りんご', 'キウイ', 'スイカ'], answer: 2, category: '食べ物' },
  { question: 'カレーライスで辛みを出すスパイスはどれですか？', choices: ['ターメリック', 'クミン', '唐辛子（チリ）', 'コリアンダー'], answer: 2, category: '食べ物' },

  // ゲーム・アニメ
  { question: '「マリオブラザーズ」の主人公マリオの職業はなんですか？', choices: ['大工', '消防士', '配管工', '電気工事士'], answer: 2, category: 'ゲーム・アニメ' },
  { question: '「ポケットモンスター」初代ゲームで最初に選べるポケモンに含まれないのはどれですか？', choices: ['フシギダネ', 'ヒトカゲ', 'ゼニガメ', 'ピカチュウ'], answer: 3, category: 'ゲーム・アニメ' },
  { question: '「ドラゴンボール」の主人公の名前はなんですか？', choices: ['ベジータ', '孫悟空', 'クリリン', 'ピッコロ'], answer: 1, category: 'ゲーム・アニメ' },
  { question: '「となりのトトロ」を制作したアニメスタジオはどこですか？', choices: ['東映アニメーション', 'スタジオジブリ', '京都アニメーション', 'サンライズ'], answer: 1, category: 'ゲーム・アニメ' },
  { question: '「ONE PIECE」の主人公ルフィが目指すのはなんですか？', choices: ['最強の剣士', '最強の海賊', '海賊王', '世界征服'], answer: 2, category: 'ゲーム・アニメ' },
  { question: '「名探偵コナン」の主人公・江戸川コナンの本名はなんですか？', choices: ['毛利蘭', '工藤新一', '服部平次', '安室透'], answer: 1, category: 'ゲーム・アニメ' },
  { question: '「鬼滅の刃」の主人公・炭治郎の家族はどんな仕事をしていましたか？', choices: ['大工', '農家', '炭売り', '漁師'], answer: 2, category: 'ゲーム・アニメ' },
  { question: '「ゼルダの伝説」シリーズの主人公の名前はなんですか？', choices: ['ゼルダ', 'リンク', 'ガノン', 'インパ'], answer: 1, category: 'ゲーム・アニメ' },
  { question: 'ゲーム「テトリス」が生まれた国はどこですか？', choices: ['アメリカ', '日本', 'ソビエト連邦（ロシア）', 'イギリス'], answer: 2, category: 'ゲーム・アニメ' },
  { question: '「ドラえもん」の主人公・のび太の苗字はなんですか？', choices: ['野比', '源', '骨川', '剛田'], answer: 0, category: 'ゲーム・アニメ' },

  // 理科・自然
  { question: '水が沸騰する温度は何度ですか（1気圧の場合）？', choices: ['80℃', '90℃', '100℃', '110℃'], answer: 2, category: '理科・自然' },
  { question: '植物が光合成で空気中から吸収する気体はなんですか？', choices: ['酸素', '窒素', '水素', '二酸化炭素'], answer: 3, category: '理科・自然' },
  { question: 'ヒトの体で血液を全身に送るポンプの役割をする臓器はどれですか？', choices: ['肝臓', '腎臓', '心臓', '肺'], answer: 2, category: '理科・自然' },
  { question: '地球の表面のおよそ何%が海ですか？', choices: ['約50%', '約60%', '約70%', '約80%'], answer: 2, category: '理科・自然' },
  { question: '音の速さはおよそ何m/秒ですか（空気中）？', choices: ['約34 m/秒', '約340 m/秒', '約3,400 m/秒', '約34,000 m/秒'], answer: 1, category: '理科・自然' },
  { question: '電気を通しにくい物質を何といいますか？', choices: ['導体', '半導体', '絶縁体', '超電導体'], answer: 2, category: '理科・自然' },
  { question: '虹は何色からできていますか？', choices: ['5色', '6色', '7色', '8色'], answer: 2, category: '理科・自然' },
  { question: 'てこの原理を発見した古代ギリシャの科学者はだれですか？', choices: ['ニュートン', 'アインシュタイン', 'アルキメデス', 'ガリレオ'], answer: 2, category: '理科・自然' },
  { question: '月が地球の周りを1周するのにかかる時間はおよそどれくらいですか？', choices: ['約7日', '約14日', '約27日', '約365日'], answer: 2, category: '理科・自然' },
  { question: 'ヒトの体の中で最も大きな臓器はどれですか？', choices: ['肝臓', '肺', '皮膚', '腸'], answer: 2, category: '理科・自然' },

  // 日本の地理
  { question: '日本で最も高い山はどれですか？', choices: ['北岳', '槍ヶ岳', '富士山', '穂高岳'], answer: 2, category: '日本の地理' },
  { question: '日本で最も長い川はどれですか？', choices: ['利根川', '信濃川', '木曽川', '最上川'], answer: 1, category: '日本の地理' },
  { question: '日本で最も大きな湖はどれですか？', choices: ['霞ヶ浦', '諏訪湖', '琵琶湖', '猪苗代湖'], answer: 2, category: '日本の地理' },
  { question: '日本の都道府県の数はいくつですか？', choices: ['43', '45', '47', '50'], answer: 2, category: '日本の地理' },
  { question: '日本の最北端にある都道府県はどれですか？', choices: ['青森県', '北海道', '岩手県', '秋田県'], answer: 1, category: '日本の地理' },
  { question: '日本で最も面積が大きい都道府県はどれですか？', choices: ['岩手県', '長野県', '北海道', '新潟県'], answer: 2, category: '日本の地理' },
  { question: '富士山は何県と何県にまたがっていますか？', choices: ['長野県と山梨県', '静岡県と山梨県', '神奈川県と静岡県', '静岡県と長野県'], answer: 1, category: '日本の地理' },
  { question: '日本の最西端にある島はどれですか？', choices: ['沖縄島', '宮古島', '対馬', '与那国島'], answer: 3, category: '日本の地理' },
  { question: '日本の国会と内閣がある都市はどこですか？', choices: ['大阪', '京都', '東京', '名古屋'], answer: 2, category: '日本の地理' },
  { question: '日本の最南端にある島はどれですか？', choices: ['与那国島', '沖ノ鳥島', '南鳥島', '石垣島'], answer: 1, category: '日本の地理' },

  // 歴史
  { question: '江戸幕府を開いた人物はだれですか？', choices: ['豊臣秀吉', '織田信長', '徳川家康', '徳川秀忠'], answer: 2, category: '歴史' },
  { question: '鎌倉幕府を開いた人物はだれですか？', choices: ['源義経', '北条時政', '源頼朝', '平清盛'], answer: 2, category: '歴史' },
  { question: '第二次世界大戦が終結した年はいつですか？', choices: ['1943年', '1944年', '1945年', '1946年'], answer: 2, category: '歴史' },
  { question: '関ヶ原の戦いが行われた年はいつですか？', choices: ['1575年', '1582年', '1600年', '1615年'], answer: 2, category: '歴史' },
  { question: '奈良の東大寺の大仏が作られたのはいつの時代ですか？', choices: ['飛鳥時代', '奈良時代', '平安時代', '鎌倉時代'], answer: 1, category: '歴史' },
  { question: '日本の明治維新が始まった年はいつですか？', choices: ['1853年', '1858年', '1868年', '1889年'], answer: 2, category: '歴史' },
  { question: '平安京（現在の京都）に都が移されたのはいつですか？', choices: ['710年', '784年', '794年', '810年'], answer: 2, category: '歴史' },
  { question: 'フランス革命が起きた年はいつですか？', choices: ['1776年', '1789年', '1804年', '1815年'], answer: 1, category: '歴史' },
  { question: '万里の長城を建設した国はどこですか？', choices: ['日本', 'モンゴル', '朝鮮', '中国'], answer: 3, category: '歴史' },
  { question: 'ザビエルが日本にキリスト教を伝えたのはいつですか？', choices: ['1492年', '1543年', '1549年', '1600年'], answer: 2, category: '歴史' },

  // 宇宙・天文
  { question: '太陽系で最も大きな惑星はどれですか？', choices: ['土星', '天王星', '海王星', '木星'], answer: 3, category: '宇宙・天文' },
  { question: '太陽系の惑星の数はいくつですか（現在の定義）？', choices: ['7個', '8個', '9個', '10個'], answer: 1, category: '宇宙・天文' },
  { question: '月が地球の影に入る現象を何といいますか？', choices: ['日食', '月食', '皆既日食', '流星'], answer: 1, category: '宇宙・天文' },
  { question: 'アポロ11号が初めて月に着陸したのは何年ですか？', choices: ['1957年', '1961年', '1969年', '1972年'], answer: 2, category: '宇宙・天文' },
  { question: '太陽以外で夜空に最も明るく見える恒星はどれですか？', choices: ['ベガ', 'シリウス', 'アルタイル', 'アンタレス'], answer: 1, category: '宇宙・天文' },
  { question: '彗星（すいせい）の尾はどの方向に伸びますか？', choices: ['進行方向', '太陽の方向', '太陽と反対方向', '地球の方向'], answer: 2, category: '宇宙・天文' },
  { question: '地球から太陽までの距離はおよそどのくらいですか？', choices: ['約1,500万 km', '約1億5,000万 km', '約15億 km', '約1,500億 km'], answer: 1, category: '宇宙・天文' },
  { question: '太陽の表面温度はおよそ何度ですか？', choices: ['約600℃', '約6,000℃', '約60,000℃', '約6,000,000℃'], answer: 1, category: '宇宙・天文' },
  { question: '流れ星（流星）の正体はなんですか？', choices: ['宇宙人の乗り物', '宇宙の塵や岩石が大気に突入したもの', 'ロケットの残骸', '彗星の本体'], answer: 1, category: '宇宙・天文' },
  { question: '地球の衛星（月）はいくつありますか？', choices: ['0個', '1個', '2個', '3個'], answer: 1, category: '宇宙・天文' },

  // 算数・数学
  { question: '三角形の内角の和は何度ですか？', choices: ['90度', '120度', '180度', '360度'], answer: 2, category: '算数・数学' },
  { question: '円周率πはおよそいくつですか？', choices: ['約2.71', '約3.14', '約3.41', '約4.13'], answer: 1, category: '算数・数学' },
  { question: '1から10までの整数をすべて足すといくつになりますか？', choices: ['45', '50', '55', '60'], answer: 2, category: '算数・数学' },
  { question: '正方形の面積を求める公式はどれですか？', choices: ['一辺×一辺÷2', '一辺×4', '一辺×一辺', '対角線×対角線'], answer: 2, category: '算数・数学' },
  { question: '素数（1と自分自身だけで割り切れる数）でないのはどれですか？', choices: ['2', '5', '7', '9'], answer: 3, category: '算数・数学' },
  { question: '2の10乗（2を10回かける）はいくつですか？', choices: ['512', '1,000', '1,024', '2,048'], answer: 2, category: '算数・数学' },
  { question: '√4（4の平方根）はいくつですか？', choices: ['1', '2', '3', '4'], answer: 1, category: '算数・数学' },
  { question: '立方体（さいころの形）の面の数はいくつですか？', choices: ['4', '5', '6', '8'], answer: 2, category: '算数・数学' },
  { question: '正六角形の内角の和は何度ですか？', choices: ['540度', '720度', '900度', '1,080度'], answer: 1, category: '算数・数学' },
  { question: '100÷4×2の答えはいくつですか？', choices: ['12.5', '25', '50', '200'], answer: 2, category: '算数・数学' },

  // 言葉・国語
  { question: '「速い」の反対語はどれですか？', choices: ['重い', '遅い', '短い', '浅い'], answer: 1, category: '言葉・国語' },
  { question: '俳句は何音（おん）で構成されていますか？', choices: ['14音', '17音', '21音', '31音'], answer: 1, category: '言葉・国語' },
  { question: '「百聞は一見にしかず」の意味として正しいのはどれですか？', choices: ['百回聞いてやっと理解できる', '何度聞くより一度見る方がよくわかる', '百人の話より一人の経験が大切', '聞くより動くことが大切'], answer: 1, category: '言葉・国語' },
  { question: '和歌（短歌）は何音で構成されていますか？', choices: ['17音', '26音', '31音', '35音'], answer: 2, category: '言葉・国語' },
  { question: '「七転び八起き」は何回転んで何回起き上がることを意味しますか？', choices: ['8回転んで7回起きる', '7回転んで7回起きる', '7回転んで8回起きる', '何度でも立ち上がる'], answer: 2, category: '言葉・国語' },
  { question: '「猿も木から落ちる」と同じ意味のことわざはどれですか？', choices: ['塵も積もれば山となる', '弘法にも筆の誤り', '石の上にも三年', '七転び八起き'], answer: 1, category: '言葉・国語' },
  { question: '次のうち春に関係のある季語（俳句の言葉）はどれですか？', choices: ['紅葉', '雪', '桜', '花火'], answer: 2, category: '言葉・国語' },
  { question: '「喜怒哀楽」の「哀」が表す感情はどれですか？', choices: ['喜び', '怒り', '悲しみ', '楽しみ'], answer: 2, category: '言葉・国語' },
  { question: '「頭痛が痛い」のような同じ意味の言葉を重ねた言い方を何といいますか？', choices: ['比喩（ひゆ）', '倒置法', '重言（じゅうごん）', '誇張法'], answer: 2, category: '言葉・国語' },
  { question: '「春はあけぼの」で始まる随筆の作者はだれですか？', choices: ['紫式部', '清少納言', '和泉式部', '小野小町'], answer: 1, category: '言葉・国語' },
];

const TIMER_SEC = 10;
const HISTORY_KEY = 'quizHistory';

let questions = [];
let currentIndex = 0;
let score = 0;
let selectedCategory = 'すべて';
let selectedCount = 10;
let timerInterval = null;
let timeLeft = TIMER_SEC;
let currentChoices = [];
let resultChartInstance = null;
let scoreChartInstance = null;

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
const congratsMsg   = document.getElementById('congrats-msg');
const confettiCanvas = document.getElementById('confetti-canvas');

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
  timerEl.className = 'timer' + (timeLeft <= 7 ? ' danger' : '');
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

  if (score / total >= 0.9) {
    congratsMsg.classList.remove('hidden');
    showScreen(screenResult);
    launchHanafubuki();
  } else {
    congratsMsg.classList.add('hidden');
    showScreen(screenResult);
  }
  renderResultChart(score, total);
}

function renderResultChart(score, total) {
  const ctx = document.getElementById('result-chart').getContext('2d');
  if (resultChartInstance) resultChartInstance.destroy();
  resultChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['正解', '不正解'],
      datasets: [{
        data: [score, total - score],
        backgroundColor: ['rgba(212, 169, 42, 0.85)', 'rgba(229, 62, 62, 0.8)'],
        borderColor: ['#d4a92a', '#e53e3e'],
        borderWidth: 1,
        borderRadius: 6,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => `${ctx.parsed.y}問` } },
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.06)' },
          ticks: { color: '#f0d8c0', font: { weight: '600' } },
        },
        y: {
          beginAtZero: true,
          max: total,
          ticks: { stepSize: 1, color: '#8a5848' },
          grid: { color: 'rgba(255,255,255,0.06)' },
        },
      },
    },
  });
}

// ---- 花吹雪 ----
function launchHanafubuki() {
  const canvas = confettiCanvas;
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  const petalColors = [
    '#ffb7c5', '#ffd0db', '#ff8fa3',
    '#ffffff', '#fff0f5',
    '#f0cc5a', '#ffeaa0',
    '#ff9f7f', '#ffcba4',
  ];

  const petals = Array.from({ length: 180 }, () => ({
    x:      Math.random() * canvas.width,
    y:      Math.random() * -canvas.height,
    rx:     Math.random() * 8 + 5,
    ry:     Math.random() * 5 + 3,
    color:  petalColors[Math.floor(Math.random() * petalColors.length)],
    speed:  Math.random() * 2.5 + 1.2,
    angle:  Math.random() * Math.PI * 2,
    spin:   (Math.random() - 0.5) * 0.12,
    drift:  (Math.random() - 0.5) * 1.8,
    sway:   Math.random() * Math.PI * 2,
    swaySpeed: Math.random() * 0.04 + 0.02,
    opacity: 1,
  }));

  let frame = 0;
  const totalFrames = 360;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    petals.forEach(p => {
      p.sway  += p.swaySpeed;
      p.y     += p.speed;
      p.x     += p.drift + Math.sin(p.sway) * 0.8;
      p.angle += p.spin;
      if (frame > totalFrames * 0.65) {
        p.opacity -= 1 / (totalFrames * 0.35);
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 4;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.rx, p.ry, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    frame++;
    if (frame < totalFrames) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
    }
  }

  draw();
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
  renderHistoryChart(history);
}

function renderHistoryChart(history) {
  const ctx = document.getElementById('score-chart').getContext('2d');
  if (scoreChartInstance) scoreChartInstance.destroy();
  if (history.length === 0) return;

  const recent = history.slice(0, 10).reverse();
  const labels = recent.map((_, i) => `第${i + 1}回`);
  const percentages = recent.map(h => Math.round(h.score / h.total * 100));
  const colors = percentages.map(p =>
    p >= 80 ? 'rgba(212, 169, 42, 0.85)' :
    p >= 50 ? 'rgba(230, 130, 30, 0.85)' :
              'rgba(229, 62, 62, 0.8)'
  );

  scoreChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data: percentages,
        backgroundColor: colors,
        borderRadius: 6,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => `正解率: ${ctx.parsed.y}%` } },
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.06)' },
          ticks: { color: '#8a5848', font: { size: 11 } },
        },
        y: {
          beginAtZero: true,
          max: 100,
          ticks: { color: '#8a5848', callback: v => v + '%' },
          grid: { color: 'rgba(255,255,255,0.06)' },
        },
      },
    },
  });
}

function clearHistory() {
  if (!confirm('履歴をすべて削除しますか？')) return;
  localStorage.removeItem(HISTORY_KEY);
  historyList.innerHTML = '<p class="no-history">まだ履歴がありません</p>';
}
