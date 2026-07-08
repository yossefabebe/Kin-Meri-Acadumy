import { useState, useEffect } from 'react';
import {
  Menu, X, Globe, ArrowRight, Users, GraduationCap, Heart,
  Shield, Sparkles, Laptop, DollarSign,
  Send, Youtube, Music, Quote, Star, ChevronDown,
  Target, Eye, Award, HandHeart, RefreshCw, Users2, CheckCircle2,
} from 'lucide-react';
import { translations, socialLinks, type Language } from './translations';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

const valueIcons = [Shield, HandHeart, Award, RefreshCw, Users2, Heart, CheckCircle2];
const courseData = [
  { icon: Users, key: 'course1', color: 'from-blue-500 to-blue-700', bg: 'bg-blue-50' },
  { icon: Laptop, key: 'course2', color: 'from-cyan-500 to-teal-600', bg: 'bg-cyan-50' },
  { icon: DollarSign, key: 'course3', color: 'from-amber-500 to-orange-600', bg: 'bg-amber-50' },
];

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.mission, href: '#mission' },
    { label: t.nav.courses, href: '#courses' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.community, href: '#community' },
  ];

  return (
    <div className={lang === 'am' ? 'amharic' : ''}>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <img src="/images/image copy.png" alt="Kin Meri Leadership Academy" className="w-24 h-16 rounded-xl object-contain bg-white p-1 shadow-lg ring-1 ring-primary-200 group-hover:scale-180 transition-transform" />
            <div className="flex flex-col leading-tight">
              <span className={`font-display font-bold text-sm sm:text-base ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                KIN MERI
              </span>
              <span className={`text-[10px] sm:text-xs font-medium ${scrolled ? 'text-primary-600' : 'text-gold-300'}`}>
                LEADERSHIP ACADEMY
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  scrolled ? 'text-slate-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                scrolled
                  ? 'bg-slate-100 text-slate-700 hover:bg-primary-50 hover:text-primary-600'
                  : 'glass text-white hover:bg-white/20'
              }`}
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'አማ' : 'EN'}
            </button>
            <a
              href="#community"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              {t.nav.joinNow}
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl mt-3 mx-4 rounded-2xl p-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 text-slate-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen hero-gradient overflow-hidden flex items-center">
        {/* Decorative particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="particle w-72 h-72 bg-primary-500/20 top-20 -left-20" style={{ animationDelay: '0s' }} />
          <div className="particle w-96 h-96 bg-gold-500/10 bottom-10 right-10" style={{ animationDelay: '2s' }} />
          <div className="particle w-48 h-48 bg-blue-400/20 top-1/2 left-1/3" style={{ animationDelay: '4s' }} />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-gold-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {t.hero.badge}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg text-blue-100/80 leading-relaxed mb-8 max-w-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#courses"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-gold-500/30 transition-all"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass text-white font-semibold hover:bg-white/20 transition-all"
              >
                {t.hero.ctaSecondary}
                <ChevronDown className="w-5 h-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md">
              {[
                { val: t.hero.stat1, label: t.hero.stat1Label },
                { val: t.hero.stat2, label: t.hero.stat2Label },
                { val: t.hero.stat3, label: t.hero.stat3Label },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gradient-gold">{s.val}</div>
                  <div className="text-xs text-blue-200/70 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gold-500/30 to-primary-500/30 blur-3xl absolute inset-0 animate-pulse-slow" />
              <div className="relative w-80 h-80 rounded-3xl glass-dark p-8 flex flex-col justify-center items-center gap-6 animate-float">
                <div className="w-32 h-32 rounded-2xl bg-white flex items-center justify-center shadow-2xl p-2 ring-2 ring-primary-200">
                  <img src="/images/image copy.png" alt="Kin Meri Leadership Academy" className="w-full h-full object-contain" />
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-white mb-2">KIN MERI</div>
                  <div className="text-gold-300 text-sm tracking-widest">LEADERSHIP ACADEMY</div>
                </div>
                <div className="flex gap-3">
                  {[Users, Laptop, DollarSign].map((Icon, i) => (
                    <div key={i} className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0,60 C320,120 720,0 1440,60 L1440,120 L0,120 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                {t.about.badge}
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                {t.about.title}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>{t.about.body1}</p>
                <p>{t.about.body2}</p>
                <p>{t.about.body3}</p>
              </div>
            </div>

            <div className="reveal grid sm:grid-cols-2 gap-5">
              {[
                { icon: GraduationCap, title: t.about.feature1, desc: t.about.feature1Desc, color: 'from-blue-500 to-blue-700' },
                { icon: Heart, title: t.about.feature2, desc: t.about.feature2Desc, color: 'from-gold-500 to-orange-600' },
                { icon: Users, title: t.about.feature3, desc: t.about.feature3Desc, color: 'from-teal-500 to-cyan-600' },
              ].map((f, i) => (
                <div
                  key={i}
                  className={`card-hover bg-white rounded-2xl p-6 shadow-md border border-slate-100 ${
                    i === 2 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
              {t.mission.badge}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900">
              {t.mission.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="reveal card-hover bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{t.mission.missionTitle}</h3>
                <p className="text-blue-100 leading-relaxed">{t.mission.missionText}</p>
              </div>
            </div>

            <div className="reveal card-hover bg-gradient-to-br from-gold-500 to-gold-700 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{t.mission.visionTitle}</h3>
                <p className="text-amber-50 leading-relaxed">{t.mission.visionText}</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="reveal">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-900 text-center mb-10">
              {t.mission.valuesTitle}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {t.mission.values.map((value, i) => {
                const Icon = valueIcons[i % valueIcons.length];
                return (
                  <div
                    key={i}
                    className="reveal card-hover bg-white rounded-2xl p-6 shadow-md border border-slate-100 text-center group"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-gold-50 flex items-center justify-center mx-auto mb-4 group-hover:from-primary-500 group-hover:to-gold-500 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1">{value.name}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              {t.courses.badge}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              {t.courses.title}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.courses.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courseData.map((course, i) => {
              const title = t.courses[`${course.key}Title` as keyof typeof t.courses] as string;
              const desc = t.courses[`${course.key}Desc` as keyof typeof t.courses] as string;
              return (
                <div
                  key={i}
                  className="reveal card-hover bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-2xl ${course.bg} flex items-center justify-center mb-6`}>
                      <course.icon className="w-8 h-8 text-slate-700" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{desc}</p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={socialLinks.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                      >
                        <Youtube className="w-4 h-4" />
                        {t.courses.explore}
                      </a>
                      <a
                        href={socialLinks.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors"
                      >
                        <Send className="w-4 h-4" />
                        {t.courses.joinTelegram}
                      </a>
                      <a
                        href={socialLinks.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-slate-900 transition-colors"
                      >
                        <Music className="w-4 h-4" />
                        {t.courses.followTikTok}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
              {t.testimonials.badge}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.testimonials.items.map((item, i) => (
              <div
                key={i}
                className="reveal card-hover bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-100 relative"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Quote className="w-10 h-10 text-primary-200 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 relative z-10">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-gold-500 flex items-center justify-center text-white font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Social */}
      <section id="community" className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(245,158,11,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.3) 0%, transparent 50%)`,
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-gold-300 text-sm font-medium mb-4">
              {t.community.badge}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.community.title}
            </h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto">{t.community.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: t.community.telegram, desc: t.community.telegramDesc, icon: Send, url: socialLinks.telegram, cta: t.community.visit, color: 'from-sky-500 to-blue-600', hover: 'hover:shadow-sky-500/30' },
              { name: t.community.youtube, desc: t.community.youtubeDesc, icon: Youtube, url: socialLinks.youtube, cta: t.community.subscribe, color: 'from-red-500 to-red-700', hover: 'hover:shadow-red-500/30' },
              { name: t.community.tiktok, desc: t.community.tiktokDesc, icon: Music, url: socialLinks.tiktok, cta: t.community.follow, color: 'from-slate-700 to-slate-900', hover: 'hover:shadow-slate-500/30' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{social.name}</h3>
                <p className="text-blue-100/70 text-sm mb-6 leading-relaxed">{social.desc}</p>
                <div className="flex items-center gap-2 text-gold-300 font-semibold text-sm group-hover:gap-3 transition-all">
                  {social.cta}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`,
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-amber-50 text-lg mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
          <a
            href={socialLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-gold-600 font-bold shadow-xl hover:scale-105 transition-all"
          >
            {t.cta.button}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/image copy.png" alt="Kin Meri Leadership Academy" className="w-12 h-12 rounded-xl object-contain bg-white p-1 shadow-md ring-1 ring-primary-200" />
                <div>
                  <div className="font-display font-bold">KIN MERI</div>
                  <div className="text-xs text-gold-400">LEADERSHIP ACADEMY</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">{t.footer.tagline}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gold-400">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gold-400">{t.footer.connect}</h4>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'Telegram', icon: Send, url: socialLinks.telegram },
                  { name: 'YouTube', icon: Youtube, url: socialLinks.youtube },
                  { name: 'TikTok', icon: Music, url: socialLinks.tiktok },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    <s.icon className="w-4 h-4" />
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Kin Meri Leadership Academy. {t.footer.rights}</p>
            <p className="text-slate-500 text-sm flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-gold-500" />
              {t.footer.madeWith}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
