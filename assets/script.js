// TO DO LIST
// start the quiz

// Declare variables we are using
var start = document.querySelector("#startBtn");
var quizStart = document.querySelector("#startQuiz");
var questionnaire = document.querySelector("#testContent");
var cardTitle = document.querySelector("#questionNumber");
var showQuestion = document.querySelector("#theQuestion");
var showChoices = document.querySelector("#theChoices");
var checkAnswer = document.querySelector("#answerCheck");
var choiceButton1 = document.querySelector("#answerBtn1");
var choiceButton2 = document.querySelector("#answerBtn2");
var choiceButton3 = document.querySelector("#answerBtn3");
var choiceButton4 = document.querySelector("#answerBtn4");

// Question Cards
var question_one = "What is the answer to this question?";
var question_two = "What is the answer to this question?";
var question_three = "What is the answer to this question?";
var question_four = "What is the answer to this question?";
var question_five = "What is the answer to this question?";
var allQuestions = [question_one, question_two, question_three, question_four, question_five];

//Answer Key

//start the quiz - show question 1
start.addEventListener("click", function(){
    quizStart.setAttribute("style", "display:none;");
    questionnaire.setAttribute("style", "display:inline;");
    cardTitle.textContent = "Question 1";
    showQuestion.textContent = allQuestions[0];
});

// Buttons initialized
choiceButton1.addEventListener("click", function(event){
    console.log(event.target) 
})
choiceButton2.addEventListener("click", function(event){
    console.log(event.target) 
})
choiceButton3.addEventListener("click", function(event){
    console.log(event.target) 
})
choiceButton4.addEventListener("click", function(event){
    console.log(event.target) 
})

// Question 1
// Question 2
// Question 3
// Question 4
// Question 5