export interface Appointment {
  id: string;
  clientName: string;
  startTime: Date;
  status: 'booked' | 'confirmed' | 'cancelled' | 'no-show';
  riskScore?: number;
}

export interface Business {
  id: string;
  name: string;
  email: string;
}