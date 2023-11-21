// BASE DATI

const questions = [
  {
    id: 0,
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What does CPU stand for?',
    correct_answer: 'Central Processing Unit',
    incorrect_answers: [
      'Central Process Unit',
      'Computer Personal Unit',
      'Central Processor Unit',
    ],
  },
  {
    id: 1,
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: 'Final',
    incorrect_answers: ['Static', 'Private', 'Public'],
  },
  {
    id: 2,
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'The logo for Snapchat is a Bell.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    id: 3,
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question:
      'Pointers were not used in the original C programming language; they were added later on in C++.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    id: 4,
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the most preferred image format used for logos in the Wikimedia database?',
    correct_answer: '.svg',
    incorrect_answers: ['.png', '.jpeg', '.gif'],
  },
  {
    id: 5,
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'In web design, what does CSS stand for?',
    correct_answer: 'Cascading Style Sheet',
    incorrect_answers: [
      'Counter Strike: Source',
      'Corrective Style Sheet',
      'Computer Style Sheet',
    ],
  },
  {
    id: 6,
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the code name for the mobile operating system Android 7.0?',
    correct_answer: 'Nougat',
    incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
  },
  {
    id: 7,
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'On Twitter, what is the character limit for a Tweet?',
    correct_answer: '140',
    incorrect_answers: ['120', '160', '100'],
  },
  {
    id: 8,
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'Linux was first created as an alternative to Windows XP.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    id: 9,
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which programming language shares its name with an island in Indonesia?',
    correct_answer: 'Java',
    incorrect_answers: ['Python', 'C', 'Jakarta'],
  },
];

// DICHIARAZIONE VARIABILI GLOBALI

const paginaQuiz = document.getElementById('paginaQuiz');
const countdown = document.getElementById('countdown');
let question = document.querySelector('#question h1');
const answers = document.getElementById('answers');
const counter = document.getElementById('counter');
let answer1 = document.querySelector('#answer-1 button');
let answer2 = document.querySelector('#answer-2 button');
let answer3 = document.querySelector('#answer-3 button');
let answer4 = document.querySelector('#answer-4 button');
let answerLine2 = document.getElementById('answer-line2');

let lunghezzaArray = questions.length;
let wrongAnswers = 0;
let numeroRisposteDate = 0;
const results = document.getElementById('results');

let answer = '';
let interval;

let score = 0; //registraPunteggio
let questionNumber = 0;

// DIV DEI QUIZ

document.addEventListener('DOMContentLoaded', function () {
  caricaQuiz();
  gestoreClickBottoni();
});

function caricaQuiz() {
  if (questionNumber < questions.length) {
    const domandaCorrente = questions[questionNumber].question;
    question.innerText = domandaCorrente;

    question.innerText = domandaCorrente;

    answer1.innerText = questions[questionNumber].correct_answer;
    answer2.innerText = questions[questionNumber].incorrect_answers[0];

    answer3.innerText = questions[questionNumber].incorrect_answers[1];
    answer4.innerText = questions[questionNumber].incorrect_answers[2];

    if (questions[questionNumber].type === 'boolean') {
      answerLine2.style.display = 'none';
    } else {
      answerLine2.style.display = 'inline';
    }
    setTimer();
    numeroDomanda();
    risposteSbagliate();
  }
}

function gestoreClickBottoni() {
  answer1.addEventListener('click', function () {
    answer = answer1.innerText;
    verificaRisposta();
  });

  answer2.addEventListener('click', function () {
    answer = answer2.innerText;
    verificaRisposta();
  });

  answer3.addEventListener('click', function () {
    answer = answer3.innerText;
    verificaRisposta();
  });

  answer4.addEventListener('click', function () {
    answer = answer4.innerText;
    verificaRisposta();
  });
}

function verificaRisposta() {
  // console.log(answer);
  if (answer === answer1.innerText) {
    score++;
    //array registra risposte
    console.log('risposta esatta');
  }

  numeroRisposteDate++;

  if (numeroRisposteDate === lunghezzaArray) {
    paginaQuiz.classList.add('hidden');
    results.classList.remove('hidden');
    mostraRisultati(score);
  }

  clearInterval(interval);
  cambioDomanda();

  return score;
}

// Cambio domanda

function cambioDomanda() {
  questionNumber++;
  caricaQuiz();
}

function setTimer() {
  let countdownNumerEl = document.getElementById('countdown-number');
  let timer = 20;
  countdownNumerEl.textContent = timer;
  countdownNumerEl.innerHTML = timer;

  interval = setInterval(function () {
    timer--;
    countdownNumerEl.innerHTML = timer;

    if (timer === 0) {
      clearInterval(interval);
      cambioDomanda();
    }
  }, 1000);
}

function numeroDomanda() {
  const h5 = document.createElement('h5');
  const seh5 = counter.querySelector('h5');
  if (seh5) {
    counter.removeChild(seh5);
  }
  counter.appendChild(h5);

  h5.innerHTML = `QUESTION ${
    questionNumber + 1
  } <span class="">/ ${lunghezzaArray}</span>`;
}

// DIV DEI RISULTATI

function risposteSbagliate() {
  wrongAnswers = lunghezzaArray - 1 - score;
  return wrongAnswers;
  //console.log(wrongAnswers);
}

function mostraRisultati(score) {
  const totaleRisposte = score + wrongAnswers;
  const perCorrette = Math.round((score / totaleRisposte) * 100);
  const perSbagliate = Math.round((wrongAnswers / totaleRisposte) * 100);

  let risultatoTestuale =
    perCorrette > 60
      ? 'Complimenti, hai superato il test.'
      : 'Mi dispiace, ritenta la prossima volta.';

  document.getElementById('donutChart');

  let totaleCorrette = document.querySelector('#correct p');
  totaleCorrette.innerText = `${score}/${lunghezzaArray} questions`;
  //console.log(score);
  let percentualeCorrette = document.querySelector('#correct h3');
  percentualeCorrette.innerText = `${perCorrette}%`;

  let totaleSbagliate = document.querySelector('#wrong p');
  totaleSbagliate.innerText = `${wrongAnswers}/${lunghezzaArray} questions`;
  let percentualeSbagliate = document.querySelector('#wrong h3');
  percentualeSbagliate.innerText = `${perSbagliate}%`;

  const grafico = document.getElementById('donutChart').getContext('2d');
  new Chart(grafico, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [perSbagliate, perCorrette],
          backgroundColor: ['#d20094', '#00ffff'],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      cutout: 110,
    },
    plugins: [
      {
        id: 'text',
        beforeDraw: function (chart, a, b) {
          let width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
          ctx.restore();
          let fontSize = (0.5).toFixed(2);
          ctx.font = fontSize + 'em sans-serif';
          ctx.textBaseline = 'middle';
          let text = risultatoTestuale,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.fillStyle = 'white';
          ctx.save();
        },
      },
    ],
  });
}
