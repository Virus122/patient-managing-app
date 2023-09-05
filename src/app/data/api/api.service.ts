import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AllPatientsResponse, CreatePatient, Patient, PatientDetails } from '../interfaces/patient.interface';
import { PatientValues, Values } from '../interfaces/values.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private patientUrl = environment.apiUrl.patients;
  private measurementsUrl = environment.apiUrl.realmeasurements;
  private accessToken?: string
  private headers?: HttpHeaders

  constructor(
    private httpClient: HttpClient
  ) { 
    this.constructHeaders()
  }

  public getAllPatients(): Observable<AllPatientsResponse> {
    let adminUrl = `${this.patientUrl}?user_id=18`
    const options = { headers: this.headers };
    return this.httpClient.get<AllPatientsResponse>(adminUrl, options)
  }

  public getPatientLastValues(patientId: number, options: RequestOptions): Observable<Values | PatientDetails> {
    const queryParams = this.buildQueryParams({patient_id: patientId, ...options})
    let patientUrl = `${this.patientUrl}?${queryParams}`
    
    return this.httpClient.get<Values | PatientDetails>(patientUrl, {headers: this.headers})
  }

  public getPatientMeasurements(patientId: number, options: RequestOptions): Observable<PatientValues> {
    const queryParams = this.buildQueryParams({patient_id: patientId, ...options})
    let measurementsUrl = `${this.measurementsUrl}?${queryParams}`
    return this.httpClient.get<PatientValues>(measurementsUrl, {headers: this.headers})
  }

  public createPatient(patientObject: CreatePatient) {
    return this.httpClient.post<CreatePatient>(this.patientUrl, patientObject)
  }

  private buildQueryParams(params: any): string {
    return Object.keys(params)
      .map(key => `${key}=${encodeURIComponent(params[key])}`)
      .join('&');
  }

  private constructHeaders(): void {
    this.getAccessToken()
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${this?.accessToken}`
    })
  }

  private getAccessToken(): void {
    this.accessToken = JSON.parse(localStorage.getItem('user') as string).access_token
  }
  
}

interface RequestOptions {
  detail?: 'hour' | 'second';
  lastvalues?: number;
}
