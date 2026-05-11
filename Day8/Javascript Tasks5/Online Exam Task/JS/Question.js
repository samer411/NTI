export class Question{
    constructor(_id,_text,_correct_answer,_grade){
        this.id = _id;
        this.text = _text;
        this.correct_answer = _correct_answer;
        this.grade = _grade;
    }
    checkAnswers(ans){
        if(ans===this.correct_answer){
            return true;
        }
        else{
            return false;
        }
    }
}