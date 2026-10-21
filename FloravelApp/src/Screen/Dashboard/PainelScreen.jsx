import React, { useState } from 'react';
import { ArrowRight, Heart, MessageSquare, Calendar, BookOpen, Clock, PlayCircle, Sparkles } from 'lucide-react';

export default function PainelScreen({ setActiveTab }) {
  // Estado para guardar o humor do dia (interatividade para a pergunta do topo)
  const [humorDoDia, setHumorDoDia] = useState(null);
  
  const ARTIGOS_RECOMENDADOS = [
    { id: 1, categoria: "Maternidade Real", titulo: "Baby blues ou depressão pós-parto? Entenda a diferença.", tempo: "3 min de leitura", img: "/img/maternidadeSemFiltro.jpg", corFallback: "bg-[#E5C6C6]" },
    { id: 2, categoria: "Autocuidado", titulo: "5 pequenos rituais para encontrar calma no caos.", tempo: "4 min de leitura", img: "/img/maeDescansando.jpg", corFallback: "bg-[#EEF2E6]" },
    { id: 3, categoria: "Vínculo", titulo: "A culpa de não sentir o amor imediato pelo bebé.", tempo: "5 min de leitura", img: "/img/maeexausta.jpg", corFallback: "bg-[#F3E8E0]" }
  ];
  return (
    // CORREÇÃO DO CORTE: Troquei 'h-full' por 'min-h-full pb-12' para a página poder crescer livremente
    <div className="animate-fadeIn font-dmsans min-h-full max-w-6xl mx-auto pb-12">
      
      {/* CABEÇALHO DO PAINEL */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-[32px] md:text-[40px] font-fraunces font-bold text-gray1 mb-2 flex items-center gap-3">
            Olá, Mariana! <span className="text-[#E5C6C6]">♡</span>
          </h1>
          
          {/* CORREÇÃO DA PERGUNTA: Agora é um mini check-in interativo */}
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-[16px] text-gray3">Como você está se sentindo hoje?</p>
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray5 shadow-sm">
              {['😊', '😐', '😔'].map(emoji => (
                <button
                  key={emoji}
                  onClick={() => setHumorDoDia(emoji)}
                  className={`text-[18px] transition-all duration-300 transform hover:scale-125 ${
                    humorDoDia === emoji 
                      ? 'scale-125 opacity-100 drop-shadow-sm' 
                      : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
                  }`}
                  title="Registar humor"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-[13px] text-gray4 font-medium hidden md:block">
          Quinta-feira, 15 de outubro de 2026
        </div>
      </div>

      {/* BANNER PRINCIPAL (HERO) */}
      <div className="relative w-full rounded-[32px] overflow-hidden bg-[#F8EAEA] flex flex-col md:flex-row min-h-[320px] mb-12 shadow-sm group">
        <div className="relative z-10 flex flex-col justify-center p-10 md:p-14 md:w-3/5">
          <p className="text-[12px] font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
            <Sparkles size={16} className="text-secondary"/> Um momento para você
          </p>
          <h2 className="text-[36px] md:text-[48px] font-fraunces font-bold text-gray1 leading-tight mb-4">
            Sua saúde mental <br/> importa.
          </h2>
          <p className="text-[16px] text-gray2 leading-relaxed max-w-md mb-8">
            Tire 5 minutos para o nosso Quiz de Triagem e nos ajude a entender como podemos te apoiar hoje.
          </p>
          <button 
            onClick={() => setActiveTab('quiz')}
            className="bg-primary hover:bg-apoio text-white w-fit px-8 py-4 rounded-full text-[15px] font-bold flex items-center gap-2 transition transform hover:scale-105 shadow-sm"
          >
            Iniciar autoavaliação <ArrowRight size={18} />
          </button>
          <p className="text-[12px] text-gray4 mt-4 flex items-center gap-2 font-medium">
            🔒 Um espaço seguro, sem julgamentos.
          </p>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block overflow-hidden rounded-r-[32px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8EAEA] from-10% via-[#F8EAEA]/60 to-transparent z-10 pointer-events-none" />
          <img 
            src="/img/1.jpg" 
            alt="Mulher sorrindo num momento de autocuidado" 
            className="w-full h-full object-cover object-[center_15%] opacity-90 transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* ACESSOS RÁPIDOS */}
      <div className="mb-14">
        <h3 className="text-[24px] font-fraunces font-bold text-gray1 mb-2">Cuidar de você pode começar aqui</h3>
        <p className="text-[16px] text-gray3 mb-6">Pequenos passos, no seu tempo.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button onClick={() => setActiveTab('network')} className="bg-white border border-gray5 hover:border-secondary/50 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition group hover:shadow-sm">
            <div className="w-16 h-16 rounded-full bg-superficie text-secondary flex items-center justify-center group-hover:scale-110 transition duration-300">
              <Heart size={28} />
            </div>
            <span className="font-bold text-gray1 text-[16px] group-hover:text-primary transition">Encontrar Psicóloga</span>
          </button>

          <button onClick={() => setActiveTab('groups')} className="bg-white border border-gray5 hover:border-apoio/50 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition group hover:shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#EEF2E6] text-apoio flex items-center justify-center group-hover:scale-110 transition duration-300">
              <MessageSquare size={28} />
            </div>
            <span className="font-bold text-gray1 text-[16px] group-hover:text-primary transition">Rodas de Conversa</span>
          </button>

          <button onClick={() => setActiveTab('booking')} className="bg-white border border-gray5 hover:border-primary/50 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition group hover:shadow-sm">
            <div className="w-16 h-16 rounded-full bg-fundo text-primary flex items-center justify-center group-hover:scale-110 transition duration-300">
              <Calendar size={28} />
            </div>
            <span className="font-bold text-gray1 text-[16px] group-hover:text-primary transition">Meus Agendamentos</span>
          </button>
        </div>
      </div>

      {/* LEITURAS QUE ABRAÇAM */}
      <div className="mb-14">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h3 className="text-[24px] font-fraunces font-bold text-gray1 mb-1">Leituras que abraçam</h3>
            <p className="text-[16px] text-gray3">Conteúdos pensados para o que você está vivendo.</p>
          </div>
          <button 
            onClick={() => setActiveTab('library')}
            className="text-[14px] font-bold text-primary hover:text-apoio flex items-center gap-2 transition"
          >
            Ver todos <ArrowRight size={16} />
          </button>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTIGOS_RECOMENDADOS.map(artigo => (
            <div key={artigo.id} className="bg-white border border-gray5 rounded-3xl overflow-hidden hover:shadow-md transition cursor-pointer group flex flex-col">
              
              {/* NOVA ÁREA DE IMAGEM */}
              <div className={`h-40 w-full relative overflow-hidden ${artigo.corFallback} flex items-center justify-center`}>
                <img 
                  src={artigo.img} 
                  alt={artigo.titulo} 
                  className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Se a imagem falhar, mostra o ícone de livro
                    e.target.style.display = 'none';
                    e.target.nextSibling.classList.remove('hidden');
                  }}
                />
                {/* Ícone de fallback (Livro) */}
                <BookOpen size={40} className="text-white opacity-50 hidden absolute" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2">{artigo.categoria}</p>
                  <h4 className="text-[18px] font-fraunces font-bold text-gray1 mb-4 leading-snug group-hover:text-primary transition">{artigo.titulo}</h4>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-gray4 font-medium border-t border-gray5 pt-4 mt-2">
                  <Clock size={14} /> {artigo.tempo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WIDGET DE MINDFULNESS */}
      <div className="bg-primary rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden shadow-md">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 left-10 w-48 h-48 bg-[#E5C6C6] opacity-10 rounded-full blur-xl"></div>
        
        <div className="relative z-10 max-w-lg">
          <h3 className="text-[28px] font-fraunces font-bold mb-3">Respire com a gente.</h3>
          <p className="text-[16px] text-white/80 leading-relaxed mb-6">
            O choro do bebé, o cansaço, a casa... Sabemos que é muito. Tire apenas 1 minuto agora para fechar os olhos e respirar fundo. Nós guiamos você.
          </p>
          <button className="bg-white text-primary hover:bg-[#F8EAEA] px-6 py-3 rounded-full text-[15px] font-bold flex items-center gap-2 transition transform hover:scale-105 shadow-sm">
            <PlayCircle size={20} /> Começar pausa de 1 min
          </button>
        </div>

        <div className="relative z-10 w-32 h-32 flex items-center justify-center shrink-0">
          <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-[ping_3s_ease-in-out_infinite]"></div>
          <div className="absolute inset-4 border-2 border-white/40 rounded-full animate-[ping_3s_ease-in-out_infinite_0.5s]"></div>
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner">
            <Heart size={28} className="text-white animate-pulse" />
          </div>
        </div>
      </div>

    </div>
  );
}