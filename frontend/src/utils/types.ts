export type DoctorType  = {
    doctorId ?: number,
    name:string,
    email:string,
    phoneNumber:number,
    clinicName:string,
    clinicAddress:string,
    clinicCity:string;
    clinicState:string,
    fees:number,
    services:string,
    qualification:string,
    specialization:string,
    doctorRegistrationNumber:string,
    doctorRegistrationYear:string
};

export type PatientType = {
    patientId ?: number,
    name: string;
    email: string;
    dob: Date;
    bloodGroup: string;
    phoneNumber: number;
    address: string;
    city: string;
    state: string;
    pincode: number;
    country: string;
    alergies?: string;
    pastMedicalHistory?: string;
    familyMedicalHistory?: string;
    ongoingMedication?: string;
  };

export type ContactUsFormType = {
    name: string;
    email: string;
    service: string;
    phoneNo: number | null;
    message: string
  } 

export type ChatType={
    text:string
  }