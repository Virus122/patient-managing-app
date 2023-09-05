import { Component, Input, OnInit } from '@angular/core';
import { Patient, PatientDetails } from 'src/app/data/interfaces/patient.interface';
import { snippetDetails } from 'src/app/data/interfaces/values.interface';

@Component({
  selector: 'app-patient-snippet',
  templateUrl: './patient-snippet.component.html',
  styleUrls: ['./patient-snippet.component.scss']
})
export class PatientSnippetComponent implements OnInit {
  @Input() patient?: PatientDetails
  public categories: snippetDetails[] = [
    { identifyingName: 'dia_blood_pressure', value: 0, name: 'dia blood pressure', iconClass: 'stethoscope',measurementUnit: 'mmHg' },
    { identifyingName: 'heart_rate', value: 0, name: 'heart rate', iconClass: 'heart', measurementUnit:'bpm'},
    { identifyingName: 'sys_blood_pressure', value: 0, name: 'sys blood pressure', iconClass: 'stethoscope', measurementUnit: 'mmHg'}
  ]

  constructor() { }

  ngOnInit(): void {
    this.initializeObject()
  }

  private initializeObject(): void {
    this.categories.forEach((category: snippetDetails) => {
      if (this.patient && category.identifyingName in this.patient) {
        category.value = (this.patient as any)[`${category.identifyingName}`]
      }
    });
  }

}
