import {Component, OnInit, AfterViewInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFire} from "angularfire2";
declare var $;

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit, AfterViewInit {

  feedbackForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private af: AngularFire) {

  }

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      date: Date.now()
    })
  }

  submitFeedback(data) {
    let tags = [];

    $('.chips > .chip').contents().filter(function () {
      return this.nodeType == 3;
    }).each(function () {
      tags.push($(this).text());
    });

    data.tags = tags;
    console.log(data);
    data.vote = 0;

    // Clean form
    this.af.database.list('/feedback').push(data);
    this.feedbackForm.reset();
    $('.chips-placeholder').material_chip({
      data: []
    });
  }


  ngAfterViewInit() {
    $('.chips-placeholder').material_chip({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
    });

  }


}
