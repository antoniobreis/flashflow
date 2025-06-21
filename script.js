let currentCardIndex = 0
let isShowingQuestion = true

const flashCards = [
	{
		question: "O que é JavaScript?",
		answer: "JavaScript é uma linguagem de programação interpretada e orientada a objetos, usada principalmente para adicionar interatividade e dinamismo a páginas web."
	},
	{
		question: "O que são funções de callback em JavaScript?",
		answer: "São funções passadas como argumento para outra função, que serão executadas após um determinado evento ou operação."
	},
	{
		question: "O que é o this em JavaScript?",
		answer: "this se refere ao contexto de execução atual. Seu valor varia dependendo de como a função é chamada."
	},
	{
		question: "O que é hoisting em JavaScript?",
		answer: 'Hoisting é o comportamento em que declarações de variáveis e funções são "movidas" para o topo do escopo durante a fase de compilação. Isso faz com que seja possível usar uma função antes de sua definição no código.'
	},
	{
		question: "O que são tipos primitivos em JavaScript?",
		answer: "Os tipos primitivos em JavaScript são: String, Number, Boolean, Null, Undefined, BigInt e Symbol. Eles representam valores imutáveis e não são objetos."
	},
]


const cardElement = document.querySelector(".card")
const questionElement = document.querySelector(".question")
const statusElement = document.querySelector(".status-card")
const nextButton = document.getElementById("next-card")

function renderFlashCard() {
	const currentFlashCard = flashCards[currentCardIndex]

	questionElement.textContent = isShowingQuestion
		? currentFlashCard.question
		: currentFlashCard.answer

	cardElement.classList.toggle("showing-answer", !isShowingQuestion)

	statusElement.textContent = `Card ${currentCardIndex + 1} de ${flashCards.length}`
}


function handleCardClick() {
	isShowingQuestion = !isShowingQuestion
	renderFlashCard()
}

function handleNextCard(){
	currentCardIndex++

	if (currentCardIndex >= flashCards.length) {
		currentCardIndex = 0
	}

	isShowingQuestion = true
	renderFlashCard()
}

cardElement.addEventListener("click", handleCardClick)
nextButton.addEventListener("click", handleNextCard)

renderFlashCard()