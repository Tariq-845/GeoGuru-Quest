// start screen , question area
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionArea = document.getElementByclass("question-area")


const questionElem = document.getElementById('quiz-question');

const countryQuestions = [{
    question: 'Which country is known as the Land of the Rising Sun?',
    answers: ['Nepal', 'New Zealand', 'Japan', 'Kazakhstan'],
    correctAnswer: 'c'
  },
  {
    question: 'What is the official language of Brazil?',
    answers: ['Spanish', 'English', 'Italian', 'Portuguese'],
    correctAnswer: 'd'
  },
  {
    question: 'Which European country is famous for its windmills, tulips, and canals?',
    answers: ['Austria', 'Netherlands', 'Slovakia', 'Switzerland'],
    correctAnswer: 'b'
  },
  {
    question: 'In which country would you find the ancient city of Petra?',
    answers: ['Qatar', 'Jordan', 'Turkey', 'Saudi Arabia'],
    correctAnswer: 'b'
  },
  {
    question: 'What is the capital city of Canada?',
    answers: ['Ottawa', 'Vancouver', 'Toronto', 'Québec City'],
    correctAnswer: 'a'
  },
  {
    question: 'What is the largest island country in the world by land area?',
    answers: ['Japan', 'Madagascar', 'Indonesia', 'Philippines'],
    correctAnswer: 'c'
  },
  {
    question: 'Which Asian country is the world\'s most populous?',
    answers: ['China', 'Indonesia', 'Pakistan', 'India'],
    correctAnswer: 'd'
  },
  {
    question: 'Which country is home to the Great Barrier Reef, one of the world\'s most famous natural wonders?',
    answers: ['New Zealand', 'Australia', 'Indonesia', 'Japan'],
    correctAnswer: 'b'
  },
  {
    question: 'What is the smallest country in the world by land area?',
    answers: ['Luxembourg', 'Liechtenstein', 'Vatican City', 'Singapore'],
    correctAnswer: 'c'
  },
  {
    question: 'In which country would you find the ancient city of Machu Picchu?',
    answers: ['Peru', 'Brazil', 'Colombia', 'Panama'],
    correctAnswer: 'a'
  }
];

//next button
let nextBtn = document.getElementById("next-button");
nextBtn.addEventListener("click", (displayNext = () => {
  nextQuestion();
}));

function nextQuestion() {
  currentQuestionNumber++;
  document.getElementById('question').textContent = `Question ${currentQuestionNumber} of 10`;
}

// increment current score in case of correct answer
let score = 0;

function incrementScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;

}

//increment current score in case of incorrect answer
let incorrect = 0;

function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}