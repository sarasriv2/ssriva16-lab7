import { Component } from '@angular/core';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyTableComponent } from './survey-table/survey-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SurveyFormComponent, SurveyTableComponent],  // Import both standalone components here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  surveyResponses: any[] = [];  // Store survey responses

  handleSurveySubmission(responses: any) {
    console.log('Survey submitted:', responses);  // Check if data is received
    this.surveyResponses = [...this.surveyResponses, responses];  // Update the responses array
  }  
}
