let questions = document.getElementsByClassName('question-and-answer');
let answers = document.getElementsByClassName('answer-container');
let pluses = document.getElementsByClassName('plus');
let minuses = document.getElementsByClassName('minus');

Object.keys(questions).forEach(key => {
    questions[key].addEventListener("click", ()=>{

        //Hiding answer if it is visible and clicked
        if(!(answers[key].classList.contains("not-visible"))) {
            answers[key].classList.add("not-visible")
            pluses[key].classList.remove("not-visible")
            minuses[key].classList.add("not-visible")
        }

        else {
            //Hiding all answers
            for(i = 0; i < questions.length; i ++) {
                answers[i].classList.add("not-visible")
                pluses[i].classList.remove("not-visible")
                minuses[i].classList.add("not-visible")
            }
            
            //Showing clicked answer
            answers[key].classList.remove("not-visible")
            pluses[key].classList.add("not-visible")
            minuses[key].classList.remove("not-visible")
            }
    })
})