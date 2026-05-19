let question_array = JSON.parse(localStorage.getItem("questions"));
console.log(question_array);
const main = document.getElementsByTagName("main")[0];
console.log(main);


let counter  = 0;
let grade = 0;
main.innerHTML += `
        <h2 class="mt-5">Quiz</h2>
        <h3>Question ${question_array[0].id}</h3>
        <div class="container add_question">
            <form>
                <div class="mb-3">
                    <p class="Question">Question: ${question_array[0].text}</p>
                </div>
                <div class="mb-3">
                    <label for="answer" class="form-label">Enter Answer</label>
                    <input id="student-answer" name="answer" type="text" class="form-control" placeholder="Answer">
                </div>
                    <div id="submit_button" class="m-auto d-block btn btn-success submit ">Submit Your Answer</div>
                <div class="buttons d-flex w-100 justify-content-between mt-3">
                    <button class="before-question btn btn-secondary cursor" role="button">
                    <i class="fa-solid fa-arrow-left"></i>
                        Previous Question
                    </button>
                    <button class="next-question btn btn-danger cursor" role="button">
                    Next Question
                    <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </form>
        </div>
    `;



const h3 = document.getElementsByTagName("h3")[0]
const p_question = document.getElementsByClassName("Question")[0]
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn")){
        console.log(e.target)
        e.preventDefault();
    }
})
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("submit")){
        question_array[counter].student_answer = document.getElementById("student-answer").value;
        console.log(question_array)
        
    }
})
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("next-question")){
        e.preventDefault() 
        counter++;
        if(counter==question_array.length){
            e.target.innerText = "Finish Quiz"
        }
        else{
            h3.innerText=`Question ${question_array[counter].id}`
            p_question.innerText = `Question: ${question_array[counter].text}`
        }
        
    }
})

// document.addEventListener("click",(e)=>{
//     if(e.target.classList.contains[])
// })
