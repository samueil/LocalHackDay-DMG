import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  feedbackForm: FormGroup

  constructor(private formBuilder:FormBuilder) {

  }

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      email: [ '', Validators.required ],
      password: [ '', Validators.required ]
    })
  }

  submitFeedback(data) {
    console.log(data);
  }

}
