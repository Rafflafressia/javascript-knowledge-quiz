// TO DO LIST
// start the quiz

// Declare variables we are using
var start = document.querySelector("#startBtn");
var quizStart = document.querySelector("#startQuiz");
var timerEl = document.querySelector("#timerEl");
var questionnaire = document.querySelector(".testContent");
var cardTitle = document.querySelector("#questionNumber");
var showQuestion = document.querySelector("#theQuestion");
var choiceButton1 = document.querySelector("#answerBtn1");
var choiceButton2 = document.querySelector("#answerBtn2");
var choiceButton3 = document.querySelector("#answerBtn3");
var choiceButton4 = document.querySelector("#answerBtn4");
var signForm = document.querySelector("#scoreSig");
var submitBtn = document.querySelector("#submit");
var userSig = document.querySelector("#signature");
var sigInit = document.querySelector("initials");

// Question Card Objects
var questions= [
  {
    number: "Question 1",
    question: "What are the two ways of storing data-type variables?",
    options: ["1. Arrays and Methods", "2. Arrays and Objects", "3. Functions and Methods", "4. Functions and Objects"],
    answer: "2. Arrays and Objects",
  },
  {
    number: "Question 2",
    question: "What is a useful way of debugging with JavaScript?",
    options: ["1. Console.Log", "2. Inspect Element", "3. WAVE Element Tool", "4. CTRL - F"],
    answer: "1. Console.Log",
  },
  {
    number: "Question 3",
    question: "How do you call an object?",
    options: ["1. . selectors", "2. # selector", "3. variable.object", "4. querySelectors"],
    answer: "variable.object",
  },
  {
    number: "Question 4",
    question: "What is Event Bubbling?",
    options: ["1. When a child element affects its parent elements", "2. When a parent element affects its child elements", "3. When an event bubbles into another event", "4. When an event triggers another event"],
    answer: "1. When a child element affects its parent elements",
  },
  {
    number: "Question 5",
    question: "What is DOM?",
    options: ["1. Document Ordered Model", "2. Documented Objects Module", "3. Document Object Model", "4. Dorothy Oscar Madison"],
    answer: "3. Document Object Model",
  },
];

// how many questions the user has answered
var questionsIndex = 0;
var timerInterval;
// Timer
var secondsLeft = 80;
function timeStart() {
   timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";
    if (secondsLeft === 0) {
     gameOver()
    }
  }, 1000);
}

// function to start quiz
function startQuiz() {
  quizStart.setAttribute("style", "display:none;");
  questionnaire.setAttribute("style", "display:inline;");
  displayQuestion();
  timeStart();
}

//displays the question in relation to the questionIndex
function displayQuestion() {
  cardTitle.textContent = questions[questionsIndex].number;
  showQuestion.textContent = questions[questionsIndex].question;
  choiceButton1.textContent = questions[questionsIndex].options[0];
  choiceButton2.textContent = questions[questionsIndex].options[1];
  choiceButton3.textContent = questions[questionsIndex].options[2];
  choiceButton4.textContent = questions[questionsIndex].options[3];
}

// when an answer is pressed, move to the next question until the last card is displayed
function verifyAnswer(event) {
    if (event.target.textContent !== questions[questionsIndex].answer){
         secondsLeft -= 10; 
         timerEl.textContent = secondsLeft + " seconds left";
    }


  questionsIndex++;
  if (questionsIndex === questions.length){
    // when the last card is displayed move to signature screen
    gameOver()
  } else {
    displayQuestion();
  }
}

//I couldn't figure out how to display this text to the last card - but it appears in the console log
// I'd like to resubmit after I figure it out
function highScore(event){
    event.preventDefault();
    var userInitials = userSig.value; 
    localStorage.setItem (userInitials, secondsLeft);
    console.log(userInitials + " " + secondsLeft);
}
function gameOver(){
    clearInterval(timerInterval);
    signForm.setAttribute("style", "display: inline");
    questionnaire.setAttribute("style", "display: none");
}


start.addEventListener("click", startQuiz);
choiceButton1.addEventListener("click", verifyAnswer);
choiceButton2.addEventListener("click", verifyAnswer);
choiceButton3.addEventListener("click", verifyAnswer);
choiceButton4.addEventListener("click", verifyAnswer);
submitBtn.addEventListener("click", highScore);
