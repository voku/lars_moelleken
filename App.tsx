import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Globe, 
  MapPin, 
  Mail, 
  Terminal as TerminalIcon, 
  Code2, 
  Briefcase,
  ExternalLink,
  Cpu,
  Layers as LayersIcon,
  Sparkles,
  MessageCircle,
  BookOpen,
  Download,
  Languages
} from 'lucide-react';
import { PROFILE, SKILLS, SOCIAL_LINKS } from './constants';
import { useLanguage } from './LanguageContext';

const SkillIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "relative z-10 w-6 h-6 text-sunset group-hover:text-sunset-dark transition-all duration-300",
    "aria-hidden": true
  };

  const getIconPath = () => {
    switch (iconName) {
      case 'Code':
        return <path d="m16 18 6-6-6-6M8 6l-6 6 6 6m5.5-16-3 20" />;
      case 'Database':
        return (
          <>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </>
        );
      case 'FileCode':
        return (
          <>
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7L15 2z" />
            <path d="M14 2v4a1 1 0 0 0 1 1h4M9 13l-2 2 2 2m6-4 2 2-2 2" />
          </>
        );
      case 'Palette':
        return (
          <>
            <path d="M12 20.94c1.88 0 3.05-1.4 3.05-2.09 0-.41-.18-.8-.49-1.03l-.42-.3c-.3-.21-.49-.55-.49-.9 0-.61.5-1.1 1.1-1.1h2.21c1.88 0 3.05-1.4 3.05-3.14 0-5.75-4.66-10.38-10.51-10.38C5.01 2 1 6.36 1 11.72s4.01 9.22 11 9.22z" />
            <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
          </>
        );
      case 'Braces':
        return <path d="M7 21c-4 0-4-3-4-3s0-3 2-3 2-2 2-3V5a2 2 0 0 1 2-2m6 18c4 0 4-3 4-3s0-3-2-3-2-2-2-3V5a2 2 0 0 0-2-2" />;
      case 'RefreshCw':
        return (
          <>
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            <path d="M3 21v-5h5" />
          </>
        );
      case 'Hexagon':
        return <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />;
      case 'Layers':
        return (
          <>
            <path d="m12 2 10 5-10 5L2 7l10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </>
        );
      case 'CheckCircle':
        return (
          <>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m22 4-10 10.01-3-3" />
          </>
        );
      case 'Zap':
        return <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />;
      case 'TestTube':
        return (
          <>
            <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2" />
            <path d="M8.5 2h7M14.5 16h-5" />
          </>
        );
      case 'Box':
        return (
          <>
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
          </>
        );
      case 'Workflow':
        return (
          <>
            <rect width="8" height="8" x="3" y="3" rx="2" />
            <path d="M7 11v4a2 2 0 0 0 2 2h4" />
            <rect width="8" height="8" x="13" y="13" rx="2" />
          </>
        );
      case 'Terminal':
        return (
          <>
            <path d="m4 17 6-6-6-6M12 19h8" />
          </>
        );
      case 'Search':
        return (
          <>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </>
        );
      case 'Server':
        return (
          <>
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <path d="M6 6h.01M6 18h.01" />
          </>
        );
      case 'Shield':
        return <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />;
      case 'ShieldCheck':
        return (
          <>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
          </>
        );
      case 'Lock':
        return (
          <>
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </>
        );
      default:
        return <circle cx="12" cy="12" r="10" />;
    }
  };

  return (
    <div className="relative flex items-center justify-center p-3 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 group-hover:border-sunset/20 group-hover:shadow-lg group-hover:shadow-sunset/5">
      <svg {...commonProps}>
        {getIconPath()}
      </svg>
      {/* Dynamic background glow */}
      <div className="absolute inset-0 bg-sunset-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" aria-hidden="true"></div>
      <div className="absolute -inset-2 bg-sunset-200/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
    </div>
  );
};

const App: React.FC = () => {
  const { language, setLanguage, t, experience, projects } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      element.setAttribute('tabindex', '-1');
      element.focus({ preventScroll: true });
    }
  };

  const openWhatsApp = () => {
    try {
      const { cc, parts } = PROFILE.wa;
      const decoded = parts.map(p => atob(p)).join('');
      const link = `https://wa.me/${cc}${decoded}`;
      window.open(link, '_blank', 'noopener,noreferrer');
    } catch (e) {
      console.error("Link assembly failed", e);
    }
  };

  const handlePrintPDF = () => {
    window.print();
  };

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <div className="min-h-screen font-sans selection:bg-sunset-100 selection:text-sunset-500 text-slate-700 bg-white">
      {/* Skip to Content Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-sunset focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl"
      >
        {t.nav.skipToContent}
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/40 print:hidden">
        <nav className="max-w-6xl mx-auto px-6" aria-label={t.nav.mainNav}>
          <div className="flex items-center justify-between h-20">
            <button 
              className="flex items-center gap-3 cursor-pointer group focus-visible:outline-sunset" 
              onClick={() => scrollTo('home')}
              aria-label={t.nav.backToTop}
            >
              <div className="p-2 rounded-2xl bg-sunset-50 group-hover:bg-sunset-100 transition-colors">
                <Sparkles className="h-6 w-6 text-sunset" aria-hidden={true} />
              </div>
              <span className="font-extrabold text-slate-900 text-xl tracking-tighter">
                voku<span className="text-sunset">/</span>dev
              </span>
            </button>
            
            <div className="hidden md:flex items-center space-x-2">
              {[ 
                { id: 'about', label: t.nav.about },
                { id: 'experience', label: t.nav.experience },
                { id: 'projects', label: t.nav.projects },
                { id: 'skills', label: t.nav.skills },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  className={`${
                    activeSection === item.id
                      ? 'bg-sunset text-white shadow-lg shadow-sunset/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  } px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all focus-visible:ring-2 focus-visible:ring-sunset print:hidden"
                aria-label={language === 'de' ? t.buttons.switchToEnglish : t.buttons.switchToGerman}
                title={language === 'de' ? t.buttons.switchToEnglish : t.buttons.switchToGerman}
              >
                <Languages className="w-5 h-5" aria-hidden={true} />
                <span className="ml-1 text-xs font-bold uppercase">{language === 'de' ? 'EN' : 'DE'}</span>
              </button>

              {/* PDF Download Button */}
              <button
                onClick={handlePrintPDF}
                className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all focus-visible:ring-2 focus-visible:ring-sunset print:hidden"
                aria-label={t.buttons.downloadPDF}
                title={t.buttons.downloadPDF}
              >
                <Download className="w-4 h-4" aria-hidden={true} />
                <span className="text-sm font-bold">PDF</span>
              </button>

               <button 
                onClick={() => scrollTo('contact')}
                className="hidden md:flex btn-sunset px-6 py-2.5 rounded-xl text-white font-black text-sm transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2"
              >
                {t.buttons.letsTalk}
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="md:hidden p-2 rounded-xl bg-sunset text-white focus-visible:ring-2 focus-visible:ring-sunset"
                aria-label={t.nav.contactSection}
              >
                <Mail className="w-5 h-5" aria-hidden={true} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section 
          id="home" 
          className="relative sunset-sky-bg pt-40 pb-32 px-6 overflow-hidden" 
          aria-labelledby="hero-heading"
        >
          <div className="light-beam" aria-hidden={true}></div>
          
          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div 
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-white text-meadow-800 text-sm font-extrabold uppercase tracking-widest shadow-sm"
                role="status"
              >
                <span className="relative flex h-2.5 w-2.5" aria-hidden={true}>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-meadow-200 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-meadow-200"></span>
                </span>
                {t.hero.status}
              </div>
              
              <div className="space-y-4">
                <h1 id="hero-heading" className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                  {PROFILE.name}
                </h1>
                <p className="text-3xl md:text-4xl font-extrabold text-sunset-gradient">
                  {t.profile.title}
                </p>
              </div>
              
              <p className="text-xl text-slate-700 font-medium leading-relaxed max-w-2xl">
                {t.profile.shortBio}
              </p>

              <div className="flex flex-wrap gap-5 pt-4">
                <button 
                  onClick={() => scrollTo('contact')}
                  className="btn-sunset px-10 py-5 rounded-3xl text-white font-black text-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 focus-visible:ring-4 focus-visible:ring-sunset/30 print:hidden"
                >
                  {t.hero.cta}
                </button>
                <div className="flex items-center gap-2 print:flex-col print:items-start print:gap-1" role="group" aria-label={t.nav.socialLinks}>
                  {/* Filter out Blog link in the hero section for a cleaner profile focus */}
                  {SOCIAL_LINKS.filter(link => link.name !== 'Blog').map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-white/50 hover:bg-white text-slate-700 rounded-2xl border border-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-xl hover:border-sunset/30 focus-visible:ring-2 focus-visible:ring-sunset print:p-0 print:bg-transparent print:border-0 print:shadow-none print:flex print:items-center print:gap-2"
                      aria-label={`Besuche mein ${link.name} Profil (öffnet in neuem Fenster)`}
                    >
                      {link.icon === 'github' && <Github className="w-5 h-5 text-sunset transition-colors group-hover:text-sunset-dark print:w-4 print:h-4" aria-hidden={true} />}
                      {link.icon === 'linkedin' && <Linkedin className="w-5 h-5 text-sunset transition-colors group-hover:text-sunset-dark print:w-4 print:h-4" aria-hidden={true} />}
                      {link.icon === 'globe' && <Globe className="w-5 h-5 text-sunset transition-colors group-hover:text-sunset-dark print:w-4 print:h-4" aria-hidden={true} />}
                      {link.icon === 'book' && <BookOpen className="w-5 h-5 text-sunset transition-colors group-hover:text-sunset-dark print:w-4 print:h-4" aria-hidden={true} />}
                      <span className="hidden print:inline print:text-sm">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-slate-600 font-bold">
                <MapPin className="w-5 h-5 text-sunset" aria-hidden={true} />
                <span>{t.hero.location}</span>
              </div>
            </div>
            
            <div className="lg:col-span-5 hidden lg:block" aria-hidden={true}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-sunset-200/50 to-sky-orange/50 rounded-[40px] blur-2xl opacity-50"></div>
                <div className="relative glass-card p-8 rounded-[40px] shadow-2xl space-y-6 border-white">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-sunset-200"></div>
                    <div className="w-3 h-3 rounded-full bg-sky-orange"></div>
                    <div className="w-3 h-3 rounded-full bg-meadow-200"></div>
                  </div>
                  <div className="font-mono text-sm space-y-2 text-slate-700">
                    <p><span className="text-sunset font-bold">namespace</span> App\Lars;</p>
                    <p><span className="text-sunset font-bold">class</span> <span className="text-orange-600 font-bold">Architect</span> {'{'}</p>
                    <p className="pl-6"><span className="text-blue-500">use</span> CleanArchitecture;</p>
                    <p className="pl-6 mt-4 font-bold text-slate-400">// Skills & Mood</p>
                    <p className="pl-6"><span className="text-sunset font-bold">public</span> <span className="text-blue-600">$experience</span> = <span className="text-meadow-800">20+ years</span>;</p>
                    <p className="pl-6"><span className="text-sunset font-bold">public</span> <span className="text-blue-600">$status</span> = <span className="text-meadow-800">'Ready to Modernize'</span>;</p>
                    <p>{'}'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section 
          id="about" 
          className="py-32 bg-white relative" 
          aria-labelledby="about-heading"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-3xl bg-sky-pink" aria-hidden={true}>
                <Cpu className="w-8 h-8 text-sunset" />
              </div>
              <h2 id="about-heading" className="text-4xl font-black text-slate-900 tracking-tighter">{t.sections.aboutHeading}</h2>
            </div>
            
            <div className="space-y-8 text-slate-700">
              {t.profile.about.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-xl leading-relaxed font-medium">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section 
          id="experience" 
          className="py-32 bg-slate-50/50" 
          aria-labelledby="exp-heading"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-20">
              <div className="p-3 rounded-3xl bg-sky-orange" aria-hidden={true}>
                <Briefcase className="w-8 h-8 text-orange-600" />
              </div>
              <h2 id="exp-heading" className="text-4xl font-black text-slate-900 tracking-tighter">{t.sections.experienceHeading}</h2>
            </div>

            <div className="space-y-24">
              {experience.map((job) => (
                <article 
                  key={job.id} 
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 group"
                >
                  <div className="md:col-span-3">
                    <p className="text-lg font-black text-sunset-dark uppercase tracking-widest">{job.period}</p>
                    <p className="text-slate-500 font-bold mt-1 uppercase text-sm">{job.type}</p>
                  </div>
                  
                  <div className="md:col-span-9 space-y-6">
                    <header className="space-y-1">
                      <h3 className="text-3xl font-black text-slate-900 group-hover:text-sunset transition-colors">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xl font-bold text-slate-500">
                        <span>{job.company}</span>
                        <span className="text-slate-200" aria-hidden={true}>/</span>
                        <span>{job.location}</span>
                      </div>
                    </header>

                    <ul className="space-y-4">
                      {job.description.map((point, idx) => (
                        <li key={idx} className="flex gap-4 text-lg text-slate-700 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-sunset shrink-0 mt-3" aria-hidden={true}></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3 pt-4">
                      <p className="sr-only">{t.sections.techUsed}</p>
                      {job.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-5 py-2 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-wider group-hover:border-sunset/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section 
          id="projects" 
          className="py-32 bg-white" 
          aria-labelledby="projects-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-20">
              <div className="p-3 rounded-3xl bg-meadow-100" aria-hidden={true}>
                <Code2 className="w-8 h-8 text-meadow-800" />
              </div>
              <h2 id="projects-heading" className="text-4xl font-black text-slate-900 tracking-tighter">{t.sections.projectsHeading}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project) => (
                <a 
                  key={project.id} 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-10 rounded-[40px] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-sunset/10 hover:-translate-y-2 focus-visible:ring-4 focus-visible:ring-sunset/20"
                  aria-label={`Projekt ${project.name} auf GitHub ansehen (öffnet in neuem Fenster)`}
                >
                  <div className="flex justify-between items-start mb-8">
                    <TerminalIcon className="w-10 h-10 text-slate-400 group-hover:text-sunset transition-colors" aria-hidden={true} />
                    <div className="flex gap-2">
                      {project.stats && (
                        <span className="px-4 py-1.5 rounded-full bg-meadow-100 text-meadow-800 font-black text-[10px] uppercase tracking-widest">
                          {project.stats}
                        </span>
                      )}
                      <ExternalLink className="w-6 h-6 text-slate-400 group-hover:text-slate-900 transition-colors" aria-hidden={true} />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-sunset transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <p className="sr-only">{t.sections.projectTags}</p>
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-xl bg-white text-slate-500 font-bold text-[10px] uppercase tracking-widest border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          id="skills" 
          className="py-32 bg-sky-glow relative overflow-hidden" 
          aria-labelledby="skills-heading"
        >
          <div className="absolute inset-0 bg-white opacity-40"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex items-center gap-4 mb-20">
              <div className="p-3 rounded-3xl bg-sky-pink" aria-hidden={true}>
                <LayersIcon className="w-8 h-8 text-sunset" />
              </div>
              <h2 id="skills-heading" className="text-4xl font-black text-slate-900 tracking-tighter">{t.sections.skillsHeading}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {SKILLS.map((category) => (
                <nav key={category.name} className="space-y-10" aria-labelledby={`skill-cat-${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                   <h3 id={`skill-cat-${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-xl font-black text-slate-900 flex items-center gap-3">
                     <div className="w-8 h-1 bg-sunset rounded-full" aria-hidden={true}></div>
                     {category.name}
                   </h3>
                   <ul className="space-y-6">
                     {category.skills.map((skill) => (
                       <li key={skill.name} className="flex items-center gap-5 text-slate-700 font-bold group cursor-default">
                         <SkillIcon iconName={skill.icon} />
                         <span className="group-hover:text-sunset-dark transition-colors text-lg tracking-tight font-extrabold">{skill.name}</span>
                       </li>
                     ))}
                   </ul>
                </nav>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer 
        id="contact" 
        className="py-32 bg-white border-t border-slate-100 relative overflow-hidden print:pt-16 print:pb-8" 
        aria-labelledby="footer-heading"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-10 print:mb-4">
            <div className="p-6 rounded-[35px] bg-sunset-50" aria-hidden={true}>
              <Sparkles className="w-12 h-12 text-sunset animate-pulse print:animate-none" />
            </div>
          </div>
          <h2 id="footer-heading" className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 print:text-4xl print:mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-2xl text-slate-600 font-medium mb-16 max-w-2xl mx-auto print:text-lg print:mb-8">
            {t.contact.subheading}
          </p>
          
          <div className="flex flex-wrap justify-center items-stretch gap-6 mb-24 max-w-5xl mx-auto print:flex-col print:gap-4">
             {/* Email Button */}
             <a 
               href={`mailto:${PROFILE.email}`} 
               className="group flex-1 min-w-[280px] flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-gradient-to-br from-rose-500 to-orange-500 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/30 focus-visible:ring-4 focus-visible:ring-rose-500/30 print:p-2 print:bg-transparent print:text-slate-700 print:rounded-none print:min-w-0 print:flex-row print:justify-start"
               aria-label={`${t.contact.emailSend} ${PROFILE.email}`}
             >
               <div className="mb-4 p-4 rounded-3xl bg-white/20 backdrop-blur group-hover:scale-110 transition-transform duration-500 print:mb-0 print:p-0 print:bg-transparent print:mr-2">
                <Mail className="w-8 h-8 print:w-4 print:h-4 print:text-sunset" aria-hidden={true} />
               </div>
               <span className="text-xl font-black tracking-tight mb-1 print:text-sm print:mb-0 print:mr-2 print:font-bold">{t.contact.emailSend}:</span>
               <span className="text-sm font-bold opacity-80 print:text-sm print:opacity-100">{PROFILE.email}</span>
             </a>

             {/* WhatsApp Button - hidden in print */}
             <button 
               onClick={openWhatsApp}
               className="group flex-1 min-w-[280px] flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-500 to-teal-600 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/30 focus-visible:ring-4 focus-visible:ring-emerald-500/30 print:hidden"
               aria-label={`${t.contact.whatsapp} ${t.contact.whatsappDirect}`}
             >
               <div className="mb-4 p-4 rounded-3xl bg-white/20 backdrop-blur group-hover:rotate-[15deg] transition-transform duration-500">
                <MessageCircle className="w-8 h-8" aria-hidden={true} />
               </div>
               <span className="text-xl font-black tracking-tight mb-1">{t.contact.whatsapp}</span>
               <span className="text-sm font-bold opacity-80">{t.contact.whatsappDirect}</span>
             </button>

             {/* GitHub Button */}
             <a 
               href="https://github.com/voku" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="group flex-1 min-w-[280px] flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-950 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/40 focus-visible:ring-4 focus-visible:ring-slate-500/30 print:p-2 print:bg-transparent print:text-slate-700 print:rounded-none print:min-w-0 print:flex-row print:justify-start"
               aria-label={`GitHub ${t.contact.gitProfile}`}
             >
               <div className="mb-4 p-4 rounded-3xl bg-white/10 backdrop-blur group-hover:scale-110 transition-transform duration-500 print:mb-0 print:p-0 print:bg-transparent print:mr-2">
                <Github className="w-8 h-8 text-sunset print:w-4 print:h-4" aria-hidden={true} />
               </div>
               <span className="text-xl font-mono font-bold tracking-tight mb-1 print:text-sm print:mb-0 print:mr-2 print:font-bold">{t.contact.gitPush}:</span>
               <span className="text-sm font-mono opacity-80 print:text-sm print:opacity-100">{t.contact.gitProfile}</span>
             </a>

             {/* LinkedIn Button */}
             <a 
               href="https://linkedin.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="group flex-1 min-w-[280px] flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/30 focus-visible:ring-4 focus-visible:ring-blue-600/30 print:p-2 print:bg-transparent print:text-slate-700 print:rounded-none print:min-w-0 print:flex-row print:justify-start"
               aria-label={`${t.contact.linkedin} ${t.contact.linkedinNetwork}`}
             >
               <div className="mb-4 p-4 rounded-3xl bg-white/20 backdrop-blur group-hover:translate-x-1 transition-transform duration-500 print:mb-0 print:p-0 print:bg-transparent print:mr-2">
                <Linkedin className="w-8 h-8 print:w-4 print:h-4 print:text-sunset" aria-hidden={true} />
               </div>
               <span className="text-xl font-black tracking-tight mb-1 print:text-sm print:mb-0 print:mr-2 print:font-bold">{t.contact.linkedin}:</span>
               <span className="text-sm font-bold opacity-80 print:text-sm print:opacity-100">{t.contact.linkedinNetwork}</span>
             </a>

             {/* Blog Button */}
             <a 
               href="https://suckup.de" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="group flex-1 min-w-[280px] flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-gradient-to-br from-amber-400 to-orange-500 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-400/30 focus-visible:ring-4 focus-visible:ring-amber-400/30 print:p-2 print:bg-transparent print:text-slate-700 print:rounded-none print:min-w-0 print:flex-row print:justify-start"
               aria-label={`${t.contact.blog} suckup.de`}
             >
               <div className="mb-4 p-4 rounded-3xl bg-white/20 backdrop-blur group-hover:scale-110 transition-transform duration-500 print:mb-0 print:p-0 print:bg-transparent print:mr-2">
                <BookOpen className="w-8 h-8 print:w-4 print:h-4 print:text-sunset" aria-hidden={true} />
               </div>
               <span className="text-xl font-black tracking-tight mb-1 print:text-sm print:mb-0 print:mr-2 print:font-bold">{t.contact.blog}:</span>
               <span className="text-sm font-bold opacity-80 print:text-sm print:opacity-100">suckup.de</span>
             </a>
          </div>

          {/* Print-only contact information */}
          <div className="hidden print:block text-left max-w-2xl mx-auto mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sunset" />
                <span className="font-bold">{t.contact.emailLabel}</span>
                <span>{PROFILE.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-sunset" />
                <span className="font-bold">{t.contact.githubLabel}</span>
                <span>github.com/voku</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-sunset" />
                <span className="font-bold">{t.contact.websiteLabel}</span>
                <span>moelleken.org</span>
              </div>
            </div>
          </div>

          <div className="pt-20 border-t border-slate-100 text-slate-500 font-bold space-y-4 print:pt-8">
            <p className="text-lg">{t.contact.footer.replace('{year}', new Date().getFullYear().toString())}</p>
            <nav className="flex justify-center gap-4 text-sm uppercase tracking-widest font-black" aria-label={t.nav.secondaryNav}>
              <span className="text-sunset-dark">{t.contact.location.split(' / ')[0]}</span>
              <span aria-hidden="true">/</span>
              <span>{t.contact.location.split(' / ')[1]}</span>
              <span aria-hidden="true">/</span>
              <a 
                href="https://moelleken.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sunset-dark transition-colors focus-visible:underline underline-offset-4"
                aria-label="Besuche moelleken.org (Lars Moellekens persönliche Website, öffnet in neuem Fenster)"
              >
                moelleken.org
              </a>
            </nav>
          </div>
        </div>
      </footer>
      
      {/* Visual background elements */}
      <div className="fixed bottom-10 left-10 w-64 h-64 bg-meadow-100/30 rounded-full blur-3xl pointer-events-none -z-10 print:hidden" aria-hidden="true"></div>
      <div className="fixed top-1/2 right-10 w-96 h-96 bg-sky-pink/20 rounded-full blur-[120px] pointer-events-none -z-10 print:hidden" aria-hidden="true"></div>
    </div>
  );
};

export default App;