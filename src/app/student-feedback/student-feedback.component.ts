import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Feedback {
  studentName: string;
  batchNo: number;
  feedback: string;
}





@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})


  
  
  
  
 
  export class StudentFeedbackComponent {

    
    feedbacks: Feedback[] = [];
  
    onSubmit(form: NgForm) {
      if (form.valid) {
        this.feedbacks.push({ ...form.value });
        form.reset();
      }
    }
  }  
  


