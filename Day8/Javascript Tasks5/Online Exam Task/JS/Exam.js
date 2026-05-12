import { Question } from "./Question";
export class Exam {
    
    addQuestion(_id,_text,_correct_answer,_grade){
        let q = new Question(_id,_text,_correct_answer,_grade)
    }
}