import { Component } from '@angular/core';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyTableComponent } from './survey-table/survey-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SurveyFormComponent, SurveyTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  surveyResponses: any[] = [];

  onSurveySubmitted(response: any) {
    this.surveyResponses.push(response);
  }
}