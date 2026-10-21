import React, { useState, useEffect, useRef } from 'react';
import {
  Home, ClipboardList, HeartHandshake, MessageSquare, Calendar, Bell, 
  LogOut, ArrowRight, ChevronRight, ChevronLeft, BookOpen
} from 'lucide-react';

// IMPORTANDO AS TELAS
import PainelScreen from './Screen/Dashboard/PainelScreen';
import CheckInScreen from './Screen/Dashboard/CheckInScreen';
import AgendamentoScreen from './Screen/Services/AgendamentoScreen';
import RedeApoioScreen from './Screen/Services/ApoioScreen';
import ComunidadeScreen from './Screen/Community/ComunidadeScreen';
import PerfilScreen from './Screen/Profile/PerfilScreen';
import BibliotecaScreen from './Screen/Community/BibliotecaScreen';
import AjudaScreen from './Screen/Services/AjudaScreen';

const NavItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium transition-all font-dmsans ${
      active ? 'bg-superficie text-primary' : 'text-gray3 hover:bg-fundo hover:text-gray1'
    }`}
  >
    {icon} {label}
  </button>
);

const LogoutModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray1/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-lg text-center font-dmsans transform transition-all">
        <div className="w-16 h-16 rounded-full bg-superficie text-error mx-auto flex items-center justify-center mb-4">
          <LogOut size={28} />
        </div>
        <h3 className="text-[24px] font-fraunces font-bold text-gray1 mb-2">Sair da conta?</h3>
        <p className="text-[15px] text-gray3 mb-8">Tem a certeza que deseja sair do seu espaço seguro?</p>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 px-6 py-3 rounded-full border border-gray5 text-gray2 font-bold hover:bg-fundo transition">Cancelar</button>
          <button onClick={onConfirm} className="flex-1 px-6 py-3 rounded-full bg-error text-white font-bold hover:bg-error/90 transition shadow-sm">Sim, sair</button>
        </div>
      </div>
    </div>
  );
};

const POSSIBLE_NOTIFICATIONS = [
  { id: 1, title: "Lembrete de Autocuidado 🌸", desc: "Já bebeu água hoje? O seu corpo precisa de hidratação.", time: "Há 10 min", color: "text-secondary", bg: "bg-superficie" },
  { id: 2, title: "Novo artigo disponível 📚", desc: "Publicamos: 'Como lidar com o choro no fim da tarde'.", time: "Há 1 hora", color: "text-primary", bg: "bg-fundo" },
  { id: 3, title: "Roda de Conversa 👥", desc: "O grupo 'Mães de primeira viagem' tem 2 vagas abertas.", time: "Há 3 horas", color: "text-apoio", bg: "bg-[#EEF2E6]" },
  { id: 4, title: "Mensagem da Rede 💌", desc: "Pedir ajuda é um ato de coragem.", time: "Ontem", color: "text-warning", bg: "bg-warning/10" }
];

export default function App() {
  // 1. ESTADOS DE NAVEGAÇÃO
  const [activeTab, setActiveTab] = useState('home');
  const [history, setHistory] = useState(['home']);
  
  // 2. ESTADOS DOS MODAIS/MENUS
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [currentNotifs, setCurrentNotifs] = useState([]);
  const [hasUnread, setHasUnread] = useState(true);
  const notifRef = useRef(null);

  // 3. ESTADOS GLOBAIS (A "MEMÓRIA" DAS CONSULTAS)
  const [agendamentosGlobais, setAgendamentosGlobais] = useState([]); 
  const [profEmFoco, setProfEmFoco] = useState(null); 

  // Fecha notificações ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) setIsNotifOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpenNotifications = () => {
    if (!isNotifOpen) {
      const quantity = Math.floor(Math.random() * 3) + 1;
      const shuffled = [...POSSIBLE_NOTIFICATIONS].sort(() => 0.5 - Math.random());
      setCurrentNotifs(shuffled.slice(0, quantity));
      setHasUnread(false);
    }
    setIsNotifOpen(!isNotifOpen);
  };

  const handleTabChange = (newTab) => {
    if (newTab !== activeTab) {
      setHistory(prev => [...prev, newTab]);
      setActiveTab(newTab);
    }
  };

  const handleGoBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setActiveTab(newHistory[newHistory.length - 1]);
    }
  };

  return (
    <div className="flex h-screen bg-fundo font-dmsans text-gray1 relative">
      <LogoutModal isOpen={isLogoutModalOpen} onConfirm={() => window.location.href = '/'} onCancel={() => setIsLogoutModalOpen(false)} />

      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray5 flex flex-col justify-between py-6 px-4">
        <div>
          <div className="flex flex-col items-start px-2 mb-10">
            <div className="flex items-center gap-2 text-[28px] font-fraunces text-primary font-bold">
               <span className="text-[32px] text-secondary">❀</span> florável
            </div>
          </div>
          <nav className="space-y-2">
            <NavItem icon={<Home size={20}/>} label="Página inicial" active={activeTab === 'home'} onClick={() => handleTabChange('home')} />
            <NavItem icon={<ClipboardList size={20}/>} label="Quiz de bem-estar" active={activeTab === 'quiz'} onClick={() => handleTabChange('quiz')} />
            <NavItem icon={<HeartHandshake size={20}/>} label="Rede de apoio" active={activeTab === 'network'} onClick={() => handleTabChange('network')} />
            <NavItem icon={<MessageSquare size={20}/>} label="Rodas de conversa" active={activeTab === 'groups'} onClick={() => handleTabChange('groups')} />
            <NavItem icon={<Calendar size={20}/>} label="Meus agendamentos" active={activeTab === 'booking'} onClick={() => handleTabChange('booking')} />
            <NavItem icon={<BookOpen size={20}/>} label="Conteúdos e Biblioteca" active={activeTab === 'library'} onClick={() => handleTabChange('library')} />
          </nav>

          {/* === INSIRA ESTE BLOCO AQUI (LOGO ABAIXO DO </nav>) === */}
          <div 
            className="mt-8 bg-superficie p-5 rounded-2xl mx-2 cursor-pointer hover:bg-superficie/80 transition" 
            onClick={() => handleTabChange('help')}
          >
            <HeartHandshake className="text-primary mb-2" size={24} />
            <p className="text-[15px] font-bold text-gray1 mb-1">Você não está sozinha.</p>
            <p className="text-[12px] text-gray2 mb-4 leading-relaxed">Cada sentimento importa. Estamos aqui para acolher você.</p>
            <button className="text-primary text-[13px] font-bold flex items-center gap-1">
              Preciso de ajuda <ArrowRight size={14} />
            </button>
          </div>
          {/* ====================================================== */}
          
    
        
        {/* Rodapé: Mariana Silva */}
        </div>
        <div className="flex items-center justify-between px-2 pt-4 border-t border-gray5">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleTabChange('perfil')}>
            <div className="w-10 h-10 rounded-full bg-superficie text-primary flex items-center justify-center font-bold">MS</div>
            <p className="text-[14px] font-bold text-gray1">Mariana Silva</p>
          </div>
          <button onClick={() => setIsLogoutModalOpen(true)} className="p-2 text-gray3 hover:text-error transition"><LogOut size={18} /></button>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* CABEÇALHO */}
        <header className="h-20 flex items-center justify-between px-8 bg-white border-b border-gray5/50 z-20">
          <div className="flex items-center gap-3 text-[14px]">
            <button className="p-2 border rounded-xl hover:bg-fundo" onClick={handleGoBack} disabled={history.length <= 1}><ChevronLeft size={20} /></button>
            <span className="font-bold text-primary capitalize">{activeTab === 'home' ? 'Página inicial' : activeTab}</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative" ref={notifRef}>
              <button onClick={handleOpenNotifications} className="relative p-2 rounded-full text-gray2 hover:bg-fundo transition">
                <Bell size={22} />
                {hasUnread && <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-secondary rounded-full border-2 border-white"></span>}
              </button>
              {isNotifOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-lg border border-gray5 overflow-hidden animate-fadeIn z-50">
                  <div className="p-4 border-b border-gray5"><h4 className="font-bold text-gray1">Notificações</h4></div>
                  <div className="max-h-80 overflow-y-auto">
                    {currentNotifs.map(n => (
                      <div key={n.id} className="p-4 border-b border-gray5 hover:bg-fundo cursor-pointer">
                        <p className="text-[14px] font-bold text-gray1">{n.title}</p>
                        <p className="text-[13px] text-gray3">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="w-10 h-10 rounded-full bg-superficie text-primary flex items-center justify-center font-bold cursor-pointer" onClick={() => handleTabChange('perfil')}>MS</div>
          </div>
        </header>

        {/* ÁREA DINÂMICA (ONDE A MAGIA ACONTECE) */}
        <div className="flex-1 overflow-y-auto p-8 lg:px-16 pb-20 bg-fundo">
          {activeTab === 'home' && <PainelScreen setActiveTab={handleTabChange} />}
          {activeTab === 'quiz' && <CheckInScreen />}
          {activeTab === 'groups' && <ComunidadeScreen />}
          {activeTab === 'help' && <AjudaScreen />}
          {activeTab === 'perfil' && <PerfilScreen />}
          {activeTab === 'library' && <BibliotecaScreen />}
          
          {/* AS DUAS TELAS QUE PARTILHAM A MEMÓRIA GLOBAAL */}
          {activeTab === 'booking' && (
            <AgendamentoScreen 
              setActiveTab={handleTabChange} 
              agendamentos={agendamentosGlobais}
              cancelarAgendamento={(id) => setAgendamentosGlobais(prev => prev.filter(a => a.id !== id))}
            />
          )}
          {activeTab === 'network' && (
            <RedeApoioScreen 
              setActiveTab={handleTabChange} 
              adicionarAgendamento={(novo) => setAgendamentosGlobais(prev => [...prev, novo])}
              profEmFoco={profEmFoco}
              setProfEmFoco={setProfEmFoco}
            />
          )}
        </div>
      </main>
    </div>
  );
}