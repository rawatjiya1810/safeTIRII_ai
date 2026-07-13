/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'hi' | 'ta' | 'ml' | 'te' | 'kn' | 'bn' | 'mr' | 'gu';

export type NavigationTab = 'home' | 'check' | 'coach' | 'guide' | 'complaints' | 'about' | 'contact' | 'services';

export interface VehicleCheckRequest {
  vehicleType: string;
  batteryBrand: string;
  batteryModel: string;
  bluetoothEnabled: boolean;
  passwordEnabled: boolean;
  firmwareUpdated: boolean;
  location: string;
}

export interface VehicleCheckResponse {
  securityScore: number; // 0 to 100
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  aiRiskExplanation: string;
  potentialVulnerabilities: string[];
  whyAiGeneratedThis: string;
  confidenceLevel: number; // percentage (e.g. 95)
  governmentSafetyAdvisory: string;
  personalizedActionPlan: string[];
  batteryHealthPercentage?: number; // state of health percentage (e.g. 88)
}

export interface Complaint {
  id: string;
  name: string;
  phone: string;
  vehicleNumber: string;
  location: string;
  description: string;
  category: 'bluetooth_attack' | 'battery_tampering' | 'cyber_fraud' | 'suspicious_activity' | 'battery_malfunction';
  status: 'Submitted' | 'Under Review' | 'Resolved';
  createdAt: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  phone?: string;
  vehicleNumber?: string;
  batteryBrand?: string;
  createdAt: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export interface TranslationSet {
  // Navigation
  navHome: string;
  navCheck: string;
  navCoach: string;
  navGuide: string;
  navComplaints: string;
  navAbout: string;
  navContact: string;

  // General Text
  heroTitle: string;
  heroSub: string;
  btnCheck: string;
  btnTalk: string;
  whyTitle: string;
  whySub: string;
  impactProtected: string;
  impactChecks: string;
  impactComplaints: string;
  impactLanguages: string;

  // AI Cyber Health Scan
  checkTitle: string;
  checkSub: string;
  formVehicle: string;
  formBrand: string;
  formModel: string;
  formBluetooth: string;
  formPassword: string;
  formFirmware: string;
  formLocation: string;
  btnAnalyze: string;
  analyzingText: string;

  // Safety Coach
  coachTitle: string;
  coachSub: string;
  coachWelcome: string;
  coachPlaceholder: string;
}
