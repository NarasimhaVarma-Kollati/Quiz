const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: 0
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mercury", "Venus", "Jupiter", "Saturn"],
    answer: 2
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    answer: 0
  },
  {
    question: "Which country won the 2018 FIFA World Cup?",
    options: ["Brazil", "Germany", "France", "Spain"],
    answer: 2
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');

function showQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;

  optionsElement.innerHTML = '';
  for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'option';
    radio.value = i;
    optionsElement.appendChild(radio);

    const label = document.createElement('label');
    label.textContent = option;
    optionsElement.appendChild(label);
  }
}

function submitAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const selectedAnswer = parseInt(selectedOption.value);
    if (selectedAnswer === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
}

function showScore() {
  questionElement.textContent = '';
  optionsElement.innerHTML = '';
  submitButton.style.display = 'none';
  scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
  scoreElement.style.display = 'block';
}

submitButton.addEventListener('click', submitAnswer);

showQuestion();