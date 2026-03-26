/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Target, 
  Zap, 
  MessageSquare, 
  ChevronRight, 
  ChevronLeft,
  Menu, 
  X,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  Calendar,
  Award,
  TrendingUp,
  Clock
} from 'lucide-react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  eachDayOfInterval,
  isBefore,
  startOfToday
} from 'date-fns';
import { pl } from 'date-fns/locale';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O mnie', href: '#o-mnie' },
    { name: 'Warsztaty', href: '#warsztaty' },
    { name: 'Oferta', href: '#oferta' },
    { name: 'Rezerwacja', href: '#rezerwacja' },
    { name: 'Opinie', href: '#opinie' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gold-500/20 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="https://tomaszmarkowski.pl/wp-content/uploads/2021/04/tomaszmarkowski.png" 
              alt="Tomasz Markowski Logo" 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-neutral-400 hover:text-gold-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#rezerwacja" 
              className="bg-gold-500 text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gold-600 transition-all shadow-lg shadow-gold-500/20"
            >
              Bezpłatna Konsultacja
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gold-500 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-black z-[60] p-8 md:hidden flex flex-col justify-center items-center space-y-8"
            >
              <button 
                className="absolute top-6 right-6 text-gold-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-3xl font-bold text-white hover:text-gold-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#rezerwacja" 
                className="w-full bg-gold-500 text-black px-8 py-5 rounded-2xl text-center font-bold text-xl shadow-2xl shadow-gold-500/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bezpłatna Konsultacja
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <motion.a
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          href="#rezerwacja"
          className="flex items-center justify-center gap-3 bg-gold-500 text-black py-4 px-6 rounded-2xl font-bold shadow-2xl shadow-gold-500/30 border border-gold-400/20"
        >
          <Calendar size={20} />
          Zarezerwuj Konsultację
        </motion.a>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase bg-gold-900/30 text-gold-500 rounded-lg border border-gold-500/30">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            Dostępne terminy na Marzec
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-8">
            Skuteczne Przywództwo <br />
            <span className="gold-text-gradient">w Świecie Zmian.</span>
          </h1>
          <p className="text-xl text-neutral-400 mb-10 max-w-lg leading-relaxed">
            Pomagam liderom i korporacjom przekuwać wyzwania w mierzalne wyniki biznesowe. 15 lat doświadczenia w rozwoju kompetencji menedżerskich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#rezerwacja"
              className="group bg-gold-500 text-black px-10 py-5 rounded-2xl text-lg font-bold hover:bg-gold-600 transition-all flex items-center justify-center shadow-xl shadow-gold-500/20"
            >
              Bezpłatna Konsultacja
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#oferta"
              className="px-10 py-5 rounded-2xl text-lg font-bold text-gold-500 border border-gold-500/30 hover:bg-gold-500/10 transition-all text-center"
            >
              Oferta dla Firm
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i+10}`} 
                  alt="Client" 
                  className="w-10 h-10 rounded-full border-2 border-black"
                />
              ))}
            </div>
            <p className="text-sm text-neutral-400 font-medium">
              Dołączyło już <span className="text-gold-500 font-bold">500+ liderów</span> z topowych firm
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-neutral-200">
            <img 
              src="https://tomaszmarkowski.pl/wp-content/uploads/2021/04/Tomasz-Markowski_sm-599x1024.jpg" 
              alt="Tomasz Markowski" 
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating elements for visual interest */}
          <div className="absolute -bottom-6 -left-6 bg-black p-6 rounded-3xl shadow-2xl border border-gold-500/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-500">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">ROI Programu</p>
                <p className="text-xl font-bold text-white">+45% efektywności</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-12 -right-6 bg-black p-5 rounded-2xl shadow-2xl border border-gold-500/20 max-w-[200px]">
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Zap key={i} size={12} fill="currentColor" className="text-gold-500" />)}
            </div>
            <p className="text-xs font-medium text-neutral-400 leading-relaxed">
              "Najlepsza inwestycja w mój zespół menedżerski w tym roku."
            </p>
            <p className="text-[10px] font-bold text-gold-500 mt-2">— Dyrektor HR, TechCorp</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const industries = ["Finanse", "IT & Tech", "Produkcja", "Retail", "Logistyka", "E-commerce"];
  return (
    <div className="py-12 bg-neutral-900 border-y border-gold-500/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-8">
          Zaufali mi liderzy z branż
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
          {industries.map(industry => (
            <span key={industry} className="text-xl md:text-2xl font-bold tracking-tighter text-gold-500">
              {industry}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      title: "Zastój w rozwoju zespołu",
      desc: "Twoi ludzie mają potencjał, ale brakuje im iskry i jasnego kierunku. Pomagam odblokować zaangażowanie i pasję do pracy.",
      icon: <Target className="text-gold-500" size={32} />
    },
    {
      title: "Paraliż decyzyjny w VUCA",
      desc: "Świat zmienia się zbyt szybko, a stare metody zawodzą. Wdrażamy zwinne przywództwo, które pozwala działać skutecznie pod presją.",
      icon: <Zap className="text-gold-500" size={32} />
    },
    {
      title: "Brak mierzalnych wyników",
      desc: "Szkolenia się odbywają, ale KPI stoją w miejscu. Moje warsztaty są nastawione na konkretny ROI i zmianę postaw biznesowych.",
      icon: <TrendingUp className="text-gold-500" size={32} />
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Z jakimi wyzwaniami <br />mierzysz się jako lider?
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            W świecie korporacyjnym nie ma miejsca na teoretyczne rozważania. Potrzebujesz narzędzi, które działają "tu i teraz".
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-neutral-900 border border-gold-500/10 hover:border-gold-500/30 hover:bg-neutral-800 transition-all duration-500 group"
            >
              <div className="mb-8 group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyMeSection = () => {
  const features = [
    {
      title: "Doświadczenie trenerskie",
      desc: "15 lat pracy z audytoriami od 50 do 600 osób. Konferencje biznesowe i Toastmasters.",
      icon: <Award size={24} />
    },
    {
      title: "Koncentracja na Tobie",
      desc: "Warsztaty procesowe. Reaguję na potrzeby każdego uczestnika z osobna.",
      icon: <Users size={24} />
    },
    {
      title: "Kompetencje przywódcze",
      desc: "Lata zarządzania dużymi zespołami sprzedażowymi. Doświadczenie sukcesów i porażek.",
      icon: <Target size={24} />
    },
    {
      title: "Ujawnianie potencjału",
      desc: "Pomagam wyjść poza ograniczenia i zdefiniować cele na nowo.",
      icon: <Zap size={24} />
    }
  ];

  return (
    <section id="o-mnie" className="py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="p-6 bg-black rounded-3xl shadow-sm border border-gold-500/10">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-500 mb-4">
                    {f.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{f.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
              Dlaczego warto <br /><span className="text-gold-500">pracować ze mną?</span>
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Pracuję w biznesie budowania motywacji do działania i poczucia dumy z samego siebie. Zależy mi na pobudzeniu innych do wzięcia życia we własne ręce zamiast życia na „autopilocie”.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold-500 mt-1" size={20} />
                <p className="text-neutral-300 font-medium">15 lat doświadczenia w rozwoju liderów</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold-500 mt-1" size={20} />
                <p className="text-neutral-300 font-medium">Praktyczne narzędzia gotowe do wdrożenia</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold-500 mt-1" size={20} />
                <p className="text-neutral-300 font-medium">Indywidualne podejście do każdego procesu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Umawiasz spotkanie",
      desc: "Przeprowadzamy krótką rozmowę, aby zorientować się w jaki sposób będzie nam się najlepiej współpracowało."
    },
    {
      num: "02",
      title: "Uczestniczysz w warsztatach",
      desc: "Uczę Cię skutecznej komunikacji, budowania relacji i efektywności osobistej poprzez tworzenie dobrych nawyków."
    },
    {
      num: "03",
      title: "Robisz to, co jest powołaniem",
      desc: "Realizujesz swoje cele i osiągasz sukcesy. Żyjesz zgodnie z własnymi wartościami i marzeniami."
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Prosta mapa Twojej drogi do sukcesu
          </h2>
          <p className="text-neutral-400">
            W mojej naturze leży pomaganie innym. Stworzyłem plan działania, zawierający 3 proste kroki.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-px bg-gold-500/20 z-0" />
          
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gold-500 text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-8 shadow-xl shadow-gold-500/20">
                {s.num}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-neutral-400 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sebastian Składny",
      role: "Barmix sp. z o.o.",
      text: "Dzięki szkoleniom z Tomkiem, poznaliśmy, jak wygląda nowoczesna sprzedaż. Tomek do każdego spotkania podchodzi bardzo profesjonalnie. Na szkoleniu jest bardzo dużo praktycznych rzeczy."
    },
    {
      name: "dr Katarzyna Dyja",
      role: "Dietetyk",
      text: "Fantastyczna energia i charyzma. Dzięki temu szkoleniu uzyskałam wiele praktycznej wiedzy i inspiracji. Nauczyłam się lepiej wsłuchiwać w potrzeby moich Klientów."
    },
    {
      name: "Agata Ranik",
      role: "Premium Personal Branding",
      text: "Niesamowita wiedza merytoryczna połączona z ćwiczeniami dała mi świetnie zrozumienie tematu. Dzięki ćwiczeniom łatwiej mogłam podnieść efektywność."
    }
  ];

  return (
    <section id="opinie" className="py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight text-white mb-16 text-center">
          Klienci o moich <span className="text-gold-500">warsztatach</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-black p-10 rounded-[2rem] shadow-sm border border-gold-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-gold-500 mb-6">
                  {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-neutral-300 italic leading-relaxed mb-8">"{t.text}"</p>
              </div>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-gold-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkshopsSection = () => {
  const workshops = [
    {
      title: "Lider w świecie VUCA",
      desc: "Zacznij świadomie rozwijać własny styl liderski responsywny do zmian. Zarządzanie AGILE i coaching zespołowy.",
      tags: ["Przywództwo", "Agile", "Zmiana"]
    },
    {
      title: "Psychologia Efektywności",
      desc: "Budowanie odporności psychicznej i wysokiej wydajności w zespołach rozproszonych i macierzowych.",
      tags: ["Efektywność", "Psychologia", "HR"]
    },
    {
      title: "Myśl Pytaniami (Model Ravena)",
      desc: "Zaawansowane techniki komunikacji i wywierania wpływu oparte na psychologii poznawczej i modelu autorytetu.",
      tags: ["Komunikacja", "Negocjacje", "Wpływ"]
    }
  ];

  return (
    <section id="warsztaty" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Programy rozwojowe <br />dla biznesu
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed">
              Wybierz ścieżkę rozwoju dopasowaną do strategicznych celów Twojej organizacji.
            </p>
          </div>
          <a href="#rezerwacja" className="text-gold-500 font-bold flex items-center group text-lg">
            Zobacz pełny katalog
            <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={24} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {workshops.map((w, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-[3rem] bg-neutral-900 mb-8 overflow-hidden relative border border-gold-500/10">
                <img 
                  src={`https://picsum.photos/seed/corp-workshop${i}/800/600`} 
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="flex gap-2 mb-6">
                {w.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-500 border border-gold-500/20 px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors">{w.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-lg">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OfferSection = () => {
  const benefits = [
    "Budowanie autorytetu liderskiego (Model Ravena)",
    "Zarządzanie zmianą i odporność psychiczna zespołu",
    "Skuteczna komunikacja w strukturach macierzowych",
    "Wdrażanie kultury feedbacku i radykalnej szczerości",
    "Zwinne zarządzanie projektami (Agile Leadership)",
    "Przeciwdziałanie wypaleniu zawodowemu w zespole",
    "Strategiczne planowanie i egzekucja celów (OKRs)",
    "Mentoring budujący następców i talenty w firmie"
  ];

  return (
    <section id="oferta" className="py-32 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold-500 mb-6 block">
              Program Rozwoju Premium
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-10">
              Zainwestuj w kapitał <br />ludzki swojej firmy
            </h2>
            <div className="grid sm:grid-cols-1 gap-4">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-black border border-gold-500/10 hover:border-gold-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-neutral-300 font-bold text-sm md:text-base">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Pricing Cards */}
          <div className="grid sm:grid-cols-1 gap-8">
            {/* Card: Corporate */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-black text-white rounded-[3rem] shadow-2xl p-12 flex flex-col items-center text-center overflow-hidden border border-gold-500/20"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Users size={200} className="text-gold-500" />
              </div>
              
              <div className="w-20 h-20 bg-gold-500/10 rounded-3xl flex items-center justify-center text-gold-500 mb-8 backdrop-blur-xl border border-gold-500/20">
                <Award size={40} />
              </div>
              
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-gold-500 mb-4">Dla Korporacji</h3>
              <h4 className="text-3xl md:text-4xl font-bold mb-8">Szyte na miarę <br />programy liderskie</h4>
              
              <p className="text-neutral-400 mb-10 max-w-sm leading-relaxed">
                Kompleksowe wsparcie dla zarządów i kadry zarządzającej. Audyt kompetencji, warsztaty grupowe oraz mentoring 1:1.
              </p>
              
              <ul className="grid grid-cols-2 gap-4 mb-12 text-left w-full text-sm text-neutral-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500" /> Raporty ROI</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500" /> Audyt 360°</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500" /> Sesje strategiczne</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500" /> Wsparcie HR</li>
              </ul>
              
              <a 
                href="#rezerwacja"
                className="w-full bg-gold-500 text-black py-5 rounded-2xl font-bold text-lg hover:bg-gold-400 transition-all shadow-2xl shadow-gold-500/20"
              >
                Zapytaj o ofertę B2B
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const timeSlots = [
    "09:00", "10:30", "12:00", "14:00", "15:30", "17:00"
  ];

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold text-neutral-900 capitalize">
          {format(currentMonth, 'MMMM yyyy', { locale: pl })}
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];
    return (
      <div className="grid grid-cols-7 mb-4">
        {days.map((day, i) => (
          <div key={i} className="text-center text-xs font-bold text-neutral-400 uppercase tracking-widest">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const calendarDays = eachDayOfInterval({
      start: startDate,
      end: endDate,
    });

    const rows = [];
    let days = [];

    calendarDays.forEach((day, i) => {
      const formattedDate = format(day, 'd');
      const isSelected = isSameDay(day, selectedDate);
      const isCurrentMonth = isSameMonth(day, monthStart);
      const isDisabled = isBefore(day, startOfToday()) || !isCurrentMonth;

      days.push(
        <button
          key={day.toString()}
          disabled={isDisabled}
          onClick={() => {
            setSelectedDate(day);
            setSelectedTime(null);
          }}
          className={`relative h-12 flex items-center justify-center rounded-xl text-sm font-medium transition-all
            ${isSelected ? 'bg-black text-white shadow-lg' : 'hover:bg-neutral-50'}
            ${isDisabled ? 'text-neutral-200 cursor-not-allowed' : 'text-neutral-700'}
            ${!isCurrentMonth && !isSelected ? 'opacity-0 pointer-events-none' : ''}
          `}
        >
          {formattedDate}
          {isSameDay(day, new Date()) && !isSelected && (
            <div className="absolute bottom-2 w-1 h-1 rounded-full bg-black" />
          )}
        </button>
      );

      if ((i + 1) % 7 === 0) {
        rows.push(
          <div className="grid grid-cols-7 gap-1" key={day.toString()}>
            {days}
          </div>
        );
        days = [];
      }
    });

    return <div className="space-y-1">{rows}</div>;
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => setIsBooked(false), 5000);
  };

  return (
    <section id="rezerwacja" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold-500 mb-6 block">
              Zarezerwuj termin
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
              Zrób pierwszy krok <br />ku zmianie
            </h2>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed max-w-md">
              Wybierz dogodny termin na bezpłatną konsultację liderską. Sprawdź moją dostępność i zarezerwuj 15 minut, które mogą zmienić Twój styl zarządzania.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-sm font-medium text-neutral-300">
                <CheckCircle2 size={18} className="text-gold-500" />
                <span>Brak zobowiązań po rozmowie</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-neutral-300">
                <CheckCircle2 size={18} className="text-gold-500" />
                <span>Konkretne wskazówki "na start"</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-neutral-900 border border-gold-500/10">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-sm">
                <Clock className="text-gold-500" size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Sesja trwa 60 minut</p>
                <p className="text-xs text-neutral-400">Konsultacja online (Zoom/Teams)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900 rounded-[2.5rem] border border-gold-500/10 shadow-2xl p-8 md:p-12"
          >
            <AnimatePresence mode="wait">
              {!isBooked ? (
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Calendar Part */}
                    <div>
                      {renderHeader()}
                      {renderDays()}
                      {renderCells()}
                    </div>

                    {/* Time Slots Part */}
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-8">
                        Dostępne godziny
                      </h3>
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 rounded-xl text-sm font-bold transition-all border
                              ${selectedTime === time 
                                ? 'bg-gold-500 text-black border-gold-500 shadow-md shadow-gold-500/20' 
                                : 'bg-black text-neutral-400 border-gold-500/10 hover:border-gold-500/30'}
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>

                      <form onSubmit={handleBooking} className="mt-auto space-y-4">
                        <input 
                          type="text" 
                          placeholder="Twoje imię" 
                          required
                          className="w-full px-5 py-4 rounded-xl bg-black border border-gold-500/10 focus:border-gold-500/30 outline-none transition-all text-sm text-white"
                        />
                        <input 
                          type="email" 
                          placeholder="Adres e-mail" 
                          required
                          className="w-full px-5 py-4 rounded-xl bg-black border border-gold-500/10 focus:border-gold-500/30 outline-none transition-all text-sm text-white"
                        />
                        <button 
                          disabled={!selectedTime}
                          className={`w-full py-4 rounded-full font-bold transition-all shadow-xl
                            ${selectedTime 
                              ? 'bg-gold-500 text-black hover:bg-gold-400 shadow-gold-500/20' 
                              : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'}
                          `}
                        >
                          Zarezerwuj sesję
                        </button>
                      </form>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Dziękuję za rezerwację!</h3>
                  <p className="text-neutral-400 max-w-xs mx-auto">
                    Potwierdzenie oraz link do spotkania zostały wysłane na Twój adres e-mail. Do zobaczenia!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <a href="#" className="mb-8 block">
              <img 
                src="https://tomaszmarkowski.pl/wp-content/uploads/2021/04/tomaszmarkowski.png" 
                alt="Tomasz Markowski Logo" 
                className="h-10 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-neutral-400 max-w-sm mb-8 leading-relaxed">
              Pomagam ludziom odkrywać ich wyjątkowość i budować odwagę mówienia o tym światu. Profesjonalne warsztaty i coaching.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100008245897133" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/tomaszmarkowski/" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:tmatma@poczta.onet.pl" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Nawigacja</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><a href="#o-mnie" className="hover:text-gold-500 transition-colors">O mnie</a></li>
              <li><a href="#warsztaty" className="hover:text-gold-500 transition-colors">Warsztaty</a></li>
              <li><a href="#oferta" className="hover:text-gold-500 transition-colors">Oferta</a></li>
              <li><a href="#rezerwacja" className="hover:text-gold-500 transition-colors">Rezerwacja</a></li>
              <li><a href="#opinie" className="hover:text-gold-500 transition-colors">Opinie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Kontakt</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold-500" />
                tmatma@poczta.onet.pl
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold-500" />
                +48 123 456 789
              </li>
              <li>
                <a href="#rezerwacja" className="text-gold-500 font-bold hover:underline">Umów spotkanie</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gold-500/10 text-xs text-neutral-500 gap-4">
          <p>© 2024 Tomasz Markowski. Wszelkie prawa zastrzeżone.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-gold-500 transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-gold-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <WhyMeSection />
        <ProcessSection />
        <WorkshopsSection />
        <OfferSection />
        <BookingSection />
        <TestimonialsSection />
        
        {/* Final CTA Section */}
        <section className="py-32 bg-black text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">
                Gotowy na <br /><span className="text-gold-500">wyższy poziom?</span>
              </h2>
              <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Nie czekaj na zmiany, które same nie nadejdą. Dołącz do grona liderów, którzy świadomie kształtują swoją przyszłość i wyniki swoich zespołów.
              </p>
              <a 
                href="#rezerwacja"
                className="inline-flex items-center bg-gold-500 text-black px-12 py-6 rounded-2xl text-xl font-bold hover:bg-gold-400 transition-all shadow-2xl shadow-gold-500/20"
              >
                Umów bezpłatną konsultację
                <ArrowRight className="ml-2" size={24} />
              </a>
            </motion.div>
          </div>
          
          {/* Abstract background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px]" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
