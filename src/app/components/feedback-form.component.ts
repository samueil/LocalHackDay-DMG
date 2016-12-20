import {Component, OnInit, AfterViewInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFire} from "angularfire2";
declare var $;

@Component({
  selector: 'feedback-form',
  templateUrl: '../templates/feedback-form.component.html'
})
export class FeedbackFormComponent implements OnInit, AfterViewInit {

  feedbackForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private af: AngularFire) {
  }

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    $(".chips-placeholder").material_chip({
      placeholder: 'Mehr Tags :)',
      secondaryPlaceholder: 'Tag + Enter',
    });
  }

  submitFeedback(data) {
    data.tags = this.getTags();
    data.vote = 0;
    data.date = {".sv": "timestamp"};

    this.af.database.list('/feedback').push(data);
    this.cleanForm();
  }

  cleanForm() {
    this.feedbackForm.reset();
    $(".chips-placeholder").material_chip({
      data: []
    });
  }

  getTags() {
    let tags = [];

    $(".chips > .chip").contents().filter(function () {
      return this.nodeType == 3;
    }).each(function () {
      tags.push($(this).text());
    });
    return tags;
  }
}
