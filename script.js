// array of objects having data of question, option and  correct answer
const quizQuestions = [
    {
      question: "How many state are in India?",
      options: ["28", "29", "30", "None of these"],
      answer: 0 // Index of the correct answer in the options array
    },
    {
      question: "8th wonder of the world?",
      options: ["Red Fort", "Angkor Wat", "Taj Mahal", "Agara Fort"],
      answer: 1 
    },
    {
        question:"How can we iterate over each element of array to get new array?",
        options:["forEach","forLoop", "map method","all above"],
        answer:2
    },
    {
        question:"React in web development is-",
        options:["Framework", "language","Javascript Library","NONE"],
        answer:2
    },
    {
        question:"React in web development is developed by-",
        options:["Amazon", "Microsoft","Google","Meta and its community"],
        answer:3
    }
    // similarly we can also add dynamically other questions
  ];
  
  const quizContainer = document.getElementById('quiz-container');
  const submitBtn = document.getElementById('submit-btn');
  const resultContainer = document.getElementById('result');
  
  // Function to build the quiz dynamically
  function buildQuiz() {
    quizQuestions.forEach((questionObj, index) => {
      const questionElement = document.createElement('div');
      questionElement.innerHTML = `
        <h3>${index + 1}. ${questionObj.question}</h3>
        ${questionObj.options.map((option, i) => `
          <input type="radio" id="q${index}-option${i}" name="q${index}" value="${i}">
          <label for="q${index}-option${i}">${option}</label><br>
        `).join('')}
      `;
      quizContainer.appendChild(questionElement);
    });
  }
  
  // function to display the result and calculate score
  function showResult() {
    const totalQuestions = quizQuestions.length;
    let score = 0;
  
    quizQuestions.forEach((questionObj, index) => {
      const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
      if (selectedOption) {
        if (parseInt(selectedOption.value) === questionObj.answer) {
          score++;
        }
      }
    });
  
    resultContainer.innerHTML = `You scored ${score} out of ${totalQuestions} questions correctly`;
  }
  
  // Event listener for submit button click
  submitBtn.addEventListener('click', () => {
    showResult();
  });
  
  // Build the quiz when the page loads
  window.addEventListener('load', buildQuiz);
  