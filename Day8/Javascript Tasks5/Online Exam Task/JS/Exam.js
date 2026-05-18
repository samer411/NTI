import { Question } from "./Question.js";
export class Exam {
    constructor(){
        this.questions = []
    }
    addQuestion(_id,_text,_correct_answer,_grade){
        return new Question(_id,_text,_correct_answer,_grade)
    }
}

let my_exam = new Exam();
let counter = 1;
const submit_button = document.getElementById("submit_button")
const h2_element = document.getElementsByTagName("h2")[0]
const h3_counter = document.getElementsByTagName("h3")[0]
const form = document.getElementsByTagName("form")[0]
const main = document.getElementsByTagName("main")[0]
console.log(main)
// start making the card that will redirect you to the quiz page

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    counter++;
    h3_counter.innerText=`Question ${counter}`;
    const form_data = new FormData(e.target)
    let q_id = form_data.get("id");
    let q_text = form_data.get("text");
    let q_correct_answer = form_data.get("correct_answer");
    let q_grade = form_data.get("grade");
    my_exam.questions.push(my_exam.addQuestion(q_id,q_text,q_correct_answer,q_grade))
    console.log(my_exam)
    form.reset()
    if(counter>5){       
        main.innerHTML=
        `<div class="card w-25 p-2">
            <img class="card-img-top" src="../Assets/marija-zaric-RwPAKdZ_6rc-unsplash.jpg" alt="">
            <h5 class="card-title mt-2">Let's Start The Quiz!</h5>
            <a class="btn btn-danger mt-2" href="../Pages/quiz.html">Start Quiz</a>
        </div>
        `
        window.localStorage.setItem("questions",JSON.stringify(my_exam.questions))
        console.log(JSON.parse(localStorage.getItem("questions")))
    }
})