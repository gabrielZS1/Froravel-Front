import React from 'react';
import { Search, HeartHandshake, Video, ArrowRight } from 'lucide-react';

// Componente: Filtro em formato de "pílula"
const FilterPill = ({ text, active }) => (
  <button className={`px-6 py-3 rounded-full text-[14px] font-bold whitespace-nowrap border transition ${
    active 
      ? 'bg-superficie border-superficie text-primary' 
      : 'bg-white border-gray5 text-gray3 hover:border-gray4'
  }`}>
    {text}
  </button>
);

// Componente: Cartão da Profissional (Psicóloga)
const ProfessionalCard = ({ initials, name, spec, desc, bgInitials, colorInitials }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-sm transition cursor-pointer">
    <div className="flex items-start gap-6">
      {/* Avatar / Iniciais */}
      <div 
        className={`w-16 h-16 rounded-full flex items-center justify-center text-[22px] font-bold shrink-0 font-fraunces`} 
        style={{ backgroundColor: bgInitials, color: colorInitials }}
      >
        {initials}
      </div>
      
      {/* Dados da Profissional */}
      <div>
        <h3 className="text-[22px] font-fraunces font-bold text-gray1">{name}</h3>
        <p className="text-[14px] font-bold mb-3" style={{ color: colorInitials }}>{spec}</p>
        <p className="text-[16px] text-gray3 leading-relaxed max-w-2xl mb-4">{desc}</p>
        
        {/* Tag de formato */}
        <p className="text-[13px] text-gray3 flex items-center gap-1.5 font-medium">
          <Video size={16} /> Online • Atendimento social via Florável
        </p>
      </div>
    </div>
    
    {/* Botão de Ação */}
    <button className="px-6 py-3 rounded-full border border-gray4 text-gray1 text-[15px] font-bold flex items-center gap-2 hover:bg-fundo transition w-full md:w-auto justify-center shrink-0">
      Ver agenda <ArrowRight size={18} />
    </button>
  </div>
);

export default function RedeApoioScreen() {
  return (
    <div className="animate-fadeIn font-dmsans h-full">
      {/* Cabeçalho */}
      <div className="mb-10">
        <p className="text-secondary text-[14px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
          <HeartHandshake size={16} /> ESCUTA QUE ACOLHE
        </p>
        <h1 className="text-[32px] md:text-[40px] font-fraunces font-bold text-primary mb-2">Sua rede de apoio</h1>
        <p className="text-gray2 text-[18px]">Encontre alguém para caminhar com você. No seu tempo, do seu jeito.</p>
      </div>

      {/* Barra de Pesquisa */}
      <div className="relative mb-8 max-w-3xl">
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray3" size={20} />
        <input 
          type="text" 
          placeholder="Buscar por nome ou especialidade" 
          className="w-full bg-white border border-gray5 rounded-2xl py-4 pl-14 pr-6 text-[16px] focus:outline-none focus:border-primary shadow-sm"
        />
      </div>

      {/* Filtros (Pills) */}
      <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
        <FilterPill text="Todas" active />
        <FilterPill text="Psicologia Perinatal" />
        <FilterPill text="Acolhimento Luto" />
        <FilterPill text="Triagem" />
      </div>

      {/* Lista de Psicólogas */}
      <div className="space-y-6">
        <ProfessionalCard 
          initials="HS" 
          name="Dra. Helena Souza" 
          spec="Psicologia Perinatal" 
          desc="Um espaço de escuta para acolher você e as transformações da maternidade, respeitando o seu momento." 
          bgInitials="var(--color-superficie)" // Rosa claro
          colorInitials="var(--color-secondary)" // Rosa mais escuro (Brand)
        />
        <ProfessionalCard 
          initials="CS" 
          name="Dra. Camila Santos" 
          spec="Acolhimento Luto" 
          desc="Acolhimento sensível para atravessar perdas, reconstruir vínculos e encontrar apoio." 
          bgInitials="#EEF2E6" // Verde super claro
          colorInitials="var(--color-apoio)" // Verde de apoio
        />
        <ProfessionalCard 
          initials="RL" 
          name="Dr. Rafael Lima" 
          spec="Triagem e Acolhimento" 
          desc="Escuta inicial e direcionamento terapêutico, focado em trazer clareza para os seus sentimentos no puerpério." 
          bgInitials="var(--color-fundo)" 
          colorInitials="var(--color-primary)"
        />
      </div>
    </div>
  );
}