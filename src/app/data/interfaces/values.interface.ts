export interface PatientValues extends Values {
    patient_id: number
  }

  export interface Values {
    heart_rate: HeartRate[]
    bloodpressure: Bloodpressure[]
    temperature: Temperature[]
    oxygen_saturation: OxygenSaturation[]
  }

  export interface lastValue {
    fieldName: string,
    lastValue: HeartRate | Bloodpressure | Temperature | OxygenSaturation
  }

  export interface OxygenSaturation {
    timestamp: string,
    patient_id: number,
    oxygen_saturation: string
  }
  
  export interface HeartRate {
    timestamp: string
    patient_id: number
    heart_rate: string
  }
  
  export interface Bloodpressure {
    timestamp: string
    patient_id: number
    sys_blood_pressure: string
    dia_blood_pressure: string
  }
  
  export interface Temperature {
    timestamp: string
    patient_id: number
    temperature: string
  }

  export interface snippetDetails {
    identifyingName: string
    value: number
    measurementUnit:string
    name: string
    iconClass?: string
  }

  
  