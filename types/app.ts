// src/types/app.ts (or types/app.ts — either works, but I'll put it in types/ at root)

export interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  startTime: Date;
  status: 'booked' | 'confirmed' | 'cancelled' | 'no-show';
  riskScore?: number;
  notes?: string;
}

export interface Business {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface RiskScoreResult {
  score: number;
  reason: string;
}