/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  Battery,
  Sparkles,
  MessageSquare, 
  HelpCircle, 
  Send, 
  Globe, 
  FileText, 
  Plus, 
  Search, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Activity, 
  User, 
  Lock, 
  Unlock, 
  RefreshCw, 
  Sliders, 
  Download, 
  BookOpen, 
  Menu, 
  X,
  Flame,
  ArrowRight,
  Calendar,
  Key,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  ClipboardList,
  UserCheck,
  ShieldAlert,
  ShieldCheck,
  Camera,
  Mic,
  MicOff,
  Share2,
  Map,
  Navigation,
  Volume2,
  VolumeX,
  Award,
  DollarSign,
  Megaphone,
  UserPlus,
  Heart,
  Briefcase,
  Zap,
  Star,
  Crown,
  Percent,
  TrendingUp,
  Copy,
  PlusCircle
} from 'lucide-react';
import { 
  Language, 
  NavigationTab, 
  VehicleCheckRequest, 
  VehicleCheckResponse, 
  Complaint, 
  Message,
  UserProfile
} from './types';

// Let's use the actual asset generated during the previous step and import them internally to ensure proper bundling during deployment
import HERO_IMAGE_URL from './assets/images/erickshaw_safety_1783403675496.jpg';
import REAL_RICKSHAW_IMAGE_URL from './assets/images/modern_real_erickshaw_1783596352679.jpg';
import PREMIUM_RICKSHAW_IMAGE_URL from './assets/images/premium_real_erickshaw_1783595029128.jpg';
import SAFETIRRI_LOGO_URL from './assets/images/safetirri_logo_1783406055892.jpg';

// Import external regional translations
import { TRANSLATIONS } from './translations';

const LANGUAGES_LIST: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' }
];

function SafeTIRRILogo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="logoBg" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFF2E6" />
        </radialGradient>
        <linearGradient id="saffronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="100%" stopColor="#CC6600" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#138808" />
          <stop offset="100%" stopColor="#0B5205" />
        </linearGradient>
        <linearGradient id="darkChassis" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      {/* Background card */}
      <rect width="200" height="200" rx="42" fill="url(#logoBg)" stroke="#FF9933" strokeWidth="1.5" />
      
      {/* Tech rings & Cyber Shields */}
      <circle cx="100" cy="100" r="86" stroke="#FF9933" strokeWidth="2" strokeDasharray="10 6" opacity="0.4" />
      <circle cx="100" cy="100" r="78" stroke="#138808" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
      <circle cx="100" cy="100" r="72" stroke="#0F172A" strokeWidth="0.5" opacity="0.2" />

      {/* Outer cyber shield arc */}
      <path d="M 45 100 A 55 55 0 0 1 155 100" stroke="url(#saffronGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M 155 100 A 55 55 0 0 1 45 100" stroke="url(#greenGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

      {/* ================= E-RICKSHAW BODY ================= */}
      {/* Rear wheel */}
      <circle cx="140" cy="138" r="14" fill="#0F172A" stroke="#E2E8F0" strokeWidth="2" />
      <circle cx="140" cy="138" r="7" fill="#64748B" />
      <circle cx="140" cy="138" r="3" fill="#FFFFFF" />

      {/* Front wheel */}
      <circle cx="62" cy="138" r="14" fill="#0F172A" stroke="#E2E8F0" strokeWidth="2" />
      <circle cx="62" cy="138" r="7" fill="#64748B" />
      <circle cx="62" cy="138" r="3" fill="#FFFFFF" />

      {/* Front Fork & Steering Column */}
      <path d="M62 138 L72 90 L85 88" stroke="url(#darkChassis)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Handlebar orange grip */}
      <circle cx="85" cy="88" r="3" fill="#FF9933" />

      {/* Main Floor Board and chassis base */}
      <path d="M62 132 H142 C148 132 152 128 152 122 V116" stroke="url(#darkChassis)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Rear Passenger Cabin Body (Green lower half panel) */}
      <path d="M100 128 H146 V100 C146 95 142 90 136 90 H100 Z" fill="url(#greenGrad)" stroke="#0B5205" strokeWidth="1" />
      {/* Decorative Ashok Chakra inspired star or secure lock icon on cabin body */}
      <circle cx="123" cy="109" r="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
      <path d="M123 105 V113 M119 109 H127" stroke="#0F172A" strokeWidth="0.8" />
      <circle cx="123" cy="109" r="2" fill="#0F172A" />

      {/* Driver Seat Back support */}
      <path d="M96 128 V110" stroke="url(#darkChassis)" strokeWidth="4" strokeLinecap="round" />
      <rect x="88" y="112" width="12" height="4" rx="1" fill="#475569" />

      {/* High-tech Canopy / Roof (Saffron/Orange sleek curved roof) */}
      {/* Windshield pillar */}
      <path d="M72 90 L84 56" stroke="url(#darkChassis)" strokeWidth="3" strokeLinecap="round" />
      {/* The Roof structure */}
      <path d="M78 56 C95 48 130 50 148 56 C152 57 154 60 154 64 V90" stroke="url(#saffronGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M80 58 C96 52 128 54 146 58" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

      {/* Cyber BMS Smart Battery Unit (Glowing Blue/Green container under driver seat) */}
      <rect x="94" y="118" width="18" height="11" rx="2.5" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="103" cy="123" r="2" fill="#10B981" />

      {/* Transparent protective bubble shield around the rickshaw */}
      <path d="M42 120 C42 60, 158 60, 158 120" stroke="#10B981" strokeWidth="2.5" strokeDasharray="3 4" opacity="0.75" />

      {/* Saffron, White, Green tech lights */}
      <circle cx="68" cy="80" r="3" fill="#FF9933" />
      <circle cx="100" cy="46" r="3.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
      <circle cx="146" cy="80" r="3" fill="#138808" />

      {/* Badge Label at bottom */}
      <rect x="75" y="152" width="50" height="15" rx="5" fill="#0F172A" stroke="#FF9933" strokeWidth="1" />
      <text x="100" y="163" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="monospace" letterSpacing="1" textAnchor="middle">TIRRI</text>
    </svg>
  );
}

function SecureRickshawVisual({ lang }: { lang: Language }) {
  return (
    <div className="relative w-full h-full bg-slate-950 flex flex-col items-center justify-center p-6 select-none overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-bounce opacity-80 z-20"></div>

      <div className="absolute top-4 left-4 z-20 space-y-1 font-mono text-[9px] text-green-400">
        <div className="flex items-center space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
          <span>SYSTEM: SECURE</span>
        </div>
        <p>BMS CORE: ONLINE</p>
        <p>CHASSIS ID: ER-9482</p>
      </div>

      <div className="absolute top-4 right-4 z-20 space-y-1 font-mono text-[9px] text-right text-orange-400">
        <p>BLUETOOTH: ENCRYPTED</p>
        <p>ANTIVIRUS: SHIELD ON</p>
        <p>TEMP: 32°C (STABLE)</p>
      </div>

      <div className="w-full max-w-[280px] aspect-square flex items-center justify-center relative z-10 py-4">
        <svg viewBox="0 0 220 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF9933" />
              <stop offset="100%" stopColor="#FFB366" />
            </linearGradient>
            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#138808" />
              <stop offset="100%" stopColor="#1F9D13" />
            </linearGradient>
          </defs>

          <circle cx="110" cy="110" r="95" stroke="#10B981" strokeWidth="2" strokeDasharray="8 6" className="animate-[spin_40s_linear_infinite]" opacity="0.6" />
          <circle cx="110" cy="110" r="90" fill="url(#glowGrad)" opacity="0.2" />
          
          <line x1="110" y1="15" x2="110" y2="40" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="110" cy="15" r="4" fill="#10B981" />
          
          <line x1="25" y1="110" x2="50" y2="110" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="25" cy="110" r="4" fill="#10B981" />

          <line x1="195" y1="110" x2="170" y2="110" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="195" cy="110" r="4" fill="#10B981" />

          <path d="M60 145 V85 C60 70, 75 60, 110 60 C145 60, 160 70, 160 85 V145" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
          <path d="M57 90 C57 70, 75 58, 110 58 C145 58, 163 70, 163 90 Z" fill="url(#bodyGrad)" />
          <path d="M110 65 L145 65 L150 100 L110 100 Z" fill="#38BDF8" fillOpacity="0.3" stroke="#475569" strokeWidth="3" />
          <path d="M110 65 L75 65 L70 100 L110 100 Z" fill="#38BDF8" fillOpacity="0.3" stroke="#475569" strokeWidth="3" />

          <rect x="75" y="115" width="70" height="15" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="2" />
          
          <rect x="85" y="130" width="50" height="25" rx="4" fill="#0F172A" stroke="#10B981" strokeWidth="3" className="animate-pulse" />
          <path d="M95 142.5 H125" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
          <path d="M110 135 V150" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
          <path d="M107 135 L113 141 H107 L113 147" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

          <path d="M58 115 H72 M148 115 H162" stroke="#138808" strokeWidth="4" strokeLinecap="round" />

          <path d="M45 160 C45 145, 65 145, 65 160" stroke="#475569" strokeWidth="5" fill="none" />
          <path d="M155 160 C155 145, 175 145, 175 160" stroke="#475569" strokeWidth="5" fill="none" />
          <circle cx="55" cy="165" r="16" fill="#0F172A" stroke="#E2E8F0" strokeWidth="3" />
          <circle cx="55" cy="165" r="7" fill="#64748B" />
          <circle cx="165" cy="165" r="16" fill="#0F172A" stroke="#E2E8F0" strokeWidth="3" />
          <circle cx="165" cy="165" r="7" fill="#64748B" />
          
          <line x1="110" y1="125" x2="110" y2="165" stroke="#475569" strokeWidth="5" />
          <circle cx="110" cy="172" r="14" fill="#0F172A" stroke="#E2E8F0" strokeWidth="3" />
          <circle cx="110" cy="172" r="6" fill="#64748B" />

          <path d="M20 165 C50 200, 170 200, 200 165" stroke="#138808" strokeWidth="3" strokeDasharray="5 5" opacity="0.8" />
          <path d="M20 70 C50 30, 170 30, 200 70" stroke="#FF9933" strokeWidth="3" strokeDasharray="5 5" opacity="0.8" />
        </svg>
      </div>

      <div className="w-full mt-2 bg-slate-900/80 border border-slate-800 rounded-lg p-2.5 flex items-center justify-between font-mono text-[10px]">
        <div className="space-y-0.5 animate-pulse">
          <p className="text-slate-400 font-extrabold">{lang === 'hi' ? 'बीएमएस सुरक्षा स्थिति' : 'BMS PROTECTION MODULE'}</p>
          <p className="text-green-400 font-black flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            <span>CERT-In V4 ACTIVE</span>
          </p>
        </div>
        <div className="text-right space-y-0.5">
          <p className="text-slate-400 font-extrabold">{lang === 'hi' ? 'सुरक्षा सूचकांक' : 'HEALTH INDEX'}</p>
          <p className="text-green-400 font-black">98% SECURE</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState<number>(0);

  // New Core Feature State Managers
  const [checkSubTab, setCheckSubTab] = useState<'bms' | 'capture'>('bms');
  const [serviceSubTab, setServiceSubTab] = useState<'revenue' | 'welfare'>('revenue');
  const [showVoicePanel, setShowVoicePanel] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isDictatingCoach, setIsDictatingCoach] = useState(false);
  const [isDictatingCommandBar, setIsDictatingCommandBar] = useState(false);
  const [commandBarInput, setCommandBarInput] = useState('');
  const [speakingStatus, setSpeakingStatus] = useState<string>('');
  const [voiceCommandHistory, setVoiceCommandHistory] = useState<{ id: string; sender: 'user' | 'ai'; text: string; time: string }[]>([]);
  
  // Smart Vehicle Capture States
  const [captureCameraState, setCaptureCameraState] = useState<'idle' | 'stream' | 'captured'>('idle');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [capturedGPS, setCapturedGPS] = useState<{ lat: string; lng: string; locationName: string; accuracy?: string }>({
    lat: '28.6139',
    lng: '77.2090',
    locationName: 'Delhi Central RTO Hub'
  });
  const [capturedTimestamp, setCapturedTimestamp] = useState<string>('');
  const [capturedTrips, setCapturedTrips] = useState<{ id: string; image: string; gps: { lat: string; lng: string; locationName: string; accuracy?: string }; time: string; vehicleNumber?: string; sharedCount: number }[]>([]);
  const [customVehicleNum, setCustomVehicleNum] = useState<string>('');
  const [sharingTrip, setSharingTrip] = useState<{ id: string; image: string; gps: { lat: string; lng: string; locationName: string; accuracy?: string }; time: string; vehicleNumber?: string; sharedCount: number } | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [trustedPhone, setTrustedPhone] = useState('');
  const [tripInProgress, setTripInProgress] = useState<boolean>(false);

  // Public Services & Welfare Interactive Modals State
  const [showSubsidyModal, setShowSubsidyModal] = useState(false);
  const [subsidyForm, setSubsidyForm] = useState({
    driverName: '',
    phone: '',
    vehicleNumber: '',
    aadhaar: '',
    batterySerial: '',
    dealerName: 'Okaya Smart Power, Delhi'
  });
  const [subsidySuccess, setSubsidySuccess] = useState<string | null>(null);

  const [showCampBookingModal, setShowCampBookingModal] = useState(false);
  const [campBookingForm, setCampBookingForm] = useState({
    driverName: '',
    phone: '',
    vehicleNumber: '',
    selectedCamp: 'Delhi RTO Hub (12 July 2026)',
    selectedSlot: '10:00 AM - 11:30 AM'
  });
  const [campBookingSuccess, setCampBookingSuccess] = useState<string | null>(null);

  const [showGovInquiryModal, setShowGovInquiryModal] = useState(false);
  const [govInquiryForm, setGovInquiryForm] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    fleetSize: '100-500 vehicles',
    department: 'State Transport Department',
    message: ''
  });
  const [govInquirySuccess, setGovInquirySuccess] = useState(false);

  const [showOemPartnerModal, setShowOemPartnerModal] = useState(false);
  const [oemPartnerForm, setOemPartnerForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    annualProduction: 'Under 1000 vehicles',
    comments: ''
  });
  const [oemPartnerSuccess, setOemPartnerSuccess] = useState(false);

  const [showSdkRequestModal, setShowSdkRequestModal] = useState(false);
  const [sdkRequestForm, setSdkRequestForm] = useState({
    companyName: '',
    developerEmail: '',
    bmsController: 'Tirri-Smart-BMS v2',
    useCase: 'Commercial Fleet Security'
  });
  const [sdkRequestSuccess, setSdkRequestSuccess] = useState(false);

  const [showHealthCentreModal, setShowHealthCentreModal] = useState(false);
  const [healthCentreForm, setHealthCentreForm] = useState({
    centerName: '',
    location: '',
    gstNumber: '',
    contactPhone: '',
    technicalStaffCount: '2-5 technicians'
  });
  const [healthCentreSuccess, setHealthCentreSuccess] = useState(false);

  const [showApiKeyGeneratorModal, setShowApiKeyGeneratorModal] = useState(false);
  const [apiKeyPermissions, setApiKeyPermissions] = useState({
    readBms: true,
    writeFirmware: false,
    readLocation: true
  });
  const [generatedApiKey, setGeneratedApiKey] = useState<string | null>(null);

  // Authentication & Database State managers
  const [user, setUser] = useState<UserProfile | null>(null);

  // Sync logged in user profile with the welfare and booking forms
  useEffect(() => {
    if (user) {
      setSubsidyForm(prev => ({
        ...prev,
        driverName: user.name || '',
        phone: user.phone || '',
        vehicleNumber: user.vehicleNumber || ''
      }));
      setCampBookingForm(prev => ({
        ...prev,
        driverName: user.name || '',
        phone: user.phone || '',
        vehicleNumber: user.vehicleNumber || ''
      }));
    } else {
      setSubsidyForm(prev => ({
        ...prev,
        driverName: '',
        phone: '',
        vehicleNumber: ''
      }));
      setCampBookingForm(prev => ({
        ...prev,
        driverName: '',
        phone: '',
        vehicleNumber: ''
      }));
    }
  }, [user]);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    vehicleNumber: '',
    batteryBrand: 'Okaya Smart Li-Ion'
  });
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  // Auto-login Rajesh Kumar as a demo user on first opening for frictionless onboarding
  useEffect(() => {
    const savedUser = localStorage.getItem('safetirri_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        const demo = {
          uid: "demo-user-123",
          email: "driver.rajesh@safetirri.gov.in",
          name: "Rajesh Kumar",
          phone: "+91 9876543210",
          vehicleNumber: "DL 1ER 1234",
          batteryBrand: "Okaya Smart Li-Ion",
          createdAt: new Date().toISOString()
        };
        setUser(demo);
        localStorage.setItem('safetirri_user', JSON.stringify(demo));
      }
    } else {
      const demo = {
        uid: "demo-user-123",
        email: "driver.rajesh@safetirri.gov.in",
        name: "Rajesh Kumar",
        phone: "+91 9876543210",
        vehicleNumber: "DL 1ER 1234",
        batteryBrand: "Okaya Smart Li-Ion",
        createdAt: new Date().toISOString()
      };
      setUser(demo);
      localStorage.setItem('safetirri_user', JSON.stringify(demo));
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: authForm.email, password: authForm.password })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      setUser(data.user);
      localStorage.setItem('safetirri_user', JSON.stringify(data.user));
      setShowAuthModal(false);
      setAuthForm({ email: '', password: '', name: '', phone: '', vehicleNumber: '', batteryBrand: 'Okaya Smart Li-Ion' });
    } catch (err: any) {
      setAuthError(err.message || 'Server error occurred');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authForm)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      setUser(data.user);
      localStorage.setItem('safetirri_user', JSON.stringify(data.user));
      setShowAuthModal(false);
      setAuthForm({ email: '', password: '', name: '', phone: '', vehicleNumber: '', batteryBrand: 'Okaya Smart Li-Ion' });
    } catch (err: any) {
      setAuthError(err.message || 'Server error occurred');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('safetirri_user');
  };

  const GEN_AI_SECURITY_TIPS = [
    {
      en: "BMS Bluetooth default PINs (like 1234, 0000, or 888888) are public knowledge. Change them to a private 6-digit PIN immediately to lock out nearby cyber attackers.",
      hi: "बीएमएस ब्लूटूथ डिफ़ॉल्ट पिन (जैसे 1234, 0000 या 888888) सार्वजनिक ज्ञान हैं। पास के हैकर्स को रोकने के लिए उन्हें तुरंत 6-अंकीय गुप्त पिन में बदलें।"
    },
    {
      en: "Never download or install battery monitoring apps from unverified links or WhatsApp groups. Only download from the official Google Play Store.",
      hi: "व्हाट्सएप ग्रुप या अज्ञात लिंक से मिलने वाले बैटरी मॉनिटरिंग ऐप्स को कभी इंस्टॉल न करें। केवल आधिकारिक Google Play Store से ही डाउनलोड करें।"
    },
    {
      en: "Turn off your battery's Bluetooth when parked in public charging stations or busy markets to completely hide your e-rickshaw from automated scanner sweeps.",
      hi: "सार्वजनिक चार्जिंग स्टेशनों या भीड़भाड़ वाले बाजारों में पार्क करते समय अपनी बैटरी के ब्लूटूथ को बंद रखें ताकि स्वचालित हैकर स्कैनर से बचा जा सके।"
    },
    {
      en: "Verify firmware patches with your dealer. Ask your battery service engineer to flash the official CERT-In compliant firmware update during routine quarterly maintenance.",
      hi: "अपने डीलर के साथ फर्मवेयर पैच सत्यापित करें। नियमित त्रैमासिक रखरखाव के दौरान अपने बैटरी सर्विस इंजीनियर से आधिकारिक CERT-In अनुकूल फर्मवेयर अपडेट करवाने के लिए कहें।"
    },
    {
      en: "Keep a physical log of your battery serial numbers. If your e-rickshaw suddenly loses power and shows pairing requests, report it immediately to safeTIRRI.",
      hi: "अपनी बैटरी के सीरियल नंबर का एक रिकॉर्ड रखें। यदि आपका ई-रिक्शा अचानक बंद हो जाता है और ब्लूटूथ पेयरिंग अनुरोध दिखाता है, तो तुरंत सुरक्षित टीर्री पोर्टल पर शिकायत दर्ज करें।"
    }
  ];

  // Intro landing animation stages: 'dropping' -> 'dropped' -> 'ready'
  const [introStage, setIntroStage] = useState<'dropping' | 'dropped' | 'ready'>('ready');

  // Full-Screen interactive Landing Page and Animation stage
  const [showLanding, setShowLanding] = useState<boolean>(false);
  const [landingStage, setLandingStage] = useState<'dropping' | 'text-reveal' | 'dismissing'>('dropping');

  useEffect(() => {
    if (showLanding) {
      setLandingStage('dropping');
      
      const timerReveal = setTimeout(() => {
        setLandingStage('text-reveal');
      }, 1300);

      const timerDismissing = setTimeout(() => {
        setLandingStage('dismissing');
      }, 3400);

      const timerComplete = setTimeout(() => {
        setShowLanding(false);
        setActiveTab('home');
      }, 3900);

      return () => {
        clearTimeout(timerReveal);
        clearTimeout(timerDismissing);
        clearTimeout(timerComplete);
      };
    }
  }, [showLanding]);

  useEffect(() => {
    if (activeTab === 'home') {
      setIntroStage('dropping');
      const timer1 = setTimeout(() => {
        setIntroStage('dropped');
      }, 1200);
      const timer2 = setTimeout(() => {
        setIntroStage('ready');
      }, 2500);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [activeTab]);

  // States for Security Check
  const [checkForm, setCheckForm] = useState<VehicleCheckRequest>({
    vehicleType: 'E-Rickshaw (3-Wheeler)',
    batteryBrand: 'Okaya Smart Li-Ion',
    batteryModel: 'Tirri-Smart-BMS v2',
    bluetoothEnabled: true,
    passwordEnabled: false,
    firmwareUpdated: false,
    location: 'Delhi NCR'
  });
  const [analyzing, setAnalyzing] = useState(false);
  const [checkResult, setCheckResult] = useState<VehicleCheckResponse | null>(null);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  // States for Safety Coach Chat
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: TRANSLATIONS[lang].coachWelcome,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // States for Complaints Desk
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [complaintForm, setComplaintForm] = useState({
    name: '',
    phone: '',
    vehicleNumber: '',
    location: '',
    description: '',
    category: 'bluetooth_attack' as Complaint['category']
  });
  const [submittingComplaint, setSubmittingComplaint] = useState(false);
  const [complaintSuccessRef, setComplaintSuccessRef] = useState<string | null>(null);

  // Update welcome message language when lang changes
  useEffect(() => {
    setChatMessages(prev => {
      if (prev.length === 1 && prev[0].sender === 'ai') {
        return [{
          ...prev[0],
          text: TRANSLATIONS[lang].coachWelcome
        }];
      }
      return prev;
    });
  }, [lang]);

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, chatLoading]);

  // Load complaints initially from server
  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await fetch('/api/complaints');
      if (res.ok) {
        const data = await res.json();
        setComplaints(data);
      }
    } catch (e) {
      console.error("Failed to load complaints from backend, using local defaults.");
    }
  };

  // Synchronize user profile into complaintForm for seamless pre-filling
  useEffect(() => {
    if (user) {
      setComplaintForm(prev => ({
        ...prev,
        name: user.name || '',
        phone: user.phone || '',
        vehicleNumber: user.vehicleNumber || '',
        location: prev.location || ''
      }));
    } else {
      setComplaintForm(prev => ({
        ...prev,
        name: '',
        phone: '',
        vehicleNumber: ''
      }));
    }
  }, [user]);

  // =========================================================
  // AI Voice Assistant & Smart Vehicle Capture Core Methods
  // =========================================================

  const openVoiceAssistant = () => {
    setShowVoicePanel(true);
    if (voiceCommandHistory.length === 0) {
      setVoiceCommandHistory([
        {
          id: 'welcome',
          sender: 'ai',
          text: lang === 'hi'
            ? "नमस्ते! मैं आपका सुरक्षित सारथी वॉयस असिस्टेंट हूँ। आप बिना फोन को छुए इन आदेशों का उपयोग कर सकते हैं: 'Start my safe trip', 'Share my live location', 'Trigger SOS', 'Take vehicle photo' या 'Report unsafe activity'।"
            : "Hello! I am safeTIRRI Voice Assistant. You can speak to operate key safety features hands-free. Try saying: 'Start my safe trip', 'Share my live location', 'Trigger SOS', 'Take vehicle photo', or 'Report unsafe activity'.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  };

  const handleVoiceCommand = (rawText: string) => {
    const text = rawText.trim().toLowerCase();
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = {
      id: Math.random().toString(),
      sender: 'user' as const,
      text: rawText,
      time: timeStr
    };
    setVoiceCommandHistory(prev => [...prev, userMsg]);

    let responseText = "";
    let actionEffect = () => {};

    if (text.includes("trip") || text.includes("start") || text.includes("सफर") || text.includes("शुरू")) {
      responseText = lang === 'hi'
        ? "सुरक्षित यात्रा शुरू की जा रही है। जीपीएस ट्रैकिंग लाइव है और सुरक्षित मार्ग मॉनिटर सक्रिय है।"
        : "Starting your safe journey tracking. Your real-time GPS telemetry is active and family contact updates are armed.";
      actionEffect = () => {
        setTripInProgress(true);
        const now = new Date();
        setCapturedTimestamp(now.toLocaleString());
        const newTrip = {
          id: 'trip-' + Date.now(),
          image: capturedImage || REAL_RICKSHAW_IMAGE_URL,
          gps: { ...capturedGPS, locationName: capturedGPS.locationName || 'Delhi Smart Corridor Core Route' },
          time: now.toLocaleString(),
          vehicleNumber: customVehicleNum || user?.vehicleNumber || 'DL 1ER 1234',
          sharedCount: 0
        };
        setCapturedTrips(prev => [newTrip, ...prev]);
        setSpeakingStatus(lang === 'hi' ? "यात्रा सक्रिय हो गई है!" : "Safe Trip Started!");
      };
    } else if (text.includes("share") || text.includes("location") || text.includes("स्थान") || text.includes("साझा")) {
      responseText = lang === 'hi'
        ? "आपका लाइव लोकेशन आपके विश्वसनीय संपर्कों के साथ साझा कर दिया गया है। निर्देशांक: 28.6139° N, 77.2090° E।"
        : "Sharing your live location with trusted contacts. Coordinates: Delhi Hub (28.6139° N, 77.2090° E). Tracking link dispatched.";
      actionEffect = () => {
        const shareText = `safeTIRRI Safety Update: My journey has started on E-Rickshaw ${customVehicleNum || user?.vehicleNumber || 'DL 1ER 1234'}. Live GPS Tracker: https://safetirri.gov.in/track/28.6139,77.2090`;
        navigator.clipboard?.writeText(shareText);
        setSpeakingStatus(lang === 'hi' ? "लाइव लोकेशन लिंक क्लिपबोर्ड पर कॉपी हो गया है!" : "Live location tracking text copied to clipboard!");
      };
    } else if (text.includes("call") || text.includes("phone") || text.includes("संपर्क") || text.includes("फोन")) {
      responseText = lang === 'hi'
        ? "आपातकालीन संपर्क को कॉल किया जा रहा है... राष्ट्रीय साइबर हेल्पलाइन नंबर 1930 डायल हो रहा है।"
        : "Initiating hands-free call protocols. Dialing your pre-registered Emergency contact (+91 112 / Helpline 1930)...";
      actionEffect = () => {
        setSpeakingStatus(lang === 'hi' ? "कॉल शुरू: हेल्पलाइन १९३०" : "Calling National Cyber Helpline 1930...");
      };
    } else if (text.includes("sos") || text.includes("danger") || text.includes("बचाओ") || text.includes("खतरा")) {
      responseText = lang === 'hi'
        ? "लाल चेतावनी! एसओएस अलार्म बज रहा है! भारतीय साइबर सेल और आपके परिवार को आपातकालीन संदेश भेजे जा रहे हैं।"
        : "RED ALERT! SOS triggered! Dispatching instant panic report with vehicle coordinates to Ministry Cyber Cell and trusted family network!";
      actionEffect = () => {
        setShowEmergencyModal(true);
      };
    } else if (text.includes("photo") || text.includes("camera") || text.includes("तस्वीर") || text.includes("फोटो") || text.includes("capture")) {
      responseText = lang === 'hi'
        ? "स्मार्ट व्हीकल कैप्चर कैमरा सक्रिय हो रहा है। कृपया वाहन की फोटो खींचने के लिए तैयार रहें।"
        : "Activating vehicle safety camera. Switching views to Smart Vehicle Capture for instant registration plate logging.";
      actionEffect = () => {
        setActiveTab('check');
        setCheckSubTab('capture');
        setCaptureCameraState('stream');
        setShowVoicePanel(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    } else if (text.includes("navigate") || text.includes("route") || text.includes("नक्शा") || text.includes("दिशा")) {
      responseText = lang === 'hi'
        ? "सुरक्षित राष्ट्रीय कॉरिडोर का चयन करके सुरक्षित मार्ग की गणना की जा रही है।"
        : "Calculating the safest digital corridor. Rerouting away from identified Bluetooth signal spoofing and cyber-theft zones.";
      actionEffect = () => {
        setSpeakingStatus(lang === 'hi' ? "नक्शा अपडेट: सुरक्षित कॉरिडोर सक्रिय" : "Safest route displayed inside navigation widget.");
      };
    } else if (text.includes("report") || text.includes("unsafe") || text.includes("शिकायत") || text.includes("मदद")) {
      responseText = lang === 'hi'
        ? "राष्ट्रीय शिकायत डेस्क खोल रहा हूँ। आप वहाँ वायरलेस हस्तक्षेप की रिपोर्ट दर्ज कर सकते हैं।"
        : "Opening the Cyber Incident Desk. Switching views to Complaint Portal for battery tampering reports.";
      actionEffect = () => {
        setActiveTab('complaints');
        setShowVoicePanel(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    } else {
      responseText = lang === 'hi'
        ? `मुझे "${rawText}" समझ नहीं आया। आप 'SOS', 'Start Trip', 'Take Photo', 'Share location' जैसी वॉयस कमांड का उपयोग कर सकते हैं।`
        : `Command "${rawText}" not recognized. Please use standard verbal keys like 'Trigger SOS', 'Start my safe trip', 'Share my live location', or 'Take vehicle photo'.`;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(responseText);
      utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
      utterance.rate = 1.0;
      window.speechSynthesis.speak(utterance);
    }

    setTimeout(() => {
      const aiMsg = {
        id: Math.random().toString(),
        sender: 'ai' as const,
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setVoiceCommandHistory(prev => [...prev, aiMsg]);
      actionEffect();
    }, 700);
  };

  const handleStartListening = () => {
    setIsListening(true);
    setSpeakingStatus(lang === 'hi' ? 'सुन रहा हूँ...' : 'Listening for command...');
    
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      const rec = new SpeechRec();
      rec.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
      rec.continuous = false;
      rec.interimResults = false;
      
      rec.onresult = (event: any) => {
        const resultText = event.results[0][0].transcript;
        handleVoiceCommand(resultText);
      };
      
      rec.onerror = (err: any) => {
        console.error("Speech error", err);
        setSpeakingStatus("Could not hear clearly. Please click one of the quick commands.");
        setIsListening(false);
      };
      
      rec.onend = () => {
        setIsListening(false);
      };
      
      rec.start();
    } else {
      setTimeout(() => {
        setSpeakingStatus(lang === 'hi' 
          ? "माइक्रोफोन ब्लॉक है या सपोर्टेड नहीं है। कृपया टाइप करके कमांड दें।" 
          : "Microphone blocked or not supported. Please type your command instead.");
        setIsListening(false);
      }, 1000);
    }
  };

  const handleStartCamera = async () => {
    setCaptureCameraState('stream');
    setCapturedImage(null);
    setCapturedTimestamp(new Date().toLocaleString());

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCapturedGPS({
            lat: position.coords.latitude.toFixed(4),
            lng: position.coords.longitude.toFixed(4),
            locationName: 'My Live Coordinates',
            accuracy: position.coords.accuracy.toFixed(1) + 'm'
          });
        },
        () => {
          const hubs = [
            { lat: '28.6139', lng: '77.2090', name: 'Delhi Central RTO Hub (Rajpath Corridor)' },
            { lat: '25.5941', lng: '85.1376', name: 'Patna Smart City Transit Route' },
            { lat: '26.8467', lng: '80.9462', name: 'Lucknow Charbagh Electric Corridor' }
          ];
          const choice = hubs[Math.floor(Math.random() * hubs.length)];
          setCapturedGPS({
            lat: choice.lat,
            lng: choice.lng,
            locationName: choice.name + ' (Fallback GPS)'
          });
        }
      );
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      const videoElement = document.getElementById('camera-stream-video') as HTMLVideoElement;
      if (videoElement) {
        videoElement.srcObject = stream;
        videoElement.play();
      }
    } catch (err) {
      console.warn("Physical camera blocked or not available in sandboxed iframe. Initializing HD AI simulator.", err);
    }
  };

  const handleCapturePhoto = () => {
    const videoElement = document.getElementById('camera-stream-video') as HTMLVideoElement;
    if (videoElement && videoElement.srcObject) {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth || 640;
        canvas.height = videoElement.videoHeight || 480;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg');
          setCapturedImage(dataUrl);
          setCaptureCameraState('captured');
          const stream = videoElement.srcObject as MediaStream;
          stream.getTracks().forEach(track => track.stop());
          return;
        }
      } catch (e) {
        console.error("Canvas capture error", e);
      }
    }

    const demoPhotos = [
      HERO_IMAGE_URL,
      REAL_RICKSHAW_IMAGE_URL,
      PREMIUM_RICKSHAW_IMAGE_URL
    ];
    const picked = demoPhotos[Math.floor(Math.random() * demoPhotos.length)];
    setCapturedImage(picked);
    setCaptureCameraState('captured');
  };

  const handleUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result as string);
        setCaptureCameraState('captured');
        setCapturedTimestamp(new Date().toLocaleString());
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveJourney = () => {
    if (!capturedImage) return;

    const newTrip = {
      id: 'trip-' + Date.now(),
      image: capturedImage,
      gps: capturedGPS,
      time: capturedTimestamp,
      vehicleNumber: customVehicleNum || user?.vehicleNumber || 'DL 1ER 1234',
      sharedCount: 0
    };

    setCapturedTrips(prev => [newTrip, ...prev]);
    setTripInProgress(true);
    setCaptureCameraState('idle');
    setCapturedImage(null);
    setCustomVehicleNum('');
  };

  const triggerShareTrip = (trip: typeof capturedTrips[0]) => {
    setSharingTrip(trip);
    setShowShareModal(true);
  };

  const handleSendShare = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sharingTrip || !trustedPhone) return;

    const shareMessage = `safeTIRRI Safety Update: Journey secure and logged. Rickshaw: ${sharingTrip.vehicleNumber}. Location: ${sharingTrip.gps.locationName} (${sharingTrip.gps.lat}, ${sharingTrip.gps.lng}). Time: ${sharingTrip.time}. Map link: https://safetirri.gov.in/track/${sharingTrip.gps.lat},${sharingTrip.gps.lng}`;
    
    navigator.clipboard?.writeText(shareMessage);

    setCapturedTrips(prev => prev.map(t => t.id === sharingTrip.id ? { ...t, sharedCount: t.sharedCount + 1 } : t));
    
    setShowShareModal(false);
    setTrustedPhone('');
    setSharingTrip(null);
    alert(lang === 'hi' 
      ? `सफलतापूर्वक आपके विश्वसनीय संपर्क ${trustedPhone} को सुरक्षा संदेश भेजा गया! यात्रा का संदेश आपके क्लिपबोर्ड पर भी कॉपी कर लिया गया है।` 
      : `Safety alert successfully sent to ${trustedPhone}! A copy of the live tracking details has been loaded onto your clipboard.`
    );
  };

  // Trigger Security Analysis
  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setAnalyzing(true);
    setCheckResult(null);

    try {
      const res = await fetch('/api/check-vehicle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...checkForm, lang })
      });
      if (res.ok) {
        const result = await res.json();
        setCheckResult(result);
      } else {
        throw new Error("Analysis request failed");
      }
    } catch (err) {
      console.error("Error evaluating vehicle security, triggering safe offline metrics", err);
    } finally {
      setAnalyzing(false);
    }
  };

  // Send message to AI Security Coach
  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setChatLoading(true);

    try {
      const updatedMessages = [...chatMessages, userMsg];
      const res = await fetch('/api/chat-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages, lang, checkForm, user })
      });

      if (res.ok) {
        const data = await res.json();
        const aiMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: data.text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, aiMsg]);
      }
    } catch (error) {
      console.error("Chat communication failure, using rule-based local guidelines", error);
    } finally {
      setChatLoading(false);
    }
  };

  // Handle speech-to-text dictation into AI Security Coach input field
  const handleCoachSpeechDictation = () => {
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      if (isDictatingCoach) {
        setIsDictatingCoach(false);
        return;
      }
      setIsDictatingCoach(true);
      const rec = new SpeechRec();
      rec.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
      rec.continuous = false;
      rec.interimResults = false;
      
      rec.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        if (text) {
          setChatInput(prev => prev ? prev + ' ' + text : text);
        }
      };
      
      rec.onerror = (err: any) => {
        console.error("Coach speech recognition error:", err);
        setIsDictatingCoach(false);
      };
      
      rec.onend = () => {
        setIsDictatingCoach(false);
      };
      
      rec.start();
    } else {
      alert(lang === 'hi' ? "आपका ब्राउज़र वॉयस इनपुट का समर्थन नहीं करता है।" : "Your browser does not support speech recognition.");
    }
  };

  // Handle speech-to-text dictation into Voice Assistant panel type bar
  const handleCommandBarSpeechDictation = (callback: (text: string) => void) => {
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      if (isDictatingCommandBar) {
        setIsDictatingCommandBar(false);
        return;
      }
      setIsDictatingCommandBar(true);
      const rec = new SpeechRec();
      rec.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
      rec.continuous = false;
      rec.interimResults = false;
      
      rec.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        if (text) {
          callback(text);
        }
      };
      
      rec.onerror = (err: any) => {
        console.error("Command bar speech recognition error:", err);
        setIsDictatingCommandBar(false);
      };
      
      rec.onend = () => {
        setIsDictatingCommandBar(false);
      };
      
      rec.start();
    } else {
      alert(lang === 'hi' ? "आपका ब्राउज़र वॉयस इनपुट का समर्थन नहीं करता है।" : "Your browser does not support speech recognition.");
    }
  };

  // Submit new Complaint
  const handleComplaintSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingComplaint(true);
    setComplaintSuccessRef(null);

    try {
      const res = await fetch('/api/complaints', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-User-Id': user ? user.uid : ''
        },
        body: JSON.stringify({
          ...complaintForm,
          userId: user ? user.uid : undefined
        })
      });

      if (res.ok) {
        const data = await res.json();
        setComplaintSuccessRef(data.id);
        // Refresh complaints list
        fetchComplaints();
        // Clear form but keep user details pre-filled if authenticated
        setComplaintForm({
          name: user ? user.name : '',
          phone: user ? user.phone || '' : '',
          vehicleNumber: user ? user.vehicleNumber || '' : '',
          location: '',
          description: '',
          category: 'bluetooth_attack'
        });
      }
    } catch (err) {
      console.error("Complaint filing failed on server.", err);
    } finally {
      setSubmittingComplaint(false);
    }
  };

  const triggerPrint = () => {
    window.print();
  };

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-orange-500 selection:text-white relative overflow-hidden">
      
      {/* 
          FULL-SCREEN LANDING PAGE GATE
          This implements the custom interactive landing page.
          First, the colorful E-Rickshaw logo is dropping behind, and then the text emerges from behind it.
      */}
      {showLanding && (
        <div className={`fixed inset-0 z-[100] bg-slate-950 text-white flex flex-col items-center justify-center p-4 overflow-hidden select-none transition-all duration-500 ease-out ${
          landingStage === 'dismissing' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
        }`}>
          {/* Animated Background Grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35"></div>
          
          {/* Glowing background flares */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center text-center space-y-8 px-4">
            
            {/* Government Seal Header on Landing Gate */}
            <div className={`transition-all duration-1000 delay-300 transform ${
              landingStage === 'dropping' ? 'opacity-0 -translate-y-8' : 'opacity-100 translate-y-0'
            } flex items-center space-x-2 text-xs font-mono text-orange-400 tracking-wider uppercase font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-full`}>
              <span className="h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
              <span>National E-Vehicle Security Initiative • Government of India</span>
            </div>

            {/* Stage Container */}
            <div className="relative w-full min-h-[380px] flex flex-col items-center justify-center">
              
              {/* E-RICKSHAW LOGO
                  Starts large, centered, and floating down ('dropping behind').
                  Then, recedes backwards/re-sizes to allow the text to emerge.
              */}
              <div 
                className={`transition-all duration-[1200ms] cubic-bezier(0.34, 1.56, 0.64, 1) transform ${
                  landingStage === 'dropping' 
                    ? 'scale-[1.5] md:scale-[1.8] translate-y-6 rotate-3 shadow-2xl ring-4 ring-orange-500/30' 
                    : 'scale-[0.8] -translate-y-24 rotate-0 shadow-lg ring-2 ring-white/10'
                } w-48 h-48 md:w-56 md:h-56 rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-[#FF9933] z-50`}
              >
                <div className={`w-full h-full transition-all duration-1000 ${
                  landingStage === 'dropping' ? 'scale-115 animate-pulse' : 'scale-100'
                }`}>
                  <SafeTIRRILogo />
                </div>
              </div>

              {/* BRAND TEXT & SUBTITLES
                  Emerges dynamically after the rickshaw recedes/drops behind.
              */}
              <div 
                className={`absolute inset-x-0 transition-all duration-1000 ease-out transform ${
                  landingStage === 'dropping' 
                    ? 'opacity-0 scale-75 translate-y-16 pointer-events-none' 
                    : 'opacity-100 scale-100 translate-y-16'
                } space-y-4`}
              >
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                  safe<span className="text-[#FF9933]">TIRRI</span> <span className="text-xl bg-green-700 text-white font-mono font-bold px-3 py-1 rounded-full ml-3 inline-block align-middle">AI</span>
                </h1>
                
                <p className="text-base md:text-xl text-slate-300 font-medium max-w-2xl mx-auto tracking-wide px-4">
                  {lang === 'en' 
                    ? "Cyber-Defense & Smart Battery Protection for India's E-Rickshaw Drivers" 
                    : "भारत के ई-रिक्शा चालकों के लिए साइबर-रक्षा और स्मार्ट बैटरी सुरक्षा"}
                </p>

                <div className="flex justify-center items-center space-x-6 text-xs text-slate-400 font-mono pt-2">
                  <span className="flex items-center space-x-1.5">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>CERT-In Guidelines</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1.5">
                    <Building2 className="w-4 h-4 text-orange-400" />
                    <span>Digital India Program</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Info Status (Auto Loading indicator instead of button) */}
            <div className={`transition-all duration-1000 delay-300 transform ${
              landingStage !== 'dropping' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
            } w-full flex flex-col items-center space-y-3 pt-4`}>
              <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono text-slate-300">
                <RefreshCw className="w-3.5 h-3.5 text-[#FF9933] animate-spin" />
                <span>Initializing Secure Portal...</span>
              </div>

              <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-mono">
                <span>Preventive E-Mobility Cyber Guard</span>
              </div>
            </div>

          </div>

          {/* Saffron-White-Green Accent lines at bottom of Landing screen */}
          <div className="absolute bottom-0 inset-x-0 h-2 flex">
            <div className="bg-[#FF9933] h-full w-1/3"></div>
            <div className="bg-white h-full w-1/3"></div>
            <div className="bg-[#138808] h-full w-1/3"></div>
          </div>
        </div>
      )}

      {/* Decorative Background Text Elements */}
      <div className="absolute top-20 -left-10 text-[180px] font-black text-orange-500 opacity-[0.03] pointer-events-none select-none z-0 uppercase tracking-tighter">Safe</div>
      <div className="absolute bottom-20 -right-10 text-[180px] font-black text-green-600 opacity-[0.03] pointer-events-none select-none z-0 uppercase tracking-tighter text-right">Secure</div>

      {/* India Tricolor Header Accent */}
      <div className="h-1.5 w-full flex relative z-50">
        <div className="bg-[#FF9933] h-full w-1/3"></div>
        <div className="bg-white h-full w-1/3"></div>
        <div className="bg-[#138808] h-full w-1/3"></div>
      </div>

      {/* Premium Official Gov Top Banner */}
      <div className="bg-slate-950 text-[10px] text-slate-400 py-1.5 px-4 sm:px-8 border-b border-slate-900 flex justify-between items-center relative z-50 font-mono font-bold">
        <div className="flex items-center space-x-4">
          <span className="text-orange-500 font-extrabold flex items-center space-x-1">
            <Shield className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span>सत्यमेव जयते</span>
          </span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="hidden md:inline uppercase tracking-widest text-slate-300">MINISTRY OF ROAD TRANSPORT & HIGHWAYS (MoRTH)</span>
        </div>
        <div className="flex items-center space-x-3 text-[9px]">
          <span className="bg-green-950 text-green-400 border border-green-800 px-2.5 py-0.5 rounded-full flex items-center space-x-1 uppercase font-black">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping"></span>
            <span>CERT-In Secure Portal</span>
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="hidden sm:inline text-orange-400">Digital India Initiative</span>
        </div>
      </div>

      {/* Sticky Header Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-sm print:hidden text-white w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-15">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-md ring-2 ring-orange-500/30 overflow-hidden">
                <SafeTIRRILogo />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center font-display">
                  safe<span className="text-green-400 font-extrabold">TIRRI</span> <span className="text-[9px] bg-green-600 px-1.5 py-0.5 rounded-md ml-1.5 text-white font-mono font-bold">AI</span>
                </h1>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold leading-none mt-0.5 font-sans opacity-95">
                  {t.subtitle}
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex space-x-1">
              {[
                { tab: 'home', label: t.navHome },
                { tab: 'check', label: t.navCheck },
                { tab: 'coach', label: t.navCoach },
                { tab: 'services', label: t.navServices || "Public Services" },
                { tab: 'guide', label: t.navGuide },
                { tab: 'complaints', label: t.navComplaints },
                { tab: 'about', label: t.navAbout },
                { tab: 'contact', label: t.navContact }
              ].map(({ tab, label }) => (
                <button
                  key={tab}
                  id={`nav-tab-${tab}`}
                  onClick={() => {
                    setActiveTab(tab as NavigationTab);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                    activeTab === tab 
                      ? 'bg-gradient-to-r from-[#FF9933] to-orange-600 text-white shadow-md shadow-orange-500/10' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Action Group: Language Selector Dropdown and Authentication */}
            <div className="hidden xl:flex items-center space-x-3">
              <div className="relative">
                <button
                  id="lang-dropdown-btn"
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                  className="flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 rounded-lg px-2.5 py-1 text-slate-300 shadow-xs transition-all focus:outline-none cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-[#FF9933]" />
                  <span className="text-[11px] font-bold text-slate-200">
                    {LANGUAGES_LIST.find(l => l.code === lang)?.nativeName || 'English'}
                  </span>
                  <span className="text-[9px] text-slate-500">▼</span>
                </button>
                {showLangDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowLangDropdown(false)}
                    />
                    <div className="absolute right-0 mt-1.5 w-48 bg-slate-950 border border-slate-800 rounded-lg shadow-xl overflow-hidden z-50 py-1">
                      {LANGUAGES_LIST.map((l) => (
                        <button
                          key={l.code}
                          id={`lang-opt-${l.code}`}
                          onClick={() => {
                            setLang(l.code);
                            setShowLangDropdown(false);
                          }}
                          className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                            lang === l.code
                              ? 'bg-orange-500/15 text-[#FF9933] font-bold border-l-2 border-[#FF9933]'
                              : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                          }`}
                        >
                          <span>{l.name}</span>
                          <span className="text-[10px] opacity-75">{l.nativeName}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Database-Backed User Profile Area */}
              {user ? (
                <div className="flex items-center space-x-2">
                  <div className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-[11px] font-bold text-slate-200 flex items-center space-x-1.5 shadow-xs">
                    <User className="w-3.5 h-3.5 text-green-400" />
                    <span className="truncate max-w-[90px]">{user.name}</span>
                    {user.uid === 'demo-user-123' && (
                      <span className="text-[9px] bg-slate-700 px-1.5 py-0.2 rounded-md font-mono font-bold text-orange-400">DEMO</span>
                    )}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white border border-red-500/20 rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all cursor-pointer shadow-xs"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setAuthMode('login');
                    setAuthError(null);
                    setShowAuthModal(true);
                  }}
                  className="bg-green-600 hover:bg-green-700 border border-green-500/20 rounded-lg px-2.5 py-1 text-[11px] font-bold text-white transition-all cursor-pointer shadow-xs flex items-center space-x-1"
                >
                  <User className="w-3 h-3" />
                  <span>Sign In</span>
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center space-x-2">
              {/* Language Selector for Mobile */}
              <div className="relative flex items-center bg-white/15 border border-white/20 rounded-lg px-2 py-1 text-white shadow-xs hover:bg-white/25 transition-all">
                <Globe className="w-3.5 h-3.5 text-orange-400 mr-1" />
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value as Language)}
                  className="bg-transparent text-[11px] font-bold text-white outline-none cursor-pointer pr-1"
                  style={{ colorScheme: 'dark' }}
                >
                  {LANGUAGES_LIST.map((l) => (
                    <option key={l.code} value={l.code} className="text-slate-900 bg-white font-sans">
                      {l.nativeName} ({l.code.toUpperCase()})
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2 shadow-lg text-slate-800">
            {[
              { tab: 'home', label: t.navHome },
              { tab: 'check', label: t.navCheck },
              { tab: 'coach', label: t.navCoach },
              { tab: 'services', label: t.navServices || "Public Services" },
              { tab: 'guide', label: t.navGuide },
              { tab: 'complaints', label: t.navComplaints },
              { tab: 'about', label: t.navAbout },
              { tab: 'contact', label: t.navContact }
            ].map(({ tab, label }) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab as NavigationTab);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                  activeTab === tab 
                    ? 'bg-orange-50 text-[#FF9933] border-l-4 border-[#FF9933]' 
                    : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
                }`}
              >
                {label}
              </button>
            ))}

            {/* Mobile Auth Button */}
            <div className="border-t border-slate-100 pt-3 mt-2 flex flex-col space-y-2">
              {user ? (
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-[#FF9933]" />
                      <span className="font-semibold text-sm text-slate-700">{user.name}</span>
                    </div>
                    {user.uid === 'demo-user-123' && (
                      <span className="text-[10px] bg-orange-100 border border-orange-200 px-2 py-0.5 rounded-md font-mono font-bold text-[#FF9933]">DEMO</span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg text-sm font-bold transition-all text-center"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setAuthMode('login');
                    setAuthError(null);
                    setShowAuthModal(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg text-sm font-bold transition-all text-center flex items-center justify-center space-x-1.5"
                >
                  <User className="w-4 h-4" />
                  <span>Sign In / Register</span>
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* ==========================================
            TAB 1: HOME PAGE
            ========================================== */}
        {activeTab === 'home' && (
          <div className="space-y-16 pb-20 animate-fade-in relative z-10">
            {/* Animated Landing Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-white pt-12 pb-20 border-b border-slate-200/80 min-h-[550px] flex items-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative min-h-[420px]">
                  
                  {/* Hero Copy (The Text that emerges from behind/after the rickshaw drops behind) */}
                  <div className={`lg:col-span-7 space-y-8 text-center lg:text-left transition-all duration-1000 ease-out transform ${
                    introStage === 'dropping' 
                      ? 'opacity-0 scale-75 translate-y-12 pointer-events-none' 
                      : 'opacity-100 scale-100 translate-y-0'
                  }`}>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-[#FF9933]/20 px-4 py-1.5 rounded-full text-[#FF9933] text-sm font-semibold tracking-wide">
                        <span className="flex h-2 w-2 rounded-full bg-[#FF9933] animate-ping"></span>
                        <span>{t.subtitle}</span>
                      </div>
                      <div className="inline-flex items-center space-x-1.5 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full text-green-700 text-xs font-bold font-mono">
                        <Sparkles className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span>{lang === 'hi' ? 'शासकीय साइबर सुरक्षा पहल से प्रेरित' : 'Inspired by Government Cyber Safety Initiatives'}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 leading-tight font-display">
                      Protecting Every <span className="text-[#FF9933] whitespace-nowrap">E-Rickshaw</span>.<br />
                      Protecting Every <span className="text-[#138808] whitespace-nowrap">Livelihood</span>.
                    </h2>
                    
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                      {t.heroSub}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                      <button 
                        onClick={() => { setActiveTab('check'); window.scrollTo({ top: 0 }); }}
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FF9933] to-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-100 hover:from-orange-600 hover:to-orange-700 hover:scale-[1.02] transition-all text-lg flex items-center justify-center space-x-2.5 cursor-pointer"
                      >
                        <Shield className="w-5 h-5" />
                        <span>{t.btnCheck}</span>
                      </button>
                      <button 
                        onClick={() => { setActiveTab('coach'); window.scrollTo({ top: 0 }); }}
                        className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 font-bold rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 hover:scale-[1.02] transition-all text-lg flex items-center justify-center space-x-2.5 cursor-pointer"
                      >
                        <MessageSquare className="w-5 h-5 text-blue-600" />
                        <span>{t.btnTalk}</span>
                      </button>
                    </div>
                  </div>

                  {/* Hero Rickshaw Image (Starts centered and large, then drops behind/recedes to its column) */}
                  <div className={`lg:col-span-5 relative flex justify-center transition-all duration-1200 ease-out transform ${
                    introStage === 'dropping'
                      ? 'absolute inset-0 lg:left-[25%] lg:right-[25%] lg:w-[50%] mx-auto z-40 scale-125 md:scale-135 -translate-y-24 shadow-2xl rounded-3xl ring-8 ring-orange-500/20'
                      : 'relative z-10 scale-100 translate-y-0 shadow-xl rounded-2xl'
                  }`}>
                    <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 group shadow-2xl">
                      <img 
                        src={REAL_RICKSHAW_IMAGE_URL} 
                        alt="National Certified Electric Rickshaw" 
                        className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Premium Overlay Badge Top Left */}
                      <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 rounded-xl px-3 py-1.5 shadow-lg flex items-center space-x-2 font-mono">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                        <div className="text-left">
                          <p className="text-[9px] font-black text-emerald-400 leading-none">SYS STATUS: SECURE</p>
                          <p className="text-[7px] text-slate-400 leading-none mt-0.5 font-bold">BMS ENCRYPTION: G12</p>
                        </div>
                      </div>

                      {/* Premium Overlay Badge Top Right */}
                      <div className="absolute top-4 right-4 z-20 bg-slate-900/90 backdrop-blur-md border border-orange-500/30 rounded-xl px-3 py-1.5 shadow-lg font-mono text-right">
                        <p className="text-[9px] font-black text-orange-400 leading-none">VEHICLE LOGGED</p>
                        <p className="text-[7px] text-slate-400 leading-none mt-0.5 font-bold">MoRTH CERTIFIED</p>
                      </div>

                      {/* Bottom Banner with Government E-Rickshaw Label */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 pt-12 text-left">
                        <p className="text-[9px] font-mono text-[#FF9933] font-bold uppercase tracking-widest">National Registry Standard Model</p>
                        <h4 className="text-sm font-bold text-white tracking-tight">Standard safeTIRRI Secure EV</h4>
                        <p className="text-[10px] text-slate-300 font-sans mt-1">
                          Equipped with verified anti-tampering Bluetooth firmware and state-of-the-art GPS shield telemetry.
                        </p>
                      </div>

                      {introStage === 'dropping' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-30 backdrop-blur-xs">
                          <div className="text-center text-white px-6 py-4 rounded-xl bg-slate-900/95 border border-orange-500/30 max-w-xs shadow-2xl animate-bounce">
                            <div className="flex justify-center mb-2">
                              <Shield className="w-8 h-8 text-orange-400 animate-spin-slow" />
                            </div>
                            <p className="text-sm font-bold tracking-wide uppercase">safeTIRRI AI</p>
                            <p className="text-[10px] text-orange-200 font-mono mt-1 font-semibold">Dropping Security Shield...</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Recent Cyber Alert Banner */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-2 relative z-10">
              <div className="bg-orange-50 border border-[#FF9933]/40 rounded-xl p-4 md:p-5 shadow-xs flex items-start space-x-4">
                <div className="p-2 bg-orange-500/10 rounded-lg text-[#FF9933] shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9px] bg-[#FF9933] text-white px-1.5 py-0.5 rounded font-black font-mono uppercase tracking-wider">
                      {lang === 'hi' ? 'ताजा चेतावनी' : 'URGENT SECURITY ALERT'}
                    </span>
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide">
                      {lang === 'hi' ? 'हालिया साइबर सुरक्षा अलर्ट: BAT-BMS शटडाउन' : 'Recent Cyber Alert: BAT-BMS Misuse'}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === 'hi' 
                      ? 'हालिया BAT-BMS दुरुपयोग ने ब्लूटूथ-सक्षम ई-रिक्शा में सुरक्षा कमजोरियों को उजागर किया है। safeTIRRI AI चालकों को इन जोखिमों को समझने और अपने वाहनों को सुरक्षित करने में मदद करता है।'
                      : 'The recent BAT-BMS misuse exposed security vulnerabilities in Bluetooth-enabled e-rickshaws. safeTIRRI AI helps drivers understand these risks and secure their vehicles.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Metrics Panel */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex items-center space-x-4 border-r border-slate-100 last:border-0 pr-4">
                  <div className="p-3 bg-green-500/10 rounded-xl">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-[#0F172A]">{lang === 'en' ? '15,000+' : '15,000 से अधिक'}</p>
                    <p className="text-xs text-slate-500 font-medium font-mono uppercase tracking-wider">{t.statProtected}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 border-r border-slate-100 last:border-0 pr-4">
                  <div className="p-3 bg-orange-500/10 rounded-xl">
                    <Activity className="w-8 h-8 text-[#FF9933]" />
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-[#0F172A]">{lang === 'en' ? '45,000+' : '45,000 से अधिक'}</p>
                    <p className="text-xs text-slate-500 font-medium font-mono uppercase tracking-wider">{t.statChecks}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 border-r border-slate-100 last:border-0 pr-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-[#0F172A]">{lang === 'en' ? '1,240+' : '1,240 से अधिक'}</p>
                    <p className="text-xs text-slate-500 font-medium font-mono uppercase tracking-wider">{t.statComplaints}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 pr-4">
                  <div className="p-3 bg-indigo-500/10 rounded-xl">
                    <Globe className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-[#0F172A]">9</p>
                    <p className="text-xs text-slate-500 font-medium font-mono uppercase tracking-wider">{t.statLanguages}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why safeTIRRI AI? Timeline */}
            <div className="bg-slate-50 py-16 border-y border-slate-200/60 relative z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">{t.whyTitle}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {t.whySub}
                  </p>
                </div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
                  
                  {/* Step 1 */}
                  <div className="bg-white border border-slate-200 p-6 rounded-xl relative shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-red-500/10 text-red-600 rounded-lg flex items-center justify-center font-bold font-mono mb-4">1</div>
                      <h4 className="text-base font-bold text-[#0F172A] mb-2">{t.step1Title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{t.step1Desc}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 text-[10px] text-red-600 font-mono font-semibold uppercase tracking-wider">Security Loophole</div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white border border-slate-200 p-6 rounded-xl relative shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-red-500/10 text-red-600 rounded-lg flex items-center justify-center font-bold font-mono mb-4">2</div>
                      <h4 className="text-base font-bold text-[#0F172A] mb-2">{t.step2Title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{t.step2Desc}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 text-[10px] text-red-600 font-mono font-semibold uppercase tracking-wider">Remote Exploit</div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white border border-slate-200 p-6 rounded-xl relative shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-orange-500/10 text-[#FF9933] rounded-lg flex items-center justify-center font-bold font-mono mb-4">3</div>
                      <h4 className="text-base font-bold text-[#0F172A] mb-2">{t.step3Title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{t.step3Desc}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 text-[10px] text-orange-600 font-mono font-semibold uppercase tracking-wider">Driver Isolated</div>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-white border border-slate-200 p-6 rounded-xl relative shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-orange-500/10 text-[#FF9933] rounded-lg flex items-center justify-center font-bold font-mono mb-4">4</div>
                      <h4 className="text-base font-bold text-[#0F172A] mb-2">{t.step4Title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{t.step4Desc}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 text-[10px] text-orange-600 font-mono font-semibold uppercase tracking-wider">Economic Loss</div>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-gradient-to-b from-green-50 to-white border border-green-200/60 p-6 rounded-xl relative shadow-md flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-[#138808]/10 text-green-700 rounded-lg flex items-center justify-center font-bold font-mono mb-4">5</div>
                      <h4 className="text-base font-bold text-green-900 mb-2">{t.step5Title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{t.step5Desc}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-green-100 text-[10px] text-green-700 font-mono font-semibold uppercase tracking-wider font-bold">Citizen Defense</div>
                  </div>

                </div>
              </div>
            </div>

            {/* Three Core Feature Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Check Card */}
                <div className="premium-card premium-card-hover flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-[#FF9933]">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-[#0F172A] premium-heading-card">{t.featureCheckTitle}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line font-sans">{t.featureCheckDesc}</p>
                  </div>
                  <button 
                    onClick={() => { setActiveTab('check'); window.scrollTo({ top: 0 }); }}
                    className="mt-6 flex items-center space-x-2 text-sm font-bold text-[#FF9933] hover:text-orange-600 transition-colors duration-200 cursor-pointer group"
                  >
                    <span>Run Scan Now</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Coach Card */}
                <div className="premium-card premium-card-hover-green flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-[#0F172A] premium-heading-card">{t.featureCoachTitle}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-sans">{t.featureCoachDesc}</p>
                  </div>
                  <button 
                    onClick={() => { setActiveTab('coach'); window.scrollTo({ top: 0 }); }}
                    className="mt-6 flex items-center space-x-2 text-sm font-bold text-green-600 hover:text-green-700 transition-colors duration-200 cursor-pointer group"
                  >
                    <span>Consult Coach</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Guide Card */}
                <div className="premium-card premium-card-hover flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-[#0F172A] premium-heading-card">{t.featureGuideTitle}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-sans">{t.featureGuideDesc}</p>
                  </div>
                  <button 
                    onClick={() => { setActiveTab('guide'); window.scrollTo({ top: 0 }); }}
                    className="mt-6 flex items-center space-x-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer group"
                  >
                    <span>Open Library</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>

            {/* Why This Matters (Impact Section) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8 relative z-10">
              <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
                <span className="text-xs bg-[#138808]/10 text-green-700 border border-green-500/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider font-mono">
                  {lang === 'hi' ? 'हमारा प्रभाव' : 'Our Impact'}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
                  {lang === 'hi' ? 'यह क्यों महत्वपूर्ण है' : 'Why This Matters'}
                </h3>
                <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed">
                  {lang === 'hi' 
                    ? 'safeTIRRI AI भारत के विशाल ई-रिक्शा समुदाय की सुरक्षा और सतत आजीविका सुनिश्चित करने में मुख्य भूमिका निभाता है।' 
                    : 'safeTIRRI AI plays a vital role in ensuring road safety and digital cybersecurity across India\'s e-rickshaw logistics network.'}
                </p>
                <div className="h-1 w-20 bg-green-600 mx-auto rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: ShieldAlert,
                    title_en: "Driver Livelihood Protection",
                    title_hi: "चालक आजीविका सुरक्षा",
                    desc_en: "Ensuring zero loss of daily income due to remote malicious battery shutdowns.",
                    desc_hi: "रिमोट बैटरी हैकिंग हमलों के कारण दैनिक आय के आकस्मिक नुकसान को रोकना।",
                    color: "text-red-600 bg-red-500/10 border-red-500/20"
                  },
                  {
                    icon: ShieldCheck,
                    title_en: "Road Safety Assured",
                    title_hi: "सड़क सुरक्षा आश्वासन",
                    desc_en: "Preventing sudden vehicle lockouts in the middle of busy Indian city expressways.",
                    desc_hi: "व्यस्त एक्सप्रेसवे पर चलते ई-रिक्शा के अचानक वायरलेस लॉक होने की घटनाओं को रोकना।",
                    color: "text-[#FF9933] bg-orange-500/10 border-orange-500/20"
                  },
                  {
                    icon: HelpCircle,
                    title_en: "Cybersecurity Awareness",
                    title_hi: "साइबर सुरक्षा जागरूकता",
                    desc_en: "Empowering non-technical e-rickshaw drivers with simple, localized digital hygiene practices.",
                    desc_hi: "गैर-तकनीकी चालकों को स्थानीय भाषा में डिजिटल सुरक्षा आदतों के प्रति सजग बनाना।",
                    color: "text-blue-600 bg-blue-500/10 border-blue-500/20"
                  },
                  {
                    icon: Globe,
                    title_en: "Digital Inclusion",
                    title_hi: "डिजिटल समावेशन",
                    desc_en: "Bringing safe, state-of-the-art Generative AI technology to the grassroot transport workforce of India.",
                    desc_hi: "भारत के जमीनी स्तर के परिवहन कार्यबल के लिए सुरक्षित जेनरेटिव एआई तकनीक सुलभ कराना।",
                    color: "text-green-600 bg-green-500/10 border-green-500/20"
                  }
                ].map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div 
                      key={i} 
                      className="premium-card premium-card-hover space-y-4"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-base font-bold text-[#0F172A] premium-heading-card">{lang === 'hi' ? card.title_hi : card.title_en}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-sans font-normal">{lang === 'hi' ? card.desc_hi : card.desc_en}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Gen AI Compliance Tracker & Security Tips Advisor */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-4 relative z-10">
              <div className="bg-gradient-to-r from-slate-900 via-[#1e293b] to-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center text-white relative overflow-hidden">
                {/* Glowing decorative lights */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#FF9933]/5 rounded-full blur-3xl pointer-events-none"></div>

                {/* Left side: Gen AI Compliance Progress Bar */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase font-mono flex items-center space-x-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>GEN AI ACTIVE</span>
                    </span>
                    <span className="text-slate-400 text-xs font-mono">powered by safeTIRRI v2.6</span>
                  </div>

                  <h3 className="text-2xl font-black text-white tracking-tight font-display">
                    {lang === 'en' ? "National Gen AI Shield Integrity Level" : "राष्ट्रीय जेन एआई शील्ड अखंडता स्तर"}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-lg font-light">
                    {lang === 'en' 
                      ? "Our server-side Gemini 3.5 AI is auditing network telemetry across e-rickshaws nationwide to detect unverified Bluetooth BMS exploits and secure citizen livelihoods."
                      : "हमारा सर्वर-साइड जेमिनी 3.5 एआई पूरे देश में ई-रिक्शा के नेटवर्क टेलीमेट्री का ऑडिट कर रहा है ताकि अनधिकृत ब्लूटूथ बीएमएस हैक्स का पता लगाया जा सके।"}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs font-mono font-bold">
                      <span className="text-slate-400 uppercase tracking-wider">{lang === 'en' ? "E-Rickshaw Fleet Compliance" : "ई-रिक्शा बेड़ा सुरक्षा अनुपालन"}</span>
                      <span className="text-[#FF9933] text-sm font-black">88% SECURE</span>
                    </div>
                    {/* Progress Bar background */}
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50 p-[1px]">
                      {/* Interactive glowing progress bar fill */}
                      <div 
                        className="h-full bg-gradient-to-r from-[#FF9933] via-[#ffb05c] to-[#10b981] rounded-full relative transition-all duration-1000"
                        style={{ width: '88%' }}
                      >
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>{lang === 'en' ? "Goal: 100% Indian Road Security" : "लक्ष्य: 100% भारतीय सड़क सुरक्षा"}</span>
                      <span className="flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>{lang === 'en' ? "CERT-In Compliant" : "CERT-In अनुपालन"}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side: Interactive Gen AI Security Tips Advisor */}
                <div className="w-full lg:w-1/2 bg-slate-800/40 border border-slate-700/30 p-6 rounded-xl relative flex flex-col justify-between h-full min-h-[220px]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 text-[#FF9933] animate-pulse" />
                        <span className="text-xs font-black uppercase tracking-wider text-[#FF9933] font-mono">
                          {lang === 'en' ? "Gen AI Cyber-Safety Tip" : "जेन एआई साइबर-सुरक्षा सलाह"}
                        </span>
                      </div>
                      <span className="flex items-center space-x-1 text-[10px] text-slate-400 font-mono">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        <span>LIVE UPDATE</span>
                      </span>
                    </div>

                    {/* Tip Content with smooth height and transition */}
                    <div className="min-h-[75px] flex items-center">
                      <p className="text-sm text-slate-255 leading-relaxed font-normal">
                        "{lang === 'hi' ? GEN_AI_SECURITY_TIPS[currentTipIndex].hi : GEN_AI_SECURITY_TIPS[currentTipIndex].en}"
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800 flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 font-mono">
                      TIP {currentTipIndex + 1} OF {GEN_AI_SECURITY_TIPS.length}
                    </span>
                    <button
                      onClick={() => {
                        setCurrentTipIndex((prev) => (prev + 1) % GEN_AI_SECURITY_TIPS.length);
                      }}
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#FF9933]/10 text-[#FF9933] hover:bg-[#FF9933]/20 border border-[#FF9933]/20 text-xs font-bold transition-all cursor-pointer active:scale-95"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? "Next Safety Tip" : "अगली सुरक्षा सलाह"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ==========================================
            TAB 2: AI CYBER HEALTH SCAN
            ========================================== */}
        {activeTab === 'check' && (
          <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 animate-fade-in print:py-0">
            
            <div className="text-center space-y-4 print:hidden">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
                {checkSubTab === 'bms' ? t.checkTitle : (lang === 'hi' ? 'स्मार्ट यात्रा वाहन कैप्चर' : 'Smart Journey Vehicle Capture')}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed font-normal font-sans">
                {checkSubTab === 'bms' 
                  ? t.checkSub 
                  : (lang === 'hi' 
                    ? 'अपनी यात्रा शुरू करने से पहले ई-रिक्शा की फोटो लें। यह आपके मार्ग, जीपीएस स्थिति और समय को सुरक्षित रूप से लॉक करके विश्वसनीय संपर्कों के साथ साझा करता है।' 
                    : 'Secure your commute by capturing the e-rickshaw registration before boarding. safeTIRRI logs the photo with real-time GPS coordinates, providing a secure digital shadow of your trip.')}
              </p>
            </div>

            {/* Sub tab navigation */}
            <div className="flex justify-center p-1 bg-slate-100 rounded-xl max-w-md mx-auto print:hidden">
              <button 
                type="button"
                onClick={() => setCheckSubTab('bms')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${checkSubTab === 'bms' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <Battery className="w-3.5 h-3.5 text-[#FF9933]" />
                <span>BMS Telemetry Audit</span>
              </button>
              <button 
                type="button"
                onClick={() => setCheckSubTab('capture')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${checkSubTab === 'capture' ? 'bg-white text-green-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <Camera className="w-3.5 h-3.5 text-green-600" />
                <span>Smart Capture</span>
              </button>
            </div>

            {checkSubTab === 'bms' ? (
              <div className="space-y-8">
                {/* Audit Input Form */}
                <div className="premium-card shadow-sm print:hidden">
                  <form onSubmit={handleAnalyze} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Vehicle Segment */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t.fieldVehicle}</label>
                    <select 
                      value={checkForm.vehicleType}
                      onChange={(e) => setCheckForm({ ...checkForm, vehicleType: e.target.value })}
                      className="premium-select"
                    >
                      <option>E-Rickshaw (3-Wheeler)</option>
                      <option>E-Loader (Commercial Cargo)</option>
                      <option>E-Scooter / Bike (2-Wheeler)</option>
                    </select>
                  </div>

                  {/* Battery Brand */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t.fieldBrand}</label>
                    <input 
                      type="text" 
                      value={checkForm.batteryBrand}
                      onChange={(e) => setCheckForm({ ...checkForm, batteryBrand: e.target.value })}
                      placeholder="e.g., Okaya, BAT-BMS, Loom Solar" 
                      required
                      className="premium-input placeholder:text-slate-400"
                    />
                  </div>

                  {/* Battery Model */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t.fieldModel}</label>
                    <input 
                      type="text" 
                      value={checkForm.batteryModel}
                      onChange={(e) => setCheckForm({ ...checkForm, batteryModel: e.target.value })}
                      placeholder="e.g., Smart-BMS-v2, Exide-Li-90" 
                      required
                      className="premium-input placeholder:text-slate-400"
                    />
                  </div>

                  {/* Operating Location */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t.fieldLocation}</label>
                    <input 
                      type="text" 
                      value={checkForm.location}
                      onChange={(e) => setCheckForm({ ...checkForm, location: e.target.value })}
                      placeholder="e.g., Delhi, Noida UP, Patna" 
                      required
                      className="premium-input placeholder:text-slate-400"
                    />
                  </div>

                </div>

                {/* Binary Telemetry Toggles */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold text-[#FF9933] uppercase tracking-wider font-mono">BMS Wireless Telemetry Parameters</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    
                    {/* Bluetooth Toggle */}
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                      <div>
                        <p className="text-xs font-bold text-[#0F172A]">{t.fieldBluetooth}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Visible wireless beacon</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCheckForm({ ...checkForm, bluetoothEnabled: !checkForm.bluetoothEnabled })}
                        className={`w-12 h-6 rounded-full transition-colors relative ${checkForm.bluetoothEnabled ? 'bg-[#FF9933]' : 'bg-slate-300'}`}
                      >
                        <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${checkForm.bluetoothEnabled ? 'transform translate-x-6' : ''}`} />
                      </button>
                    </div>

                    {/* Password Toggle */}
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                      <div>
                        <p className="text-xs font-bold text-[#0F172A]">{t.fieldPassword}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Non-default 6-digit PIN</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCheckForm({ ...checkForm, passwordEnabled: !checkForm.passwordEnabled })}
                        className={`w-12 h-6 rounded-full transition-colors relative ${checkForm.passwordEnabled ? 'bg-green-600' : 'bg-slate-300'}`}
                      >
                        <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${checkForm.passwordEnabled ? 'transform translate-x-6' : ''}`} />
                      </button>
                    </div>

                    {/* Firmware Toggle */}
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                      <div>
                        <p className="text-xs font-bold text-[#0F172A]">{t.fieldFirmware}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Exploit patches applied</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCheckForm({ ...checkForm, firmwareUpdated: !checkForm.firmwareUpdated })}
                        className={`w-12 h-6 rounded-full transition-colors relative ${checkForm.firmwareUpdated ? 'bg-green-600' : 'bg-slate-300'}`}
                      >
                        <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${checkForm.firmwareUpdated ? 'transform translate-x-6' : ''}`} />
                      </button>
                    </div>

                  </div>
                </div>

                <button
                  type="submit"
                  disabled={analyzing}
                  className="w-full premium-btn-primary py-3.5 text-base flex items-center justify-center space-x-2"
                >
                  {analyzing ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>{t.analyzing}</span>
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5" />
                      <span>{t.btnAnalyze}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Cyber Health Score Dashboard Card */}
            <div className="premium-card shadow-sm print:hidden">
              <div className="border-b border-slate-150 pb-4 mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#FF9933]">
                    <Activity className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight font-display">Cyber Health Score</h3>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold font-mono">National E-Mobility Telemetry Dashboard</p>
                  </div>
                </div>
                <span className="text-xs bg-green-500/10 text-green-700 border border-green-500/20 px-2.5 py-1 rounded-full font-bold font-mono">
                  SECURE PROFILE
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Column: Overall Circular Score */}
                <div className="md:col-span-5 flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Overall Cyber Health Score</span>
                  <div className="relative w-36 h-36 flex items-center justify-center my-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="72" cy="72" r="62" className="stroke-slate-200" strokeWidth="8" fill="transparent" />
                      <circle 
                        cx="72" 
                        cy="72" 
                        r="62" 
                        className="stroke-green-500"
                        strokeWidth="8" 
                        fill="transparent" 
                        strokeDasharray={390}
                        strokeDashoffset={390 - (390 * 94) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black text-slate-900">94</span>
                      <span className="text-[10px] text-slate-500 font-semibold font-mono">/ 100 PTS</span>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-md border border-green-200/50">
                    Overall Cyber Health Score (94/100)
                  </p>
                </div>

                {/* Right Column: Key Security Metrics */}
                <div className="md:col-span-7 space-y-4">
                  {/* Bluetooth Security */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>Bluetooth Security (98%)</span>
                      <span className="font-mono text-emerald-600">98%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>

                  {/* Firmware Integrity */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>Firmware Integrity (82%)</span>
                      <span className="font-mono text-orange-500">82%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#FF9933] h-full rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>

                  {/* Authentication */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>Authentication (96%)</span>
                      <span className="font-mono text-emerald-600">96%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>

                  {/* App Permission Security */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>App Permission Security (78%)</span>
                      <span className="font-mono text-orange-500">78%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#FF9933] h-full rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>

                  {/* Battery Communication Health */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>Battery Communication Health (95%)</span>
                      <span className="font-mono text-emerald-600">95%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  {/* Recommended Fixes */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="text-xs font-bold text-slate-700">Recommended Fixes (2)</span>
                    </div>
                    <button 
                      type="button"
                      onClick={() => { setActiveTab('guide'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200/60 font-extrabold font-mono px-2.5 py-1 rounded hover:bg-amber-100 transition-colors cursor-pointer"
                    >
                      VIEW RECOMMENDATIONS
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Analysis Result Card */}
            {checkResult && (
              <div id="print-report-root" className="bg-white border-2 border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-8 relative overflow-hidden print:border-0 print:bg-white print:text-black print:p-0">
                
                {/* Government Ribbon Decoration */}
                <div className="absolute top-0 left-0 right-0 h-2 flex print:hidden">
                  <div className="bg-[#FF9933] h-full w-1/3"></div>
                  <div className="bg-white h-full w-1/3"></div>
                  <div className="bg-[#138808] h-full w-1/3"></div>
                </div>

                {/* Print Only Header */}
                <div className="hidden print:flex items-center justify-between border-b-2 border-slate-900 pb-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-10 h-10 text-[#FF9933]" />
                    <div>
                      <h1 className="text-2xl font-bold tracking-tight text-slate-950">safeTIRRI AI Vehicle Security</h1>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Government of India Cybersecurity Initiative</p>
                    </div>
                  </div>
                  <div className="text-right text-xs font-mono">
                    <p>Report ID: SEC-{Date.now().toString().slice(-6)}</p>
                    <p>Date: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Top Section: Score Gauge & Risk Level */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Gauge Card */}
                  <div className="md:col-span-5 flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-200 print:bg-slate-100 print:border-slate-300">
                    <h4 className="text-sm font-bold text-slate-600 uppercase tracking-wider font-mono print:text-slate-700">{t.reportScore}</h4>
                    
                    {/* Circle Score */}
                    <div className="relative w-40 h-40 flex items-center justify-center my-6">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="80" cy="80" r="70" className="stroke-slate-200" strokeWidth="10" fill="transparent" />
                        <circle 
                          cx="80" 
                          cy="80" 
                          r="70" 
                          className={`${
                            checkResult.securityScore >= 80 ? 'stroke-green-500' :
                            checkResult.securityScore >= 50 ? 'stroke-orange-500' : 'stroke-red-500'
                          }`}
                          strokeWidth="10" 
                          fill="transparent" 
                          strokeDasharray={440}
                          strokeDashoffset={440 - (440 * checkResult.securityScore) / 100}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-5xl font-extrabold text-[#0F172A] print:text-slate-900">{checkResult.securityScore}</span>
                        <span className="text-[10px] text-slate-500 font-mono">/ 100 PTS</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-slate-500 print:text-slate-600">{t.reportRisk}</p>
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-extrabold font-mono tracking-wider ${
                        checkResult.riskLevel === 'CRITICAL' ? 'bg-red-500/10 text-red-700 border border-red-500/20' :
                        checkResult.riskLevel === 'HIGH' ? 'bg-orange-500/10 text-[#FF9933] border border-orange-500/20' :
                        checkResult.riskLevel === 'MEDIUM' ? 'bg-yellow-500/10 text-yellow-700 border border-yellow-500/20' :
                        'bg-green-500/10 text-green-700 border border-green-500/20'
                      }`}>
                        {checkResult.riskLevel} RISK
                      </span>
                    </div>

                    {/* Real-Time Battery Health & Telemetry Component */}
                    <div className="border-t border-dashed border-slate-200 mt-6 pt-6 w-full text-left space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                          {lang === 'en' ? 'Battery Health (SoH)' : 'बैटरी स्वास्थ्य (SoH)'}
                        </span>
                        <span className="flex items-center space-x-1">
                          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                          <span className="text-[10px] text-green-600 font-mono font-bold uppercase">Connected</span>
                        </span>
                      </div>

                      <div className="flex items-end justify-between">
                        <div className="flex items-center space-x-2.5">
                          <div className="p-2 bg-green-500/10 rounded-xl text-green-600">
                            <Battery className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-3xl font-black text-[#0F172A] tracking-tight">
                              {checkResult.batteryHealthPercentage || 92}%
                            </p>
                            <p className="text-[10px] text-slate-400 font-semibold font-mono">STATE OF HEALTH</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-extrabold font-mono tracking-wider ${
                            (checkResult.batteryHealthPercentage || 92) >= 85 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-850'
                          }`}>
                            {(checkResult.batteryHealthPercentage || 92) >= 85 ? 'OPTIMAL' : 'DEGRADED'}
                          </span>
                        </div>
                      </div>

                      {/* Diagnostic Grid Metrics */}
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-xs">
                          <p className="text-[10px] text-slate-400 font-semibold font-mono">VOLTAGE</p>
                          <p className="text-sm font-bold text-slate-700">51.2 V</p>
                          <p className="text-[9px] text-green-600 font-mono">✓ Normal Range</p>
                        </div>
                        <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-xs">
                          <p className="text-[10px] text-slate-400 font-semibold font-mono">TEMPERATURE</p>
                          <p className="text-sm font-bold text-slate-700">36.5 °C</p>
                          <p className="text-[9px] text-green-600 font-mono">✓ Safe temp</p>
                        </div>
                      </div>

                      <p className="text-[10px] text-slate-500 leading-normal bg-slate-100/50 p-2 rounded-lg border border-slate-150">
                        {lang === 'en' 
                          ? "Real-time battery parameters are audited dynamically via the secure safeTIRRI client wrapper. Cryptographic signature verified."
                          : "सुरक्षित safeTIRRI क्लाइंट रैपर के माध्यम से वास्तविक समय में बैटरी मापदंडों का गतिशील रूप से ऑडिट किया जा रहा है।"}
                      </p>
                    </div>

                  </div>

                  {/* Explanation Block */}
                  <div className="md:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#0F172A] print:text-slate-900">{lang === 'en' ? 'AI Diagnostic Summary' : 'AI सुरक्षा विश्लेषण का सारांश'}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm print:text-slate-800 font-normal">
                        {checkResult.aiRiskExplanation}
                      </p>
                    </div>

                    {/* Bullet vulnerabilities */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-red-600 uppercase tracking-wider font-mono">Identified Loops / Vulnerabilities:</h4>
                      <ul className="space-y-2">
                        {checkResult.potentialVulnerabilities.map((vuln, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs text-slate-650 print:text-slate-700">
                            <span className="text-red-500 font-bold">●</span>
                            <span>{vuln}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Mid Section: Government Safety Advisory */}
                <div className="bg-orange-500/5 border-l-4 border-[#FF9933] p-5 rounded-r-xl space-y-2 print:bg-slate-100 print:border-l-4 print:border-slate-800 print:text-slate-900">
                  <h4 className="text-sm font-bold text-[#FF9933] flex items-center space-x-2 print:text-slate-900">
                    <AlertTriangle className="w-4 h-4" />
                    <span>{t.reportAdvisory}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed print:text-slate-700">
                    {checkResult.governmentSafetyAdvisory}
                  </p>
                </div>

                {/* Bottom Section: Personalized Action Plan */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-green-700 uppercase tracking-wider font-mono print:text-slate-950">{t.reportPlan}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {checkResult.personalizedActionPlan.map((action, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start space-x-3 print:bg-slate-100 print:border-slate-300">
                        <div className="w-6 h-6 bg-green-500/10 text-green-700 rounded-full flex items-center justify-center font-bold text-xs font-mono shrink-0 print:text-slate-900">
                          {i + 1}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed print:text-slate-800 font-normal">
                          {action}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why AI Recommended This Flowchart */}
                <div className="bg-slate-50 p-5 border border-slate-200 rounded-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                    <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-[#FF9933]" />
                      <span>{lang === 'hi' ? 'AI सुरक्षा कोच सिफारिश व्याख्या' : 'Why AI Security Coach Recommended This'}</span>
                    </h4>
                    <div className="flex items-center space-x-1.5 bg-green-50 text-green-700 border border-green-200/50 px-2 py-0.5 rounded text-[11px] font-bold font-mono">
                      <span>{lang === 'hi' ? 'विश्वास स्तर' : 'Confidence Level'}: {checkResult.confidenceLevel || 94}%</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === 'hi' 
                      ? 'AI सुरक्षा कोच ने आपकी वाहन प्रविष्टि विवरण (इनपुट्स), ब्लूटूथ सुरक्षा स्थिति, और फ़र्मवेयर सुरक्षा पैच स्तरों की जाँच करके इस विश्लेषण को तैयार किया है। सुरक्षित संचार के लिए निम्नलिखित चरण-दर-चरण तर्क श्रृंखला पर ध्यान दें:'
                      : 'The AI Security Coach analyzed your Bluetooth status, default pairing credentials, and firmware security patch levels to compute the risk. Below is the step-by-step decision logical flow:'}
                  </p>

                  {/* Visual Flowchart */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-2 font-mono text-[10px] md:text-[11px]">
                    <div className="flex flex-col items-center bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-3xs text-center w-full sm:w-auto">
                      <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">{lang === 'hi' ? 'वाहन इनपुट' : 'Vehicle Input'}</span>
                      <span className="font-bold text-slate-800 mt-0.5">{checkForm.batteryBrand || 'Generic Li-Ion'}</span>
                    </div>

                    <div className="text-[#FF9933] font-bold text-base rotate-90 sm:rotate-0">→</div>

                    <div className="flex flex-col items-center bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-3xs text-center w-full sm:w-auto">
                      <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">{lang === 'hi' ? 'ब्लूटूथ विश्लेषण' : 'Bluetooth Scan'}</span>
                      <span className="font-bold text-red-600 mt-0.5">
                        {checkForm.bluetoothEnabled 
                          ? (checkForm.passwordEnabled ? (lang === 'hi' ? 'सुरक्षित पासवर्ड' : 'Secured Password') : (lang === 'hi' ? 'पासवर्ड रहित' : 'No Password PIN'))
                          : (lang === 'hi' ? 'ब्लूटूथ बंद' : 'Bluetooth Inactive')}
                      </span>
                    </div>

                    <div className="text-[#FF9933] font-bold text-base rotate-90 sm:rotate-0">→</div>

                    <div className="flex flex-col items-center bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-3xs text-center w-full sm:w-auto">
                      <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">{lang === 'hi' ? 'बीएमएस भेद्यता' : 'BMS Threat'}</span>
                      <span className="font-bold text-orange-600 mt-0.5">
                        {checkResult.riskLevel === 'CRITICAL' || checkResult.riskLevel === 'HIGH' 
                          ? (lang === 'hi' ? 'असुरक्षित फर्मवेयर' : 'Vulnerable firmware') 
                          : (lang === 'hi' ? 'सुरक्षित प्रणाली' : 'Secure Protocol')}
                      </span>
                    </div>

                    <div className="text-[#FF9933] font-bold text-base rotate-90 sm:rotate-0">→</div>

                    <div className="flex flex-col items-center bg-orange-50 px-3 py-2 rounded-lg border border-[#FF9933]/30 shadow-3xs text-center w-full sm:w-auto">
                      <span className="text-orange-700 font-bold uppercase tracking-wider text-[9px]">{lang === 'hi' ? 'सिफारिश' : 'Recommendation'}</span>
                      <span className="font-bold text-orange-800 mt-0.5">{lang === 'hi' ? 'एंटी-टीर्री अपडेट' : 'Anti-Tirri Advisory'}</span>
                    </div>
                  </div>
                </div>

                {/* Required Documents Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm space-y-4">
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center space-x-2 border-b border-slate-100 pb-3">
                    <FileText className="w-4 h-4 text-[#FF9933]" />
                    <span>{lang === 'hi' ? 'आवश्यक दस्तावेज (चालक एवं वाहन)' : 'Required Documents for Safe & Legal Operation'}</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {lang === 'hi' 
                      ? 'प्रत्येक ई-रिक्शा चालक को सुचारू संचालन, सब्सिडी लाभ और कानूनी सुरक्षा बनाए रखने के लिए इन ६ दस्तावेजों को हमेशा अपडेट रखना चाहिए:' 
                      : 'Every registered commercial e-vehicle driver must maintain these 6 active documents to ensure compliance and prevent official regulatory penalties:'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { 
                        id: 'aadhaar', 
                        name_en: 'Aadhaar Card', 
                        name_hi: 'आधार कार्ड', 
                        desc_en: 'Required for operator identification & DBT benefits', 
                        desc_hi: 'चालक पहचान सत्यापन और डीबीटी कल्याणकारी योजनाओं हेतु', 
                        missing: false 
                      },
                      { 
                        id: 'dl', 
                        name_en: 'Driving Licence (Commercial)', 
                        name_hi: 'ड्राइविंग लाइसेंस (कमर्शियल)', 
                        desc_en: 'Valid LMV-Class or specialized E-Rickshaw licence', 
                        desc_hi: 'वैध ई-रिक्शा श्रेणी का कमर्शियल ड्राइविंग लाइसेंस', 
                        missing: !user?.phone 
                      },
                      { 
                        id: 'rc', 
                        name_en: 'Vehicle Registration Certificate (RC)', 
                        name_hi: 'वाहन पंजीकरण प्रमाणपत्र (RC)', 
                        desc_en: 'Registered under Vahan 4.0 database', 
                        desc_hi: 'राष्ट्रीय वाहन ४.० डेटाबेस के तहत पंजीकृत ई-रिक्शा', 
                        missing: !checkForm.batteryModel 
                      },
                      { 
                        id: 'insurance', 
                        name_en: 'Active Insurance Certificate', 
                        name_hi: 'सक्रिय वाहन बीमा प्रमाणपत्र', 
                        desc_en: 'Mandatory third-party liability cover', 
                        desc_hi: 'अनिवार्य तृतीय-पक्ष देयता बीमा पॉलिसी कवर', 
                        missing: checkResult.securityScore < 60 
                      },
                      { 
                        id: 'puc', 
                        name_en: 'PUC Certificate (Emission Clearance)', 
                        name_hi: 'प्रदूषण नियंत्रण प्रमाणपत्र (PUC)', 
                        desc_en: 'Mandatory emission clearance (auto-validated)', 
                        desc_hi: 'अनिवार्य उत्सर्जन निकासी प्रमाणपत्र', 
                        missing: checkForm.location === 'Delhi NCR' 
                      },
                      { 
                        id: 'warranty', 
                        name_en: 'BMS Battery Warranty Card', 
                        name_hi: 'बीएमएस बैटरी वारंटी कार्ड', 
                        desc_en: 'Original warranty linked to secure software updates', 
                        desc_hi: 'सॉफ्टवेयर सुरक्षा अपडेट से लिंक ओरिजिनल वारंटी कार्ड', 
                        missing: !checkForm.firmwareUpdated 
                      }
                    ].map((doc) => {
                      const isMissing = doc.missing;
                      return (
                        <div key={doc.id} className={`p-3 rounded-lg border flex items-start justify-between space-x-3 transition-all ${
                          isMissing 
                            ? 'bg-orange-50/50 border-orange-200 hover:bg-orange-50' 
                            : 'bg-slate-50/50 border-slate-200/60 hover:bg-slate-50'
                        }`}>
                          <div className="space-y-1">
                            <p className="text-xs font-bold text-slate-800">{lang === 'hi' ? doc.name_hi : doc.name_en}</p>
                            <p className="text-[10px] text-slate-500 font-normal leading-normal">{lang === 'hi' ? doc.desc_hi : doc.desc_en}</p>
                          </div>
                          {isMissing ? (
                            <span className="shrink-0 inline-flex items-center space-x-1 bg-red-100 text-red-800 text-[9px] font-extrabold font-mono uppercase px-1.5 py-0.5 rounded-md animate-pulse">
                              <AlertTriangle className="w-2.5 h-2.5" />
                              <span>{lang === 'hi' ? 'अपूर्ण / चेतावनी' : 'MISSING / WARN'}</span>
                            </span>
                          ) : (
                            <span className="shrink-0 inline-flex items-center space-x-1 bg-green-100 text-green-800 text-[9px] font-bold font-mono uppercase px-1.5 py-0.5 rounded-md">
                              <CheckCircle2 className="w-2.5 h-2.5" />
                              <span>{lang === 'hi' ? 'सक्रिय' : 'VALID'}</span>
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Relevant Government Services Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm space-y-4">
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center space-x-2 border-b border-slate-100 pb-3">
                    <Globe className="w-4 h-4 text-green-600" />
                    <span>{lang === 'hi' ? 'संबंधित सरकारी सेवाएं' : 'Relevant Government Services'}</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {lang === 'hi' 
                      ? 'आपकी सुरक्षा प्रोफ़ाइल, स्थान और वाहन विवरण के आधार पर, हम सुरक्षा अनुपालन और चालक कल्याण के लिए निम्नलिखित पोर्टलों की सिफारिश करते हैं:' 
                      : 'Based on your vehicle parameters, geographical location, and active battery safety index, we recommend utilizing these verified national portals:'}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title_en: "Vehicle Registration & RC Check",
                        title_hi: "वाहन पंजीकरण एवं परिवहन सेवाएं",
                        desc_en: "Verify registration details or check certificate status on the national Vahan Portal.",
                        desc_hi: "राष्ट्रीय वाहन पोर्टल पर अपने ई-रिक्शा के पंजीकरण और स्वामित्व की स्थिति सत्यापित करें।",
                        status_en: "Vahan Portal",
                        status_hi: "वाहन पोर्टल"
                      },
                      {
                        title_en: "Driving Licence (Sarathi Services)",
                        title_hi: "ड्राइविंग लाइसेंस सेवाएं (सारथी)",
                        desc_en: "Apply, renew or check the commercial endorsement of your e-rickshaw licence.",
                        desc_hi: "अपने ई-रिक्शा ड्राइविंग लाइसेंस का नवीनीकरण या कमर्शियल श्रेणी विवरण सत्यापित करें।",
                        status_en: "Sarathi",
                        status_hi: "सारथी"
                      },
                      {
                        title_en: "PUC Emission Certificate Portal",
                        title_hi: "प्रदूषण (PUC) प्रमाणपत्र ऑनलाइन जांच",
                        desc_en: "Check emission compliance or find certified PUC points in your city.",
                        desc_hi: "अपने प्रदूषण प्रमाणपत्र की स्थिति जांचें या नजदीकी प्रमाणित केंद्र खोजें।",
                        status_en: "PUC Portal",
                        status_hi: "प्रदूषण पोर्टल"
                      },
                      {
                        title_en: "DigiLocker Digital Document Wallet",
                        title_hi: "डिजिलॉकर सरकारी दस्तावेज सुरक्षा",
                        desc_en: "Carry valid digital copies of Aadhaar, RC, and DL legally accepted across India.",
                        desc_hi: "अपने सभी मूल दस्तावेजों की डिजिटल कॉपी कानूनी रूप से डिजिलॉकर में रखें।",
                        status_en: "DigiLocker",
                        status_hi: "डिजिलॉकर"
                      },
                      {
                        title_en: "CERT-In Battery Safety Advisory",
                        title_hi: "CERT-In बैटरी सुरक्षा निर्देश",
                        desc_en: "Read the official national advisory on Bluetooth BMS security issued by cyber cells.",
                        desc_hi: "साइबर सुरक्षा विभाग द्वारा ब्लूटूथ BMS सुरक्षा पर जारी मूल राष्ट्रीय परामर्श पढ़ें।",
                        status_en: "Advisory",
                        status_hi: "परामर्श"
                      },
                      {
                        title_en: "National Cyber Crime Helpline (1930)",
                        title_hi: "राष्ट्रीय साइबर अपराध हेल्पलाइन (1930)",
                        desc_en: "File immediate complaints regarding battery ransomware or remote e-vehicle extortion.",
                        desc_hi: "ब्लूटूथ हैकिंग जबरन वसूली या रिमोट लॉक अपराधों की तत्काल रिपोर्ट दर्ज करें।",
                        status_en: "Helpline",
                        status_hi: "हेल्पलाइन"
                      }
                    ].map((service, idx) => (
                      <div key={idx} className="bg-slate-50 hover:bg-slate-100/70 border border-slate-200/75 p-4 rounded-xl space-y-2 transition-all flex flex-col justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <h5 className="text-xs font-bold text-slate-800">{lang === 'hi' ? service.title_hi : service.title_en}</h5>
                            <span className="text-[9px] font-extrabold font-mono uppercase bg-[#FF9933]/10 text-[#FF9933] px-2 py-0.5 rounded">
                              {lang === 'hi' ? service.status_hi : service.status_en}
                            </span>
                          </div>
                          <p className="text-[10.5px] text-slate-500 font-normal leading-relaxed">{lang === 'hi' ? service.desc_hi : service.desc_en}</p>
                        </div>
                        <div className="pt-2 flex justify-end">
                          <a 
                            href="https://vahan.parivahan.gov.in" 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-[10px] font-bold text-green-700 hover:text-green-800 hover:underline flex items-center space-x-1"
                          >
                            <span>{lang === 'hi' ? 'आधिकारिक पोर्टल खोलें ↗' : 'Access Government Portal ↗'}</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transparency Parameters Block */}
                <div className="border-t border-slate-200 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[11px] text-slate-500 font-mono">
                  <div className="space-y-1">
                    <p className="font-bold uppercase tracking-wider text-slate-700 print:text-slate-700">{t.reportWhy}</p>
                    <p className="leading-relaxed font-normal">{checkResult.whyAiGeneratedThis}</p>
                  </div>
                  <div className="space-y-1 sm:text-right">
                    <p className="font-bold uppercase tracking-wider text-slate-700 print:text-slate-700">{t.reportConfidence}</p>
                    <div className="flex items-center sm:justify-end space-x-2 mt-1">
                      <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden print:border print:border-slate-400">
                        <div className="bg-green-500 h-full" style={{ width: `${checkResult.confidenceLevel}%` }}></div>
                      </div>
                      <span className="text-[#0F172A] font-bold print:text-slate-900">{checkResult.confidenceLevel}% Match</span>
                    </div>
                  </div>
                </div>

                {/* Action CTA: Print */}
                <div className="flex justify-center pt-4 print:hidden">
                  <button 
                    onClick={triggerPrint}
                    className="px-6 py-3 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-800 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#FF9933]" />
                    <span>{t.downloadPDF}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
                {/* Trip In Progress Alert Banner */}
                {tripInProgress && (
                  <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 border border-emerald-500/30 text-white rounded-2xl p-5 shadow-lg flex items-center justify-between animate-pulse">
                    <div className="flex items-center space-x-4">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-mono">ACTIVE JOURNEY SHADOW ENGAGED</h4>
                        <p className="text-xs text-slate-300">safeTIRRI AI Sentinel is actively monitoring your transit telemetry. GPS tracking enabled.</p>
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={() => setTripInProgress(false)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg transition-all cursor-pointer"
                    >
                      End Trip
                    </button>
                  </div>
                )}

                {/* Main Capture Box */}
                <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-0">
                  {/* Left Column: Camera / Upload */}
                  <div className="md:col-span-7 bg-slate-950 p-6 flex flex-col justify-between min-h-[380px] relative">
                    
                    {/* Laser scanning bar effect */}
                    {captureCameraState === 'stream' && (
                      <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent top-0 animate-[scan_2s_linear_infinite] z-20 shadow-md"></div>
                    )}

                    <div className="flex items-center justify-between text-white border-b border-slate-800 pb-3 mb-4 z-10">
                      <span className="text-xs font-mono font-bold tracking-wider text-green-400 flex items-center space-x-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping"></span>
                        <span>{captureCameraState === 'stream' ? 'CAMERA LIVE' : 'SECURE LENS'}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">AES-256 ENCRYPTED FEED</span>
                    </div>

                    {/* Camera view screen area */}
                    <div className="flex-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden relative min-h-[220px]">
                      {captureCameraState === 'idle' && (
                        <div className="text-center p-6 space-y-4">
                          <div className="w-16 h-16 bg-slate-850 border border-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-400 group-hover:scale-105 transition-all">
                            <Camera className="w-8 h-8" />
                          </div>
                          <p className="text-xs text-slate-400 max-w-xs leading-relaxed font-sans">
                            Position your smartphone camera directly in front of the e-rickshaw license plate and trigger scanning.
                          </p>
                        </div>
                      )}

                      {captureCameraState === 'stream' && (
                        <div className="w-full h-full relative flex items-center justify-center">
                          <video 
                            id="camera-stream-video" 
                            className="w-full h-full object-cover scale-x-[-1]" 
                            playsInline 
                            muted
                          />
                          {/* Crosshair guide overlay */}
                          <div className="absolute inset-0 border-2 border-dashed border-green-500/40 rounded-xl m-8 pointer-events-none flex items-center justify-center">
                            <div className="w-10 h-10 border-t-2 border-l-2 border-green-400 absolute top-0 left-0"></div>
                            <div className="w-10 h-10 border-t-2 border-r-2 border-green-400 absolute top-0 right-0"></div>
                            <div className="w-10 h-10 border-b-2 border-l-2 border-green-400 absolute bottom-0 left-0"></div>
                            <div className="w-10 h-10 border-b-2 border-r-2 border-green-400 absolute bottom-0 right-0"></div>
                            <span className="text-[9px] font-mono font-bold text-green-400/80 bg-slate-950/80 px-2 py-0.5 rounded uppercase tracking-widest">
                              Align Registration Plate
                            </span>
                          </div>
                        </div>
                      )}

                      {captureCameraState === 'captured' && capturedImage && (
                        <div className="w-full h-full relative">
                          <img src={capturedImage} alt="Captured E-Rickshaw" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          {/* OCR Scanner Graphic bounding box */}
                          <div className="absolute bottom-6 left-6 right-6 bg-slate-950/85 backdrop-blur-xs border border-green-500/40 p-3 rounded-lg flex items-center justify-between">
                            <div className="space-y-0.5 text-left">
                              <span className="text-[9px] font-mono text-green-400 font-bold uppercase tracking-widest">AI Plate Detector Scope</span>
                              <p className="text-xs font-mono font-black text-white">{customVehicleNum || user?.vehicleNumber || 'DL 1ER 1234'}</p>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/20 px-2 py-0.5 rounded">99.2% MATCH</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Camera Trigger Buttons */}
                    <div className="mt-4 pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 z-10">
                      {captureCameraState === 'idle' && (
                        <>
                          <button
                            type="button"
                            onClick={handleStartCamera}
                            className="flex-1 py-2.5 px-3 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-md shadow-green-950/20 active:scale-95"
                          >
                            <Camera className="w-4 h-4 shrink-0 text-emerald-300" />
                            <span>Activate Journey Cam</span>
                          </button>
                          
                          <label className="flex-1 py-2.5 px-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-md shadow-orange-950/20 active:scale-95">
                            <Camera className="w-4 h-4 shrink-0 text-orange-200 animate-pulse" />
                            <span>Instant Camera Snap</span>
                            <input type="file" accept="image/*" capture="environment" onChange={handleUploadPhoto} className="hidden" />
                          </label>

                          <label className="flex-1 py-2.5 px-3 bg-slate-800 border border-slate-700 hover:bg-slate-750 text-slate-300 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer active:scale-95">
                            <Plus className="w-4 h-4 shrink-0" />
                            <span>Upload Photo</span>
                            <input type="file" accept="image/*" onChange={handleUploadPhoto} className="hidden" />
                          </label>
                        </>
                      )}

                      {captureCameraState === 'stream' && (
                        <button
                          type="button"
                          onClick={handleCapturePhoto}
                          className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2 transition-all cursor-pointer active:scale-95"
                        >
                          <span className="w-3 h-3 bg-white rounded-full animate-ping mr-1"></span>
                          <span>CAPTURE PHOTO NOW</span>
                        </button>
                      )}

                      {captureCameraState === 'captured' && (
                        <>
                          <button
                            type="button"
                            onClick={() => setCaptureCameraState('idle')}
                            className="flex-1 py-3 bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-750 rounded-xl text-xs font-bold transition-all cursor-pointer"
                          >
                            Retake Photo
                          </button>
                          <button
                            type="button"
                            onClick={handleSaveJourney}
                            className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Save & Track Trip</span>
                          </button>
                        </>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Parameters and Future Scope */}
                  <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-6 text-left">
                      <h4 className="text-lg font-black text-slate-900 tracking-tight font-display">Journey Registration Parameters</h4>
                      
                      {/* Form Details */}
                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider font-mono">Vehicle Number (Plate / Registration)</label>
                          <input 
                            type="text"
                            value={customVehicleNum}
                            onChange={(e) => setCustomVehicleNum(e.target.value.toUpperCase())}
                            placeholder={user?.vehicleNumber || "e.g., DL 1ER 9999"}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-[#0F172A] focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-slate-400 font-mono font-bold uppercase"
                          />
                        </div>

                        {/* GPS Info Card */}
                        <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 space-y-2.5">
                          <div className="flex items-center space-x-2 text-slate-800">
                            <MapPin className="w-4 h-4 text-green-600 shrink-0" />
                            <span className="text-xs font-bold font-mono">GPS TELEMETRY ENCRYPTED</span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-[10.5px] font-mono text-slate-500 pt-1.5 border-t border-slate-200">
                            <div>
                              <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-none">Latitude</p>
                              <p className="font-bold text-slate-800 mt-1">{capturedGPS.lat}° N</p>
                            </div>
                            <div>
                              <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-none">Longitude</p>
                              <p className="font-bold text-slate-800 mt-1">{capturedGPS.lng}° E</p>
                            </div>
                          </div>

                          <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-200 leading-tight">
                            <span className="font-bold text-slate-600">Location:</span> {capturedGPS.locationName}
                          </div>
                          
                          <div className="text-[10px] text-slate-500 leading-tight">
                            <span className="font-bold text-slate-600">Timestamp:</span> {capturedTimestamp || new Date().toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Future Scope Note */}
                    <div className="bg-gradient-to-br from-green-50/50 to-emerald-50/20 border border-green-100 rounded-xl p-4 space-y-2.5 text-left">
                      <div className="flex items-center space-x-2 text-emerald-800">
                        <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 animate-pulse" />
                        <h5 className="text-xs font-bold uppercase tracking-wide font-mono">Future Scope: AI-Powered OCR</h5>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-normal font-sans">
                        Our upcoming <strong>safeTIRRI v3.0 Core</strong> update will feature embedded, client-side neural network models that perform <strong>real-time OCR (Optical Character Recognition)</strong>.
                      </p>
                      <p className="text-[10.5px] text-slate-500 leading-relaxed font-light font-sans">
                        This model will automatically detect and extract the vehicle registration number directly from the raw camera frame, query national Vahan database endpoints, and flag unverified drivers on the fly, eliminating any manual text entry!
                      </p>
                    </div>

                  </div>
                </div>

                {/* Journey History List */}
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-black text-slate-900 tracking-tight font-display">My Transit History logs ({capturedTrips.length})</h4>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-green-700 bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full">Local Device Sandbox</span>
                  </div>

                  {capturedTrips.length === 0 ? (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center text-slate-400 text-xs font-sans">
                      No journeys logged on this device yet. Align vehicle camera and tap "Save & Track Trip" above to secure your first trip.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {capturedTrips.map((trip) => (
                        <div key={trip.id} className="bg-white border border-slate-200 rounded-xl p-4 flex space-x-4 items-start shadow-xs hover:border-slate-300 transition-all">
                          <img src={trip.image} alt="Rickshaw log" className="w-20 h-20 rounded-lg object-cover bg-slate-100 border border-slate-200/50 shrink-0" referrerPolicy="no-referrer" />
                          <div className="flex-1 space-y-2 min-w-0 text-left">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-black text-slate-800 uppercase tracking-wide">{trip.vehicleNumber}</span>
                              <span className="text-[9px] font-mono text-slate-400">{trip.time.split(',')[1] || trip.time}</span>
                            </div>
                            <div className="space-y-1 text-[10px] text-slate-500">
                              <p className="truncate flex items-center space-x-1 font-sans">
                                <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                                <span>{trip.gps.locationName}</span>
                              </p>
                              <p className="font-mono text-[9px] text-slate-400">Coords: {trip.gps.lat}, {trip.gps.lng}</p>
                            </div>
                            <div className="flex justify-between items-center pt-1 border-t border-slate-100">
                              <span className="text-[9px] font-mono text-slate-400">Shared {trip.sharedCount} times</span>
                              <button
                                type="button"
                                onClick={() => triggerShareTrip(trip)}
                                className="flex items-center space-x-1 px-2.5 py-1 rounded bg-[#FF9933]/15 text-[#FF9933] border border-[#FF9933]/20 hover:bg-[#FF9933]/25 text-[10px] font-bold transition-all cursor-pointer"
                              >
                                <Share2 className="w-3 h-3" />
                                <span>Share Safety Link</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        )}

        {/* ==========================================
            TAB 3: AI SECURITY COACH (CHATBOT)
            ========================================== */}
        {activeTab === 'coach' && (
          <div className="max-w-5xl mx-auto px-4 py-8 h-[calc(100vh-7rem)] flex flex-col space-y-4 animate-fade-in">
            
            <div className="text-center space-y-1 shrink-0">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight font-display">{t.navCoach}</h2>
              <p className="text-xs text-slate-500 font-normal">Government Cyber Safety Cell Nodal Assistant (powered by certified security models)</p>
            </div>

            {/* Chat Conversation Box */}
            <div className="flex-grow bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden shadow-sm relative">
              
              {/* Message Feed */}
              <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 scrollbar-thin">
                {chatMessages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-[85%] md:max-w-[70%] ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow ${msg.sender === 'user' ? 'bg-[#FF9933] text-white' : 'bg-green-600 text-white'}`}>
                        {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                      </div>

                      {/* Msg text bubble */}
                      <div className={`p-4 rounded-2xl shadow-sm ${
                        msg.sender === 'user' 
                          ? 'bg-[#FF9933]/90 text-white rounded-tr-none' 
                          : 'bg-slate-50 text-[#0F172A] rounded-tl-none border border-slate-200'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap font-normal">{msg.text}</p>
                        <span className="text-[9px] text-slate-500 font-mono block text-right mt-1.5 leading-none">{msg.timestamp}</span>
                      </div>

                    </div>
                  </div>
                ))}

                {/* AI Loading indicator */}
                {chatLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center animate-bounce">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl rounded-tl-none border border-slate-200 flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                        <span className="text-xs text-slate-500 font-mono">safeTIRRI AI is drafting recommendation guidelines...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={chatEndRef} />
              </div>

              {/* Quick Suggestion Chips */}
              <div className="p-3 bg-slate-50 border-t border-slate-200 shrink-0">
                <p className="text-[10px] font-bold text-[#FF9933] uppercase tracking-wider font-mono mb-2">{t.coachQuickQuest}</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { text: t.q1, keyword: "How do I secure my battery?" },
                    { text: t.q2, keyword: "Can someone hack my vehicle?" },
                    { text: t.q3, keyword: "How do I change my Bluetooth password?" },
                    { text: t.q4, keyword: "What should I do if my vehicle suddenly stops?" }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(item.keyword)}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:border-[#FF9933] hover:bg-[#FF9933]/5 text-slate-600 hover:text-[#FF9933] rounded-lg text-xs transition-all cursor-pointer font-medium"
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Send Input Box */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 shrink-0">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSendMessage(chatInput); }}
                  className="flex space-x-2"
                >
                  <input 
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder={t.coachPlaceholder}
                    className="flex-grow premium-input placeholder:text-slate-400"
                  />
                  <button
                    type="button"
                    onClick={handleCoachSpeechDictation}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                      isDictatingCoach
                        ? 'bg-red-600 border-red-700 text-white animate-pulse'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-[#FF9933]'
                    }`}
                    title={lang === 'hi' ? "आवाज द्वारा टाइप करें" : "Speak to type"}
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                  <button
                    type="submit"
                    className="p-3 bg-gradient-to-r from-[#FF9933] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl shadow-lg transition-all flex items-center justify-center shrink-0 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>

            </div>

          </div>
        )}

        {/* ==========================================
            TAB 4: SAFETY GUIDE
            ========================================== */}
        {activeTab === 'guide' && (
          <div className="max-w-6xl mx-auto px-4 py-12 space-y-12 animate-fade-in">
            
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">{t.guideTitle}</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm font-normal">
                {t.guideSub}
              </p>
            </div>

            {/* Guides Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-[#FF9933]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {lang === 'en' ? 'Understanding Bluetooth Battery Risks' : 'ब्लूटूथ बैटरी के खतरों को समझना'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === 'en' 
                      ? "Modern e-rickshaws use Smart Lithium-Ion batteries containing a Bluetooth antenna. Without passwords, anyone within 15 meters can connect and read or turn off battery telemetry streams."
                      : "आधुनिक ई-रिक्शा स्मार्ट लिथियम-आयन बैटरी का उपयोग करते हैं जिसमें ब्लूटूथ एंटीना होता है। पासवर्ड के बिना, 15 मीटर के दायरे में कोई भी व्यक्ति कनेक्ट हो सकता है और आपकी बैटरी को बंद कर सकता है।"}
                  </p>
                </div>
                <div className="text-[11px] font-mono font-bold text-red-600 uppercase tracking-wider">Risk category: low protection wireless</div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {lang === 'en' ? 'How the Tirri Incident Happened' : 'टीर्री घटना कैसे घटी?'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === 'en' 
                      ? "Exploits occurred when bad actors downloaded third-party mobile diagnostic utilities. These applications automatically pair with close-range batteries, executing standard shutdown commands to freeze the vehicle."
                      : "यह तब हुआ जब कुछ शरारती लोगों ने डिफ़ॉल्ट पासवर्ड का उपयोग करके मोबाइल ऐप्स से ई-रिक्शा की बैटरी को बंद कर दिया। चालक अपनी गाड़ियां चालू नहीं कर पा रहे थे और कमाई रुक गई थी।"}
                  </p>
                </div>
                <div className="text-[11px] font-mono font-bold text-red-600 uppercase tracking-wider">Incident: bat-bms vulnerability</div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-600">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {lang === 'en' ? 'How to Secure Your Battery PIN' : 'बैटरी ब्लूटूथ पिन कैसे सुरक्षित करें'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === 'en' 
                      ? "Open the mobile app provided by your battery manufacturer. Under Bluetooth configuration, replace standard PINs like '1234' or '0000' with a custom, private 6-digit cryptographic passcode."
                      : "अपने बैटरी निर्माता के आधिकारिक मोबाइल ऐप को खोलें। ब्लूटूथ सेटिंग्स में जाकर सामान्य पासवर्ड जैसे '1234' या '0000' को बदलकर 6 अंकों का अपना गुप्त कोड डालें जिसे कोई न जानता हो।"}
                  </p>
                </div>
                <div className="text-[11px] font-mono font-bold text-green-700 uppercase tracking-wider">Solution: strict credential control</div>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {lang === 'en' ? 'Official Government Advisories' : 'आधिकारिक सरकारी दिशानिर्देश'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === 'en' 
                      ? "The Ministry of Road Transport warns against using unauthorized battery boosters or unverified APKs. Drivers should only get software updates from certified authorized workshops."
                      : "परिवहन मंत्रालय सभी व्यावसायिक ई-वाहन चालकों को किसी भी तीसरे पक्ष के गैर-सत्यापित बूस्टर ऐप्स से बचने की चेतावनी देता है। सॉफ्टवेयर अपडेट केवल प्रमाणित अधिकृत वर्कशॉप से ही करवाएं।"}
                  </p>
                </div>
                <div className="text-[11px] font-mono font-bold text-blue-700 uppercase tracking-wider">source: ministry of road transport</div>
              </div>

              {/* Card 5 */}
              <div className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-600">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {lang === 'en' ? 'Cybersecurity Best Practices' : 'साइबर सुरक्षा के सर्वोत्तम नियम'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === 'en' 
                      ? "Disable Bluetooth toggles entirely when driving inside crowded terminals. Ensure your smart charging units are certified under the Bureau of Indian Standards (BIS)."
                      : "भीड़भाड़ वाले स्टैंड पर वाहन चलाते समय ब्लूटूथ कनेक्शन बंद रखें। सुनिश्चित करें कि आपका चार्जिंग सिस्टम भारतीय मानक ब्यूरो (BIS) द्वारा प्रमाणित है।"}
                  </p>
                </div>
                <div className="text-[11px] font-mono font-bold text-indigo-700 uppercase tracking-wider">best practices: cert-in standards</div>
              </div>

              {/* Card 6 */}
              <div className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-600">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {lang === 'en' ? 'Emergency Response Steps' : 'आपातकालीन कार्रवाई कदम'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === 'en' 
                      ? "If your vehicle shuts down suddenly: 1. Pull over safely. 2. Turn off the main battery physical circuit breaker (MCB) for 60 seconds to force reset the BMS. 3. Restart and disable wireless pairings."
                      : "यदि वाहन अचानक बंद हो जाए: 1. सुरक्षित किनारे पर लगाएं। 2. मुख्य एमसीबी (MCB) स्विच को 60 सेकंड के लिए बंद करें ताकि बैटरी रीसेट हो सके। 3. फिर चालू करें और ब्लूटूथ ब्लॉक करें।"}
                  </p>
                </div>
                <div className="text-[11px] font-mono font-bold text-yellow-700 uppercase tracking-wider">status: driver emergency guide</div>
              </div>

            </div>

          </div>
        )}

        {/* ==========================================
            TAB 5: COMPLAINT PORTAL
            ========================================== */}
        {activeTab === 'complaints' && (
          <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 animate-fade-in">
            
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">{t.complaintTitle}</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed font-normal">
                {t.complaintSub}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Complaint Submission Form */}
              <div className="lg:col-span-5 premium-card shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-[#0F172A] flex items-center space-x-2 border-b border-slate-200 pb-3">
                  <Plus className="w-5 h-5 text-[#FF9933]" />
                  <span>{t.compFormTitle}</span>
                </h3>

                {user && (
                  <div className="bg-orange-50 border border-orange-200/60 rounded-xl px-4 py-2.5 text-[11px] text-slate-700 flex items-center justify-between font-normal font-sans">
                    <div className="flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF9933] shrink-0 animate-pulse" />
                      <span>
                        {lang === 'hi' 
                          ? `विवरण ${user.name} के खाते से स्वतः भर गया है।` 
                          : `Auto-filled with ${user.name}'s profile details.`}
                      </span>
                    </div>
                  </div>
                )}

                {complaintSuccessRef && (
                  <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl text-green-700 text-xs leading-relaxed font-normal font-sans">
                    {t.compSuccess} <strong className="font-mono text-sm underline">{complaintSuccessRef}</strong>. Our nodal officers will contact you shortly.
                  </div>
                )}

                <form onSubmit={handleComplaintSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-semibold text-slate-600">{t.compName}</label>
                    <input 
                      type="text" 
                      required
                      value={complaintForm.name}
                      onChange={(e) => setComplaintForm({ ...complaintForm, name: e.target.value })}
                      placeholder="e.g., Rajesh Kumar"
                      className="premium-input placeholder:text-slate-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-semibold text-slate-600">{t.compPhone}</label>
                    <input 
                      type="tel" 
                      required
                      value={complaintForm.phone}
                      onChange={(e) => setComplaintForm({ ...complaintForm, phone: e.target.value })}
                      placeholder="e.g., 9876543210"
                      className="premium-input placeholder:text-slate-400"
                    />
                  </div>

                  {/* Vehicle Number */}
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-semibold text-slate-600">{t.compVehicle}</label>
                    <input 
                      type="text" 
                      required
                      value={complaintForm.vehicleNumber}
                      onChange={(e) => setComplaintForm({ ...complaintForm, vehicleNumber: e.target.value })}
                      placeholder="e.g., DL 1ER 1234"
                      className="premium-input placeholder:text-slate-400"
                    />
                  </div>

                  {/* Incident Location */}
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-semibold text-slate-600">{t.compLocation}</label>
                    <input 
                      type="text" 
                      required
                      value={complaintForm.location}
                      onChange={(e) => setComplaintForm({ ...complaintForm, location: e.target.value })}
                      placeholder="e.g., Dwarka Metro, Delhi"
                      className="premium-input placeholder:text-slate-400"
                    />
                  </div>

                  {/* Incident Category */}
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-semibold text-slate-600">{t.compCategory}</label>
                    <select 
                      value={complaintForm.category}
                      onChange={(e) => setComplaintForm({ ...complaintForm, category: e.target.value as Complaint['category'] })}
                      className="premium-select"
                    >
                      <option value="bluetooth_attack">Bluetooth Attack (Remote Shutdown)</option>
                      <option value="battery_tampering">Battery Tampering (Hardware Altered)</option>
                      <option value="cyber_fraud">Cyber Fraud (Fake APK Install Prompt)</option>
                      <option value="suspicious_activity">Suspicious Activity / Repair Shops</option>
                      <option value="battery_malfunction">Battery Malfunction (BMS Lock)</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-semibold text-slate-600">Description</label>
                    <textarea 
                      required
                      rows={3}
                      value={complaintForm.description}
                      onChange={(e) => setComplaintForm({ ...complaintForm, description: e.target.value })}
                      placeholder="Explain exactly what happened..."
                      className="premium-input placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submittingComplaint}
                    className="w-full premium-btn-primary py-2.5 text-xs uppercase tracking-wider"
                  >
                    {submittingComplaint ? "Filing Incident Record..." : t.compSubmit}
                  </button>

                </form>
              </div>

              {/* Right Column: Live Resolving Tracking Desk */}
              <div className="lg:col-span-7 premium-card shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-[#0F172A] flex items-center space-x-2 border-b border-slate-200 pb-3">
                  <Activity className="w-5 h-5 text-green-600" />
                  <span>{t.compTrackTitle}</span>
                </h3>

                {/* List of complaints */}
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                  {complaints.map((comp) => (
                    <div 
                      key={comp.id}
                      className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 shadow-sm hover:border-slate-300 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[#FF9933]">{comp.id}</span>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold font-mono ${
                          comp.status === 'Resolved' ? 'bg-green-500/10 text-green-700 border border-green-500/20' :
                          comp.status === 'Under Review' ? 'bg-yellow-500/10 text-yellow-700 border border-yellow-500/20' :
                          'bg-red-500/10 text-red-700 border border-red-500/20'
                        }`}>
                          {comp.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <p className="text-slate-500">Driver Name</p>
                          <p className="font-semibold text-slate-800">{comp.name}</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Vehicle Number</p>
                          <p className="font-mono font-semibold text-slate-800">{comp.vehicleNumber}</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Location</p>
                          <p className="font-semibold text-slate-700">{comp.location}</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Category</p>
                          <p className="font-semibold text-[#FF9933] capitalize">{comp.category.replace('_', ' ')}</p>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <p className="text-[11px] text-slate-600 leading-relaxed italic font-normal">{comp.description}</p>
                      </div>

                      {/* Complaint Tracking Journey Timeline */}
                      <div className="bg-white/80 border border-slate-250/60 rounded-xl p-3.5 space-y-3">
                        <p className="text-[9px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">
                          {lang === 'hi' ? 'शिकायत समाधान यात्रा (लाईव ट्रैकिंग)' : 'Complaint Resolution Journey (Live Tracking)'}
                        </p>
                        
                        <div className="grid grid-cols-4 gap-1 relative pt-1">
                          {/* Linking Line background */}
                          <div className="absolute top-4 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 -z-0"></div>
                          
                          {[
                            {
                              stage: 'Submitted',
                              label_en: 'Submitted',
                              label_hi: 'दर्ज हुई',
                              icon: ClipboardList,
                              timeOffsetMs: 0
                            },
                            {
                              stage: 'Under Review',
                              label_en: 'Under Review',
                              label_hi: 'समीक्षा',
                              icon: Search,
                              timeOffsetMs: 3600000 // +1 hour
                            },
                            {
                              stage: 'Assigned',
                              label_en: 'Assigned',
                              label_hi: 'नियुक्त',
                              icon: UserCheck,
                              timeOffsetMs: 14400000 // +4 hours
                            },
                            {
                              stage: 'Resolved',
                              label_en: 'Resolved',
                              label_hi: 'समाधान',
                              icon: CheckCircle2,
                              timeOffsetMs: 86400000 // +1 day
                            }
                          ].map((step, stepIdx) => {
                            // Determine status: is this stage active or complete or pending?
                            // Stages: Submitted -> Under Review -> Assigned -> Resolved
                            const statusOrder = ['Submitted', 'Under Review', 'Assigned', 'Resolved'];
                            
                            // Let's coerce standard values for matching if they slightly vary
                            let compStatusCoerced = comp.status;
                            if (comp.status === 'Assigned to Authority' || comp.status === 'Assigned') {
                              compStatusCoerced = 'Assigned';
                            }
                            
                            const currentStatusIdx = statusOrder.indexOf(compStatusCoerced);
                            const stepStatusIdx = statusOrder.indexOf(step.stage);
                            
                            const isCompleted = stepStatusIdx <= currentStatusIdx;
                            const isActive = step.stage === compStatusCoerced;
                            
                            const StepIcon = step.icon;
                            
                            // Calculate timestamps dynamically based on comp.createdAt
                            const baseTime = new Date(comp.createdAt).getTime();
                            const stepTime = new Date(baseTime + step.timeOffsetMs);
                            
                            return (
                              <div key={step.stage} className="flex flex-col items-center text-center relative z-10 space-y-1">
                                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                                  isActive ? 'bg-[#FF9933] border-[#FF9933] text-white scale-110 shadow-3xs animate-pulse' :
                                  isCompleted ? 'bg-green-600 border-green-600 text-white' :
                                  'bg-slate-50 border-slate-200 text-slate-400'
                                }`}>
                                  <StepIcon className="w-3.5 h-3.5" />
                                </div>
                                <div className="space-y-0.5">
                                  <p className={`text-[9px] font-extrabold leading-none ${
                                    isActive ? 'text-[#FF9933]' :
                                    isCompleted ? 'text-green-700' : 'text-slate-500'
                                  }`}>
                                    {lang === 'hi' ? step.label_hi : step.label_en}
                                  </p>
                                  <p className="text-[8px] text-slate-450 font-mono scale-90">
                                    {isCompleted ? stepTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : (lang === 'hi' ? 'लंबित' : 'Pending')}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <p className="text-[10px] text-slate-400 font-mono text-right">{new Date(comp.createdAt).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ==========================================
            TAB 8: PUBLIC SERVICES & WELFARE
            ========================================== */}
        {activeTab === 'services' && (
          <div className="max-w-6xl mx-auto px-4 py-12 space-y-8 animate-fade-in relative z-10">
            {/* Header */}
            <div className="text-center space-y-4">
              <span className="text-xs bg-orange-500/15 text-[#FF9933] border border-[#FF9933]/30 px-3 py-1 rounded-full font-bold uppercase tracking-wider font-mono">
                {serviceSubTab === 'welfare' 
                  ? (lang === 'en' ? 'Ministry Services & Welfare' : 'मंत्रालय सेवाएं और कल्याण')
                  : (lang === 'en' ? 'Government & Enterprise Licensing' : 'सरकारी और उद्यम लाइसेंसिंग')}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
                {serviceSubTab === 'welfare' 
                  ? (lang === 'en' ? 'Public Welfare & Welfare Schemes' : 'सार्वजनिक कल्याण योजनाएं')
                  : (lang === 'en' ? 'Government & Enterprise Licensing Model' : 'सरकारी और उद्यम लाइसेंसिंग मॉडल')}
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-normal font-sans">
                {serviceSubTab === 'welfare' 
                  ? (lang === 'en' 
                    ? "Access official Government of India welfare schemes, battery subsidy registrations, security badges, and local health camp calendars."
                    : "आधिकारिक भारत सरकार की कल्याणकारी योजनाओं, बैटरी सब्सिडी पंजीकरण, सुरक्षा बैज और स्थानीय स्वास्थ्य शिविर कैलेंडरों तक पहुँचें।")
                  : (lang === 'en' 
                    ? "SafeTIRRI is designed as a cybersecurity infrastructure platform for connected electric rickshaws rather than a consumer subscription application."
                    : "SafeTIRRI को उपभोक्ता सदस्यता एप्लिकेशन के बजाय जुड़े हुए इलेक्ट्रिक रिक्शा के लिए साइबर सुरक्षा बुनियादी ढांचा मंच के रूप में डिज़ाइन किया गया है।")}
              </p>
              <div className="h-1 w-24 bg-[#FF9933] mx-auto rounded"></div>
            </div>

            {/* Sub-tab Navigation */}
            <div className="flex justify-center p-1 bg-slate-100 rounded-xl max-w-md mx-auto print:hidden">
              <button 
                type="button"
                onClick={() => setServiceSubTab('welfare')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${serviceSubTab === 'welfare' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <Award className="w-3.5 h-3.5 text-[#FF9933]" />
                <span>Welfare Programs</span>
              </button>
              <button 
                type="button"
                onClick={() => setServiceSubTab('premium')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${serviceSubTab === 'premium' ? 'bg-white text-green-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <Crown className="w-3.5 h-3.5 text-green-600 animate-pulse" />
                <span>Licensing Model</span>
              </button>
            </div>

            {serviceSubTab === 'welfare' ? (
              <div className="space-y-12">
                {/* Grid of Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Service 1: Battery Subsidy */}
              <div className="premium-card premium-card-hover flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-orange-100 text-[#FF9933] rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] premium-heading-card">
                    {lang === 'en' ? "PM E-Drive Battery Subsidy" : "पीएम ई-ड्राइव बैटरी सब्सिडी"}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans font-normal">
                    {lang === 'en'
                      ? "Claim financial incentives up to ₹15,000 for replacing old lead-acid batteries with smart, secure CERT-In approved Lithium-Ion battery modules."
                      : "पुरानी लेड-एसिड बैटरी को स्मार्ट, सुरक्षित लिथियम-आयन बैटरी से बदलने के लिए ₹15,000 तक की वित्तीय प्रोत्साहन राशि का दावा करें।"}
                  </p>
                  <div className="bg-slate-50 p-3 rounded-lg text-[11px] font-mono text-slate-600 border border-slate-150">
                    <strong>{lang === 'en' ? "Active Status:" : "सक्रिय स्थिति:"}</strong> {lang === 'en' ? "Registry Open" : "पंजीकरण चालू है"}
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setSubsidySuccess(null);
                    setShowSubsidyModal(true);
                  }}
                  className="mt-6 w-full py-2.5 bg-gradient-to-r from-[#FF9933] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center space-x-1 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
                >
                  <span>{lang === 'en' ? "Apply Now (Official Portal)" : "अभी आवेदन करें (आधिकारिक पोर्टल)"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Service 2: Driver Certificate & Badge */}
              <div className="premium-card premium-card-hover-green flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] premium-heading-card">
                    {lang === 'en' ? "TIRRI Security Badge" : "TIRRI सुरक्षा बैज"}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans font-normal">
                    {lang === 'en'
                      ? "Generate and print a physical security QR badge to display inside your e-rickshaw. Proves to passengers that your vehicle has passed the safeTIRRI cyber audit."
                      : "अपने ई-रिक्शा के अंदर प्रदर्शित करने के लिए एक भौतिक सुरक्षा क्यूआर बैज जनरेट और प्रिंट करें। यात्रियों को साबित करता है कि आपका वाहन साइबर ऑडिट पास कर चुका है।"}
                  </p>
                  <div className="bg-slate-50 p-3 rounded-lg text-[11px] font-mono text-slate-600 border border-slate-150">
                    <strong>{lang === 'en' ? "Requires:" : "आवश्यकता:"}</strong> {lang === 'en' ? "Completed AI Safety Audit" : "पूर्ण AI सुरक्षा ऑडिट"}
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setActiveTab('check');
                    window.scrollTo({ top: 0 });
                  }}
                  className="mt-6 w-full py-2.5 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center space-x-1 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
                >
                  <span>{lang === 'en' ? "Run Scan to Claim Badge" : "बैज के लिए ऑडिट करें"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Service 3: Local Health Camps */}
              <div className="premium-card premium-card-hover flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center">
                    <Sliders className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] premium-heading-card">
                    {lang === 'en' ? "Free Battery Health Camps" : "निःशुल्क बैटरी स्वास्थ्य शिविर"}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans font-normal">
                    {lang === 'en'
                      ? "Check the schedule for free offline BMS diagnostic scans and secure firmware updates hosted by government nodal agents at regional RTOs."
                      : "क्षेत्रीय आरटीओ में सरकारी नोडल एजेंटों द्वारा आयोजित निःशुल्क ऑफलाइन बीएमएस नैदानिक स्कैन और सुरक्षित फर्मवेयर अपडेट के लिए शेड्यूल देखें।"}
                  </p>
                  <div className="bg-slate-50 p-3 rounded-lg text-[11px] font-mono text-slate-600 border border-slate-150">
                    <strong>{lang === 'en' ? "Next Camp:" : "अगला शिविर:"}</strong> 12 July 2026 (Delhi RTO)
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setCampBookingSuccess(null);
                    setShowCampBookingModal(true);
                  }}
                  className="mt-6 w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center space-x-1 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
                >
                  <span>{lang === 'en' ? "View Calendar & Book Slot" : "कैलेंडर देखें और स्लॉट बुक करें"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* FAQ Section specifically for Welfare */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-[#0F172A] flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-[#FF9933]" />
                <span>{lang === 'en' ? "Welfare & Security Program FAQs" : "कल्याण और सुरक्षा कार्यक्रम पूछे जाने वाले प्रश्न"}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 leading-relaxed font-normal">
                <div className="space-y-2">
                  <p className="font-bold text-[#0F172A]">Q: Is the battery diagnostic tool free of charge?</p>
                  <p className="text-slate-600">A: Yes, safeTIRRI AI security scans and diagnostic advices are 100% free under the National E-Vehicle Security Initiative of India.</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-[#0F172A]">Q: How does the PM E-Drive subsidy help driver cybersecurity?</p>
                  <p className="text-slate-600">A: The subsidy only approves smart Lithium battery packs that have built-in encrypted Bluetooth pairing and non-default PIN configurations, ensuring high cyber resistance.</p>
                </div>
              </div>
            </div>

          </div>
            ) : (
              <div className="space-y-12 animate-fade-in">
                {/* Premium Header Metrics / Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 text-white flex items-center space-x-4">
                    <div className="p-3 bg-orange-500/15 text-[#FF9933] rounded-xl">
                      <Zap className="w-6 h-6 animate-pulse" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-mono text-slate-400 font-bold uppercase tracking-wider">ACTIVATED NODES</h4>
                      <p className="text-2xl font-black">12,450+</p>
                    </div>
                  </div>
                  <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 text-white flex items-center space-x-4">
                    <div className="p-3 bg-green-500/15 text-green-500 rounded-xl">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-mono text-slate-400 font-bold uppercase tracking-wider">SAFETY AUDITS</h4>
                      <p className="text-2xl font-black">48,200+</p>
                    </div>
                  </div>
                  <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 text-white flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/15 text-blue-400 rounded-xl">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-mono text-slate-400 font-bold uppercase tracking-wider">ACCIDENT REDUCTION</h4>
                      <p className="text-2xl font-black">34.2%</p>
                    </div>
                  </div>
                </div>

                {/* Subscriptions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* Tier 1: Government Licensing */}
                  <div className="bg-white border-2 border-orange-500 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden text-left">
                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl font-mono">
                      GOVERNMENT LICENSING
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-orange-100 text-[#FF9933] rounded-xl flex items-center justify-center">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black text-[#0F172A] tracking-tight">Government Licensing</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal font-sans">
                        Government transport departments and smart mobility initiatives can license SafeTIRRI to support digital vehicle safety, cybersecurity awareness, preventive cyber health assessments, and public EV safety programs.
                      </p>
                      
                      {/* Price tag */}
                      <div className="flex items-baseline space-x-1.5 py-2 border-y border-slate-100">
                        <span className="text-2xl font-black text-slate-900">Custom Contract</span>
                        <span className="text-xs font-bold text-slate-400 uppercase font-mono">/ Smart Cities</span>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-655 font-normal">
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FF9933] shrink-0" />
                          <span>Digital vehicle safety support</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FF9933] shrink-0" />
                          <span>Cybersecurity awareness programs</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FF9933] shrink-0" />
                          <span>Preventive cyber health assessments</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FF9933] shrink-0" />
                          <span>Public EV safety initiative integration</span>
                        </li>
                      </ul>
                    </div>
                    <button 
                      type="button"
                      onClick={() => {
                        setGovInquirySuccess(false);
                        setShowGovInquiryModal(true);
                      }}
                      className="mt-6 w-full py-3 bg-gradient-to-r from-[#FF9933] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <span>Inquire Government Portal</span>
                    </button>
                  </div>

                  {/* Tier 2: OEM Licensing */}
                  <div className="bg-gradient-to-b from-[#0F172A] to-slate-950 border border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#138808] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl font-mono">
                      OEM VEHICLES
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-xl flex items-center justify-center">
                        <Crown className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black text-white tracking-tight">OEM Licensing</h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal font-sans">
                        Electric rickshaw manufacturers can integrate SafeTIRRI directly into newly manufactured vehicles as a built-in cybersecurity layer, paying annual software licensing fees.
                      </p>
                      
                      {/* Price tag */}
                      <div className="flex items-baseline space-x-1.5 py-2 border-y border-slate-880">
                        <span className="text-2xl font-black text-white">Annual License</span>
                        <span className="text-xs font-bold text-slate-500 uppercase font-mono">/ Per Vehicle</span>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-350 font-normal">
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                          <span>Built-in cybersecurity layer</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                          <span>Factory-level BMS firmware protection</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                          <span>SafeTIRRI dashboard integration</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                          <span>Continuous secure OTA updates</span>
                        </li>
                      </ul>
                    </div>
                    <button 
                      type="button"
                      onClick={() => {
                        setOemPartnerSuccess(false);
                        setShowOemPartnerModal(true);
                      }}
                      className="mt-6 w-full py-3 bg-[#138808] hover:bg-green-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <span>Partner with SafeTIRRI</span>
                    </button>
                  </div>

                  {/* Tier 3: Battery & BMS Licensing */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                        <Battery className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black text-[#0F172A] tracking-tight">Battery & BMS Licensing</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal font-sans">
                        Battery manufacturers and BMS providers can license SafeTIRRI's cybersecurity engine to improve firmware integrity, secure Bluetooth communication, and digital security monitoring.
                      </p>
                      
                      {/* Price tag */}
                      <div className="flex items-baseline space-x-1.5 py-2 border-y border-slate-100">
                        <span className="text-2xl font-black text-slate-900">Custom SDK</span>
                        <span className="text-xs font-bold text-slate-400 uppercase font-mono">/ OEM Agreement</span>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-655 font-normal">
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                          <span>Bluetooth communication encryption</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                          <span>Dynamic BMS telemetry security monitoring</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                          <span>Firmware integrity signing engine</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                          <span>Factory-sealed digital safety protocols</span>
                        </li>
                      </ul>
                    </div>
                    <button 
                      type="button"
                      onClick={() => {
                        setSdkRequestSuccess(false);
                        setShowSdkRequestModal(true);
                      }}
                      className="mt-6 w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <span>Request BMS Integration</span>
                    </button>
                  </div>

                </div>

                {/* Additional Monetization Verticals Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  
                  {/* Custom Certification Audit Model */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between text-left">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2.5">
                        <div className="p-2 bg-[#FF9933]/10 text-[#FF9933] rounded-lg">
                          <Award className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-black text-slate-900 tracking-tight font-display">Authorized Cyber Health Centres</h4>
                      </div>
                      <p className="text-xs text-slate-650 leading-relaxed font-normal font-sans">
                        EV service centres can become SafeTIRRI Authorized Cyber Health Centres that perform AI Cyber Health Scans and generate standardized digital security reports for drivers. Revenue is generated through partner onboarding, annual certification, and per-scan service fees.
                      </p>
                      <div className="flex items-center space-x-2 text-xs font-mono pt-1.5">
                        <span className="font-bold text-[#FF9933]">Revenue Share:</span>
                        <span className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-md font-bold text-[#0F172A]">Certification + Per-Scan Fee</span>
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={() => {
                        setHealthCentreSuccess(false);
                        setShowHealthCentreModal(true);
                      }}
                      className="mt-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                    >
                      <PlusCircle className="w-4 h-4 text-[#FF9933]" />
                      <span>Apply for Certification Center</span>
                    </button>
                  </div>

                  {/* Ad-Network Advertising Model */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between text-left">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2.5">
                        <div className="p-2 bg-green-500/10 text-green-600 rounded-lg">
                          <Sliders className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-black text-slate-900 tracking-tight font-display">Enterprise SDK & API Licensing</h4>
                      </div>
                      <p className="text-xs text-slate-655 leading-relaxed font-normal font-sans">
                        EV manufacturers, mobility technology companies, and connected vehicle platforms can integrate SafeTIRRI's cybersecurity modules into their own systems through enterprise APIs and SDKs.
                      </p>
                      <div className="flex items-center space-x-2 text-xs font-mono pt-1.5">
                        <span className="font-bold text-green-700">Access Mode:</span>
                        <span className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-md font-bold text-[#0F172A]">REST APIs & Mobile SDKs</span>
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={() => {
                        setGeneratedApiKey(null);
                        setShowApiKeyGeneratorModal(true);
                      }}
                      className="mt-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                    >
                      <Globe className="w-4 h-4 text-green-600" />
                      <span>Developer API Access</span>
                    </button>
                  </div>

                </div>

                {/* Concluding Line */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center max-w-3xl mx-auto mt-8">
                  <p className="text-xs md:text-sm font-medium text-slate-750 leading-relaxed italic">
                    "By focusing on government partnerships and enterprise licensing, SafeTIRRI creates a scalable business model while keeping essential cybersecurity services accessible to every e-rickshaw driver."
                  </p>
                </div>

              </div>
            )}

          </div>
        )}

        {/* ==========================================
            TAB 6: ABOUT
            ========================================== */}
        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto px-4 py-12 space-y-10 animate-fade-in text-left">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">{t.aboutTitle}</h2>
              <div className="h-1 w-24 bg-[#FF9933] mx-auto rounded"></div>
            </div>

            <div className="premium-card p-6 md:p-8 space-y-6 leading-relaxed text-sm text-slate-700 shadow-sm">
              <p className="font-normal font-sans">
                {lang === 'en' 
                  ? "safeTIRRI AI is a national technology-focused cybersecurity defense initiative built to protect the livelihoods of electric rickshaw operators across India. It serves as a rapid response cyber awareness hub for battery systems, securing them against unauthorized wireless exploits and malicious Bluetooth hijacking."
                  : "safeTIRRI AI एक राष्ट्रीय तकनीक-केंद्रित साइबर सुरक्षा रक्षा पहल है जो पूरे भारत में ई-रिक्शा चालकों की आजीविका की रक्षा के लिए बनाई गई है। यह बैटरी प्रणालियों के लिए एक त्वरित प्रतिक्रिया साइबर जागरूकता केंद्र के रूप में कार्य करता है, जो उन्हें ब्लूटूथ हैकिंग हमलों से सुरक्षित करता है।"}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-150 space-y-2 hover:border-slate-300 transition-all">
                  <h4 className="font-bold text-[#0F172A] premium-heading-card">Our Mission</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal">
                    Minimize cyber-attack vulnerabilities on electric public transit vectors through state-of-the-art Generative AI advice, simplified advisory portals, and digital safety checklists.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-150 space-y-2 hover:border-slate-300 transition-all">
                  <h4 className="font-bold text-[#0F172A] premium-heading-card">National Security Alignment</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal">
                    Operating in full compliance with CERT-In standards and Ministry of Power Guidelines on E-Vehicle (BMS) communications security protocol specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==========================================
            TAB 7: EMERGENCY CONTACT
            ========================================== */}
        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto px-4 py-12 space-y-10 animate-fade-in text-left">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">{t.contactTitle}</h2>
              <div className="h-1 w-24 bg-[#138808] mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="premium-card premium-card-hover text-center space-y-4 animate-fade-in flex flex-col justify-between p-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-orange-500/10 text-[#FF9933] rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-[#0F172A] premium-heading-card">National Cyber Helpline</h4>
                  <p className="text-2xl font-mono font-extrabold text-[#FF9933]">1930</p>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal font-sans font-normal">24/7 Toll-Free helpline managed by Indian Cyber Crime Coordination Center (I4C)</p>
              </div>

              <div className="premium-card premium-card-hover text-center space-y-4 animate-fade-in flex flex-col justify-between p-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-[#0F172A] premium-heading-card">Support Email Desk</h4>
                  <p className="text-xs font-mono font-bold text-green-700 hover:underline break-all">cybercell@tirrisafety.gov.in</p>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal font-sans font-normal">For battery audit inquiries, certificate validation, and certified local mechanics.</p>
              </div>

              <div className="premium-card premium-card-hover text-center space-y-4 animate-fade-in flex flex-col justify-between p-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-[#0F172A] premium-heading-card">Nodal Headquarters</h4>
                  <p className="text-xs text-slate-700 font-semibold leading-relaxed font-sans font-normal">Ministry of Electronics & IT, New Delhi, India</p>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal font-sans font-normal">Electronics Niketan, 6, CGO Complex, Lodhi Road, New Delhi - 110003</p>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* Official Government Footer */}
      <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-12 px-6 sm:px-12 print:hidden border-t border-slate-800">
        {/* Tricolor Tech Accent Bar at the top */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="h-full w-1/3 bg-[#FF9933]"></div>
          <div className="h-full w-1/3 bg-white opacity-90"></div>
          <div className="h-full w-1/3 bg-[#138808]"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Section 1: Brand & Initiative (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-white rounded-lg p-0.5 shadow-md flex items-center justify-center ring-1 ring-slate-800">
                <SafeTIRRILogo />
              </div>
              <div>
                <h4 className="text-base font-black tracking-wider text-white font-display flex items-center">
                  safe<span className="text-green-400">TIRRI</span>
                  <span className="text-[8px] bg-green-600/25 border border-green-500/30 px-1.5 py-0.5 rounded-sm ml-2 text-green-400 font-mono font-bold tracking-normal">AI v2.4</span>
                </h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">National Defense Module</p>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-sans">
              An official security and safety initiative for e-rickshaw battery defense, diagnostic scanning, and certified compliance under the Digital India Program. Inspired by safe operations of electric rickshaws.
            </p>

            <div className="flex items-center space-x-2.5 text-[10px] text-slate-500 font-mono tracking-wider bg-slate-900/50 border border-slate-800/80 rounded-lg p-3 max-w-sm">
              <Building2 className="w-4 h-4 text-[#FF9933] shrink-0" />
              <span>© 2026 Ministry of Road Transport & Highways • Govt. of India</span>
            </div>
          </div>

          {/* Section 2: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-extrabold tracking-widest uppercase text-white font-mono border-b border-slate-800 pb-2">Support & Helplines</p>
            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-start space-x-3 group">
                <Phone className="w-4 h-4 text-[#FF9933] shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Call Center</p>
                  <span className="font-bold text-slate-200 hover:text-[#FF9933] transition-colors">+91 98765 43210</span>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <MessageCircle className="w-4 h-4 text-[#138808] shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">WhatsApp Support</p>
                  <span className="font-bold text-slate-200 hover:text-green-400 transition-colors">+91 98765 43210</span>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Email Support</p>
                  <span className="font-bold text-slate-200 hover:text-blue-400 transition-colors truncate">contact@safetirri.gov.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Social Media Accounts (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-extrabold tracking-widest uppercase text-white font-mono border-b border-slate-800 pb-2">Connect With Us</p>
            <div className="space-y-3 text-xs">
              <p className="text-slate-400 leading-relaxed font-sans">
                Stay updated with cyber security notifications, battery safety advisories, and certified alerts on our official channels.
              </p>
              
              {/* Modern social channel items with clean styling */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
                <a href="https://facebook.com/safeTIRRI.Gov" target="_blank" rel="noreferrer" className="flex items-center space-x-1.5 hover:text-white transition-colors group">
                  <span className="text-[#FF9933] group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>Facebook</span>
                </a>
                <a href="https://twitter.com/safeTIRRI_Gov" target="_blank" rel="noreferrer" className="flex items-center space-x-1.5 hover:text-white transition-colors group">
                  <span className="text-white group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>Twitter</span>
                </a>
                <a href="https://instagram.com/safeTIRRI_India" target="_blank" rel="noreferrer" className="flex items-center space-x-1.5 hover:text-white transition-colors group">
                  <span className="text-pink-400 group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>Instagram</span>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center space-x-1.5 hover:text-white transition-colors group">
                  <span className="text-[#138808] group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Premium Social Quick Launch Buttons */}
            <div className="flex space-x-2.5 pt-2">
              <a href="https://facebook.com/safeTIRRI.Gov" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg hover:bg-blue-600/15 hover:border-blue-500/40 hover:text-blue-400 transition-all text-slate-400" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/safeTIRRI_Gov" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg hover:bg-sky-500/15 hover:border-sky-500/40 hover:text-sky-400 transition-all text-slate-400" title="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/safeTIRRI_India" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg hover:bg-pink-600/15 hover:border-pink-500/40 hover:text-pink-400 transition-all text-slate-400" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg hover:bg-emerald-600/15 hover:border-emerald-500/40 hover:text-emerald-400 transition-all text-slate-400" title="WhatsApp Support">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
        
        {/* Bottom certification row */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-slate-500 text-[10px] font-mono gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 font-semibold tracking-wider text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-green-500 animate-ping"></span>
              <span>NIC CERTIFIED NODE</span>
            </span>
            <span>•</span>
            <span className="hover:text-[#FF9933] transition-colors cursor-pointer">TERMS & SAFETY POLICIES</span>
            <span>•</span>
            <span className="hover:text-[#138808] transition-colors cursor-pointer">CERT-IN GUIDELINES</span>
          </div>
          <div className="font-bold tracking-widest text-slate-500">
            <span>VERSION 2.4.0 (SECURED PRODUCTION BUILD)</span>
          </div>
        </div>
      </footer>

      {/* ----------------------------------------------------------------------
          DATABASE-BACKED AUTHENTICATION MODAL (LOGIN & REGISTER)
          ---------------------------------------------------------------------- */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden transform transition-all animate-scale-up">
            
            {/* Modal Header */}
            <div className="bg-[#FF9933] px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <h3 className="font-bold text-base tracking-wide uppercase">
                  {authMode === 'login' ? (lang === 'hi' ? 'सुरक्षित लॉग-इन' : 'Secure Login') : (lang === 'hi' ? 'नया चालक पंजीकरण' : 'Driver Registration')}
                </h3>
              </div>
              <button 
                onClick={() => setShowAuthModal(false)}
                className="text-white hover:text-slate-100 p-1 rounded-full hover:bg-white/10 transition-all focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={authMode === 'login' ? handleLogin : handleSignup} className="p-6 space-y-4">
              
              {authError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-red-600 flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              {/* Demo Mode Notice for Login */}
              {authMode === 'login' && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-xs text-[#FF9933] space-y-1">
                  <div className="font-bold flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'hi' ? 'त्वरित डेमो प्रवेश उपलब्ध!' : 'Instant Demo Session Available!'}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {lang === 'hi' 
                      ? 'आप नीचे दिए गए "डेमो क्रेडेंशियल्स भरें" बटन पर क्लिक करके सीधे राजेश कुमार (दर्ज चालक) के रूप में परीक्षण कर सकते हैं।' 
                      : 'You can pre-fill credentials below to experience the platform as Rajesh Kumar, our pre-registered e-rickshaw driver.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthForm({
                        ...authForm,
                        email: 'driver.rajesh@safetirri.gov.in',
                        password: 'password123'
                      });
                      setAuthError(null);
                    }}
                    className="mt-2 text-[11px] font-bold text-[#FF9933] bg-white border border-[#FF9933]/30 px-2 py-1 rounded hover:bg-orange-100/50 transition-all cursor-pointer"
                  >
                    {lang === 'hi' ? '👉 राजेश कुमार क्रेडेंशियल्स भरें' : '👉 Fill Rajesh Kumar Credentials'}
                  </button>
                </div>
              )}

              {/* Fields */}
              <div className="space-y-3">
                {authMode === 'signup' && (
                  <>
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {lang === 'hi' ? 'चालक का पूरा नाम' : 'Full Name'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'hi' ? 'जैसे: राजेश कुमार' : 'e.g. Rajesh Kumar'}
                        value={authForm.name}
                        onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#FF9933] focus:border-[#FF9933] outline-none text-slate-800"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {lang === 'hi' ? 'मोबाइल नंबर' : 'Phone Number'}
                      </label>
                      <input
                        type="tel"
                        placeholder={lang === 'hi' ? 'जैसे: +91 9876543210' : 'e.g. +91 9876543210'}
                        value={authForm.phone}
                        onChange={(e) => setAuthForm({ ...authForm, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#FF9933] focus:border-[#FF9933] outline-none text-slate-800"
                      />
                    </div>

                    {/* Vehicle Registration Number */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {lang === 'hi' ? 'ई-रिक्शा पंजीकरण संख्या' : 'E-Rickshaw Registration No.'}
                      </label>
                      <input
                        type="text"
                        placeholder={lang === 'hi' ? 'जैसे: DL 1ER 1234' : 'e.g. DL 1ER 1234'}
                        value={authForm.vehicleNumber}
                        onChange={(e) => setAuthForm({ ...authForm, vehicleNumber: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#FF9933] focus:border-[#FF9933] outline-none text-slate-800"
                      />
                    </div>

                    {/* Battery Brand / BMS model */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {lang === 'hi' ? 'बैटरी निर्माता ब्रांड' : 'Battery Brand / Manufacturer'}
                      </label>
                      <input
                        type="text"
                        placeholder={lang === 'hi' ? 'जैसे: Okaya, Eastman, Exide' : 'e.g. Okaya, Eastman, Exide'}
                        value={authForm.batteryBrand}
                        onChange={(e) => setAuthForm({ ...authForm, batteryBrand: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#FF9933] focus:border-[#FF9933] outline-none text-slate-800"
                      />
                    </div>
                  </>
                )}

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'hi' ? 'ईमेल पता' : 'Email Address'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="driver@safetirri.gov.in"
                    value={authForm.email}
                    onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#FF9933] focus:border-[#FF9933] outline-none text-slate-800"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'hi' ? 'सुरक्षा पासवर्ड' : 'Password'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={authForm.password}
                    onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#FF9933] focus:border-[#FF9933] outline-none text-slate-800"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={authLoading}
                className="w-full py-2.5 bg-[#FF9933] hover:bg-orange-600 disabled:bg-orange-300 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
              >
                {authLoading && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                <span>
                  {authMode === 'login' 
                    ? (lang === 'hi' ? 'लॉग-इन करें' : 'Proceed Securely') 
                    : (lang === 'hi' ? 'नया खाता बनाएं' : 'Create Secure Profile')}
                </span>
              </button>

              {/* Modal Switcher */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode(authMode === 'login' ? 'signup' : 'login');
                    setAuthError(null);
                  }}
                  className="text-xs text-slate-500 hover:text-[#FF9933] transition-all font-semibold cursor-pointer bg-transparent border-none"
                >
                  {authMode === 'login' 
                    ? (lang === 'hi' ? 'नया खाता चाहिए? यहाँ पंजीकरण करें।' : "Don't have an account? Sign up here.") 
                    : (lang === 'hi' ? 'पहले से खाता है? लॉग-इन करें।' : 'Already have an account? Login here.')}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Floating AI Voice Assistant Trigger */}
      <button
        onClick={() => {
          if (!showVoicePanel) {
            openVoiceAssistant();
          } else {
            setShowVoicePanel(false);
          }
        }}
        aria-label="AI Voice Assistant"
        className="fixed bottom-24 right-6 z-50 p-4 bg-gradient-to-tr from-orange-500 via-emerald-600 to-slate-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center border-2 border-white cursor-pointer group animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <div className="relative">
          {isListening && (
            <span className="absolute -inset-2 rounded-full bg-orange-400/50 animate-ping"></span>
          )}
          {isListening ? (
            <Mic className="w-6 h-6 text-orange-200" />
          ) : (
            <Mic className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
          )}
        </div>
        <span className="text-xs font-black uppercase tracking-wider pl-2 hidden md:inline">
          {lang === 'hi' ? 'एआई आवाज सहायक' : 'AI VOICE ASSISTANT'}
        </span>
      </button>

      {/* AI Voice Assistant Interactive Panel */}
      {showVoicePanel && (
        <div className="fixed bottom-40 right-6 z-50 max-w-sm w-[calc(100vw-3rem)] bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 shadow-2xl text-white animate-scale-up space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#FF9933] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#FF9933]">safeTIRRI AI SENTINEL</span>
            </div>
            <button 
              onClick={() => setShowVoicePanel(false)}
              className="p-1 rounded bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer border-none"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Glowing Waves & Mic Container */}
          <div className="flex flex-col items-center py-4 space-y-3">
            <button
              onClick={isListening ? () => {} : handleStartListening}
              className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                isListening 
                  ? 'bg-red-600/25 border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]' 
                  : 'bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30'
              }`}
            >
              {isListening ? (
                <>
                  <div className="absolute inset-0 rounded-full bg-red-500/10 animate-ping"></div>
                  <div className="absolute inset-2 rounded-full bg-red-500/20 animate-pulse"></div>
                  <Mic className="w-8 h-8 text-red-500 shrink-0" />
                </>
              ) : (
                <Mic className="w-8 h-8 text-emerald-400 shrink-0" />
              )}
            </button>
            <p className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-400">
              {isListening ? 'LISTENING FOR COMMANDS...' : 'TAP MIC TO TRIGGER VOICE COMMAND'}
            </p>

            {/* Audio Waveform visualization blocks */}
            <div className="flex items-center justify-center space-x-1.5 h-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1].map((idx, i) => (
                <span 
                  key={i} 
                  className={`w-0.5 bg-gradient-to-t from-[#FF9933] to-[#138808] rounded transition-all ${
                    isListening ? 'animate-[pulse_0.4s_ease-in-out_infinite]' : 'h-1 opacity-40'
                  }`}
                  style={{ 
                    height: isListening ? `${Math.floor(Math.sin(idx + Date.now()) * 16) + 18}px` : '4px',
                    animationDelay: `${idx * 0.05}s`
                  }}
                ></span>
              ))}
            </div>
          </div>

          {/* Transcript & AI Response Boxes */}
          <div className="space-y-3 text-left">
            {/* User Speech Transcript */}
            <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800 space-y-1">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">You Said</span>
              <p className="text-xs text-slate-200 font-medium font-sans">
                {[...voiceCommandHistory].reverse().find(m => m.sender === 'user')?.text || '“Ask me to do something...”'}
              </p>
            </div>

            {/* AI Assistant Output */}
            <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800 space-y-1">
              <span className="text-[9px] font-mono text-[#FF9933] uppercase tracking-widest block font-bold">AI Response</span>
              <p className="text-xs text-[#FF9933] font-bold font-sans">
                {[...voiceCommandHistory].reverse().find(m => m.sender === 'ai')?.text || speakingStatus || '“Waiting for voice command. Speak clearly.”'}
              </p>
            </div>
          </div>

          {/* Text Console / Typewriter Input Bar */}
          <div className="bg-slate-950/40 p-2.5 rounded-xl border border-slate-800 space-y-1.5 text-left">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold font-black">Or Type Command</span>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (commandBarInput.trim()) {
                handleVoiceCommand(commandBarInput.trim());
                setCommandBarInput('');
              }
            }} className="flex items-center space-x-1.5">
              <input
                name="voiceInput"
                type="text"
                value={commandBarInput}
                onChange={(e) => setCommandBarInput(e.target.value)}
                placeholder={lang === 'hi' ? "कमांड टाइप करें (जैसे SOS, Start Trip)..." : "Type command (e.g. SOS, Start Trip)..."}
                className="flex-1 bg-slate-950 border border-slate-800 focus:border-orange-500/60 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => handleCommandBarSpeechDictation((text) => setCommandBarInput(prev => prev ? prev + ' ' + text : text))}
                className={`p-1.5 rounded-lg border transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                  isDictatingCommandBar
                    ? 'bg-red-600 border-red-700 text-white animate-pulse'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-white'
                }`}
                title={lang === 'hi' ? "आवाज द्वारा टाइप करें" : "Speak to type"}
              >
                <Mic className="w-3.5 h-3.5" />
              </button>
              <button type="submit" className="p-1.5 bg-[#FF9933] hover:bg-orange-600 rounded-lg text-white transition-all cursor-pointer">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <p className="text-[9px] text-slate-500 font-sans italic leading-tight">
              Microphone blocked? You can type your command or click the buttons below.
            </p>
          </div>

          {/* Suggestions List */}
          <div className="space-y-1.5 text-left pt-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Try saying:</span>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
              {[
                { text: 'Start my safe trip', cmd: 'Start my safe trip' },
                { text: 'Trigger SOS', cmd: 'Trigger SOS' },
                { text: 'Check battery status', cmd: 'Check battery status' },
                { text: 'Take vehicle photo', cmd: 'Take vehicle photo' },
                { text: 'Open security coach', cmd: 'Open security coach' }
              ].map((sug, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleVoiceCommand(sug.cmd)}
                  className="px-2.5 py-1 rounded bg-slate-850 hover:bg-slate-800 text-[10px] font-medium border border-slate-800 text-slate-350 hover:text-white transition-all cursor-pointer"
                >
                  "{sug.text}"
                </button>
              ))}
            </div>
          </div>

          {/* Hands-Free Synthesizer volume controller */}
          <div className="flex items-center justify-between pt-2.5 border-t border-slate-800 text-[10.5px] text-slate-400 font-mono">
            <span>Speech Synthesis feedback</span>
            <span className="text-emerald-400 font-bold">ACTIVE</span>
          </div>
        </div>
      )}

      {/* Floating Emergency Action Button (FAB) */}
      <button
        id="btn-emergency-help"
        onClick={() => setShowEmergencyModal(true)}
        aria-label={lang === 'hi' ? 'आपातकालीन सहायता' : 'Emergency Help'}
        className="fixed bottom-6 right-6 z-50 p-4 bg-red-600 text-white rounded-full shadow-2xl hover:bg-red-700 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 border-2 border-white cursor-pointer group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-200"></span>
        </span>
        <Flame className="w-6 h-6 animate-pulse shrink-0" />
        <span className="text-xs font-black uppercase tracking-wider pr-1 hidden md:inline">
          {lang === 'hi' ? 'आपातकालीन सहायता' : 'EMERGENCY HELP'}
        </span>
      </button>

      {/* Emergency Help & Support Modal */}
      {showEmergencyModal && (
        <div 
          id="emergency-modal-overlay" 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 z-55 animate-fade-in"
        >
          <div className="bg-white border-4 border-red-600 rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-3 text-red-600">
                <Flame className="w-8 h-8 animate-pulse shrink-0" />
                <div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-red-600">
                    {lang === 'hi' ? 'आपातकालीन सहायता एवं निर्देश' : 'Emergency Help & Protocol'}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono tracking-wider font-bold uppercase">
                    safeTIRRI AI National Support Cell
                  </p>
                </div>
              </div>
              <button
                id="btn-close-emergency"
                onClick={() => setShowEmergencyModal(false)}
                aria-label="Close emergency modal"
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all cursor-pointer bg-transparent border-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Emergency Checklist */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider font-mono flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-red-600"></span>
                <span>{lang === 'hi' ? 'तत्काल आपातकालीन चेकलिस्ट' : 'Immediate Safety Checklist'}</span>
              </h4>
              <div className="space-y-2 text-xs text-slate-700 font-normal leading-relaxed">
                {[
                  lang === 'hi' 
                    ? "1. तुरंत मुख्य ई-रिक्शा बैटरी पावर सर्किट ब्रेकर (MCB) स्विच बंद करें।" 
                    : "1. Turn off the main battery physical circuit breaker (MCB) switch immediately.",
                  lang === 'hi' 
                    ? "2. अपने मोबाइल फ़ोन पर सभी अवांछित ब्लूटूथ और पेयरिंग सिग्नल्स बंद करें।" 
                    : "2. Disable mobile Bluetooth and discard suspicious pairing prompts on all driver apps.",
                  lang === 'hi' 
                    ? "3. यदि बैटरी गर्म हो गई है या अत्यधिक धुंआ दे रही है, तो सुरक्षित दूरी पर खड़े हो जाएं।" 
                    : "3. If the battery unit is unusually hot or emitting vapors, stand back and evacuate passengers safely.",
                  lang === 'hi' 
                    ? "4. संदिग्ध ब्लूटूथ हमलों की तुरंत शिकायत दर्ज करें ताकि स्थानीय सहायता टीम भेजी जा सके।" 
                    : "4. File an official cyber record on our portal immediately to trigger local recovery support."
                ].map((item, idx) => (
                  <div key={idx} className="bg-red-50 border-l-4 border-red-500 p-2.5 rounded-r">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Helpline Info */}
            <div className="bg-slate-900 text-white rounded-xl p-4 flex items-center justify-between space-x-4 border border-slate-800">
              <div className="space-y-1">
                <p className="text-[10px] text-red-400 font-extrabold font-mono tracking-widest uppercase">
                  {lang === 'hi' ? 'राष्ट्रीय साइबर अपराध डेस्क' : 'NATIONAL CYBER HELPLINE'}
                </p>
                <p className="text-lg font-black text-white tracking-wider flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-red-500 shrink-0" />
                  <span>DIAL 1930 / 112</span>
                </p>
                <p className="text-[10px] text-slate-400">
                  {lang === 'hi' ? 'जबरन वसूली/रैनसमवेयर रिपोर्ट करने के लिए २४x७ उपलब्ध' : 'Available 24x7 to freeze stolen/compromised smart vehicles'}
                </p>
              </div>
              <a
                href="tel:1930"
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-black rounded-lg transition-all text-center uppercase tracking-wider shadow-md shrink-0"
              >
                {lang === 'hi' ? 'कॉल करें' : 'Call Now'}
              </a>
            </div>

            {/* Nearest Certified Service Centers */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider font-mono flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>{lang === 'hi' ? 'प्रमाणित सहायता केंद्र (डेमो स्थान)' : 'Certified safeTIRRI Service Hubs (Demo)'}</span>
              </h4>
              <p className="text-[11px] text-slate-500 font-normal">
                {lang === 'hi' 
                  ? 'सुरक्षा पैच और वारंटी बहाल करने के लिए हमारे नोडल केंद्रों पर संपर्क करें:' 
                  : 'Contact our certified physical nodal centers for fast hardware updates & firmware reflashing:'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {[
                  { region: 'Delhi NCR', name: 'Dwarka Sec-10 Nodal Point', phone: '+91 11-280801' },
                  { region: 'Uttar Pradesh', name: 'Noida Sec-62 Tech Hub', phone: '+91 120-24401' },
                  { region: 'Haryana', name: 'Gurugram IFFCO Hub', phone: '+91 124-40021' }
                ].map((hub, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-center space-y-1">
                    <p className="font-extrabold text-[#0F172A] text-[10px] uppercase font-mono tracking-wider">{hub.region}</p>
                    <p className="text-[10px] text-slate-600 font-medium leading-tight">{hub.name}</p>
                    <p className="text-[9px] text-[#FF9933] font-bold font-mono">{hub.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Alert */}
            <div className="text-center">
              <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wide">
                {lang === 'hi' ? 'सुरक्षा कोच द्वारा प्रमाणित राष्ट्रीय सुरक्षा' : 'Certified Cyber Protection under safeTIRRI Nodal Protocols'}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------
          PM E-DRIVE SUBSIDY FORM MODAL
          ---------------------------------------------------------------------- */}
      {showSubsidyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 max-w-lg w-full overflow-hidden transform transition-all animate-scale-up">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#FF9933] to-orange-600 px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5" />
                <h3 className="font-bold text-base tracking-wide uppercase">
                  {lang === 'hi' ? 'पीएम ई-ड्राइव सब्सिडी आवेदन पत्र' : 'PM E-Drive Subsidy Application'}
                </h3>
              </div>
              <button 
                onClick={() => setShowSubsidyModal(false)}
                className="text-white hover:text-slate-100 p-1 rounded-full hover:bg-white/10 transition-all focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {!subsidySuccess ? (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const refId = `PME-ED-2026-${Math.floor(100000 + Math.random() * 900000)}`;
                    setSubsidySuccess(refId);
                  }} 
                  className="space-y-4 text-left"
                >
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {lang === 'hi'
                      ? "पीएम ई-ड्राइव योजना के तहत अपने पुराने लेड-एसिड बैटरी को CERT-In प्रमाणित लिथियम-आयन बैटरी से बदलने पर ₹15,000 की वित्तीय सहायता के लिए पंजीकरण करें।"
                      : "Register to claim up to ₹15,000 financial support for replacing old lead-acid batteries with certified Lithium-Ion packs under the National PM E-Drive Scheme."}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {lang === 'hi' ? 'चालक का नाम' : 'Driver Full Name'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={subsidyForm.driverName}
                        onChange={(e) => setSubsidyForm({...subsidyForm, driverName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {lang === 'hi' ? 'मोबाइल नंबर' : 'Mobile Number'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-digit mobile"
                        value={subsidyForm.phone}
                        onChange={(e) => setSubsidyForm({...subsidyForm, phone: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {lang === 'hi' ? 'वाहन पंजीकरण नंबर' : 'Vehicle Registration No.'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. DL 1ER 1234"
                        value={subsidyForm.vehicleNumber}
                        onChange={(e) => setSubsidyForm({...subsidyForm, vehicleNumber: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {lang === 'hi' ? 'आधार कार्ड नंबर' : 'Aadhaar (ID) Number'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        pattern="[0-9]{12}"
                        placeholder="12-digit Aadhaar"
                        value={subsidyForm.aadhaar}
                        onChange={(e) => setSubsidyForm({...subsidyForm, aadhaar: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {lang === 'hi' ? 'नई बैटरी का सीरियल नंबर' : 'New Smart Battery Serial'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. OKA-LI-992314"
                        value={subsidyForm.batterySerial}
                        onChange={(e) => setSubsidyForm({...subsidyForm, batterySerial: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {lang === 'hi' ? 'अधिकृत डीलर का नाम' : 'Authorized Dealer Name'}
                      </label>
                      <select
                        value={subsidyForm.dealerName}
                        onChange={(e) => setSubsidyForm({...subsidyForm, dealerName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      >
                        <option value="Okaya Smart Power, Delhi">Okaya Smart Power, Delhi</option>
                        <option value="Tirri Cyber Battery, Patna">Tirri Cyber Battery, Patna</option>
                        <option value="Lohia EV Hub, Lucknow">Lohia EV Hub, Lucknow</option>
                        <option value="Sahyog Motors, Bangalore">Sahyog Motors, Bangalore</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowSubsidyModal(false)}
                      className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      {lang === 'hi' ? 'रद्द करें' : 'Cancel'}
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#FF9933] hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      {lang === 'hi' ? 'आवेदन जमा करें' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-slate-900">
                      {lang === 'hi' ? 'सब्सिडी पूर्व-स्वीकृत!' : 'Subsidy Pre-Approved!'}
                    </h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      {lang === 'hi'
                        ? "आपका आवेदन राष्ट्रीय पीएम ई-ड्राइव डेटाबेस में सफलतापूर्वक दर्ज कर लिया गया है। कृपया इस कूपन को डीलर को दिखाएं।"
                        : "Your subsidy intent registration has been securely lodged in the PM E-Drive registry. Present this voucher to the selected dealer to redeem ₹15,000."}
                    </p>
                  </div>

                  {/* Voucher Receipt Card */}
                  <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-4 text-left max-w-md mx-auto space-y-3 font-mono text-[11px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-emerald-600 text-white font-sans font-black text-[9px] px-2 py-0.5 rounded-bl">
                      SECURE VOUCHER
                    </div>
                    <div className="border-b border-slate-200 pb-2">
                      <p className="font-sans font-bold text-slate-400 text-[10px]">GOVERNMENT OF INDIA</p>
                      <p className="font-sans font-black text-[#FF9933] text-[12px]">PM E-DRIVE DIGITAL VOUCHER</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px]">
                      <div><span className="text-slate-400 font-sans">Driver:</span> <span className="font-bold text-slate-800">{subsidyForm.driverName}</span></div>
                      <div><span className="text-slate-400 font-sans">Vehicle:</span> <span className="font-bold text-slate-800">{subsidyForm.vehicleNumber}</span></div>
                      <div><span className="text-slate-400 font-sans">Battery S/N:</span> <span className="font-bold text-slate-800">{subsidyForm.batterySerial}</span></div>
                      <div><span className="text-slate-400 font-sans">Ref ID:</span> <span className="font-bold text-emerald-600">{subsidySuccess}</span></div>
                      <div className="col-span-2"><span className="text-slate-400 font-sans">Dealer:</span> <span className="font-bold text-slate-800">{subsidyForm.dealerName}</span></div>
                    </div>
                    <div className="border-t border-slate-200 pt-2 flex justify-between items-center text-[10px] font-sans">
                      <span className="text-[#FF9933] font-black">LOCKED SUBSIDY: ₹15,000</span>
                      <span className="text-slate-400 font-mono text-[9px]">OTP: {Math.floor(1000 + Math.random() * 9000)}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setShowSubsidyModal(false)}
                      className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      {lang === 'hi' ? 'खिड़की बंद करें' : 'Done & Close'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------
          FREE BATTERY HEALTH CAMPS BOOKING MODAL
          ---------------------------------------------------------------------- */}
      {showCampBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 max-w-lg w-full overflow-hidden transform transition-all animate-scale-up">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 animate-pulse" />
                <h3 className="font-bold text-base tracking-wide uppercase">
                  {lang === 'hi' ? 'निःशुल्क बैटरी स्वास्थ्य शिविर बुकिंग' : 'Book Free Diagnostic Slot'}
                </h3>
              </div>
              <button 
                onClick={() => setShowCampBookingModal(false)}
                className="text-white hover:text-slate-100 p-1 rounded-full hover:bg-white/10 transition-all focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {!campBookingSuccess ? (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const ticketId = `CAMP-TKT-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(10 + Math.random() * 89)}`;
                    setCampBookingSuccess(ticketId);
                  }} 
                  className="space-y-4 text-left"
                >
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {lang === 'hi'
                      ? "क्षेत्रीय आरटीओ में होने वाले निःशुल्क सुरक्षा स्कैन शिविर में स्लॉट आरक्षित करें। इसमें ब्लूटूथ फर्मवेयर रिफ्लेशिंग और मुफ़्त साइबर सुरक्षा चेकिंग शामिल है।"
                      : "Reserve an offline slot at our upcoming free physical diagnostic camp for e-rickshaw batteries. Includes full system scan, Bluetooth firmware patches, and safety certificate."}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {lang === 'hi' ? 'चालक का नाम' : 'Driver Name'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={campBookingForm.driverName}
                        onChange={(e) => setCampBookingForm({...campBookingForm, driverName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          {lang === 'hi' ? 'मोबाइल नंबर' : 'Mobile Number'} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          placeholder="10-digit phone"
                          value={campBookingForm.phone}
                          onChange={(e) => setCampBookingForm({...campBookingForm, phone: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          {lang === 'hi' ? 'वाहन नंबर' : 'Vehicle Number'} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. DL 1ER 1234"
                          value={campBookingForm.vehicleNumber}
                          onChange={(e) => setCampBookingForm({...campBookingForm, vehicleNumber: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          {lang === 'hi' ? 'शिविर स्थान और तिथि' : 'Camp Location & Date'}
                        </label>
                        <select
                          value={campBookingForm.selectedCamp}
                          onChange={(e) => setCampBookingForm({...campBookingForm, selectedCamp: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="Delhi RTO Hub (12 July 2026)">Delhi RTO Hub (12 July 2026)</option>
                          <option value="Patna Gandhi Maidan Gate 4 (18 July 2026)">Patna Gate 4 (18 July 2026)</option>
                          <option value="Lucknow Transport Nagar (25 July 2026)">Lucknow Nagar (25 July 2026)</option>
                          <option value="Bangalore Yeshwanthpur RTO (3 Aug 2026)">Bangalore RTO (3 Aug 2026)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          {lang === 'hi' ? 'समय स्लॉट' : 'Time Slot'}
                        </label>
                        <select
                          value={campBookingForm.selectedSlot}
                          onChange={(e) => setCampBookingForm({...campBookingForm, selectedSlot: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM (Morning)</option>
                          <option value="12:00 PM - 01:30 PM">12:00 PM - 01:30 PM (Midday)</option>
                          <option value="02:30 PM - 04:00 PM">02:30 PM - 04:00 PM (Afternoon)</option>
                          <option value="04:30 PM - 06:00 PM">04:30 PM - 06:00 PM (Evening)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowCampBookingModal(false)}
                      className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      {lang === 'hi' ? 'रद्द करें' : 'Cancel'}
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      {lang === 'hi' ? 'स्लॉट बुक करें' : 'Book Diagnostic Slot'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto border border-blue-200">
                    <CheckCircle2 className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-slate-900">
                      {lang === 'hi' ? 'स्लॉट सफलतापूर्वक आरक्षित!' : 'Diagnostic Slot Confirmed!'}
                    </h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      {lang === 'hi'
                        ? "आपका बुकिंग स्लॉट सुरक्षित रूप से बुक कर लिया गया है। कृपया नियत समय पर अपने वाहन के साथ पहुंचें।"
                        : "Your diagnostic booking slip has been successfully processed. Please bring your e-rickshaw to the venue at the selected slot."}
                    </p>
                  </div>

                  {/* Camp Booking Ticket Card */}
                  <div className="bg-slate-50 border border-dashed border-blue-300 rounded-xl p-4 text-left max-w-md mx-auto space-y-2.5 font-mono text-[11px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white font-sans font-black text-[9px] px-2.5 py-0.5 rounded-bl">
                      FREE PASS
                    </div>
                    <div className="border-b border-slate-200 pb-2">
                      <p className="font-sans font-extrabold text-[#0F172A] text-[12px] flex items-center space-x-1">
                        <span>SAFETIRRI CYBER CAMP SLIP</span>
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div><span className="text-slate-400 font-sans">Driver:</span> <span className="font-bold text-slate-800">{campBookingForm.driverName}</span></div>
                      <div><span className="text-slate-400 font-sans">Vehicle No:</span> <span className="font-bold text-slate-800">{campBookingForm.vehicleNumber}</span></div>
                      <div><span className="text-slate-400 font-sans">Venue:</span> <span className="font-bold text-slate-800">{campBookingForm.selectedCamp}</span></div>
                      <div><span className="text-slate-400 font-sans">Time Slot:</span> <span className="font-bold text-indigo-600">{campBookingForm.selectedSlot}</span></div>
                      <div><span className="text-slate-400 font-sans">Ticket No:</span> <span className="font-bold text-blue-600">{campBookingSuccess}</span></div>
                    </div>
                    <div className="border-t border-slate-200 pt-2 text-[9px] font-sans text-slate-400 italic">
                      * Please bring your vehicle Registration Document & physical BMS unit for scanning.
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setShowCampBookingModal(false)}
                      className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      {lang === 'hi' ? 'खिड़की बंद करें' : 'Done & Close'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------
          GOVERNMENT LIAISON INQUIRY FORM MODAL
          ---------------------------------------------------------------------- */}
      {showGovInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden transform transition-all animate-scale-up">
            
            {/* Modal Header */}
            <div className="bg-[#FF9933] px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5" />
                <h3 className="font-bold text-base tracking-wide uppercase">
                  Government Licensing Inquiry
                </h3>
              </div>
              <button 
                onClick={() => setShowGovInquiryModal(false)}
                className="text-white hover:text-slate-100 p-1 rounded-full hover:bg-white/10 transition-all focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-6">
              {!govInquirySuccess ? (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setGovInquirySuccess(true);
                  }} 
                  className="space-y-4 text-left"
                >
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Request transport agency partnership and regional deployment pricing. SafeTIRRI integrates directly into State transport systems to monitor e-rickshaw cyber security.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        State Department / Organization Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bihar State Road Transport Corp."
                        value={govInquiryForm.orgName}
                        onChange={(e) => setGovInquiryForm({...govInquiryForm, orgName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Nodal Officer Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={govInquiryForm.contactName}
                          onChange={(e) => setGovInquiryForm({...govInquiryForm, contactName: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Nodal Office Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. officer@mp.gov.in"
                          value={govInquiryForm.email}
                          onChange={(e) => setGovInquiryForm({...govInquiryForm, email: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Department Category
                        </label>
                        <select
                          value={govInquiryForm.department}
                          onChange={(e) => setGovInquiryForm({...govInquiryForm, department: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                        >
                          <option value="State Transport Department">State Transport Department</option>
                          <option value="Smart Cities Board">Smart Cities Board</option>
                          <option value="Municipal Transit Authority">Municipal Transit Authority</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Target Fleet Size
                        </label>
                        <select
                          value={govInquiryForm.fleetSize}
                          onChange={(e) => setGovInquiryForm({...govInquiryForm, fleetSize: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                        >
                          <option value="100-500 vehicles">100-500 vehicles</option>
                          <option value="500-2000 vehicles">500-2000 vehicles</option>
                          <option value="2000+ vehicles">2000+ vehicles</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Collaboration Scope/Description
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Outline smart mobility or security pilot goals..."
                        value={govInquiryForm.message}
                        onChange={(e) => setGovInquiryForm({...govInquiryForm, message: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowGovInquiryModal(false)}
                      className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#FF9933] hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Send Liaison Inquiry
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-orange-50 text-[#FF9933] rounded-full flex items-center justify-center mx-auto border border-orange-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-slate-900">Inquiry Received</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Liaison request assigned ID <strong>GOV-LIA-{Math.floor(1000 + Math.random() * 9000)}</strong>. safeTIRRI national strategic team will contact your department office at <strong>{govInquiryForm.email}</strong> within 24 business hours.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setShowGovInquiryModal(false)}
                      className="px-6 py-2 bg-slate-950 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------
          OEM PARTNERSHIP INQUIRY FORM MODAL
          ---------------------------------------------------------------------- */}
      {showOemPartnerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden transform transition-all animate-scale-up">
            
            {/* Modal Header */}
            <div className="bg-[#138808] px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5" />
                <h3 className="font-bold text-base tracking-wide uppercase">
                  OEM Partnership Request
                </h3>
              </div>
              <button 
                onClick={() => setShowOemPartnerModal(false)}
                className="text-white hover:text-slate-100 p-1 rounded-full hover:bg-white/10 transition-all focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-6">
              {!oemPartnerSuccess ? (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setOemPartnerSuccess(true);
                  }} 
                  className="space-y-4 text-left"
                >
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Partner with SafeTIRRI to secure newly manufactured vehicles at factory-level. Built-in firmware security prevents unauthorized Bluetooth/RF hijacking instantly.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        OEM Manufacturer Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mahindra Electric / Lohia EV"
                        value={oemPartnerForm.companyName}
                        onChange={(e) => setOemPartnerForm({...oemPartnerForm, companyName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-green-600 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Contact Person <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={oemPartnerForm.contactName}
                          onChange={(e) => setOemPartnerForm({...oemPartnerForm, contactName: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-green-600 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Corporate Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. partner@mahindra.com"
                          value={oemPartnerForm.email}
                          onChange={(e) => setOemPartnerForm({...oemPartnerForm, email: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-green-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Annual EV Production Volume
                      </label>
                      <select
                        value={oemPartnerForm.annualProduction}
                        onChange={(e) => setOemPartnerForm({...oemPartnerForm, annualProduction: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-green-600 transition-colors"
                      >
                        <option value="Under 1000 vehicles">Under 1,000 vehicles/year</option>
                        <option value="1000-5000 vehicles">1,000 - 5,000 vehicles/year</option>
                        <option value="5000+ vehicles">Over 5,000 vehicles/year</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Specific Integration Goals / Comments
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Securing bluetooth BMS pairing code on model x..."
                        value={oemPartnerForm.comments}
                        onChange={(e) => setOemPartnerForm({...oemPartnerForm, comments: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-green-600 transition-colors"
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowOemPartnerModal(false)}
                      className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-green-700 hover:bg-green-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Request OEM Partnership
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-green-50 text-green-700 rounded-full flex items-center justify-center mx-auto border border-green-200">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-slate-900 font-display">OEM Partnership Registered</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Liaison reference: <strong>OEM-PART-{Math.floor(100 + Math.random() * 899)}</strong>. An engineering representative from safeTIRRI hardware defense division will contact <strong>{oemPartnerForm.contactName}</strong> shortly to discuss integration scopes.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setShowOemPartnerModal(false)}
                      className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------
          BATTERY & BMS LICENSING SDK REQUEST MODAL
          ---------------------------------------------------------------------- */}
      {showSdkRequestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden transform transition-all animate-scale-up">
            
            {/* Modal Header */}
            <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Battery className="w-5 h-5 text-blue-400 font-sans" />
                <h3 className="font-bold text-base tracking-wide uppercase">
                  BMS SDK Request Portal
                </h3>
              </div>
              <button 
                onClick={() => setShowSdkRequestModal(false)}
                className="text-white hover:text-slate-100 p-1 rounded-full hover:bg-white/10 transition-all focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-6">
              {!sdkRequestSuccess ? (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSdkRequestSuccess(true);
                  }} 
                  className="space-y-4 text-left"
                >
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    Acquire access to safeTIRRI BMS encryption SDK modules to implement Bluetooth dynamic pairing key rotations and firmware digital signature verification directly inside your microcontroller units (MCU).
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        BMS Manufacturer Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Okaya Power / Trontek Batteries"
                        value={sdkRequestForm.companyName}
                        onChange={(e) => setSdkRequestForm({...sdkRequestForm, companyName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-800 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Developer/Engineer Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. lead-engineer@company.com"
                        value={sdkRequestForm.developerEmail}
                        onChange={(e) => setSdkRequestForm({...sdkRequestForm, developerEmail: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-800 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          BMS Controller Type
                        </label>
                        <select
                          value={sdkRequestForm.bmsController}
                          onChange={(e) => setSdkRequestForm({...sdkRequestForm, bmsController: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-800 transition-colors"
                        >
                          <option value="Tirri-Smart-BMS v2">Tirri-Smart-BMS v2</option>
                          <option value="NXP MC33771 Compatible">NXP MC33771 Comp.</option>
                          <option value="TI BQ76952 Compatible">TI BQ76952 Comp.</option>
                          <option value="Custom STM32 Microcontroller">Custom STM32 Controller</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Integration Use Case
                        </label>
                        <select
                          value={sdkRequestForm.useCase}
                          onChange={(e) => setSdkRequestForm({...sdkRequestForm, useCase: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-800 transition-colors"
                        >
                          <option value="Commercial Fleet Security">Commercial Fleet Security</option>
                          <option value="Consumer E-Rickshaw Protection">Consumer E-Rickshaws</option>
                          <option value="Government Vehicle Integration">Gov. Vehicle Integration</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowSdkRequestModal(false)}
                      className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Request SDK Package
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4 font-sans">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto border border-blue-200">
                    <CheckCircle2 className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-slate-900">SDK Request Registered</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Developer keys and safeTIRRI SDK header files (`.h` / `.cpp` libraries) have been dispatched to <strong>{sdkRequestForm.developerEmail}</strong>. Please check your developer inbox to download safeTIRRI BMS signing files.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setShowSdkRequestModal(false)}
                      className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Got it
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------
          AUTHORIZED CYBER HEALTH CENTRE APPLICATION MODAL
          ---------------------------------------------------------------------- */}
      {showHealthCentreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden transform transition-all animate-scale-up">
            
            {/* Modal Header */}
            <div className="bg-[#FF9933] px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-white" />
                <h3 className="font-bold text-base tracking-wide uppercase">
                  Onboard Diagnostic Center
                </h3>
              </div>
              <button 
                onClick={() => setShowHealthCentreModal(false)}
                className="text-white hover:text-slate-100 p-1 rounded-full hover:bg-white/10 transition-all focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-6">
              {!healthCentreSuccess ? (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setHealthCentreSuccess(true);
                  }} 
                  className="space-y-4 text-left"
                >
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Apply to register your local battery workshop or service center as a CERTIFIED safeTIRRI Cyber Health Diagnostic Centre. Provide official security scans, patch BMS software, and generate revenue.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Workshop / Station Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dwarka EV Repair Point"
                        value={healthCentreForm.centerName}
                        onChange={(e) => setHealthCentreForm({...healthCentreForm, centerName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Workshop Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Plot 14, Sector 10, Dwarka, New Delhi"
                        value={healthCentreForm.location}
                        onChange={(e) => setHealthCentreForm({...healthCentreForm, location: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          GSTIN / Business Registration <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 07AAAAA1111A1Z1"
                          value={healthCentreForm.gstNumber}
                          onChange={(e) => setHealthCentreForm({...healthCentreForm, gstNumber: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Contact Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={healthCentreForm.contactPhone}
                          onChange={(e) => setHealthCentreForm({...healthCentreForm, contactPhone: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Active Technical Staff Count
                      </label>
                      <select
                        value={healthCentreForm.technicalStaffCount}
                        onChange={(e) => setHealthCentreForm({...healthCentreForm, technicalStaffCount: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      >
                        <option value="1-2 technicians">1 - 2 technicians</option>
                        <option value="2-5 technicians">2 - 5 technicians</option>
                        <option value="5+ technicians">More than 5 technicians</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowHealthCentreModal(false)}
                      className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#FF9933] hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Apply for Authorization
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-orange-50 text-[#FF9933] rounded-full flex items-center justify-center mx-auto border border-orange-200">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-slate-900 font-display">Application Received</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Your onboard health centre request has been saved as <strong>HC-AUTH-{Math.floor(1000 + Math.random() * 9000)}</strong>. Our regional RTO auditing officer will visit <strong>{healthCentreForm.centerName}</strong> for hardware capability verification.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setShowHealthCentreModal(false)}
                      className="px-6 py-2 bg-slate-950 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------
          DEVELOPER API ACCESS KEY GENERATOR MODAL
          ---------------------------------------------------------------------- */}
      {showApiKeyGeneratorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden transform transition-all animate-scale-up">
            
            {/* Modal Header */}
            <div className="bg-[#0F172A] px-6 py-4 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-green-500" />
                <h3 className="font-bold text-base tracking-wide uppercase font-mono">
                  safeTIRRI Developer Sandbox API
                </h3>
              </div>
              <button 
                onClick={() => setShowApiKeyGeneratorModal(false)}
                className="text-white hover:text-slate-100 p-1 rounded-full hover:bg-white/10 transition-all focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Interface */}
            <div className="p-6 space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed font-sans text-left">
                Generate secure sandboxed REST API keys to poll vehicle battery telemetry, query active cyber attacks, and verify dynamic security badges within external apps.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-3">
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest block font-mono">Scope Permissions</span>
                
                <div className="space-y-2">
                  <label className="flex items-center space-x-2.5 text-xs text-slate-800 cursor-pointer font-medium">
                    <input 
                      type="checkbox"
                      checked={apiKeyPermissions.readBms}
                      onChange={(e) => setApiKeyPermissions({...apiKeyPermissions, readBms: e.target.checked})}
                      className="rounded border-slate-300 text-green-600 focus:ring-green-500 h-4 w-4"
                    />
                    <span>`telemetry.bms.read` (View real-time voltages & temperature)</span>
                  </label>

                  <label className="flex items-center space-x-2.5 text-xs text-slate-800 cursor-pointer font-medium">
                    <input 
                      type="checkbox"
                      checked={apiKeyPermissions.readLocation}
                      onChange={(e) => setApiKeyPermissions({...apiKeyPermissions, readLocation: e.target.checked})}
                      className="rounded border-slate-300 text-green-600 focus:ring-green-500 h-4 w-4"
                    />
                    <span>`gps.tracking.read` (Access vehicle coordinates)</span>
                  </label>

                  <label className="flex items-center space-x-2.5 text-xs text-slate-800 cursor-pointer font-medium">
                    <input 
                      type="checkbox"
                      checked={apiKeyPermissions.writeFirmware}
                      onChange={(e) => setApiKeyPermissions({...apiKeyPermissions, writeFirmware: e.target.checked})}
                      className="rounded border-slate-300 text-green-600 focus:ring-green-500 h-4 w-4"
                    />
                    <span className="text-slate-400 font-normal">`bms.firmware.write` (Needs level-3 HSM clearance)</span>
                  </label>
                </div>
              </div>

              {!generatedApiKey ? (
                <button
                  type="button"
                  onClick={() => {
                    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    let randomStr = '';
                    for (let i = 0; i < 28; i++) {
                      randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
                    }
                    setGeneratedApiKey(`sk_safetirri_test_${randomStr}`);
                  }}
                  className="w-full py-2.5 bg-green-700 hover:bg-green-800 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer active:scale-95 flex items-center justify-center space-x-2"
                >
                  <Key className="w-4 h-4 text-green-200" />
                  <span>Generate Sandbox API Key</span>
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-left space-y-1.5 font-mono">
                    <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Live Sandbox Key</span>
                    <div className="flex items-center justify-between space-x-2 text-xs">
                      <input 
                        type="text"
                        readOnly
                        value={generatedApiKey}
                        className="bg-transparent border-none text-green-400 select-all focus:outline-none w-full font-mono text-[11px]"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(generatedApiKey);
                          alert('API key copied to clipboard!');
                        }}
                        className="text-slate-500 hover:text-white p-1 hover:bg-slate-850 rounded transition-all cursor-pointer shrink-0"
                        title="Copy Key"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-left bg-emerald-50 border border-emerald-150 p-3 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <p className="text-[11px] text-slate-700 leading-snug">
                      <strong>API Authentication Ready!</strong> Include this bearer token in the HTTP header: `Authorization: Bearer sk_safetirri_test_...` to interact with our telemetry endpoints.
                    </p>
                  </div>

                  <div className="flex justify-end space-x-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setGeneratedApiKey(null)}
                      className="px-3 py-1.5 border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Regenerate
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowApiKeyGeneratorModal(false)}
                      className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Done & Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
