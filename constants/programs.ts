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
  impact: string[];
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
      'Keeping 10,500 boys and girls in school through scholarships, learning materials, and teacher capacity building so every child in Garissa attains quality basic education.',
    features: [
      'Scholarship programs for vulnerable children',
      'School supplies & learning materials',
      'Teacher training & capacity building',
      'Literacy & numeracy support',
      'Keeping girls in school',
    ],
    impact: [
      '10,500+ boys and girls kept in school',
      'Scholarships for vulnerable children',
      'Teacher training to lift quality',
      "Girls' education prioritized",
    ],
    icon: BookOpen,
    image:
      '/images/quality education.jpeg',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'healthcare',
    title: 'Maternal, Newborn & Child Health',
    slug: 'maternal-newborn-child-health',
    description:
      'Through the Okoa Mama na Mtoto Initiative (OMMI), we advocate for safe motherhood and newborn care — engaging faith leaders, youth champions, and community radio to save mothers and babies.',
    features: [
      'Okoa Mama na Mtoto (OMMI) advocacy',
      'Radio campaigns reaching 300,000+',
      'Women religious leader engagement',
      'Youth champion mobilization',
      'County health system strengthening',
    ],
    impact: [
      '300,000+ reached via community radio',
      '40 women religious leaders engaged',
      '15 youth champions trained',
      'County health systems strengthened',
    ],
    icon: HeartPulse,
    image:
      '/images/foh21.jpeg',
    color: 'from-[#E91E63] to-pink-600',
  },
  {
    id: 'women-empowerment',
    title: 'Family Planning & Safe Motherhood',
    slug: 'family-planning-safe-motherhood',
    description:
      'Promoting child spacing and reproductive health among married women through faith-based dialogues, male involvement, and gender-lensed advocacy to reduce maternal deaths.',
    features: [
      'Postpartum family planning advocacy',
      'Faith-based child spacing dialogues',
      'Male involvement initiatives',
      'SGBV response & referrals',
      'Gender-lensed advocacy with partners',
    ],
    impact: [
      'Faith-based child spacing dialogues',
      'Male involvement in maternal health',
      'SGBV response & referrals',
      "Tackling Garissa's MMR of 646 per 100,000 births",
    ],
    icon: Sparkles,
    image:
      '/images/foh2.jpeg',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'youth-development',
    title: 'Youth Leadership & Vocational Training',
    slug: 'youth-vocational-training',
    description:
      'Training 3,500 young people in trade crafts, digital skills, and leadership so they can earn a living, lead change, and build economic independence.',
    features: [
      'Vocational trade skills training',
      'Digital & technology skills',
      'Leadership & mentorship programs',
      'Entrepreneurship incubation',
      'Sports & recreation initiatives',
    ],
    impact: [
      '3,500+ young people trained',
      'Vocational & digital skills',
      'Leadership & mentorship',
      'Entrepreneurship incubation',
    ],
    icon: UserCheck,
    image:
      '/images/fohhero2.jpeg',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'social-support',
    title: 'Peacebuilding & Community Resilience',
    slug: 'peacebuilding-community-resilience',
    description:
      'Sensitizing 14,000 women and men against violent extremism while strengthening community health structures and supporting survivors of gender-based violence.',
    features: [
      'Counter-radicalization awareness',
      'Community health structures (CHVs & CBDs)',
      'SGBV survivor support & referrals',
      'Emergency relief & response',
      'Social cohesion dialogues',
    ],
    impact: [
      '14,000+ women & men sensitized',
      '1,400+ CHVs & CBDs trained',
      'SGBV survivor support & referrals',
      'Counter-radicalization awareness',
    ],
    icon: HandHeart,
    image:
      '/images/foh22.jpeg',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'environment',
    title: 'Climate Change & Environment',
    slug: 'climate-change-environment',
    description:
      'Building the capacity of 10,500 residents to adapt to climate change through water, sanitation, sustainable agriculture, and environmental conservation.',
    features: [
      'Climate change capacity building',
      'Water & sanitation access',
      'Sustainable agriculture training',
      'Environmental conservation',
      'Resilience education for refugees & hosts',
    ],
    impact: [
      '10,500+ residents trained to adapt',
      'Water & sanitation access',
      'Sustainable agriculture training',
      'Refugee & host community resilience',
    ],
    icon: Leaf,
    image:
      '/images/foh21.jpeg',
    color: 'from-green-500 to-emerald-600',
  },
];

export const overviewStats: OverviewStat[] = [
  { value: 6, suffix: '', label: 'Core Program Areas', icon: Target },
  { value: 10500, suffix: '+', label: 'Children in Education', icon: BookOpen },
  { value: 3500, suffix: '+', label: 'Youth Trained', icon: UserCheck },
  { value: 14000, suffix: '+', label: 'Peacebuilding Reached', icon: HandHeart },
  { value: 1400, suffix: '+', label: 'CHVs & CBDs Trained', icon: HeartPulse },
  { value: 40, suffix: '+', label: 'Faith Leaders Engaged', icon: Sparkles },
];

export const impactStats: ImpactStat[] = [
  { value: 300000, suffix: '+', label: 'Reached via Community Radio', icon: HeartPulse },
  { value: 10500, suffix: '+', label: 'Children in Education', icon: BookOpen },
  { value: 3500, suffix: '+', label: 'Youth Trained', icon: UserCheck },
  { value: 1400, suffix: '+', label: 'CHVs & CBDs Trained', icon: HandHeart },
  { value: 14000, suffix: '+', label: 'Peacebuilding Sensitized', icon: Target },
  { value: 100, suffix: '%', label: 'Program Transparency', icon: BarChart3 },
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
  title: 'Okoa Mama na Mtoto Initiative (OMMI)',
  description:
    'In partnership with the International Centre for Reproductive Health Kenya (ICRHK), OMMI championed maternal and newborn health across Garissa County. From landscaping with county health leadership to a live radio talk show reaching 300,000 listeners, the initiative engaged 40 women religious leaders, trained 15 youth champions, and brought maternal mortality into the open. With Garissa&rsquo;s maternal mortality ratio at 646 per 100,000 live births &mdash; nearly double the national average &mdash; these voices are driving real change.',
  image:
    '/images/foh8.jpeg',
  stats: [
    { label: 'Radio Audience Reached', value: '300,000+' },
    { label: 'Faith Leaders Engaged', value: '40' },
    { label: 'Youth Champions', value: '15' },
  ],
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'The persistently high maternal and child mortality rates in Garissa remain one of our most urgent challenges. We must come together and strengthen our responsive systems in maternal and child health services.',
    name: 'County Director of Health',
    role: 'Ministry of Health, Garissa',
    location: 'Garissa, Kenya',
    avatar: '/images/foh10.jpeg',
  },
  {
    quote:
      'Our religion, Islam, allows us to do child spacing and breastfeed our babies for 24 months. We will use our gatherings to inform our congregation about what we learned in this meeting.',
    name: 'Women Religious Leader',
    role: 'Faith Leader',
    location: 'Garissa, Kenya',
    avatar: '/images/foh11.jpeg',
  },
  {
    quote:
      'We, as county assembly members, commit to championing maternal health by advocating for adequate financial resources and ensuring every part of our health system functions effectively.',
    name: 'Chair, County Assembly Health Committee',
    role: 'Garissa County Assembly',
    location: 'Garissa, Kenya',
    avatar: '/images/foh12.jpeg',
  },
];
