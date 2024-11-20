import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-survey-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.scss']
})
export class SurveyTableComponent {
  @Input() surveyResponses: any[] = [];  // Array to hold survey responses passed from the parent
}
