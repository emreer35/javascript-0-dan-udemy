const themeToggleBtn = document.querySelector(".theme-toggler")
const calculator = document.querySelector(".calculator")
const toggleIcon = document.querySelector(".toggler-icon")
let isDark = true
themeToggleBtn.addEventListener("click",() => {
  calculator.classList.toggle("dark")
  // console.log(calculator.classList)
  themeToggleBtn.classList.toggle("active")
  // console.log(themeToggleBtn.classList);
  isDark = !isDark
}) 


const conclusionInput = document.querySelector("#display")
// clear 
const clear = document.getElementById("clear")

const buttons = document.querySelector(".buttons")
// events
buttons.addEventListener("click",addNumber)
clear.addEventListener("click",clearAll)

function addNumber(e){
  console.log(e.target.textContent);
  const target = e.target.textContent
  if(target === "1" || target === "2" || target === "3" ||target === "4"||target === "5"||target === "6"||target === "7"||target === "8"||target === "9"||target === "0" || target === "-" ||target === "*"||target === "+"||target === "/"){
    conclusionInput.value += e.target.textContent
  }
  if(target === "="){
    Eval(conclusionInput)
  }
  
  

}
function clearAll(){
  conclusionInput.value = ""
}

