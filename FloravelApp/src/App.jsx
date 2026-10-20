import React, { useState } from 'react';
import {
  Home,
  ClipboardList,
  HeartHandshake,
  MessageSquare,
  Calendar,
  Bell,
  LogOut,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  BookOpen // <-- Adicione isto aqui!
} from 'lucide-react';

// IMPORTANDO A TELA QUE VOCÊ CRIOU
import PainelScreen from './Screen/Dashboard/PainelScreen';
import CheckInScreen from './Screen/Dashboard/CheckInScreen';
import AgendamentoScreen from './Screen/Services/AgendamentoScreen';
import RedeApoioScreen from './Screen/Services/ApoioScreen';
import ComunidadeScreen from './Screen/Community/ComunidadeScreen';


import PerfilScreen from './Screen/Profile/PerfilScreen';
import BibliotecaScreen from './Screen/Community/BibliotecaScreen';
import AjudaScreen from './Screen/Services/AjudaScreen'; // (Ajuste o nome conforme o seu ficheiro)

// (Futuramente você vai importar as outras aqui)
// import CheckInScreen from './Screen/Dashboard/CheckInScreen';
// import RedeApoioScreen from './Screen/Services/RedeApoioScreen';
// etc...

// Componente do Botão do Menu (Para deixar o código limpo)
const NavItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium transition-all font-dmsans ${active ? 'bg-superficie text-primary' : 'text-gray3 hover:bg-fundo hover:text-gray1'
      }`}
  >
    {icon} {label}
  </button>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex h-screen bg-fundo font-dmsans text-gray1">

     {/* BARRA LATERAL (SIDEBAR) */}
      <aside className="w-72 bg-white border-r border-gray5 flex flex-col justify-between py-6 px-4">
        <div>
          {/* Logo */}
          <div className="flex flex-col items-start px-2 mb-10">
            <div className="flex items-center gap-2 text-[28px] font-fraunces text-primary font-bold">
               <span className="text-[32px] text-secondary">❀</span> florável
            </div>
            <span className="text-[12px] text-gray3 mt-1 ml-1 font-dmsans">Um cuidado que floresce.</span>
          </div>

          <p className="text-[11px] font-bold uppercase tracking-wider text-gray3 mb-4 px-2">Seu espaço</p>
          
          <nav className="space-y-2">
            <NavItem icon={<Home size={20}/>} label="Página inicial" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
            <NavItem icon={<ClipboardList size={20}/>} label="Quiz de bem-estar" active={activeTab === 'quiz'} onClick={() => setActiveTab('quiz')} />
            <NavItem icon={<HeartHandshake size={20}/>} label="Rede de apoio" active={activeTab === 'network'} onClick={() => setActiveTab('network')} />
            <NavItem icon={<MessageSquare size={20}/>} label="Rodas de conversa" active={activeTab === 'groups'} onClick={() => setActiveTab('groups')} />
            <NavItem icon={<Calendar size={20}/>} label="Meus agendamentos" active={activeTab === 'booking'} onClick={() => setActiveTab('booking')} />
            
            {/* NOVO BOTÃO DA BIBLIOTECA */}
            <NavItem icon={<BookOpen size={20}/>} label="Conteúdos e Biblioteca" active={activeTab === 'library'} onClick={() => setActiveTab('library')} />
          </nav>

          {/* Botão de Emergência */}
          <div 
            className="mt-8 bg-superficie p-5 rounded-2xl mx-2 cursor-pointer hover:bg-superficie/80 transition" 
            onClick={() => setActiveTab('help')}
          >
            <HeartHandshake className="text-primary mb-2" size={24} />
            <p className="text-[15px] font-bold text-gray1 mb-1">Você não está sozinha.</p>
            <p className="text-[12px] text-gray2 mb-4 leading-relaxed">Cada sentimento importa. Estamos aqui para acolher você.</p>
            <button className="text-primary text-[13px] font-bold flex items-center gap-1">
              Preciso de ajuda <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* NOVO: ONCLICK ADICIONADO AO RODAPÉ DO PERFIL */}
        <div 
          className="flex items-center justify-between px-2 pt-4 border-t border-gray5 cursor-pointer hover:bg-fundo rounded-xl p-2 transition"
          onClick={() => setActiveTab('perfil')}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-superficie text-primary flex items-center justify-center font-bold text-[16px]">MS</div>
            <div>
              <p className="text-[15px] font-bold text-gray1">Mariana Silva</p>
              <p className="text-[11px] text-gray3">Meu espaço de cuidado</p>
            </div>
          </div>
          <LogOut size={18} className="text-gray3 hover:text-error transition" />
        </div>
      </aside>


      {/* ÁREA PRINCIPAL À DIREITA */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">

        {/* CABEÇALHO (TOPBAR) */}
        <header className="h-20 flex items-center justify-between px-8 bg-fundo">
          <div className="flex items-center gap-2 text-[14px] text-gray3">
            <span
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-gray5 cursor-pointer hover:bg-gray5 transition"
              onClick={() => setActiveTab('home')}
            >
              <ChevronLeft size={16} className="text-gray2" />
            </span>
            <span>Meu espaço</span>
            <ChevronRight size={14} className="text-gray4" />
            <span className="font-bold text-primary capitalize">
              {activeTab === 'home' ? 'Página inicial' :
                activeTab === 'quiz' ? 'Quiz de bem-estar' :
                  activeTab === 'booking' ? 'Meus agendamentos' :
                    activeTab === 'help' ? 'Preciso de Ajuda' : activeTab}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[13px] text-gray3 italic hidden md:block">🍃 Um dia de cada vez</span>
            <button className="relative p-2 text-gray3 hover:bg-gray5 rounded-full transition">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-secondary rounded-full border-2 border-fundo"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-superficie text-primary flex items-center justify-center font-bold text-[14px]">MS</div>
          </div>
        </header>

        {/* ÁREA DINÂMICA (Onde a tela muda) */}
        <div className="flex-1 overflow-y-auto p-8 lg:px-16 pb-20">

          {activeTab === 'home' && <PainelScreen setActiveTab={setActiveTab} />}
          {activeTab === 'quiz' && <CheckInScreen />}
          {activeTab === 'booking' && <AgendamentoScreen setActiveTab={setActiveTab} />}
          {activeTab === 'network' && <RedeApoioScreen />}
          
          {/* ADICIONE ESTA LINHA AQUI: */}
          {activeTab === 'groups' && <ComunidadeScreen />}
          
          {/* As restantes: */}
          {activeTab === 'help' && <AjudaScreen />}
          {activeTab === 'perfil' && <PerfilScreen />}
          {activeTab === 'library' && <BibliotecaScreen />}

        </div>
      </main>
    </div>
  );
}