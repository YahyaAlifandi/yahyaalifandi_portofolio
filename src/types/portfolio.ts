export interface ContributionItem {
  title: string;
  description: string;
  icon?: string;
}

export interface CodeProjectItem {
  id: string;
  type: 'code';
  categoryTag: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  mockUrl: string;
  mockType: 'espp' | 'code' | 'topup';
  contributions: ContributionItem[];
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  prototypeUrl?: string;
}

export interface DesignProjectItem {
  id: string;
  type: 'design';
  categoryTag: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  mockUrl: string;
  mockType: 'health' | 'school-design' | 'game-design' | 'blog-design';
  tools: string[];
  designFocus: ContributionItem[];
  achievement?: string;
  team?: string;
  prototypeUrl?: string;
  caseStudyUrl?: string;
  liveDemoUrl?: string;
}

export type ProjectItem = CodeProjectItem | DesignProjectItem;

export interface TechSkillItem {
  name: string;
  icon: string;
  logo?: string;
  practicalFocus: string;
  appliedInProjects: string[];
}

export interface TechCategoryItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  iconName: string;
  summary: string;
  highlight: string;
  skills: TechSkillItem[];
}

// Aliases for compatibility
export type Skill = TechSkillItem;
export type SkillCategory = TechCategoryItem;
export interface CategoryDetail {
  summary: string;
  appliedIn: string[];
  metrics: { label: string; value: string }[];
  highlight: string;
}
export type CategoryDetails = CategoryDetail;

export interface TrackRecordItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge: string;
  type: 'experience' | 'organization' | 'achievement' | 'certification' | 'project';
  description: string;
  highlights: string[];
  skills?: string[];
  institutionKey?: string;
  location?: string;
}
