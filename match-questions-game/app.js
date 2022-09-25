const questionEl = document.getElementById("question")
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")
const infoTrueEl = document.getElementById("infoTrue")
const infoFalseEl = document.getElementById("infoFalse")

const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

let score = JSON.parse(localStorage.getItem("score")); 

questionEl.innerText = `${num1} ile ${num2} çarpımı kaçtır?`;

const correctAns = num1 * num2;


formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns) {
      score++
      updateLocalStroage()
    } else {
        score--
        updateLocalStroage()
    }
    
    
    if (correctAns === userAns) {
        infoTrueEl.innerText = "Doğru"
    }else {
        infoFalseEl.innerText = "Yanlış"
    }
   
});

function updateLocalStroage() {
    localStorage.setItem("score", JSON.stringify(score))
}

if (!score) {
    score = 0
}

scoreEl.innerText = `Score: ${score}`

