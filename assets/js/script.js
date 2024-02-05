document.addEventListener("DOMContentLoaded", function () {
    let questionNumber = 1;
    let timerValue = 30;
    let score = 0;
    let incorrect = 0;

    const questionElement = document.getElementById("question");
    const timerElement = document.getElementById("timer");
    const quizQuestionElement = document.getElementById("quiz-question");
    const answerElements = document.querySelectorAll('.answer');
    const nextButton = document.getElementById("next-btn");
    const restartButton = document.getElementById("restart-btn");
    const scoreElement = document.getElementById("score");
    const incorrectElement = document.getElementById("incorrect");

    const cityQuestions = [
        {
            question: "Which city is known as the 'Big Apple'?",
            answers: ["New York City", "Los Angeles", "Chicago", "Miami"],
            correctAnswer: "a"
        },
        {
            question: "In which city is the Eiffel Tower located?",
            answers: ["Berlin", "Paris", "London", "Madrid"],
            correctAnswer: "b"
        },
        {
            question: "Which city is the capital of Japan?",
            answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
            correctAnswer: "c"
        },
        {
            question: "What is the largest city in Australia?",
            answers: ["Sydney", "Melbourne", "Brisbane", "Perth"],
            correctAnswer: "a"
        },
        {
            question: "In which city is the Colosseum located?",
            answers: ["Rome", "Athens", "Barcelona", "Istanbul"],
            correctAnswer: "a"
        },
        {
            question: "Which city is known as the 'City of Love'?",
            answers: ["Venice", "Paris", "Prague", "Barcelona"],
            correctAnswer: "b"
        },
        {
            question: "What is the capital city of Brazil?",
            answers: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
            correctAnswer: "b"
        },
        {
            question: "In which city is the Statue of Liberty located?",
            answers: ["Washington, D.C.", "Boston", "New York City", "Philadelphia"],
            correctAnswer: "c"
        },
        {
            question: "Which city is famous for its canals and gondolas?",
            answers: ["Amsterdam", "Venice", "Copenhagen", "Bruges"],
            correctAnswer: "b"
        },
        {
            question: "What is the capital of Canada?",
            answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            correctAnswer: "c"
        }
    ];

    function updateQuestionAndTimer() {
        questionElement.innerText = `Question ${questionNumber} of ${cityQuestions.length}`;
        timerElement.innerText = `Timer: ${timerValue} seconds`;
    }

    function updateScore() {
        scoreElement.innerText = score;
        incorrectElement.innerText = incorrect;
    }

    function showNextQuestion() {
        questionNumber++;
        timerValue = 30;
        updateQuestionAndTimer();
        nextButton.disabled = true;

        if (questionNumber > cityQuestions.length) {
            alert(`Quiz Completed!\nScore: ${score}\nIncorrect Answers: ${incorrect}`);
        } else {
            const currentQuestion = cityQuestions[questionNumber - 1];
            quizQuestionElement.innerText = currentQuestion.question;

            answerElements.forEach((answer, index) => {
                answer.innerText = currentQuestion.answers[index];
                answer.style.backgroundColor = "white";
            });
        }
    }

    function handleAnswerClick(answer) {
        const correctAnswer = cityQuestions[questionNumber - 1].correctAnswer;
        const isCorrect = answer.dataset.answer === correctAnswer;

        if (isCorrect) {
            score++;
            answer.style.backgroundColor = "lightgreen";
        } else {
            incorrect++;
            answer.style.backgroundColor = "lightcoral";
        }

        nextButton.disabled = false;
        updateScore();
    }

    function restartQuiz() {
        questionNumber = 1;
        timerValue = 30;
        score = 0;
        incorrect = 0;
        updateQuestionAndTimer();
        updateScore();
        showNextQuestion();
    }

    answerElements.forEach(answer => {
        answer.addEventListener("click", function () {
            handleAnswerClick(this);
        });
    });

    nextButton.addEventListener("click", function () {
        showNextQuestion();
    });

    restartButton.addEventListener("click", function () {
        restartQuiz();
    });

    setInterval(function () {
        timerValue--;
        timerElement.innerText = `Timer: ${timerValue} seconds`;

        if (timerValue === 0) {
            showNextQuestion();
        }
    }, 1000);

    updateQuestionAndTimer();
    updateScore();
});