import React, { useState } from 'react';
import { MessageSquare, Calendar, Video, HeartHandshake, CheckCircle, Users, Leaf } from 'lucide-react';

const GroupCard = ({ id, theme, title, desc, date, prof, spots, bgHeader, iconColor, themeIcon, img }) => {
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
    <div className="bg-white rounded-3xl border border-gray5 overflow-hidden flex flex-col hover:shadow-md transition group">
      
      {/* ÁREA DA IMAGEM DO GRUPO */}
      <div className={`h-48 relative overflow-hidden ${bgHeader} flex items-center justify-center`}>
        {/* A imagem carrega o SRC passado. Tem efeito de zoom no hover! */}
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover object-[center_30%] transition duration-700 group-hover:scale-105"
          onError={(e) => {
            // Se a imagem falhar ou não existir, esconde a imagem e mostra o ícone original
            e.target.style.display = 'none';
            e.target.nextSibling.classList.remove('hidden');
            e.target.nextSibling.classList.add('flex');
          }}
        />
        {/* Ícone de fallback (só aparece se a foto falhar) */}
        <div className={`hidden ${iconColor}`}>
          {themeIcon}
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <p className={`text-[12px] font-bold uppercase tracking-wider mb-3 ${iconColor}`}>{theme}</p>
          <h3 className="text-[22px] font-fraunces font-bold text-gray1 mb-3 leading-tight group-hover:text-primary transition">{title}</h3>
          <p className="text-[15px] text-gray3 leading-relaxed mb-8">{desc}</p>
        </div>
        
        <div className="space-y-4 mb-8 text-[14px] text-gray2 font-medium">
          <p className="flex items-center gap-3"><Calendar size={18} className="text-secondary"/> {date}</p>
          <p className="flex items-center gap-3"><HeartHandshake size={18} className="text-secondary"/> {prof}</p>
          <p className="flex items-center gap-3"><Users size={18} className="text-secondary"/> 
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
              : 'bg-primary hover:bg-apoio text-white shadow-sm hover:-translate-y-1'
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
    <div className="animate-fadeIn font-dmsans min-h-full pb-12">
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
          img="/img/variasMaes.jpg" /* <-- ADICIONADO A FOTO AQUI */
        />
        <GroupCard 
          id={2} theme="AUTOCUIDADO" title="Um tempo para você" 
          desc="Entre os cuidados com o bebé, você merece um lugar. Vamos conversar sobre limites."
          date="23 de outubro, às 15h" prof="Dra. Camila Santos" spots="6/12" 
          bgHeader="bg-[#EEF2E6]" iconColor="text-apoio" 
          themeIcon={<Leaf size={48} strokeWidth={1.5} />}
          img="/img/maeDescansando.jpg" /* <-- ADICIONADO A FOTO AQUI */
        />
        <GroupCard 
          id={3} theme="ESCUTA E CONEXÃO" title="Maternidade sem filtros" 
          desc="Nem todo dia é leve. Os seus sentimentos encontram escuta genuína e respeito."
          date="26 de outubro, às 18h" prof="Dr. Rafael Lima" spots="10/15" 
          bgHeader="bg-fundo" iconColor="text-primary" 
          themeIcon={<HeartHandshake size={48} strokeWidth={1.5} />}
          img="/img/maeconversando.jpg" /* <-- ADICIONADO A FOTO AQUI */
        />
      </div>
    </div>
  );
}