import React, { useState } from 'react';
import { MessageSquare, Calendar, Video, HeartHandshake, CheckCircle, Users, Leaf } from 'lucide-react';

const GroupCard = ({ id, theme, title, desc, date, prof, spots, bgHeader, iconColor, themeIcon }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Simula a ida ao Java (POST) para garantir a vaga
  const handleSubscribe = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
    }, 1500); // Demora 1.5s a pensar
  };

  return (
    <div className="bg-white rounded-3xl border border-gray5 overflow-hidden flex flex-col hover:shadow-md transition">
      <div className={`h-36 flex items-center justify-center ${bgHeader}`}>
        <div className={iconColor}>
          {themeIcon}
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <p className={`text-[12px] font-bold uppercase tracking-wider mb-3 ${iconColor}`}>{theme}</p>
          <h3 className="text-[22px] font-fraunces font-bold text-gray1 mb-3 leading-tight">{title}</h3>
          <p className="text-[15px] text-gray3 leading-relaxed mb-8">{desc}</p>
        </div>
        
        <div className="space-y-4 mb-8 text-[14px] text-gray2 font-medium">
          <p className="flex items-center gap-3"><Calendar size={18} className="text-secondary"/> {date}</p>
          <p className="flex items-center gap-3"><HeartHandshake size={18} className="text-secondary"/> {prof}</p>
          <p className="flex items-center gap-3"><Users size={18} className="text-secondary"/> 
            {/* Atualiza o número de vagas visualmente se ela se inscrever */}
            {isSubscribed ? parseInt(spots) + 1 : spots} vagas preenchidas
          </p>
          <p className="flex items-center gap-3"><Video size={18} className="text-secondary"/> Encontro online</p>
        </div>
        
        <button 
          onClick={handleSubscribe}
          disabled={isSubscribed || isLoading}
          className={`w-full py-4 rounded-full text-[16px] font-bold flex items-center justify-center gap-2 transition ${
            isSubscribed 
              ? 'bg-success/10 text-success border border-success/20 cursor-default' 
              : 'bg-primary hover:bg-apoio text-white shadow-sm'
          }`}
        >
          {isLoading ? (
             <span className="animate-pulse">Confirmando...</span>
          ) : isSubscribed ? (
             <><CheckCircle size={18} /> Vaga Garantida</>
          ) : (
             'Garantir minha vaga'
          )}
        </button>
      </div>
    </div>
  );
};

export default function ComunidadeScreen() {
  return (
    <div className="animate-fadeIn font-dmsans h-full">
      <div className="mb-12">
        <p className="text-apoio text-[14px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
          <MessageSquare size={16} /> JUNTAS, SOMOS REDE
        </p>
        <h1 className="text-[32px] md:text-[40px] font-fraunces font-bold text-primary mb-2">Rodas de conversa</h1>
        <p className="text-gray2 text-[18px]">Histórias diferentes, sentimentos que se encontram. Um espaço para estar entre mães.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GroupCard 
          id={1} theme="NOVOS COMEÇOS" title="Mães de primeira viagem" 
          desc="Descobertas e pequenos começos. Um encontro para compartilhar essa nova fase."
          date="Hoje, às 19h" prof="Dra. Helena Souza" spots="8/15" 
          bgHeader="bg-superficie" iconColor="text-secondary" 
          themeIcon={<Users size={48} strokeWidth={1.5} />}
        />
        <GroupCard 
          id={2} theme="AUTOCUIDADO" title="Um tempo para você" 
          desc="Entre os cuidados com o bebé, você merece um lugar. Vamos conversar sobre limites."
          date="23 de outubro, às 15h" prof="Dra. Camila Santos" spots="6/12" 
          bgHeader="bg-[#EEF2E6]" iconColor="text-apoio" 
          themeIcon={<Leaf size={48} strokeWidth={1.5} />}
        />
        <GroupCard 
          id={3} theme="ESCUTA E CONEXÃO" title="Maternidade sem filtros" 
          desc="Nem todo dia é leve. Os seus sentimentos encontram escuta genuína e respeito."
          date="26 de outubro, às 18h" prof="Dr. Rafael Lima" spots="10/15" 
          bgHeader="bg-fundo" iconColor="text-primary" 
          themeIcon={<HeartHandshake size={48} strokeWidth={1.5} />}
        />
      </div>
    </div>
  );
}