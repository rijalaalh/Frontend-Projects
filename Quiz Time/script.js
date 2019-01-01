
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-messege");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];
let currentQuestionIndex=0;
let score=0;
let answerDisabled=false;
totalQuestionsSpan.textContent=quizQuestions.length
maxScoreSpan.textContent=quizQuestions.length
const showQuestion=()=>{
    answerDisabled=false
    const currentQuestion=quizQuestions[currentQuestionIndex]
    currentQuestionSpan.textContent=`${currentQuestionIndex+1}`
    const progressPercent=(currentQuestionIndex/quizQuestions.length)*100;
    progressBar.style.width=progressPercent+"%"
    questionText.textContent=currentQuestion.question
    answersContainer.innerHTML=""
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button")
        button.textContent=answer.text
        button.classList.add("answer-btn")
        button.dataset.correct=answer.correct
        button.addEventListener("click",selectAnswer)
        answersContainer.appendChild(button)
    })
}
function showResults(){
       quizScreen.classList.remove("active")
    resultScreen.classList.add("active")
  const percentenge=(score/quizQuestions.length)*100

    if(percentenge===100){
        resultMessage.textContent="Perfecr You're a genuis"
    }else if(percentenge>=80){
        resultMessage.textContent="Great job! You konw your stuff!"

    }else if(percentenge>=60){
      resultMessage.textContent="Good effort! keep learning"
    }else if(percentenge>=40){
      resultMessage.textContent="Not bad! try again to improve"
    }else{
      resultMessage.textContent="Keep studing! You'll get better!";
    }
      finalScoreSpan.textContent=`${score}`
      maxScoreSpan.textContent=`${quizQuestions.length}`
}
function selectAnswer(e){
if(answerDisabled)return;
answerDisabled=true
const selectedButton=e.target
const isCorrect=selectedButton.dataset.correct==="true"
Array.from(answersContainer.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }else{
        button.classList.add("incorrect")
    }
})
if(isCorrect){
    score++
    scoreSpan.textContent=score
}
setTimeout(()=>{
    currentQuestionIndex++
    if(currentQuestionIndex<quizQuestions.length){
        showQuestion()
    }else{
        showResults()
    }
},1000)
}
const startQuiz=()=>{
    currentQuestionIndex=0;
    score=0;
    scoreSpan.textContent="0"
    startScreen.classList.remove("active")
    quizScreen.classList.add("active")
    showQuestion()
}
const restartQuiz=()=>{
resultScreen.classList.remove("active")
startScreen.classList.add("active")
}
startButton.addEventListener("click",startQuiz)
restartButton.addEventListener("click",restartQuiz)
