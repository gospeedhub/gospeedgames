const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const restartButton = document.getElementById('restart-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex
let countRightAnswers = 0;


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
}
)

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  countRightAnswers = 0; 
  c = 60;
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  if (selectedButton.dataset = correct) {
    countRightAnswers++;
 }
  document.getElementById('score001').innerHTML = countRightAnswers;
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function timer001() {
  c = c - 1;
  if (c < 120) {
      time001.innerHTML = c;
  }
 
  if (c < 1) 
  {
    window.clearInterval(update);
    let buttons = document.getElementsByClassName("btn")

    for (let i = 0; i < buttons.length; i++) 
    {
       buttons[i].disabled = true
    }

    // this line below will replace the question with "Game Over!"
    document.getElementById("question").innerHTML = "Game Over!"
    
  }
}

update = setInterval('timer001()', 1000);


const questions = [
  {
    question: "What is 4 + 4?",
    answers: [
      { text: "4", correct: false },
      { text: "22", correct: false },
      { text: "8", correct: true},
      { text: "44", correct: false}
    ]
  },
  {
    question: "Who is the developer of this game?",
    answers: [
      { text: "Otis", correct: true },
      { text: "Jesus", correct: false },
      { text: "Mike", correct: false },
      { text: "Jason", correct: false }
    ]
  },
  {
    question: "Who betrayed Jesus?",
    answers: [
      { text: "Judas Iscarriot", correct: true },
      { text: "John", correct: false },
      { text: "Peter", correct: false },
      { text: "Isaac", correct: false }
    ]
  },
 {
    question: "Who denied Jesus?",
    answers: [
      { text: "Judas Iscarriot", correct: false },
      { text: "John", correct: false },
      { text: "Mike", correct: false },
      { text: "Peter", correct: true }
    ]
  },
 {
    question: "How many times did Peter denied Jesus?",
    answers: [
      { text: "Once", correct: false },
      { text: "Three times", correct: true },
      { text: "Four times", correct: false },
      { text: "Five times", correct: false }
    ]
  },
  {
    question: "Shortest verse in the bible (KJV)?",
    answers: [
      { text: "Esther 8:9", correct: false },
      { text: "John 11:35", correct: true },
      { text: "Genesis 1:1", correct: false },
      { text: "James 1:14", correct: false }
    ]
  },
  {
    question: "What is the last word in the Bible?",
    answers: [
      { text: "Christ", correct: false },
      { text: "Amen", correct: true },
      { text: "Jesus", correct: false },
      { text: "God", correct: false }
    ]
  },
  {
    question: "How many books are there in the Old Testament?",
    answers: [
      { text: "41", correct: false },
      { text: "51", correct: false },
      { text: "40", correct: false },
      { text: "39", correct: true }
    ]
  },
  {
    question: "Where was Jesus born?",
    answers: [
      { text: "Bethlehem", correct: true },
      { text: "Nazareth", correct: false },
      { text: "Samaria", correct: false },
      { text: "USA", correct: false }
    ]
  },
  {
    question: "How many books are there in the Bible?",
    answers: [
      { text: "73", correct: false },
      { text: "66", correct: true },
      { text: "71", correct: false },
      { text: "55", correct: false }
    ]
  },
  {
    question: "What is the oldest written book of the Bible?",
    answers: [
      { text: "Genesis", correct: false },
      { text: "Isaiah", correct: true },
      { text: "Mark", correct: false },
      { text: "James", correct: false }
    ]
  },
  {
    question: " What does Jesus other name Emmanuel mean?",
    answers: [
      { text: "Son of God", correct: false },
      { text: "He who is God", correct: false },
      { text: "Anointed One", correct: false },
      { text: "God is with us", correct: true }
    ]
  },
{
    question: "With what did Mary wrap newborn Jesus?",
    answers: [
      { text: "A scarf", correct: false },
      { text: "A blanket", correct: false },
      { text: "Joseph cape", correct: false },
      { text: "Swaddling", correct: true }
    ]
  },
  {
    question: "Who wrote the first five books of the Bible",
    answers: [
      { text: "Moses", correct: true },
      { text: "Simon Peter", correct: false },
      { text: "David", correct: false },
      { text: "Adam", correct: false }
    ]
  },
{
    question: "Who wrote the book of Ecclesiastes?",
    answers: [
      { text: "Ecclesia", correct: false },
      { text: "Jeremiah", correct: false },
      { text: "Solomon", correct: true },
      { text: "Andrew", correct: false }
    ]
  },
{
    question: "How many books of the Bible did Timothy write?",
    answers: [
      { text: "One", correct: false },
      { text: "Two", correct: false },
      { text: "None", correct: true },
      { text: "Four", correct: false }
    ]
  },
{
    question: "Who wrote the most books in the New Testament?",
    answers: [
      { text: "Thomas", correct: false },
      { text: "Luke", correct: false },
      { text: "John", correct: false },
      { text: "Paul", correct: true }
    ]
  },
{
    question: "Who wrote the book of Lamentations?",
    answers: [
      { text: "Nehemiah", correct: false },
      { text: "David", correct: false },
      { text: "Jeremiah", correct: true },
      { text: "Solomon", correct: false }
    ]
  },
{
    question: "Who wrote the book of Acts?",
    answers: [
      { text: "Luke", correct: true },
      { text: "Paul", correct: false },
      { text: "John", correct: false },
      { text: "Matthew", correct: false }
    ]
  },
{
    question: "What is the longest book in the Bible?",
    answers: [
      { text: "Genesis", correct: false },
      { text: "Psalms", correct: true },
      { text: "Revelation", correct: false },
      { text: "Isaiah", correct: false }
    ]
  },
{
    question: "What is the shortest book in the Bible?",
    answers: [
      { text: "Jude", correct: false },
      { text: "3rd John", correct: true },
      { text: "1st Peter", correct: false },
      { text: "Genesis", correct: false }
    ]
  },
{
    question: "In what book of the Bible will you find the Ten Commandments?",
    answers: [
      { text: "Numbers", correct: false },
      { text: "Luke", correct: false },
      { text: "Genesis", correct: false },
      { text: "Exodus", correct: true }
    ]
  },
{
    question: "What did God use to write on the stone tables?",
    answers: [
      { text: "Flowing water", correct: false },
      { text: "Luke", correct: false },
      { text: "A rock", correct: false },
      { text: "A finger", correct: true }
    ]
  },
{
    question: "How long was Moses gone from the people as He talked to God on the mountain and received the ten commandment?",
    answers: [
      { text: "14 days", correct: false },
      { text: "40 days", correct: true },
      { text: "7 days ", correct: false },
      { text: "3 months", correct: false }
    ]
  },
{
    question: "What caused Moses to break the tablets on which the 10 Commandments were written?",
    answers: [
      { text: "Aaron lied to him", correct: false },
      { text: "His people were worshiping an idol", correct: true },
      { text: "God told him to as the people were full of sin",correct: false },
      { text: "Joshua sinned against God", correct: false }
    ]
  },
{
    question: "In what were the ten commandments kept?",
    answers: [
      { text: "Ark", correct: true },
      { text: " Stone ", correct: false },
      { text: "Altar", correct: false },
      { text: "Pillar", correct: false }
    ]
  },
{
    question: "The wise men traveled ___________ to Jerusalem",
    answers: [
      { text: "Northward", correct: false },
      { text: "Eastward", correct: false },
      { text: "Westward", correct: true },
      { text: "Southward", correct: false }
    ]
  },
{
    question: "Why did King Herod want to learn more about Jesus whereabouts?",
    answers: [
      { text: "He had a gift for Jesus", correct: false },
      { text: "He wanted Jesus to heal him", correct: false },
      { text: "He wanted to kill Jesus", correct: true },
      { text: "He wanted to ask Jesus to be the heir to his throne", correct: false }
    ]
  },
{
    question: "What guided the wise men to find Jesus?",
    answers: [
      { text: "Their dreams", correct: false },
      { text: "A dove", correct: false },
      { text: "An angel", correct: false },
      { text: "A star", correct: true }
    ]
  },
{
    question: "What gift did the wise men NOT give Jesus?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Silver", correct: true },
      { text: "Frankincense", correct: false },
      { text: "Myrrh", correct: false }
    ]
  },
{
    question: "Who was the mother of Jesus?",
    answers: [
      { text: "Mary", correct: true },
      { text: "Bathsheba", correct: false },
      { text: "Miriam", correct: false },
      { text: "Martha", correct: false }
    ]
  },
{
    question: "Who was the mother of Cain and Abel?",
    answers: [
      { text: "Ruth", correct: false },
      { text: "Delilah", correct: false },
      { text: "Eve", correct: true },
      { text: "Hagar", correct: false }
    ]
  },
{
    question: "Who was the mother of John the Baptist",
    answers: [
      { text: "Deborah", correct: false },
      { text: "Elizabeth", correct: true },
      { text: "Mary Magdalene", correct: false },
      { text: "Martha", correct: false }
    ]
  },
{
    question: "Who was the mother of Isaac?",
    answers: [
      { text: "Esther", correct: false },
      { text: "Sarah", correct: true },
      { text: "Mary", correct: false },
      { text: "Gomer", correct: false }
    ]
  },
{
    question: "Who was the mother of Jacob and Esau",
    answers: [
      { text: "Rachel", correct: false },
      { text: "Hannah", correct: false },
      { text: "Rebekah", correct: true },
      { text: "Sarah", correct: false }
    ]
  },
{
    question: "Who was the mother of Joseph and Benjamin?",
    answers: [
      { text: "Rachel", correct: true },
      { text: "Lydia", correct: false },
      { text: "Anna", correct: false },
      { text: "Mary", correct: false }
    ]
  },
{
    question: "Who was the mother of King Solomon?",
    answers: [
      { text: "Juliet", correct: false },
      { text: "Jezebel", correct: false },
      { text: "Bathsheba", correct: true },
      { text: "Bilhah", correct: false }
    ]
  },
{
    question: "Who was the mother of Ishmael?",
    answers: [
      { text: "Leah", correct: false },
      { text: "Hagar", correct: true },
      { text: "Rachel", correct: false },
      { text: "Rebekah", correct: false }
    ]
  },
{
    question: "Who was the mother of Samuel?",
    answers: [
      { text: "Joyce", correct: false },
      { text: "Deborah", correct: false },
      { text: "Eve", correct: false },
      { text: "Hannah", correct: true }
    ]
  },
  {
    question: "This man had eight sons, one of whom became king of Israel.",
    answers: [
      { text: "Jehoshaphat", correct: false },
      { text: "Jesse", correct: true },
      { text: "Joseph", correct: false },
      { text: "Jeremiah", correct: false }
    ]
  },
{
    question: "Which king of Judah was eight years old when he began to reign?",
    answers: [
      { text: "Jehoash", correct: false },
      { text: "Jehoshaphat", correct: false },
      { text: "Joram", correct: false },
      { text: "Josiah", correct: true }
    ]
  },
{
    question: "Who was the man that Peter healed in Lydda, who was paralyzed and had been bedridden for eight years?",
    answers: [
      { text: "Ananais", correct: false },
      { text: "John", correct: false },
      { text: "Phinehas", correct: false },
      { text: "Aeneas", correct: true }
    ]
  },
{
    question: "Who was the mother-in-law of Ruth?",
    answers: [
      { text: "Juliet", correct: false },
      { text: "Naomi", correct: true },
      { text: "Regina", correct: false },
      { text: "Bridget", correct: false }
    ]
  },
{
    question: "When Jesus died, which of the following things did NOT happen?",
    answers: [
      { text: "there was an earthquake", correct: false },
      { text: "there was a flood that covered the earth", correct: true },
      { text: "the veil of the temple was torn", correct: false },
      { text: "the dead came to life", correct: false }
    ]
  },
{
    question: "What was placed in front of the door of the tomb to close it?",
    answers: [
      { text: "A Stone", correct: true },
      { text: "A Wall", correct: false },
      { text: "A Blanket", correct: false },
      { text: "A Wood", correct: false }
    ]
  },
  {
    question: "How many pairs of each clean animal did Noah take on the ark?",
    answers: [
      { text: "Two pairs", correct: false },
      { text: "Seven pairs", correct: true },
      { text: "One pairs", correct: false },
      { text: "Three pairs", correct: false }
    ]
  },
{
    question: "How old was Noah when the flood began?",
    answers: [
      { text: "600 years", correct: true },
      { text: "80 years", correct: false },
      { text: "120 years", correct: false },
      { text: "200 years", correct: false }
    ]
  },
{
    question: "How many people rode on the ark?",
    answers: [
      { text: "Sixteen people", correct: false },
      { text: "Two people", correct: false },
      { text: "Eight people", correct: true },
      { text: "Four people", correct: false }
    ]
  },
{
    question: "Where did the Noah’s ark come to rest after the flood?",
    answers: [
      { text: "The Mount of Olives ", correct: false },
      { text: "The Mountains of Ararat", correct: true },
      { text: "Mount Zion", correct: false },
      { text: "Mount Sinai", correct: false }
    ]
  },
{
    question: "How long did Noah stay on the ark before the Lord told him it was time to get out?",
    answers: [
      { text: "Over one year", correct: true },
      { text: "150 days", correct: false },
      { text: "40 days and nights", correct: false },
      { text: "7 days", correct: false }
    ]
  },
{
    question: "Which animal did Noah send out to see if the land was dry?",
    answers: [
      { text: "An Eagle", correct: false },
      { text: "A Lamb", correct: false },
      { text: "A Dove ", correct: true },
      { text: "An Owl", correct: false }
    ]
  },
{
    question: "God made a covenant with Noah and his sons to never again send a flood to destroy the earth. What was the sign of this covenant?",
    answers: [
      { text: "A dove", correct: false },
      { text: "A cloud", correct: false },
      { text: "A rainbow", correct: true },
      { text: "A star", correct: false }
    ]
  },
{
    question: "How old was Noah when he died?",
    answers: [
      { text: "950 years", correct: true },
      { text: "Over 1000 years", correct: false },
      { text: "850 years", correct: false },
      { text: "650 years", correct: false }
    ]
  },
{
    question: "On what day was Jesus resurrection?",
    answers: [
      { text: "the fourteenth day", correct: false },
      { text: "the third day", correct: true },
      { text: "the same day as his crucifixion", correct: false },
      { text: "the tenth day", correct: false }
    ]
  },
{
    question: "What was found in the tomb?",
    answers: [
      { text: "Another Person", correct: false },
      { text: "A vase full of water", correct: false },
      { text: "Jesus burial clothes", correct: true },
      { text: "Nothing", correct: false }
    ]
  },
{
    question: "Who did Mary Magdalene think Jesus was when she first saw Him after He had risen?",
    answers: [
      { text: "One of the Twelve Apostles", correct: false },
      { text: "Pontius Pilate", correct: false },
      { text: "A shepherd ", correct: false },
      { text: "The gardener", correct: true }
    ]
  },
{
    question: "Which of the Twelve Apostles did not believe that Jesus was risen?",
    answers: [
      { text: "Thomas", correct: true },
      { text: "Simon Peter", correct: false },
      { text: "John", correct: false },
      { text: "Andrew", correct: false }
    ]
  },
  {
    question: "What is the only book of the Bible that does not contain the word God?",
    answers: [
      { text: "Esther", correct: true },
      { text: "Ruth", correct: false },
      { text: "Song of Solomon", correct: false},
      { text: "Mark", correct: false}
    ]
  }
]
