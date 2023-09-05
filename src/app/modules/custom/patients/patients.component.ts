import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/data/api/api.service';
import { PatientDetails } from 'src/app/data/interfaces/patient.interface';
import { PatientValues, Values } from 'src/app/data/interfaces/values.interface';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  values: Values = {
    heart_rate: [], // Initialize with empty arrays or with actual data
    bloodpressure: [],
    temperature: [],
    oxygen_saturation: []
  };

  private patientId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.patientId = +params['id']; 
      this.getUserData()
    });
  }

  private getUserData(): void {
    this.apiService.getPatientMeasurements(this.patientId, { detail: 'hour', lastvalues: 24})
      .subscribe((res: PatientValues) => {
        this.values = res
      })
  }

  getLastValue(fieldName: keyof Values): any {
    const fieldValues = this.values[fieldName];
    return fieldValues.length > 0 ? fieldValues[fieldValues.length - 1] : null;
  }

  getLastValuesArray(): { fieldName: string; lastValue: any }[] {
    const fieldNames: (keyof Values)[] = Object.keys(this.values) as any;
  
    return fieldNames.map(fieldName => ({
      fieldName,
      lastValue: this.getLastValue(fieldName)
    }));
  }

}
