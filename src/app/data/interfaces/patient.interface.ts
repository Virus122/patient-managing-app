import { Values } from "./values.interface";

export interface Address {
    address_street: string;
    address_number: string;
    address_city: string;
    address_postalcode: string;
  }
  
  export interface PatientBase {
    firstname: string;
    lastname: string;
    email: string;
    sex: string;
    address: Address;
  }
  
  export interface Patient extends PatientBase {
    patient_id: number;
    heart_rate: string;
    z_accel: string;
  }
  
  export interface CreatePatient extends PatientBase {
    facility_id: number;
    phonenumber: string;
    age: number;
    amka: string;
    ext_patient: boolean;
  }
  
  export interface PatientDetails extends Patient {
    patient_id: number;
    conditions: string[];
    phonenumber: string;
    age: number;
    facility: Facility;
    sys_blood_pressure: string,
    dia_blood_pressure: string,
    heart_rate: string
  }
  
  export interface Facility {
    facility_id: number;
    facility_name: string;
    facility_address: string;
  }

  export interface AllPatientsResponse {
    patients: PatientDetails[],
    numOfTotalPatients: number
  }
  