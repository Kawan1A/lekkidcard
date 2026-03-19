/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bus, 
  TrainFront, 
  Bike, 
  CreditCard, 
  MapPin, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  Menu, 
  X,
  Waves,
  Navigation,
  CheckCircle2,
  Smile,
  Download,
  Info,
  ExternalLink,
  Map as MapIcon,
  Train
} from 'lucide-react';

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-10 h-10 bg-gradient-to-br from-brazil-yellow to-brazil-green rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-brazil-blue/10">
      <div className="absolute inset-0 bg-black/5" />
      <Smile className="text-brazil-blue w-7 h-7 relative z-10" />
    </div>
    <span className="font-display font-extrabold text-2xl tracking-tighter text-brazil-blue">
      LYKKE<span className="text-brazil-green">CARD</span>
    </span>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brazil-blue/40 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-lg rounded-[32px] shadow-2xl overflow-hidden"
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-display font-extrabold text-brazil-blue">{title}</h3>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>
            {children}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Navbar = ({ onOpenRequest }: { onOpenRequest: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium hover:text-brazil-green transition-colors">Vantagens</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-brazil-green transition-colors">Como Funciona</a>
          <a href="#partners" className="text-sm font-medium hover:text-brazil-green transition-colors">Parceiros</a>
          <button 
            onClick={onOpenRequest}
            className="bg-brazil-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brazil-green transition-all shadow-md active:scale-95"
          >
            Pedir meu cartão
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="w-6 h-6 text-brazil-blue" />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-6 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-brazil-blue" />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-12 items-center">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display font-bold text-brazil-blue">Vantagens</a>
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display font-bold text-brazil-blue">Como Funciona</a>
              <a href="#partners" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display font-bold text-brazil-blue">Parceiros</a>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); onOpenRequest(); }}
                className="bg-brazil-blue text-white w-full py-4 rounded-xl text-lg font-bold shadow-xl mt-4"
              >
                Pedir meu cartão
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenRequest, onOpenTariffs }: { onOpenRequest: () => void, onOpenTariffs: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sea-light -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brazil-yellow/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brazil-green/10 text-brazil-green px-4 py-2 rounded-full mb-6">
            <Waves className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Bilhete Único Integrado</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-brazil-blue leading-[1.1] mb-6">
            Toda a cidade em <br />
            <span className="text-brazil-green">um só toque.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            O LYKKECARD une ônibus, metrô, trens e muito mais. Um design inspirado nas ondas e na natureza brasileira para facilitar seu dia a dia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onOpenRequest}
              className="bg-brazil-green text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-brazil-green/20 hover:bg-brazil-blue transition-all flex items-center justify-center gap-2 group"
            >
              Começar agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onOpenTariffs}
              className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-brazil-yellow transition-all flex items-center justify-center gap-2"
            >
              Ver tarifas
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Real Card Design Recreation */}
          <div className="relative z-10 w-full max-w-md mx-auto aspect-[1.586/1] bg-gradient-to-br from-[#006233] via-[#00A693] to-[#002776] rounded-[24px] p-8 shadow-2xl overflow-hidden group border border-white/10">
            {/* Wave Patterns inspired by the image */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 250">
                <path d="M0,100 C150,50 250,150 400,100 L400,250 L0,250 Z" fill="white" />
                <path d="M0,150 C100,100 300,200 400,150 L400,250 L0,250 Z" fill="white" opacity="0.5" />
              </svg>
            </div>
            
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-gradient-to-br from-brazil-yellow to-brazil-green rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                    <Smile className="text-brazil-blue w-8 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-display font-bold text-xl tracking-tight leading-none">LYKKE CARD ★</span>
                    <span className="text-white/80 text-[10px] italic">"Toda a cidade em um só toque"</span>
                  </div>
                </div>
                <div className="w-14 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md flex items-center justify-center shadow-inner">
                  <div className="w-10 h-7 border border-black/10 rounded-sm bg-yellow-500/50" />
                </div>
              </div>
              
              <div className="mt-4">
                <div className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-1">BILHETE ÚNICO INTEGRADO</div>
                <div className="h-[1px] w-full bg-gradient-to-r from-brazil-yellow to-transparent" />
              </div>

              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <div className="text-white/60 text-[8px] uppercase tracking-widest font-bold">Titular</div>
                  <div className="text-white text-sm font-medium tracking-wide">KAWAN Á. GONZAGA</div>
                </div>
                <div className="flex gap-1">
                  <div className="w-8 h-8 rounded-full bg-brazil-yellow/80" />
                  <div className="w-8 h-8 rounded-full bg-white/30 -ml-4 backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Icons */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20"
          >
            <Bus className="text-brazil-green w-8 h-8" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -left-8 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20"
          >
            <TrainFront className="text-brazil-blue w-7 h-7" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Integração Total",
      description: "SPTrans, Metrô, CPTM e EMTU em um único cartão inteligente.",
      color: "bg-brazil-green"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Recarga Digital",
      description: "Recarregue via Pix ou cartão de crédito direto pelo nosso app em segundos.",
      color: "bg-brazil-blue"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Segurança Máxima",
      description: "Tecnologia de aproximação criptografada e bloqueio instantâneo.",
      color: "bg-sea-teal"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Cobertura Nacional",
      description: "Parcerias com as principais capitais do Brasil para você viajar.",
      color: "bg-brazil-yellow"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brazil-green uppercase tracking-widest mb-4">Por que escolher o LYKKECARD?</h2>
          <p className="text-4xl font-display font-extrabold text-brazil-blue">A revolução no seu bolso</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className={`${f.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-brazil-blue mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const partners = [
    { name: "SPTrans", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b3/Logo_SPTrans.svg/1200px-Logo_SPTrans.svg.png" },
    { name: "Metrô SP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Metr%C3%B4_S%C3%A3o_Paulo_logo.svg/1200px-Metr%C3%B4_S%C3%A3o_Paulo_logo.svg.png" },
    { name: "CPTM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/CPTM_logo.svg/1200px-CPTM_logo.svg.png" },
    { name: "EMTU", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d4/Logo_EMTU.svg/1200px-Logo_EMTU.svg.png" },
    { name: "VLT Carioca", logo: "https://vltcarioca.com.br/wp-content/uploads/2016/05/logo-vlt-carioca.png" },
    { name: "Bike Sampa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bike_Sampa_logo.svg/1200px-Bike_Sampa_logo.svg.png" },
    { name: "CCR Barcas", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a1/Logo_CCR_Barcas.png/1200px-Logo_CCR_Barcas.png" },
    { name: "SuperVia", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8e/Logo_SuperVia.svg/1200px-Logo_SuperVia.svg.png" },
    { name: "Trensurb", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1c/Logo_Trensurb.svg/1200px-Logo_Trensurb.svg.png" },
    { name: "Metrofor", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9e/Logo_Metrofor.png/1200px-Logo_Metrofor.png" },
    { name: "URBS", logo: "https://www.urbs.curitiba.pr.gov.br/img/logo_urbs.png" },
    { name: "BHTrans", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9d/Logo_BHTrans.svg/1200px-Logo_BHTrans.svg.png" }
  ];

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brazil-green uppercase tracking-widest mb-4">Rede de Integração</h2>
          <p className="text-4xl font-display font-extrabold text-brazil-blue">Empresas Conveniadas</p>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            O LYKKECARD é aceito em mais de 500 linhas de transporte e serviços de mobilidade em todo o território nacional.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 166, 147, 0.05)" }}
              className="h-28 bg-slate-50 rounded-3xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-pointer border border-slate-100 hover:border-brazil-green/30 group shadow-sm hover:shadow-md"
            >
              <img 
                src={p.logo} 
                alt={p.name} 
                className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
            <Info className="w-4 h-4" />
            E muitas outras operadoras regionais e serviços de micromobilidade.
          </p>
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onOpenApp }: { onOpenApp: () => void }) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-brazil-blue rounded-[40px] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brazil-green/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8">
            Pronto para simplificar sua vida urbana?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brazil-yellow text-brazil-blue px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform">
              Pedir meu cartão agora
            </button>
            <button 
              onClick={onOpenApp}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all"
            >
              Baixar o App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Logo className="invert brightness-0" />
          <p className="text-slate-400 text-sm leading-relaxed">
            Transformando a mobilidade urbana no Brasil através da tecnologia e integração. O futuro do transporte é simples.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Empresa</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Suporte</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tarifas</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Canais de Atendimento</h4>
          <div className="space-y-4 text-slate-400 text-sm">
            <p className="flex items-center gap-2"><Smartphone className="w-4 h-4" /> 0800 123 4567</p>
            <p className="flex items-center gap-2"><Smartphone className="w-4 h-4" /> (11) 98765-4321 (WhatsApp)</p>
            <p className="flex items-center gap-2"><ExternalLink className="w-4 h-4" /> www.lykkecard.com.br</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        <p>© 2026 LYKKECARD Mobilidade S.A. Todos os direitos reservados. Uso pessoal e intransferível.</p>
      </div>
    </footer>
  );
};

// --- Types ---

interface Tariff {
  id: string;
  name: string;
  value: number;
  highlight: boolean;
}

// --- Main App ---

export default function App() {
  const [modalType, setModalType] = useState<'request' | 'tariffs' | 'app' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [isLoadingTariffs, setIsLoadingTariffs] = useState(false);

  useEffect(() => {
    if (modalType === 'tariffs' && tariffs.length === 0) {
      setIsLoadingTariffs(true);
      fetch('/data/tariffs.json')
        .then(res => res.json())
        .then(data => {
          setTariffs(data);
          setIsLoadingTariffs(false);
        })
        .catch(err => {
          console.error('Erro ao carregar tarifas:', err);
          setIsLoadingTariffs(false);
        });
    }
  }, [modalType, tariffs.length]);

  const closeModal = () => {
    setModalType(null);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send the data to a server here
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  return (
    <div className="min-h-screen selection:bg-brazil-yellow selection:text-brazil-blue">
      <Navbar onOpenRequest={() => setModalType('request')} />
      <Hero 
        onOpenRequest={() => setModalType('request')} 
        onOpenTariffs={() => setModalType('tariffs')} 
      />
      <Features />
      
      {/* Wave Divider */}
      <div className="bg-slate-50 h-24 overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full h-full fill-white">
          <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <Partners />
      <CTA onOpenApp={() => setModalType('app')} />
      <Footer />

      {/* Modals */}
      <Modal 
        isOpen={modalType === 'request'} 
        onClose={closeModal} 
        title="Peça seu LYKKECARD"
      >
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-brazil-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-brazil-green" />
            </div>
            <h4 className="text-2xl font-bold text-brazil-blue mb-2">Solicitação Enviada!</h4>
            <p className="text-slate-500">Em breve você receberá um e-mail com os próximos passos.</p>
          </motion.div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Nome Completo</label>
              <input type="text" required className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-brazil-green outline-none transition-all" placeholder="Ex: Kawan Á. Gonzaga" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">CPF</label>
              <input type="text" required className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-brazil-green outline-none transition-all" placeholder="000.000.000-00" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">E-mail</label>
              <input type="email" required className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-brazil-green outline-none transition-all" placeholder="seu@email.com" />
            </div>
            <button className="w-full bg-brazil-green text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-brazil-green/20 mt-4 hover:bg-brazil-blue transition-all">
              Confirmar Solicitação
            </button>
          </form>
        )}
      </Modal>

      <Modal 
        isOpen={modalType === 'tariffs'} 
        onClose={closeModal} 
        title="Tabela de Tarifas"
      >
        <div className="space-y-4">
          {isLoadingTariffs ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brazil-green"></div>
            </div>
          ) : (
            <>
              {tariffs.map((tariff) => (
                <div 
                  key={tariff.id} 
                  className={`flex justify-between p-4 bg-slate-50 rounded-2xl ${
                    tariff.highlight ? 'border-2 border-brazil-yellow/30 bg-brazil-yellow/5' : ''
                  }`}
                >
                  <span className="font-bold text-brazil-blue">{tariff.name}</span>
                  <span className="text-brazil-green font-bold">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tariff.value)}
                  </span>
                </div>
              ))}
              <p className="text-[10px] text-slate-400 italic text-center">
                Valores sujeitos a alteração conforme regulação municipal/estadual.
              </p>
            </>
          )}
        </div>
      </Modal>

      <Modal 
        isOpen={modalType === 'app'} 
        onClose={closeModal} 
        title="Baixe nosso App"
      >
        <div className="text-center space-y-6">
          <p className="text-slate-500">Gerencie seu saldo, faça recargas e veja seu histórico de viagens em tempo real.</p>
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all">
              <Download className="w-6 h-6" /> App Store
            </button>
            <button className="flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all">
              <Download className="w-6 h-6" /> Google Play
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
