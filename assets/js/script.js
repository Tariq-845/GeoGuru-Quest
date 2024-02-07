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
}
];

// Assigning elements to variables
const questionElem = document.getElementById('quiz-question');
const answerElem = document.querySelectorAll('.answer');
let currentQuestionNumber = 1;
let questionIdx = 0;
let score = 0;
let incorrect = 0;
let timer;

// Looping through countryQuestions and displaying on page
const displayQuestions = index => {
let currentQuestion = countryQuestions[index];
questionElem.innerText = currentQuestion.question;

for (let i = 0; i < answerElem.length; i++) {
  answerElem[i].innerText = currentQuestion.answers[i];
}
};

// Timer
const timeLimitInSeconds = 30; // Set the time limit for each question

// Function to start the timer
function startTimer() {
let timeRemaining = timeLimitInSeconds;
timer = setInterval(() => {
  document.getElementById('timer').textContent = `Timer: ${timeRemaining}s`;
  if (timeRemaining === 0) {
    clearInterval(timer);
    timeUp();
  }
  timeRemaining--;
}, 1000);
}

const stopTimer = () => {
  clearTimeout(timer);
}

// Function to reset the timer
function resetTimer() {
clearInterval(timer);
startTimer();
}

// Function to handle when time is up
function timeUp() {
alert("Time's up! Moving to the next question.");
incrementWrongAnswer();
questionIdx++;
resetTimer(); // Reset the timer for the next question
displayNext();
}

// Event listener to check if answer is correct/incorrect
const checkAnswer = event => {
let userSelectedAnswer = event.target.innerText;
if (userSelectedAnswer === countryQuestions[questionIdx].correctAnswer) {
  incrementScore();
} else {
  incrementWrongAnswer();
}
questionIdx++;
resetTimer(); // Reset the timer for the next question
displayNext();
};

for (let button of answerElem) {
button.addEventListener('click', checkAnswer);
}

// Next button
let nextBtn = document.getElementById("next-button");
nextBtn.addEventListener("click", () => {
  resetTimer(); // Reset the timer for the next question
  ++questionIdx; // Loops to next question in array
  displayNext();
  });

// Display next question
const displayNext = () => {
if (questionIdx < countryQuestions.length) {
  displayQuestions(questionIdx);
  currentQuestionNumber++;
  document.getElementById('question').textContent = `Question ${currentQuestionNumber} of ${countryQuestions.length}`;
} else {
  endQuiz();
}
};

// End quiz and display score
const endQuiz = () => {
alert(`You have completed the quiz. Your score is ${score} out of ${countryQuestions.length}`);
stopTimer();
nextBtn.disabled = true;
};

// Increment current score in case of correct answer
function incrementScore() {
score++;
document.getElementById("score").innerText = score;
}

// Increment current score in case of incorrect answer
function incrementWrongAnswer() {
incorrect++;
document.getElementById("incorrect").innerText = incorrect;
}

// Restart button
const restartButton = document.getElementById('restart-btn');
restartButton.addEventListener('click', function() {
location.reload();
});

// Start the timer when the script loads
startTimer();
displayQuestions(questionIdx);  // <-- Add this line to display the first question initially