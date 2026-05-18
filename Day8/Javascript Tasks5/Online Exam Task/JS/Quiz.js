let question_array = JSON.parse(localStorage.getItem("questions"));
console.log(question_array);
const main = document.getElementsByTagName("main")[0];
console.log(main);

for (let q of question_array) {
  console.log(q);
  main.innerHTML = `
        <h2>Quiz</h2>
        <h3>Question ${q.id}</h3>
        <div class="container add_question">
            <form>
                <div class="mb-3">
                    <p class="Question">${q.text}</p>
                </div>
                <div class="mb-3">
                    <label for="answer" class="form-label">Enter Answer</label>
                    <input name="answer" type="text" class="form-control" placeholder="Question Correct Answer">
                </div>

            </form>
        </div>

    `;
}
