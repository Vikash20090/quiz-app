
const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');

const questions = [
  {
    question: "भारत की राजधानी क्या है? / What is the capital of India?",
    options: ["मुंबई / Mumbai", "दिल्ली / Delhi", "चेन्नई / Chennai", "कोलकाता / Kolkata"],
    answer: "दिल्ली / Delhi"
  },
  {
    question: "क्रिकेट में एक टीम में कितने खिलाड़ी होते हैं? / How many players are there in a cricket team?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "सूरज कहाँ उगता है? / Where does the sun rise?",
    options: ["पश्चिम / West", "उत्तर / North", "पूरब / East", "दक्षिण / South"],
    answer: "पूरब / East"
  },
  {
    question: "सबसे तेज दौड़ने वाला जानवर कौन है? / Which is the fastest animal?",
    options: ["शेर / Lion", "चीता / Cheetah", "घोड़ा / Horse", "हाथी / Elephant"],
    answer: "चीता / Cheetah"
  },
  {
    question: "भारत का राष्ट्रीय पक्षी कौन है? / What is the national bird of India?",
    options: ["तोता / Parrot", "मोर / Peacock", "हंस / Swan", "कौवा / Crow"],
    answer: "मोर / Peacock"
  },
  {
    question: "2 + 2 कितना होता है? / What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "ऑक्सीजन गैस किस चीज़ के लिए ज़रूरी है? / Oxygen gas is necessary for?",
    options: ["जलने के लिए / Burning", "साँस लेने के लिए / Breathing", "खाने के लिए / Eating", "नींद के लिए / Sleeping"],
    answer: "साँस लेने के लिए / Breathing"
  },
  {
    question: "सबसे बड़ा ग्रह कौन सा है? / What is the biggest planet?",
    options: ["पृथ्वी / Earth", "मंगल / Mars", "बृहस्पति / Jupiter", "शनि / Saturn"],
    answer: "बृहस्पति / Jupiter"
  },
  {
    question: "ताज महल कहाँ स्थित है? / Where is Taj Mahal located?",
    options: ["जयपुर / Jaipur", "आगरा / Agra", "दिल्ली / Delhi", "कोलकाता / Kolkata"],
    answer: "आगरा / Agra"
  },
  {
    question: "कंप्यूटर का 'ब्रेन' किसे कहते हैं? / What is called the brain of computer?",
    options: ["CPU", "RAM", "Mouse", "Monitor"],
    answer: "CPU"
  }
];

let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
  startBtn.style.display = 'none';
  quizContainer.style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const currentQ = questions[currentQuestionIndex];
  quizContainer.innerHTML = `<h2>${currentQ.question}</h2>`;
  
  currentQ.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('option-btn');
    button.addEventListener('click', () => selectAnswer(option, button));
    quizContainer.appendChild(button);
  });
}

function selectAnswer(selected, btn) {
  const allButtons = document.querySelectorAll('.option-btn');
  allButtons.forEach(b => b.disabled = true);

  if (selected === questions[currentQuestionIndex].answer) {
    score++;
    btn.style.backgroundColor = '#28a745'; // green
  } else {
    btn.style.backgroundColor = '#dc3545'; // red
    allButtons.forEach(b => {
      if (b.innerText === questions[currentQuestionIndex].answer) {
        b.style.backgroundColor = '#28a745';
      }
    });
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  resultContainer.innerHTML = `<h2>आपका स्कोर है: ${score} / ${questions.length}</h2>
    <button onclick="restartQuiz()">Restart Quiz</button>`;
}

function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  resultContainer.style.display = 'none';
  startBtn.style.display = 'inline-block';
}
