import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],  // Ensure this is here
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent {
  surveyForm: FormGroup;
  submitted = false;

  @Output() surveySubmitted = new EventEmitter<any>();  // Emit form data to parent

  constructor() {
    this.surveyForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required]),
      feedback: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.surveyForm.valid) {
      const formData = this.surveyForm.value;
      this.surveySubmitted.emit(formData);  // Emit form data to parent
    }
  }

  get f() { return this.surveyForm.controls; }
}
