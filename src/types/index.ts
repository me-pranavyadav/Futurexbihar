export interface StartupPitchSubmission {
  id: string;
  founderName: string;
  startupName: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  industry: string;
  stage: 'Idea' | 'MVP / Prototype' | 'Early Traction' | 'Growth / Scaling';
  problemStatement: string;
  solution: string;
  businessModel: string;
  fundingRequirement: string;
  pitchDeckUrl?: string;
  pitchDeckFileName?: string;
  submittedAt: string;
}

export interface MentorApplication {
  id: string;
  name: string;
  designation: string;
  organisation: string;
  experience: string;
  areaOfExpertise: string;
  linkedIn: string;
  email: string;
  phone: string;
  submittedAt: string;
}

export interface InvestorApplication {
  id: string;
  name: string;
  designation: string;
  organisation: string;
  investorType: 'Venture Capital (VC)' | 'Angel Investor' | 'Institutional Investor' | 'Corporate Investor' | 'Family Office' | 'Industry Leader';
  ticketSize: string;
  preferredSectors: string;
  email: string;
  phone: string;
  linkedIn: string;
  submittedAt: string;
}

export interface PartnershipInquiry {
  id: string;
  name: string;
  organisation: string;
  category: 'Institutional Partner' | 'Corporate Partner' | 'Knowledge Partner' | 'Technology Partner' | 'Media Partner' | 'Community Partner' | 'Ecosystem Partner';
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  organisation: string;
  interest: 'Pitching' | 'Mentoring' | 'Investing' | 'Partnership' | 'Media' | 'General Enquiry';
  message: string;
  submittedAt: string;
}

export interface AgendaSession {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  type: 'keynote' | 'panel' | 'pitch' | 'networking' | 'masterclass' | 'ceremony' | 'break';
  speakers?: string;
  venue?: string;
  badge?: string;
}
