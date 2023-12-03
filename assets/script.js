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
var answer_one = document.querySelector("#answer_one");
var answer_two = document.querySelector("#answer_two");
var answer_three = document.querySelector("#answer_three");
var answer_four = document.querySelector("#answer_four");

// Question Cards
var question_one = "What is the answer to this question?";
var question_two = "What is the answer to this question?";
var question_three = "What is the answer to this question?";
var question_four = "What is the answer to this question?";
var question_five = "What is the answer to this question?";
var allQuestions = [question_one, question_two, question_three, question_four, question_five];

//Answer Key
var qcOne = {
    A: true,
    B: false, 
    C: false, 
    D: false
}

choiceOne = qcOne.A

//start the quiz - show question 1
start.addEventListener("click", function(){
    quizStart.setAttribute("style", "display:none;");
    questionnaire.setAttribute("style", "display:inline;");
    cardTitle.textContent = "Question 1";
    showChoices.textContent = "A.) This is the answer. B.) This is incorrect. C.) This is incorrect D.) This is incorrect";
    showQuestion.textContent = allQuestions[0];
});

// Question 1
answerBtn.addEventListener("click", function(){
    if (choiceOne === true ) {
        checkAnswer.textContent = "Correct!"
    } else{
        checkAnswer.textContent = "Incorrect!"
    }    
})

// Question 2

// Question 3
// Question 4
// Question 5