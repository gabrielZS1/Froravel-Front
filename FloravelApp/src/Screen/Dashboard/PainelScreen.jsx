import React from 'react';
import { ArrowRight, HeartHandshake, MessageSquare, Calendar } from 'lucide-react';

// Ícone customizado de cadeado
const LockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

// Componente Card de Ação Rápida
const ActionCard = ({ icon, title, bg, onClick }) => (
  <div onClick={onClick} className={`p-6 rounded-3xl border border-gray5 hover:shadow-sm cursor-pointer transition flex flex-col items-center justify-center text-center h-32 ${bg}`}>
    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-fundo shadow-sm">
      {icon}
    </div>
    <p className="text-[15px] font-bold text-gray1 font-dmsans">{title}</p>
  </div>
);

export default function PainelScreen({ setActiveTab }) {
  return (
    <div className="animate-fadeIn font-dmsans bg-fundo h-full">
      
      {/* CABEÇALHO */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-[32px] md:text-[40px] font-fraunces font-bold text-primary flex items-center gap-2">
            Olá, Mariana! <span className="text-secondary">♡</span>
          </h1>
          <p className="text-gray2 text-[18px] mt-1">Como você está se sentindo hoje?</p>
        </div>
        <span className="text-[14px] text-gray3 font-medium hidden md:block">Quinta-feira, 15 de outubro de 2026</span>
      </div>

      {/* BANNER PRINCIPAL: FOCO NA MÃE */}
      <div className="bg-superficie rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden mb-10">
        
        {/* Conteúdo de Texto */}
        <div className="z-10 max-w-md relative">
          <p className="text-apoio text-[14px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-4 h-4 text-xl leading-none">✨</span> UM MOMENTO PARA VOCÊ
          </p>
          <h2 className="text-[36px] md:text-[40px] font-fraunces font-bold text-primary leading-tight mb-4">
            Sua saúde mental importa.
          </h2>
          <p className="text-gray1 text-[16px] md:text-[18px] mb-6 leading-relaxed">
            Tire 5 minutos para o nosso Quiz de Triagem e nos ajude a entender como podemos te apoiar hoje.
          </p>
          
          <button 
            onClick={() => setActiveTab('quiz')} 
            className="bg-primary hover:bg-apoio text-fundo px-6 py-3.5 rounded-full text-[16px] font-bold flex items-center gap-2 transition"
          >
            Iniciar autoavaliação <ArrowRight size={18} />
          </button>
          
          <p className="text-gray3 text-[13px] mt-4 flex items-center gap-1.5">
            <LockIcon /> Um espaço seguro, sem julgamentos.
          </p>
        </div>
        
        {/* Imagem Decorativa - Foco na Mulher/Autocuidado (sem bebé) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
          {/* Este degradê faz a imagem misturar-se suavemente com o fundo rosa */}
          <div className="absolute inset-0 bg-gradient-to-r from-superficie via-superficie/30 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Mulher serena num momento de autocuidado" 
            className="w-full h-full object-cover object-top opacity-90"
          />
        </div>
      </div>

      {/* CARDS DE ACESSO RÁPIDO */}
      <div>
        <h3 className="text-[28px] md:text-[32px] font-fraunces font-bold text-primary mb-1">
          Cuidar de você pode começar aqui
        </h3>
        <p className="text-[16px] md:text-[18px] text-gray2 mb-6">Pequenos passos, no seu tempo.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard 
            icon={<HeartHandshake className="text-secondary" size={24}/>} 
            title="Encontrar Psicóloga" 
            bg="bg-white" 
            onClick={() => setActiveTab('network')} 
          />
          <ActionCard 
            icon={<MessageSquare className="text-apoio" size={24}/>} 
            title="Rodas de Conversa" 
            bg="bg-white" 
            onClick={() => setActiveTab('groups')} 
          />
          <ActionCard 
            icon={<Calendar className="text-primary" size={24}/>} 
            title="Meus Agendamentos" 
            bg="bg-white" 
            onClick={() => setActiveTab('booking')} 
          />
        </div>
      </div>

    </div>
  );
}