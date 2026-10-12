import indycar from './assets/indycar.webp'
import agent from './assets/agent.webp'
import dashboard from './assets/dashboard.webp'
import vybe from './assets/vybe.webp'

export const EMAIL = 'karthikanupindi98@gmail.com'
export const LINKEDIN = 'https://www.linkedin.com/in/karthikanupindi'
// TODO: point at the hosted resume PDF once it exists.
export const RESUME = '#resume'

export const projects = [
  {
    context: 'Client Engagement — NTT INDYCAR',
    title: 'How an Information Architecture Rebuild Cut Bounces 25% and Kept Fans 30% Longer in Testing',
    tags: ['User Research', 'Information Architecture', 'UI Design'],
    image: indycar,
    href: '#indycar',
  },
  {
    context: 'Design Challenge',
    title: 'Designing Trust Into an AI Agent Workflow for Enterprise Teams',
    tags: ['Product Strategy', 'Conversational UX', 'UI Design'],
    image: agent,
    href: '#ai-agent',
  },
  {
    context: 'Design Challenge',
    title: 'From Scattered Sales Data to Faster Revenue Decisions',
    tags: ['Data Visualization', 'Prioritization', 'UI Design'],
    image: dashboard,
    href: '#sales-dashboard',
  },
  {
    context: 'Academic Project',
    title: 'VYBE: Trading “Journaling” for a 1-Minute Daily Habit',
    tags: ['User Research', 'Prototyping', 'Usability Testing'],
    image: vybe,
    href: '#vybe',
  },
]

export const teams = [
  'ProTrans International',
  'KGS Technology Group',
  'The Heart Center',
  'NTT INDYCAR',
  'Indiana University',
  'Tata Consultancy Services',
]

export const results = [
  { value: 15, prefix: '', suffix: '%', label: 'shorter border-crossing wait times', org: 'ProTrans International', note: 'Redesigned multi-step workflows for dispatchers, drivers and customs teams.' },
  { value: 20, prefix: '', suffix: '%', label: 'fewer user errors', org: 'KGS Technology Group', note: 'Re-architected the information architecture and refined flows with analytics.' },
  { value: 36, prefix: '+', suffix: '%', label: 'user satisfaction', org: 'Tata Consultancy Services', note: 'Across a financial platform serving 50K+ users.' },
  { value: 1.25, prefix: '', suffix: '×', label: 'more completions', org: 'The Heart Center', note: 'For a healthcare product used by 1,000+ people.', decimals: 2 },
]

export const principles = ['Impact-driven', 'User-centered', 'Data-informed', 'Ethical']
