const questionSection = document.querySelector(".section-center")
const questionText = document.querySelector(".question-text")

// const buttons = document.querySelectorAll(".question-btn")

// buttons.forEach(btn =>{
//     // console.log(btn.classList);
//     btn.addEventListener("click",function(e){
//         // console.log(e.currentTarget);
//         let list = e.currentTarget.classList
//         console.log(list);
//         if(list.value === "question-btn"){
//             e.currentTarget.parentElement.parentElement.classList.toggle("show-text")
//         }
//     })
    
// })

const questions = document.querySelectorAll(".question")

questions.forEach(question =>{
    // console.log(question);
    const btn = question.querySelector(".question-btn")
    // console.log(btn);
    btn.addEventListener("click",function(){
        question.classList.toggle("show-text")
    })
})