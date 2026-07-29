import {
  BookOpen,
  HeartPulse,
  Sparkles,
  UserCheck,
  HandHeart,
  Leaf,
  Target,
  ClipboardList,
  Building2,
  BarChart3,
  Quote,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Program {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image: string;
  color: string;
}

export interface OverviewStat {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export interface ApproachStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SuccessStory {
  title: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
}

export const programs: Program[] = [
  {
    id: 'education',
    title: 'Education For All',
    slug: 'education-for-all',
    description:
      'Providing equitable access to quality education through scholarships, school infrastructure development, teacher training, and learning materials for underserved communities.',
    features: [
      'Scholarship programs for vulnerable children',
      'School construction & classroom renovation',
      'Teacher training & capacity building',
      'Learning material distribution',
      'Digital literacy initiatives',
    ],
    icon: BookOpen,
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Wellness',
    slug: 'healthcare-wellness',
    description:
      'Delivering essential healthcare services through mobile clinics, maternal care programs, nutrition support, and health education in remote communities.',
    features: [
      'Mobile medical clinic outreach',
      'Maternal & child health programs',
      'Nutrition & food security support',
      'Disease prevention & awareness',
      'Mental health counseling services',
    ],
    icon: HeartPulse,
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    color: 'from-[#E91E63] to-pink-600',
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    slug: 'women-empowerment',
    description:
      'Empowering women through vocational training, micro-enterprise development, financial literacy education, and leadership programs to foster economic independence.',
    features: [
      'Vocational & skills training',
      'Micro-grant & loan programs',
      'Financial literacy education',
      'Leadership & advocacy training',
      'Legal rights awareness',
    ],
    icon: Sparkles,
    image:
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'youth-development',
    title: 'Youth Development',
    slug: 'youth-development',
    description:
      'Mentoring young people through leadership training, career guidance, digital skills development, and recreational programs that build character and confidence.',
    features: [
      'Leadership & mentorship programs',
      'Digital skills & technology training',
      'Career guidance & counseling',
      'Sports & recreation initiatives',
      'Entrepreneurship incubation',
    ],
    icon: UserCheck,
    image:
      'https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=800&auto=format&fit=crop',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'social-support',
    title: 'Social Support',
    slug: 'social-support',
    description:
      'Providing comprehensive social welfare services including emergency relief, child protection, family reunification, and support for persons with disabilities.',
    features: [
      'Emergency relief & disaster response',
      'Child protection & welfare services',
      'Family reunification programs',
      'Support for persons with disabilities',
      'Community outreach & counseling',
    ],
    icon: HandHeart,
    image:
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'environment',
    title: 'Environment & Sustainability',
    slug: 'environment-sustainability',
    description:
      'Promoting environmental conservation, sustainable agriculture, clean energy adoption, and climate resilience through community-led initiatives.',
    features: [
      'Tree planting & reforestation',
      'Sustainable agriculture training',
      'Clean energy solutions',
      'Water conservation programs',
      'Climate resilience education',
    ],
    icon: Leaf,
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
    color: 'from-green-500 to-emerald-600',
  },
];

export const overviewStats: OverviewStat[] = [
  { value: 6, suffix: '', label: 'Core Program Areas', icon: Target },
  { value: 45, suffix: '+', label: 'Active Programs', icon: ClipboardList },
  { value: 78, suffix: '+', label: 'Communities Reached', icon: Building2 },
  { value: 12500, suffix: '+', label: 'Beneficiaries', icon: UserCheck },
  { value: 30, suffix: '+', label: 'Partners', icon: HandHeart },
  { value: 15, suffix: '+', label: 'Awards', icon: BarChart3 },
];

export const impactStats: ImpactStat[] = [
  { value: 12500, suffix: '+', label: 'Lives Impacted', icon: HeartPulse },
  { value: 45, suffix: '+', label: 'Active Programs', icon: Target },
  { value: 78, suffix: '+', label: 'Communities Served', icon: Building2 },
  { value: 100, suffix: '%', label: 'Program Transparency', icon: BarChart3 },
  { value: 30, suffix: '+', label: 'Global Partners', icon: HandHeart },
  { value: 15, suffix: '+', label: 'Awards Received', icon: Sparkles },
];

export const approachSteps: ApproachStep[] = [
  {
    icon: Target,
    title: 'Assess',
    description:
      'We conduct thorough needs assessments in collaboration with local leaders to identify the most pressing challenges and available resources within each community.',
  },
  {
    icon: ClipboardList,
    title: 'Plan',
    description:
      'Our team develops comprehensive, sustainable action plans tailored to each communitys unique context, ensuring cultural relevance and long-term viability.',
  },
  {
    icon: Building2,
    title: 'Implement',
    description:
      'We execute programs through local partnerships, deploying resources efficiently while maintaining rigorous oversight and adaptive management practices.',
  },
  {
    icon: BarChart3,
    title: 'Evaluate',
    description:
      'Continuous monitoring and independent evaluations measure our impact, inform improvements, and ensure accountability to donors and communities alike.',
  },
];

export const successStory: SuccessStory = {
  title: 'From Rural Village to Thriving Community',
  description:
    'In the remote village of Nkawkaw, Ghana, our integrated approach transformed a community struggling with poverty, lack of clean water, and limited educational opportunities. Over three years, we built a solar-powered borehole, established a primary school, launched a women&rsquo;s cooperative, and trained 30 community health workers. Today, Nkawkaw stands as a model of sustainable development.',
  image:
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
  stats: [
    { label: 'Clean Water Access', value: '3,200+' },
    { label: 'Children Enrolled', value: '850+' },
    { label: 'Women Empowered', value: '200+' },
  ],
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Fountain of Hope transformed our entire community. They didn&rsquo;t just build a school — they restored our belief that a better future is possible. My daughter is now the first girl in our family to attend secondary school.',
    name: 'Grace Mwangi',
    role: 'Community Leader',
    location: 'Nkawkaw, Ghana',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  },
  {
    quote:
      'The micro-grant program gave me the capital to start my tailoring business. Today I employ five women from my village. Fountain of Hope didn\'t just give me fish — they taught me how to fish and provided the fishing net.',
    name: 'Amina Diallo',
    role: 'Entrepreneur',
    location: 'Ouagadougou, Burkina Faso',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
  },
  {
    quote:
      'As a local partner, I have witnessed firsthand the integrity and effectiveness of Fountain of Hope. Their approach is truly collaborative — they listen, they adapt, and they deliver measurable results that last.',
    name: 'Dr. Samuel Osei',
    role: 'Partner Organization Director',
    location: 'Accra, Ghana',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
  },
];
