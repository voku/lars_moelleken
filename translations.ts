export type Language = 'de' | 'en';

export interface Translations {
  // Navigation
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    skipToContent: string;
    backToTop: string;
    socialLinks: string;
    contactSection: string;
    mainNav: string;
  };
  // Hero Section
  hero: {
    status: string;
    cta: string;
    location: string;
  };
  // Profile
  profile: {
    title: string;
    shortBio: string;
    about: string;
  };
  // Sections
  sections: {
    aboutHeading: string;
    experienceHeading: string;
    projectsHeading: string;
    skillsHeading: string;
    techUsed: string;
    projectTags: string;
  };
  // Experience
  experience: {
    fullTime: string;
    trainee: string;
  };
  // Contact/Footer
  contact: {
    heading: string;
    subheading: string;
    emailSend: string;
    whatsapp: string;
    whatsappDirect: string;
    gitPush: string;
    gitProfile: string;
    linkedin: string;
    linkedinNetwork: string;
    blog: string;
    footer: string;
    location: string;
  };
  // Buttons
  buttons: {
    letsTalk: string;
    downloadPDF: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      skipToContent: 'Zum Hauptinhalt springen',
      backToTop: 'Zurück zum Seitenanfang',
      socialLinks: 'Soziale Netzwerke und Links',
      contactSection: 'Kontaktbereich öffnen',
      mainNav: 'Hauptnavigation',
    },
    hero: {
      status: 'Open to Work',
      cta: 'Starten wir ein Projekt',
      location: 'Voerde (Niederrhein), NRW, Deutschland',
    },
    profile: {
      title: 'Senior PHP-Entwickler & Softwarearchitekt',
      shortBio: 'Senior PHP-Entwickler mit 20+ Jahren Erfahrung. Fokus auf Legacy-Modernisierung, Clean Code, statische Analyse und CI/CD. Open-Source Maintainer.',
      about: `Ich bin Senior PHP-Entwickler mit mehr als 20 Jahren Erfahrung in der Entwicklung, Modernisierung und Weiterentwicklung von Web-Systemen.
  
Mein Schwerpunkt liegt auf PHP, Legacy-Modernisierung, sauberer Softwarearchitektur, statischer Analyse (PHPStan, Psalm) und robusten CI/CD-Pipelines. Ich habe die letzten 8 Jahre mit Systemen gearbeitet, die lange gewachsen sind, kritisch für das Geschäft sind und Struktur, Performance und Sicherheit benötigten.

Was mich ausmacht:
- Ich behebe nicht nur Bugs, ich beseitige Ursachen.
- Ich modernisiere Legacy-Code ohne kompletten Rewrite.
- Ich etabliere Tools wie PHPStan, Rector, php-cs-fixer und Tests als Standard.
- Ich denke in Wartbarkeit, Nachvollziehbarkeit und Reproduzierbarkeit.`,
    },
    sections: {
      aboutHeading: 'Wer bin ich?',
      experienceHeading: 'Meine Reise',
      projectsHeading: 'Open Source Herzblut',
      skillsHeading: 'Werkzeugkasten',
      techUsed: 'Verwendete Technologien:',
      projectTags: 'Projekt-Tags:',
    },
    experience: {
      fullTime: 'Vollzeit',
      trainee: 'Ausbildung & Angestellt',
    },
    contact: {
      heading: 'Bereit für den nächsten Schritt?',
      subheading: 'Ich bin aktuell offen für neue Herausforderungen als Senior PHP Developer oder Software Architect.',
      emailSend: 'E-Mail senden',
      whatsapp: 'WhatsApp',
      whatsappDirect: 'Direkter Draht',
      gitPush: 'git push voku',
      gitProfile: 'Open Source Profile',
      linkedin: 'LinkedIn',
      linkedinNetwork: 'Professional Network',
      blog: 'Tech-Blog',
      footer: '© {year} Lars Moelleken — Senior Software Architect',
      location: 'NRW / Remote',
    },
    buttons: {
      letsTalk: "Let's Talk",
      downloadPDF: 'Als PDF speichern',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      skipToContent: 'Skip to main content',
      backToTop: 'Back to top',
      socialLinks: 'Social networks and links',
      contactSection: 'Open contact section',
      mainNav: 'Main navigation',
    },
    hero: {
      status: 'Open to Work',
      cta: "Let's Start a Project",
      location: 'Voerde (Niederrhein), NRW, Germany',
    },
    profile: {
      title: 'Senior PHP Developer & Software Architect',
      shortBio: 'Senior PHP Developer with 20+ years of experience. Focus on legacy modernization, clean code, static analysis, and CI/CD. Open-source maintainer.',
      about: `I am a Senior PHP Developer with more than 20 years of experience in developing, modernizing, and advancing web systems.

My focus is on PHP, legacy modernization, clean software architecture, static analysis (PHPStan, Psalm), and robust CI/CD pipelines. Over the last 8 years, I've worked with systems that have grown over time, are critical to business operations, and needed structure, performance, and security.

What defines me:
- I don't just fix bugs, I eliminate root causes.
- I modernize legacy code without complete rewrites.
- I establish tools like PHPStan, Rector, php-cs-fixer, and tests as standards.
- I think in terms of maintainability, traceability, and reproducibility.`,
    },
    sections: {
      aboutHeading: 'Who am I?',
      experienceHeading: 'My Journey',
      projectsHeading: 'Open Source Passion',
      skillsHeading: 'Toolbox',
      techUsed: 'Technologies used:',
      projectTags: 'Project tags:',
    },
    experience: {
      fullTime: 'Full-time',
      trainee: 'Training & Employed',
    },
    contact: {
      heading: 'Ready for the Next Step?',
      subheading: 'I am currently open to new challenges as a Senior PHP Developer or Software Architect.',
      emailSend: 'Send Email',
      whatsapp: 'WhatsApp',
      whatsappDirect: 'Direct Line',
      gitPush: 'git push voku',
      gitProfile: 'Open Source Profile',
      linkedin: 'LinkedIn',
      linkedinNetwork: 'Professional Network',
      blog: 'Tech Blog',
      footer: '© {year} Lars Moelleken — Senior Software Architect',
      location: 'NRW / Remote',
    },
    buttons: {
      letsTalk: "Let's Talk",
      downloadPDF: 'Save as PDF',
    },
  },
};

// Experience translations
export const experienceTranslations = {
  de: [
    {
      id: 'e1',
      company: 'REMONDIS IT Services GmbH & Co. KG',
      role: 'Senior PHP-Entwickler',
      period: 'Okt. 2023 – Heute',
      location: 'Lünen / Hybrid',
      type: 'Vollzeit',
      description: [
        'Verantwortung für Architektur und Weiterentwicklung eines unternehmenskritischen Portals (Rollen-/Rechtesystem).',
        'Modernisierung eines 15+ Jahre Legacy-Monolithen auf PHP 8.x mit Strict Types.',
        'Etablierung von PHPStan (Level 8), Rector und CI/CD Pipelines.',
        'Performanceoptimierung von MariaDB und Integration von Active Directory / M365.',
      ],
      techStack: ['PHP 8', 'MariaDB', 'GitLab CI', 'PHPStan', 'Legacy Refactoring'],
    },
    {
      id: 'e2',
      company: 'IONOS',
      role: 'Entwickler',
      period: 'Feb. 2023 – Nov. 2023',
      location: 'Remote',
      type: 'Vollzeit',
      description: [
        'Analyse und Refactoring einer ca. 20 Jahre alten PHP-Codebasis.',
        'Einführung von Autoloading, Coding Standards und statischer Analyse.',
        'Optimierung von MySQL/PostgreSQL Anbindungen.',
        'Security-Härtung gegen XSS, SQLi, CSRF.',
      ],
      techStack: ['PHP', 'PostgreSQL', 'MySQL', 'Security', 'Refactoring'],
    },
    {
      id: 'e3',
      company: 'MEERX group GmbH',
      role: 'PHP-Entwickler',
      period: 'Juni 2017 – Feb. 2023',
      location: 'Oberhausen',
      type: 'Vollzeit',
      description: [
        'Weiterentwicklung eines hochskalierbaren E-Commerce-Systems.',
        'Implementierung Produktsuche mit Elasticsearch.',
        'Aufbau von CI/CD und Testlandschaft (PHPUnit, Codeception).',
        'Performanceoptimierung bei wachsendem Traffic.',
      ],
      techStack: ['PHP', 'Elasticsearch', 'React Native', 'SQL', 'Docker'],
    },
    {
      id: 'e4',
      company: 'menadwork kommunikation gmbh',
      role: 'Webdeveloper',
      period: 'Okt. 2011 – Mai 2017',
      location: 'Düsseldorf',
      type: 'Vollzeit',
      description: [
        'Entwicklung individueller Webanwendungen und Portale.',
        'Einführung von Git und Jenkins CI.',
        'Fullstack Umsetzung (PHP, JS, SASS).',
      ],
      techStack: ['PHP', 'Jenkins', 'JavaScript', 'SASS'],
    },
    {
      id: 'e5',
      company: 'Global Village GmbH',
      role: 'Sysadmin / Fachinformatiker',
      period: 'Aug. 2007 – Juli 2010',
      location: 'Voerde',
      type: 'Ausbildung & Angestellt',
      description: [
        'Administration von Linux-Servern (Web, Mail).',
        'Automatisierung mit Bash, PHP, Perl.',
        'Aufbau Monitoring-Strategie.',
      ],
      techStack: ['Linux', 'Bash', 'Perl', 'Nginx'],
    },
  ],
  en: [
    {
      id: 'e1',
      company: 'REMONDIS IT Services GmbH & Co. KG',
      role: 'Senior PHP Developer',
      period: 'Oct. 2023 – Present',
      location: 'Lünen / Hybrid',
      type: 'Full-time',
      description: [
        'Responsible for architecture and development of a business-critical portal (roles/permissions system).',
        'Modernization of a 15+ year legacy monolith to PHP 8.x with strict types.',
        'Established PHPStan (Level 8), Rector, and CI/CD pipelines.',
        'Performance optimization of MariaDB and integration of Active Directory / M365.',
      ],
      techStack: ['PHP 8', 'MariaDB', 'GitLab CI', 'PHPStan', 'Legacy Refactoring'],
    },
    {
      id: 'e2',
      company: 'IONOS',
      role: 'Developer',
      period: 'Feb. 2023 – Nov. 2023',
      location: 'Remote',
      type: 'Full-time',
      description: [
        'Analysis and refactoring of a ~20-year-old PHP codebase.',
        'Introduction of autoloading, coding standards, and static analysis.',
        'Optimization of MySQL/PostgreSQL connections.',
        'Security hardening against XSS, SQLi, CSRF.',
      ],
      techStack: ['PHP', 'PostgreSQL', 'MySQL', 'Security', 'Refactoring'],
    },
    {
      id: 'e3',
      company: 'MEERX group GmbH',
      role: 'PHP Developer',
      period: 'June 2017 – Feb. 2023',
      location: 'Oberhausen',
      type: 'Full-time',
      description: [
        'Development of a highly scalable e-commerce system.',
        'Implementation of product search with Elasticsearch.',
        'Built CI/CD and test infrastructure (PHPUnit, Codeception).',
        'Performance optimization with growing traffic.',
      ],
      techStack: ['PHP', 'Elasticsearch', 'React Native', 'SQL', 'Docker'],
    },
    {
      id: 'e4',
      company: 'menadwork kommunikation gmbh',
      role: 'Web Developer',
      period: 'Oct. 2011 – May 2017',
      location: 'Düsseldorf',
      type: 'Full-time',
      description: [
        'Development of custom web applications and portals.',
        'Introduction of Git and Jenkins CI.',
        'Full-stack implementation (PHP, JS, SASS).',
      ],
      techStack: ['PHP', 'Jenkins', 'JavaScript', 'SASS'],
    },
    {
      id: 'e5',
      company: 'Global Village GmbH',
      role: 'Sysadmin / IT Specialist',
      period: 'Aug. 2007 – July 2010',
      location: 'Voerde',
      type: 'Training & Employed',
      description: [
        'Administration of Linux servers (web, mail).',
        'Automation with Bash, PHP, Perl.',
        'Built monitoring strategy.',
      ],
      techStack: ['Linux', 'Bash', 'Perl', 'Nginx'],
    },
  ],
};

// Project translations
export const projectTranslations = {
  de: [
    {
      id: 'p1',
      name: 'portable-utf8',
      description: 'Performance optimierte (ASCII) String-Funktionen für PHP. Eine Standard-Bibliothek, die weltweit genutzt wird.',
      url: 'https://github.com/voku/portable-utf8',
      stats: 'Top PHP Lib',
      tags: ['PHP', 'UTF-8', 'String-Manipulation'],
    },
    {
      id: 'p2',
      name: 'Simple-PHP-Code-Parser',
      description: 'Ein einfacher Datenstruktur-Parser aus PHP-Code zur Analyse von Struktur und Abhängigkeiten.',
      url: 'https://github.com/voku/Simple-PHP-Code-Parser',
      tags: ['PHP', 'AST', 'Parser'],
    },
    {
      id: 'p3',
      name: 'portable-ascii',
      description: 'Performance optimierte ASCII String-Funktionen für PHP-Anwendungen.',
      url: 'https://github.com/voku/portable-ascii',
      tags: ['PHP', 'Performance', 'ASCII'],
    },
    {
      id: 'p4',
      name: 'anti-xss',
      description: 'Anti-XSS-Bibliothek zum Schutz deiner PHP-Anwendung vor Cross-Site-Scripting-Angriffen.',
      url: 'https://github.com/voku/anti-xss',
      tags: ['Sicherheit', 'PHP', 'XSS'],
    },
  ],
  en: [
    {
      id: 'p1',
      name: 'portable-utf8',
      description: 'Performance-optimized (ASCII) string functions for PHP. A standard library used worldwide.',
      url: 'https://github.com/voku/portable-utf8',
      stats: 'Top PHP Lib',
      tags: ['PHP', 'UTF-8', 'String Manipulation'],
    },
    {
      id: 'p2',
      name: 'Simple-PHP-Code-Parser',
      description: 'A simple data structure parser from your PHP code to analyze structure and dependencies.',
      url: 'https://github.com/voku/Simple-PHP-Code-Parser',
      tags: ['PHP', 'AST', 'Parser'],
    },
    {
      id: 'p3',
      name: 'portable-ascii',
      description: 'Performance-optimized ASCII string functions for PHP applications.',
      url: 'https://github.com/voku/portable-ascii',
      tags: ['PHP', 'Performance', 'ASCII'],
    },
    {
      id: 'p4',
      name: 'anti-xss',
      description: 'Anti-XSS library to protect your PHP application from Cross-Site Scripting attacks.',
      url: 'https://github.com/voku/anti-xss',
      tags: ['Security', 'PHP', 'XSS'],
    },
  ],
};
