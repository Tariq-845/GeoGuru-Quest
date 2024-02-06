// --------------------- Question Array
const countryQuestions = [{
  question: 'Which country is known as the Land of the Rising Sun?',
  answers: ['Nepal', 'New Zealand', 'Japan', 'Kazakhstan'],
  correctAnswer: 'Japan'
},
{
  question: 'What is the official language of Brazil?',
  answers: ['Spanish', 'English', 'Italian', 'Portuguese'],
  correctAnswer: 'Portuguese'
},
{
  question: 'Which European country is famous for its windmills, tulips, and canals?',
  answers: ['Austria', 'Netherlands', 'Slovakia', 'Switzerland'],
  correctAnswer: 'Netherlands'
},
{
  question: 'In which country would you find the ancient city of Petra?',
  answers: ['Qatar', 'Jordan', 'Turkey', 'Saudi Arabia'],
  correctAnswer: 'Jordan'
},
{
  question: 'What is the capital city of Canada?',
  answers: ['Ottawa', 'Vancouver', 'Toronto', 'Québec City'],
  correctAnswer: 'Ottawa'
},
{
  question: 'What is the largest island country in the world by land area?',
  answers: ['Japan', 'Madagascar', 'Indonesia', 'Philippines'],
  correctAnswer: 'Indonesia'
},
{
  question: 'Which Asian country is the world\'s most populous?',
  answers: ['China', 'Indonesia', 'Pakistan', 'India'],
  correctAnswer: 'India'
},
{
  question: 'Which country is home to the Great Barrier Reef, one of the world\'s most famous natural wonders?',
  answers: ['New Zealand', 'Australia', 'Indonesia', 'Japan'],
  correctAnswer: 'Australia'
},
{
  question: 'What is the smallest country in the world by land area?',
  answers: ['Luxembourg', 'Liechtenstein', 'Vatican City', 'Singapore'],
  correctAnswer: 'Vatican City'
},
{
  question: 'In which country would you find the ancient city of Machu Picchu?',
  answers: ['Peru', 'Brazil', 'Colombia', 'Panama'],
  correctAnswer: 'Peru'
}];

// --------------- Assigning elements to variables
const questionElem = document.getElementById('quiz-question');
const answerElem = document.querySelectorAll('.answer');
let currentQuestionNumber = 1;
let questionIdx = 0;

// --------------- Looping through countryQuestions and displaying on page
const displayQuestions = index => {
  let currentQuestion = countryQuestions[index];
  questionElem.innerText = currentQuestion.question;

  for (let i = 0; i < answerElem.length; i++) {
    answerElem[i].innerText = currentQuestion.answers[i];
  }
}

// --------------- Event listener to check if answer is correct/incorrect
const checkAnswer = event => {
  let userSelectedAnswer = event.target.innerText;
  if (userSelectedAnswer === countryQuestions[questionIdx].correctAnswer) {
    console.log('correct');
  } else {
    console.log('incorrect');
  }
  questionIdx++;
}

for (let button of answerElem) {
  button.addEventListener('click', checkAnswer);
}

displayQuestions(questionIdx);


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