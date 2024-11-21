import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent {
  surveyForm: FormGroup;
  @Output() surveySubmitted = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      feedback: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.surveyForm.valid) {
      this.surveySubmitted.emit(this.surveyForm.value);
      this.surveyForm.reset();
    }
  }

  get name() { return this.surveyForm.get('name'); }
  get email() { return this.surveyForm.get('email'); }
  get age() { return this.surveyForm.get('age'); }
  get feedback() { return this.surveyForm.get('feedback'); }
}