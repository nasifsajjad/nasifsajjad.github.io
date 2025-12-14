import { Project, Service, PricingItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'caliber',
    name: 'Caliber Fabrication',
    category: 'Industrial & Fabrication Services',
    image: '', 
    description: 'High-precision industrial component showcase.',
    link: 'https://nasifsajjad.github.io/caliberfab'
  },
  {
    id: 'alnoor',
    name: 'Al Noor Group',
    category: 'Corporate Group Website',
    image: '',
    description: 'Multi-national corporate identity and investor relations.',
    link: 'https://nasifsajjad.github.io/alnoor'
  },
  {
    id: 'tetris',
    name: 'Tetris Fabrication',
    category: 'Custom Fabrication Solutions',
    image: '',
    description: 'Bespoke architectural fabrication portfolio.',
    link: 'https://tetrisfabrication.com'
  },
  {
    id: 'moderna',
    name: 'Moderna Contracting',
    category: 'Construction & Contracting',
    image: '',
    description: 'Project tracking dashboard and public gallery.',
    link: 'https://modernacontracting.com'
  },
  {
    id: 'rf',
    name: 'RF Advertising',
    category: 'Marketing & Advertising Agency',
    image: '',
    description: 'Digital agency portfolio with high-octane animations.',
    link: 'https://rfadvertising.net'
  },
  {
    id: 'iblts',
    name: 'IBLTS',
    category: 'Organization / Non-Profit',
    image: '',
    description: 'Educational platform for localized learning.',
    link: 'https://iblts.org'
  },
  {
    id: 'bdsbh',
    name: 'Bangladesh School',
    category: 'Educational Institution',
    image: '',
    description: 'Official school portal and information hub.',
    link: 'https://bdsbh.github.io'
  },
  {
    id: 'usbd',
    name: 'United States of BD',
    category: 'Community Platform',
    image: '',
    description: 'Community hub for expatriates.',
    link: 'https://unitedstatesofbd.com'
  },
  {
    id: 'ssc',
    name: 'SSC EV',
    category: 'Electric Vehicles & Tech',
    image: '',
    description: 'Electric vehicle charging infrastructure mapping.',
    link: 'https://sscev.com'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Digital Presence Setup',
    price: 'BD 700+',
    tags: ['Website', 'Branding', 'Social Media'],
    description: 'Includes Complete Website + Branding + Social Media (SEO & 1-month content).',
    featured: true,
  },
  {
    title: 'Corporate Website',
    price: 'BD 150-600',
    tags: ['Multi-page', 'SEO', 'Speed'],
    description: 'Multi-page, SEO-ready, speed-optimized site (for established companies).',
    featured: false,
  },
  {
    title: 'Landing Page (Ads)',
    price: 'BD 80-200',
    tags: ['Ads', 'Conversion', 'Events'],
    description: 'High-conversion single pages for real estate, campaigns, or events.',
    featured: false,
  },
  {
    title: 'Company Profile',
    price: 'BD 80-200',
    tags: ['Design', 'Tenders'],
    description: '5-10 pages of professional design for tenders.',
    featured: false,
  },
  {
    title: '5-Page Business Site',
    price: 'BD 39',
    tags: ['Starter', 'Essential'],
    description: 'Includes Home, About, Services, Contact, and Gallery pages.',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    price: 'BD 25-30',
    tags: ['Freelancer', 'Student'],
    description: 'Skill and project showcase.',
    featured: false,
  },
  {
    title: 'Logo Design',
    price: 'BD 10-20',
    tags: ['Identity', 'Vector'],
    description: 'Clean, modern logos tailored to the brand.',
    featured: false,
  },
  {
    title: 'Flyer / Poster',
    price: 'BD 5-10',
    tags: ['Print', 'Marketing'],
    description: 'Print-ready marketing graphics.',
    featured: false,
  },
  {
    title: 'PowerPoint Presentation',
    price: 'BD 10-20',
    tags: ['Slides', 'Corporate'],
    description: '10-15 Professional Slides.',
    featured: false,
  },
  {
    title: 'Google Business Setup',
    price: 'BD 10-15',
    tags: ['Maps', 'SEO'],
    description: 'Maps & Optimization.',
    featured: false,
  },
  {
    title: 'CV / Resume Design',
    price: 'BD 5-8',
    tags: ['ATS Friendly', 'Career'],
    description: 'Modern ATS Friendly designs.',
    featured: false,
  },
  {
    title: 'Social Media Captions',
    price: 'BD 1-15',
    tags: ['Engaging', 'Content'],
    description: 'Engaging FB/Insta text.',
    featured: false,
  },
  {
    title: 'Product Descriptions',
    price: 'BD 0.3-0.5 /item',
    tags: ['Sales', 'Copy'],
    description: 'Sales-focused copy.',
    featured: false,
  }
];

export const PRICING_TABLE: PricingItem[] = [];