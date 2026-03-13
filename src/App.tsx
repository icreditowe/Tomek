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
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="https://tomaszmarkowski.pl/wp-content/uploads/2021/04/tomaszmarkowski.png" 
            alt="Tomasz Markowski Logo" 
            className="h-8 md:h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:tmatma@poczta.onet.pl" 
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all"
          >
            Kontakt
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 md:hidden flex flex-col space-y-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-neutral-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:tmatma@poczta.onet.pl" 
              className="bg-black text-white px-5 py-3 rounded-xl text-center font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-black text-white rounded-full">
            Trener Biznesu & Lider
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-8">
            Już czas odważnie <br />
            <span className="text-neutral-400">sięgnąć po swoje.</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-10 max-w-lg leading-relaxed">
            Pomagam ludziom odkrywać ich wyjątkowość i budować odwagę mówienia o tym światu. Wykorzystaj pełnię swoich możliwości.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:tmatma@poczta.onet.pl"
              className="group bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 transition-all flex items-center justify-center"
            >
              Weź udział w warsztatach
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#warsztaty"
              className="px-8 py-4 rounded-full text-lg font-medium text-neutral-900 hover:bg-black/5 transition-all text-center"
            >
              Dowiedz się więcej
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-200">
            <img 
              src="https://tomaszmarkowski.pl/wp-content/uploads/2021/04/Tomasz-Markowski_sm-599x1024.jpg" 
              alt="Tomasz Markowski" 
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating elements for visual interest */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-black/5 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Skuteczność</p>
                <p className="text-lg font-bold text-neutral-900">+50% wydajności</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      title: "Zbyt wiele prób kończyło się porażką",
      desc: "Niepowodzenia uczą nas najwięcej. Kształtuje nas sposób, w jaki sobie z nimi poradzimy.",
      icon: <Target className="text-neutral-400" size={32} />
    },
    {
      title: "Wszyscy mówią CO robić, nikt nie mówi JAK",
      desc: "Dostajemy gotowe recepty, ale brakuje nam efektów. Wspólnie wdrażamy rozwiązania, które działają.",
      icon: <Zap className="text-neutral-400" size={32} />
    },
    {
      title: "Efekty Twoich działań mogą być lepsze",
      desc: "Znasz narzędzia, ale nie wiesz która metoda będzie optymalna. Pomagam osiągnąć zamierzone rezultaty.",
      icon: <TrendingUp className="text-neutral-400" size={32} />
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
            Co Cię powstrzymywało przed pokazaniem, na co Cię stać?
          </h2>
          <p className="text-xl text-neutral-500">
            W ważnych sprawach naszego życia nie ma gotowych rozwiązań. Każdy z nas jest inny, ma inne zasoby oraz doświadczenia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-50 border border-black/5 hover:border-black/20 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{p.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{p.desc}</p>
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
    <section id="o-mnie" className="py-32 bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="p-6 bg-white rounded-3xl shadow-sm border border-black/5">
                  <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center text-black mb-4">
                    {f.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{f.title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-8">
              Dlaczego warto <br />pracować ze mną?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Pracuję w biznesie budowania motywacji do działania i poczucia dumy z samego siebie. Zależy mi na pobudzeniu innych do wzięcia życia we własne ręce zamiast życia na „autopilocie”.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-black mt-1" size={20} />
                <p className="text-neutral-700 font-medium">15 lat doświadczenia w rozwoju liderów</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-black mt-1" size={20} />
                <p className="text-neutral-700 font-medium">Praktyczne narzędzia gotowe do wdrożenia</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-black mt-1" size={20} />
                <p className="text-neutral-700 font-medium">Indywidualne podejście do każdego procesu</p>
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
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
            Prosta mapa Twojej drogi do sukcesu
          </h2>
          <p className="text-neutral-500">
            W mojej naturze leży pomaganie innym. Stworzyłem plan działania, zawierający 3 proste kroki.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-px bg-neutral-200 z-0" />
          
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-8 shadow-xl">
                {s.num}
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{s.title}</h3>
              <p className="text-neutral-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
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
    <section id="opinie" className="py-32 bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-16 text-center">
          Klienci o moich warsztatach
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-black/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-neutral-300 mb-6">
                  {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="currentColor" className="text-yellow-400" />)}
                </div>
                <p className="text-neutral-600 italic leading-relaxed mb-8">"{t.text}"</p>
              </div>
              <div>
                <p className="font-bold text-neutral-900">{t.name}</p>
                <p className="text-sm text-neutral-400">{t.role}</p>
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
      title: "Myśl Pytaniami",
      desc: "Nauczę Cię zadawać pytania, które zaangażują Twoich rozmówców w dialog i pomogą dotrzeć do motywów zakupu.",
      tags: ["Komunikacja", "Sprzedaż", "Relacje"]
    },
    {
      title: "Budowanie Efektywności Osobistej",
      desc: "Nauczę Cię budować swoją efektywność w życiu, pracy i biznesie poprzez praktyczne narzędzia i psychologię.",
      tags: ["Nawyki", "Czas", "Psychologia"]
    },
    {
      title: "Lider w świecie VUCA",
      desc: "Zacznij świadomie rozwijać własny styl liderski responsywny do zmian. Zarządzanie AGILE i coaching.",
      tags: ["Przywództwo", "Agile", "Zespół"]
    }
  ];

  return (
    <section id="warsztaty" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
              Warsztaty, które pomogą Ci zmienić życie
            </h2>
            <p className="text-xl text-neutral-500">
              Wybierz ścieżkę rozwoju dopasowaną do Twoich aktualnych potrzeb.
            </p>
          </div>
          <a href="mailto:tmatma@poczta.onet.pl" className="text-black font-semibold flex items-center group">
            Zobacz wszystkie programy
            <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((w, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video rounded-[2rem] bg-neutral-100 mb-8 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/workshop${i}/800/600`} 
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="flex gap-2 mb-4">
                {w.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 border border-neutral-200 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4 group-hover:text-neutral-600 transition-colors">{w.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OfferSection = () => {
  const benefits = [
    "Świadome rozwijanie własnego stylu liderskiego",
    "Elastyczna komunikacja w świecie VUCA",
    "Działanie strategiczne w oparciu o model Portera",
    "Motywowanie bez niszczenia „ducha zespołu”",
    "Zarządzanie strukturami macierzowymi i crossowymi",
    "Zapobieganie dysfunkcjom pracy zespołowej",
    "Budowanie autorytetu (model Bertrama Ravena)",
    "Wdrażanie zwinnego zarządzania AGILE",
    "Przewidywanie zjawisk „czarnych łabędzi”",
    "Mentoring i coaching budujący zaangażowanie"
  ];

  return (
    <section id="oferta" className="py-32 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-6 block">
              Program Rozwoju
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-10">
              Uzyskasz wyjątkowe <br />umiejętności
            </h2>
            <div className="grid sm:grid-cols-1 gap-4">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/[0.03] hover:border-black/[0.08] transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-neutral-600 font-medium text-sm md:text-base">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Pricing Cards */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Card 1: 10 Sesji */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-[2.5rem] border border-black/5 shadow-sm p-10 flex flex-col items-center text-center transition-all"
            >
              <div className="absolute top-6 right-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 bg-neutral-50 px-3 py-1 rounded-full border border-neutral-100">
                  Bestseller
                </span>
              </div>
              
              <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center text-black mb-8">
                <Calendar size={32} />
              </div>
              
              <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-4">Indywidualne</h3>
              <div className="flex items-baseline mb-10">
                <span className="text-5xl font-semibold text-neutral-900">99</span>
                <span className="text-lg font-medium text-neutral-400 ml-2">PLN / sesja</span>
              </div>
              
              <ul className="space-y-4 mb-12 text-sm text-neutral-500 w-full text-left">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-neutral-300" />
                  Zarządzanie 3.0 Agile
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-neutral-300" />
                  Struktury Matrix
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-neutral-300" />
                  Psychologia zmiany
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-neutral-300" />
                  Komunikacja w zmianie
                </li>
              </ul>
              
              <button className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-neutral-800 transition-all shadow-xl shadow-black/10">
                Wybierz pakiet
              </button>
            </motion.div>

            {/* Card 2: Szkolenie Zespołu */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-[2.5rem] border border-black/5 shadow-sm p-10 flex flex-col items-center text-center transition-all"
            >
              <div className="absolute top-6 right-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  Dla firm
                </span>
              </div>

              <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center text-black mb-8">
                <Users size={32} />
              </div>

              <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-4">Zespołowe</h3>
              <div className="flex items-baseline mb-10">
                <span className="text-5xl font-semibold text-neutral-900">99</span>
                <span className="text-lg font-medium text-neutral-400 ml-2">PLN / os.</span>
              </div>
              
              <ul className="space-y-4 mb-12 text-sm text-neutral-500 w-full text-left">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-neutral-300" />
                  Integracja zespołu
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-neutral-300" />
                  Zwinne zarządzanie
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-neutral-300" />
                  Budowanie autorytetu
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-neutral-300" />
                  Warsztaty praktyczne
                </li>
              </ul>
              
              <button className="w-full bg-white text-black border border-black/10 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all">
                Zapytaj o ofertę
              </button>
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
    <section id="rezerwacja" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-6 block">
              Zarezerwuj termin
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-8">
              Zrób pierwszy krok <br />ku zmianie
            </h2>
            <p className="text-lg text-neutral-500 mb-10 leading-relaxed max-w-md">
              Wybierz dogodny termin na bezpłatną konsultację lub pierwszą sesję coachingową. Sprawdź moją dostępność w kalendarzu.
            </p>
            
            <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-[#FBFBFD] border border-black/[0.03]">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Clock className="text-neutral-400" size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">Sesja trwa 60 minut</p>
                <p className="text-xs text-neutral-500">Konsultacja online (Zoom/Teams)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] border border-black/5 shadow-2xl p-8 md:p-12"
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
                      <h3 className="text-xl font-semibold text-neutral-900 mb-8">
                        Dostępne godziny
                      </h3>
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 rounded-xl text-sm font-medium transition-all border
                              ${selectedTime === time 
                                ? 'bg-black text-white border-black shadow-md' 
                                : 'bg-white text-neutral-600 border-neutral-100 hover:border-black/20'}
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
                          className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-transparent focus:bg-white focus:border-black/10 outline-none transition-all text-sm"
                        />
                        <input 
                          type="email" 
                          placeholder="Adres e-mail" 
                          required
                          className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-transparent focus:bg-white focus:border-black/10 outline-none transition-all text-sm"
                        />
                        <button 
                          disabled={!selectedTime}
                          className={`w-full py-4 rounded-full font-semibold transition-all shadow-xl
                            ${selectedTime 
                              ? 'bg-black text-white hover:bg-neutral-800 shadow-black/10' 
                              : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'}
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
                  <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Dziękuję za rezerwację!</h3>
                  <p className="text-neutral-500 max-w-xs mx-auto">
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

const BlogSection = () => {
  const articles = [
    {
      title: "5 przyczyn braku sukcesów i bogactwa",
      date: "12 Mar 2024",
      link: "#"
    },
    {
      title: "Wartość z pytania CO?",
      date: "05 Mar 2024",
      link: "#"
    },
    {
      title: "Czas – Jak poradzić sobie z zadaniami",
      date: "28 Feb 2024",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-32 bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900">Wiedza i inspiracja</h2>
          <a href="#" className="hidden md:flex items-center text-neutral-500 hover:text-black transition-colors">
            Wszystkie artykuły <ChevronRight size={18} />
          </a>
        </div>

        <div className="space-y-4">
          {articles.map((a, i) => (
            <a 
              key={i} 
              href={a.link}
              className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-white rounded-3xl border border-black/5 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-6">
                <span className="text-neutral-300 font-mono text-sm">0{i+1}</span>
                <h3 className="text-xl font-semibold text-neutral-800 group-hover:text-black transition-colors">{a.title}</h3>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <span className="text-sm text-neutral-400">{a.date}</span>
                <div className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <a href="#" className="mb-8 block">
              <img 
                src="https://tomaszmarkowski.pl/wp-content/uploads/2021/04/tomaszmarkowski.png" 
                alt="Tomasz Markowski Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-neutral-500 max-w-sm mb-8 leading-relaxed">
              Pomagam ludziom odkrywać ich wyjątkowość i budować odwagę mówienia o tym światu. Profesjonalne warsztaty i coaching.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100008245897133" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-black hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/tomaszmarkowski/" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-black hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:tmatma@poczta.onet.pl" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-black hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-neutral-900 mb-6">Nawigacja</h4>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li><a href="#o-mnie" className="hover:text-black transition-colors">O mnie</a></li>
              <li><a href="#warsztaty" className="hover:text-black transition-colors">Warsztaty</a></li>
              <li><a href="#oferta" className="hover:text-black transition-colors">Oferta</a></li>
              <li><a href="#rezerwacja" className="hover:text-black transition-colors">Rezerwacja</a></li>
              <li><a href="#opinie" className="hover:text-black transition-colors">Opinie</a></li>
              <li><a href="#blog" className="hover:text-black transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-6">Kontakt</h4>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                tmatma@poczta.onet.pl
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +48 123 456 789
              </li>
              <li>
                <a href="#" className="text-black font-medium hover:underline">Umów spotkanie</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 text-xs text-neutral-400 gap-4">
          <p>© 2024 Tomasz Markowski. Wszelkie prawa zastrzeżone.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-black transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-black transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <WhyMeSection />
        <ProcessSection />
        <WorkshopsSection />
        <OfferSection />
        <BookingSection />
        <TestimonialsSection />
        <BlogSection />
        
        {/* Final CTA Section */}
        <section className="py-32 bg-black text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
                Zrób krok <br />we właściwym kierunku.
              </h2>
              <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                Nie czekaj na zmiany, które same nie nadejdą – zainicjuj je. Zdecyduj, jak będzie wyglądać Twoje życie za rok.
              </p>
              <a 
                href="mailto:tmatma@poczta.onet.pl"
                className="inline-flex items-center bg-white text-black px-10 py-5 rounded-full text-xl font-semibold hover:bg-neutral-200 transition-all"
              >
                Sięgnij po swoje
                <ArrowRight className="ml-2" size={24} />
              </a>
            </motion.div>
          </div>
          
          {/* Abstract background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neutral-500 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neutral-400 rounded-full blur-[120px]" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
