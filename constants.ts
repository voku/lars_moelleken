import { ExperienceItem, ProjectItem, SkillCategory, SocialLink } from './types';

export const PROFILE = {
  name: "Lars Moelleken",
  title: "Senior PHP-Entwickler & Softwarearchitekt",
  location: "Voerde (Niederrhein), NRW, Deutschland",
  status: "Open to Work",
  statusMessage: "Offen für Senior-Positionen (PHP/Architektur)",
  email: "lars@moelleken.org",
  shortBio: "Senior PHP-Entwickler mit 20+ Jahren Erfahrung. Fokus auf Legacy-Modernisierung, Clean Code, statische Analyse und CI/CD. Open-Source Maintainer.",
  about: `Ich bin Senior PHP-Entwickler mit mehr als 20 Jahren Erfahrung in der Entwicklung, Modernisierung und Weiterentwicklung von Web-Systemen.
  
  Mein Schwerpunkt liegt auf PHP, Legacy-Modernisierung, sauberer Softwarearchitektur, statischer Analyse (PHPStan, Psalm) und robusten CI/CD-Pipelines. Ich habe die letzten 8 Jahre mit Systemen gearbeitet, die lange gewachsen sind, kritisch für das Geschäft sind und Struktur, Performance und Sicherheit benötigten.
  
  Was mich ausmacht:
  - Ich behebe nicht nur Bugs, ich beseitige Ursachen.
  - Ich modernisiere Legacy-Code ohne kompletten Rewrite.
  - Ich etabliere Tools wie PHPStan, Rector, php-cs-fixer und Tests als Standard.
  - Ich denke in Wartbarkeit, Nachvollziehbarkeit und Reproduzierbarkeit.`,
  // Obfuscated parts for WhatsApp: +49 177 2834119
  wa: {
    cc: "49",
    parts: ["MTc3", "MjgzNDExOQ=="] // base64 encoded parts to hinder simple scrapers
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/voku/', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/larsmoelleken', icon: 'linkedin' },
  { name: 'Website', url: 'https://moelleken.org', icon: 'globe' },
  { name: 'Blog', url: 'https://suckup.de', icon: 'book' },
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Core Tech",
    skills: [
      { name: "PHP 8.x", icon: "Code" },
      { name: "MySQL / MariaDB", icon: "Database" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "HTML5", icon: "FileCode" },
      { name: "CSS/SASS", icon: "Palette" },
      { name: "JavaScript", icon: "Braces" },
      { name: "TypeScript", icon: "Braces" }
    ]
  },
  {
    name: "Architecture & Quality",
    skills: [
      { name: "Legacy Modernization", icon: "RefreshCw" },
      { name: "Clean Code", icon: "Hexagon" },
      { name: "DDD", icon: "Layers" },
      { name: "PHPStan (Level 8+)", icon: "CheckCircle" },
      { name: "Rector", icon: "Zap" },
      { name: "PHPUnit", icon: "TestTube" },
      { name: "Codeception", icon: "TestTube" }
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "Box" },
      { name: "GitLab CI", icon: "Workflow" },
      { name: "Jenkins", icon: "Workflow" },
      { name: "Linux Administration", icon: "Terminal" },
      { name: "Bash", icon: "Terminal" },
      { name: "Elasticsearch", icon: "Search" },
      { name: "Nginx", icon: "Server" }
    ]
  },
  {
    name: "Security",
    skills: [
      { name: "XSS Prevention", icon: "Shield" },
      { name: "CSRF Protection", icon: "ShieldCheck" },
      { name: "SQLi Prevention", icon: "Database" },
      { name: "Secure Auth Workflows", icon: "Lock" }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    name: "portable-utf8",
    description: "Performance optimized (ascii) string functions for PHP. A standarad library used worldwide.",
    url: "https://github.com/voku/portable-utf8",
    stats: "Top PHP Lib",
    tags: ["PHP", "UTF-8", "String Manipulation"]
  },
  {
    id: "p2",
    name: "Simple-PHP-Code-Parser",
    description: "A simple data structure parser from your PHP code to analyze structure and dependencies.",
    url: "https://github.com/voku/Simple-PHP-Code-Parser",
    tags: ["PHP", "AST", "Parser"]
  },
  {
    id: "p3",
    name: "portable-ascii",
    description: "Performance optimized ASCII string functions for PHP applications.",
    url: "https://github.com/voku/portable-ascii",
    tags: ["PHP", "Performance", "ASCII"]
  },
  {
    id: "p4",
    name: "anti-xss",
    description: "Anti XSS library to protect your PHP application from Cross-Site Scripting attacks.",
    url: "https://github.com/voku/anti-xss",
    tags: ["Security", "PHP", "XSS"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "e1",
    company: "REMONDIS IT Services GmbH & Co. KG",
    role: "Senior PHP-Entwickler",
    period: "Okt. 2023 – Heute",
    location: "Lünen / Hybrid",
    type: "Vollzeit",
    description: [
      "Verantwortung für Architektur und Weiterentwicklung eines unternehmenskritischen Portals (Rollen-/Rechtesystem).",
      "Modernisierung eines 15+ Jahre Legacy-Monolithen auf PHP 8.x mit Strict Types.",
      "Etablierung von PHPStan (Level 8), Rector und CI/CD Pipelines.",
      "Performanceoptimierung von MariaDB und Integration von Active Directory / M365."
    ],
    techStack: ["PHP 8", "MariaDB", "GitLab CI", "PHPStan", "Legacy Refactoring"]
  },
  {
    id: "e2",
    company: "IONOS",
    role: "Entwickler",
    period: "Feb. 2023 – Nov. 2023",
    location: "Remote",
    type: "Vollzeit",
    description: [
      "Analyse und Refactoring einer ca. 20 Jahre alten PHP-Codebasis.",
      "Einführung von Autoloading, Coding Standards und statischer Analyse.",
      "Optimierung von MySQL/PostgreSQL Anbindungen.",
      "Security-Härtung gegen XSS, SQLi, CSRF."
    ],
    techStack: ["PHP", "PostgreSQL", "MySQL", "Security", "Refactoring"]
  },
  {
    id: "e3",
    company: "MEERX group GmbH",
    role: "PHP-Entwickler",
    period: "Juni 2017 – Feb. 2023",
    location: "Oberhausen",
    type: "Vollzeit",
    description: [
      "Weiterentwicklung eines hochskalierbaren E-Commerce-Systems.",
      "Implementierung Produktsuche mit Elasticsearch.",
      "Aufbau von CI/CD und Testlandschaft (PHPUnit, Codeception).",
      "Performanceoptimierung bei wachsendem Traffic."
    ],
    techStack: ["PHP", "Elasticsearch", "React Native", "SQL", "Docker"]
  },
  {
    id: "e4",
    company: "menadwork kommunikation gmbh",
    role: "Webdeveloper",
    period: "Okt. 2011 – Mai 2017",
    location: "Düsseldorf",
    type: "Vollzeit",
    description: [
      "Entwicklung individueller Webanwendungen und Portale.",
      "Einführung von Git und Jenkins CI.",
      "Fullstack Umsetzung (PHP, JS, SASS)."
    ],
    techStack: ["PHP", "Jenkins", "JavaScript", "SASS"]
  },
  {
    id: "e5",
    company: "Global Village GmbH",
    role: "Sysadmin / Fachinformatiker",
    period: "Aug. 2007 – Juli 2010",
    location: "Voerde",
    type: "Ausbildung & Angestellt",
    description: [
      "Administration von Linux-Servern (Web, Mail).",
      "Automatisierung mit Bash, PHP, Perl.",
      "Aufbau Monitoring-Strategie."
    ],
    techStack: ["Linux", "Bash", "Perl", "Nginx"]
  }
];