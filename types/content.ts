export type Faq = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  icon: string;
  description: string;
  longDescription: string;
  outcomes: string[];
  benefits: string[];
  technologies: string[];
  process: ProcessStep[];
  faqs: Faq[];
};

export type Solution = {
  slug: string;
  title: string;
  sector: string;
  description: string;
  priorities: string[];
  capabilities: string[];
  outcomes: string[];
};

export type TechnologyCategory = {
  category: string;
  description: string;
  items: string[];
};

export type Metric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  problem: string;
  challenge: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  impact: string[];
  metrics: Metric[];
  featured?: boolean;
};

export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  related: string[];
};

export type CareerPosition = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
};
