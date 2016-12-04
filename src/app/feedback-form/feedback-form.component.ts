import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  feedbackForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private af:AngularFire) {

  }

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      title: [ '', Validators.required ],
      text: [ '', Validators.required ],
      date: Date.now()
    })
  }

  submitFeedback(data) {
    data.vote = 0;
    this.af.database.list('/feedback').push(data);
    this.feedbackForm.reset();
  }

}