import React from 'react';
import { MessageSquare, Calendar, Video, HeartHandshake, ArrowRight, Users, Leaf } from 'lucide-react';

// Componente: Cartão do Grupo (Roda de Conversa)
const GroupCard = ({ theme, title, desc, date, prof, spots, bgHeader, iconColor, themeIcon }) => (
  <div className="bg-white rounded-3xl border border-gray5 overflow-hidden flex flex-col hover:shadow-sm transition">
    {/* Cabeçalho Visual Colorido */}
    <div className={`h-36 flex items-center justify-center`} style={{ backgroundColor: bgHeader }}>
      <div style={{ color: iconColor }}>
        {themeIcon}
      </div>
    </div>
    
    {/* Corpo do Cartão */}
    <div className="p-8 flex-1 flex flex-col justify-between">
      <div>
        <p className="text-[12px] font-bold uppercase tracking-wider mb-3" style={{ color: iconColor }}>{theme}</p>
        <h3 className="text-[22px] font-fraunces font-bold text-gray1 mb-3 leading-tight">{title}</h3>
        <p className="text-[15px] text-gray3 leading-relaxed mb-8">{desc}</p>
      </div>
      
      {/* Informações Práticas */}
      <div className="space-y-4 mb-8 text-[14px] text-gray2 font-medium">
        <p className="flex items-center gap-3"><Calendar size={18} className="text-secondary"/> {date}</p>
        <p className="flex items-center gap-3"><HeartHandshake size={18} className="text-secondary"/> {prof}</p>
        <p className="flex items-center gap-3"><Users size={18} className="text-secondary"/> {spots} vagas preenchidas</p>
        <p className="flex items-center gap-3"><Video size={18} className="text-secondary"/> Encontro online</p>
      </div>
      
      {/* Botão */}
      <button className="w-full py-4 rounded-full bg-primary hover:bg-apoio text-white text-[16px] font-bold flex items-center justify-center gap-2 transition">
        Garantir minha vaga <ArrowRight size={18} />
      </button>
    </div>
  </div>
);

export default function ComunidadeScreen() {
  return (
    <div className="animate-fadeIn font-dmsans h-full">
      {/* Cabeçalho */}
      <div className="mb-12">
        <p className="text-apoio text-[14px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
          <MessageSquare size={16} /> JUNTAS, SOMOS REDE
        </p>
        <h1 className="text-[32px] md:text-[40px] font-fraunces font-bold text-primary mb-2">Rodas de conversa</h1>
        <p className="text-gray2 text-[18px]">Histórias diferentes, sentimentos que se encontram. Um espaço para estar entre mães.</p>
      </div>

      {/* Grid de Grupos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <GroupCard 
          theme="NOVOS COMEÇOS" 
          title="Mães de primeira viagem" 
          desc="Descobertas, dúvidas e pequenos começos. Um encontro para compartilhar essa nova fase e as inseguranças normais do puerpério."
          date="Hoje, às 19h" 
          prof="Dra. Helena Souza" 
          spots="8/15" 
          bgHeader="var(--color-superficie)" // Rosa claro
          iconColor="var(--color-secondary)" // Rosa escuro
          themeIcon={<Users size={48} strokeWidth={1.5} />}
        />
        
        <GroupCard 
          theme="AUTOCUIDADO" 
          title="Um tempo para você" 
          desc="Entre tantos cuidados com o bebé, você também merece um lugar. Vamos conversar sobre saúde mental, descanso e limites."
          date="23 de outubro, às 15h" 
          prof="Dra. Camila Santos" 
          spots="6/12" 
          bgHeader="#EEF2E6" // Verde claro
          iconColor="var(--color-apoio)" // Verde de apoio
          themeIcon={<Leaf size={48} strokeWidth={1.5} />}
        />
        
        <GroupCard 
          theme="ESCUTA E CONEXÃO" 
          title="Maternidade sem filtros" 
          desc="Nem todo dia é leve. Aqui, os seus sentimentos encontram escuta genuína e respeito, sem qualquer espaço para julgamentos."
          date="26 de outubro, às 18h" 
          prof="Dr. Rafael Lima" 
          spots="10/15" 
          bgHeader="var(--color-fundo)" // Off-white
          iconColor="var(--color-primary)" // Verde escuro principal
          themeIcon={<HeartHandshake size={48} strokeWidth={1.5} />}
        />

      </div>
    </div>
  );
}