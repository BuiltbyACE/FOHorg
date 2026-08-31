import {
  HeartPulse,
  Droplets,
  HeartHandshake,
  Stethoscope,
  HandHeart,
  Leaf,
  Users,
  Target,
  ClipboardList,
  Building2,
  BarChart3,
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
  category?: string;
  children?: { id: string; title: string }[];
}

export interface ProgramCategory {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  programs: Program[];
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

export const programCategories: ProgramCategory[] = [
  {
    id: 'rmncah',
    title: 'RMNCAH',
    shortTitle: 'RMNCAH',
    subtitle:
      'Reproductive, Maternal, Newborn, Child & Adolescent Health — safeguarding the health of mothers, children and families across Garissa.',
    programs: [
      {
        id: 'maternal',
        title: 'Maternal Health',
        slug: 'maternal-health',
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
        image: '/images/foh21.jpeg',
        color: 'from-[#E91E63] to-pink-600',
      },
      {
        id: 'menstrual-health',
        title: 'Menstrual Health',
        slug: 'menstrual-health',
        description:
          'Promoting menstrual health and hygiene through education, dignity kits, and safe facilities so that girls and women in Garissa can manage their periods with dignity and stay in school.',
        features: [
          'Menstrual health education',
          'Dignity kits & sanitary products',
          'Girl-friendly WASH facilities',
          'Breaking stigma & taboos',
          'School retention support for girls',
        ],
        impact: [
          'Menstrual health education for girls',
          'Dignity kits distributed',
          'Girl-friendly facilities',
          'Keeping girls in school',
        ],
        icon: Droplets,
        image: '/images/foh7.jpeg',
        color: 'from-purple-500 to-fuchsia-600',
      },
      {
        id: 'family-planning',
        title: 'Family Planning',
        slug: 'family-planning',
        description:
          'Promoting child spacing and reproductive health among married couples through faith-based dialogues and gender-lensed outreach to support healthy families.',
        features: [
          'Postpartum family planning advocacy',
          'Faith-based child spacing dialogues',
          'Reproductive health education',
          'Couple & community dialogues',
          'Referrals to quality health services',
        ],
        impact: [
          'Faith-based child spacing dialogues',
          'Reproductive health education',
          'Couple & community dialogues',
          "Supporting reduced maternal deaths in Garissa",
        ],
        icon: HeartHandshake,
        image: '/images/foh2.jpeg',
        color: 'from-purple-500 to-indigo-600',
      },
      {
        id: 'male-involvement',
        title: 'Male Involvement in Child Spacing Advocacy',
        slug: 'male-involvement-child-spacing',
        description:
          'Advocating for the meaningful involvement of men in child spacing and maternal health — engaging husbands, faith leaders, and community champions as partners in healthy families.',
        features: [
          'Men as partners in child spacing',
          'Male faith & community champions',
          'Couple-based health dialogues',
          'SGBV response & referrals',
          'Gender-lensed advocacy with partners',
        ],
        impact: [
          'Men engaged in child spacing',
          'Male faith & community champions',
          'Couple-based health dialogues',
          'Gender-lensed advocacy with partners',
        ],
        icon: Users,
        image: '/images/foh11.jpeg',
        color: 'from-indigo-500 to-violet-600',
      },
      {
        id: 'non-communicable-diseases',
        title: 'Non-Communicable Diseases & Nutrition',
        slug: 'non-communicable-diseases-nutrition',
        description:
          'Screening and caring for non-communicable diseases while delivering nutrition support — including milk for children — so vulnerable families stay healthy and well-nourished.',
        features: [
          'NCD screening & awareness',
          'Nutrition & milk support for children',
          'Chronic illness care & referrals',
          'Healthy diet & lifestyle education',
          'Malnutrition prevention',
        ],
        impact: [
          'NCD screening & awareness',
          'Nutrition support with milk for children',
          'Chronic illness referrals',
          'Malnutrition prevention',
        ],
        icon: Stethoscope,
        image: '/images/kidssited.jpeg',
        color: 'from-amber-500 to-yellow-600',
      },
    ],
  },
  {
    id: 'community-resilience',
    title: 'Community Resilience',
    shortTitle: 'Community Resilience',
    subtitle:
      'Strengthening the social, economic and environmental resilience of Garissa communities so they can thrive in the face of challenges.',
    programs: [
      {
        id: 'peace',
        title: 'Peace Building',
        slug: 'peace-building',
        description:
          'Sensitizing women and men against violent extremism while strengthening community structures, promoting social cohesion, and supporting survivors of gender-based violence.',
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
        image: '/images/foh22.jpeg',
        color: 'from-amber-500 to-orange-600',
      },
      {
        id: 'climate-change',
        title: 'Climate Change & Environment',
        slug: 'climate-change-environment',
        description:
          'Building the capacity of residents to adapt to climate change through water, sanitation, sustainable agriculture, and environmental conservation.',
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
        image: '/images/climate.jpeg',
        color: 'from-green-500 to-emerald-600',
      },
      {
        id: 'empowerment',
        title: 'Empowerment',
        slug: 'empowerment',
        description:
          'Equipping young people with leadership, mentorship, trade skills, and digital literacy so they can lead change, earn a living, and build economic independence.',
        features: [
          'Youth leadership & mentorship',
          'Vocational trade skills training',
          'Digital & technology skills',
          'Entrepreneurship incubation',
          'Sports & recreation initiatives',
        ],
        impact: [
          '3,500+ young people trained',
          'Leadership & mentorship',
          'Vocational & digital skills',
          'Entrepreneurship incubation',
        ],
        icon: Users,
        image: '/images/fohhero2.jpeg',
        color: 'from-emerald-500 to-teal-600',
        children: [
          { id: 'youth-leadership', title: 'Youth Leadership' },
          { id: 'youth-mentorship', title: 'Youth Mentorship' },
        ],
      },
    ],
  },
];

export const programs: Program[] = programCategories.flatMap((category) =>
  category.programs.map((program) => ({ ...program, category: category.shortTitle }))
);

export const overviewStats: OverviewStat[] = [
  { value: 2, suffix: '', label: 'Program Pillars', icon: Target },
  { value: 10500, suffix: '+', label: 'Children in Education', icon: HeartPulse },
  { value: 3500, suffix: '+', label: 'Youth Trained', icon: Users },
  { value: 14000, suffix: '+', label: 'Peacebuilding Reached', icon: HandHeart },
  { value: 1400, suffix: '+', label: 'CHVs & CBDs Trained', icon: Droplets },
  { value: 40, suffix: '+', label: 'Faith Leaders Engaged', icon: HeartHandshake },
];

export const impactStats: ImpactStat[] = [
  { value: 300000, suffix: '+', label: 'Reached via Community Radio', icon: HeartPulse },
  { value: 10500, suffix: '+', label: 'Children in Education', icon: Stethoscope },
  { value: 3500, suffix: '+', label: 'Youth Trained', icon: Users },
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
