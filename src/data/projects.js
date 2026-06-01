import tradeCircleImg from '../assets/TradeCicle.png'; // note spelling matches the file
import GMImg from '../assets/gm.png'
import routeImg from '../assets/route.png'

export const projects = [
  {
    title: 'Public Policy Analytics (GM Capstone)',
    blurb: 'Full-stack election insights platform: React + Flask + PostgreSQL with data viz and candidate risk scoring.',
    tags: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'Docker'],
    highlights: [
      'Cut p95 query latency 60% via indexing/caching',
      'REST API with pagination and tests',
      'Preview deploys via CI'
    ],
    link: '#',
    code: '#',
    image: GMImg
  },
  {
    title: 'TradeCircle — Skill Exchange',
    blurb: 'Realtime chat + listings with Django Channels, JWT auth, and a React client.',
    tags: ['Typescript', 'Express', 'JWT', 'React', 'WebSockets', 'MongoDB'],
    highlights: [
      'WebSocket auth middleware with JWT',
      'E2E tests + health checks',
      'Lazy-loaded routes and code-splitting'
    ],
    link: '#',
    code: '#',
    image: tradeCircleImg
  },
  {
    title: 'Pokemon Go',
    blurb: 'Primary/secondary DNS, SSL, SSH hardening, and packet analysis with Wireshark.',
    tags: ['Linux', 'BIND9', 'TLS', 'Wireshark'],
    highlights: [
      'Scripted reproducible server setup',
      'Threat model + mitigations',
      'Automated log rotation + alerts'
    ],
    link: '#',
    code: '#',
    image: routeImg
  }
]
