export type CategoryType = 'EDUCATION' | 'PROJECTS' | 'EXPERIMENTS' | 'LEARNING' | 'COLLABORATION';

export interface TimelineItem {
  id: string;
  year: string;
  category: CategoryType;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  liveUrl?: string;
}

export interface ThinkStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  role: string;
  tools: string[];
  overview: string;
  problem: string;
  approach: string;
  result: string;
  highlights: string[];
  layout: 'left-media' | 'right-media' | 'full-media';
  accentColor: string;
  previewType: 'hospitality' | 'healthtech' | 'aistudio';
  liveUrl?: string;
  studioLinks?: { name: string; url: string; note: string }[];
}

export interface LabNode {
  id: string;
  label: string;
  category: string;
  description: string;
  status: 'Active' | 'Experimenting' | 'Deep Dive';
  x: number;
  y: number;
}
