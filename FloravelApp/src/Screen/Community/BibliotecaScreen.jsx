import React from 'react';
import { Search, BookOpen, ArrowRight } from 'lucide-react';

export default function BibliotecaScreen() {
  return (
    <div className="animate-fadeIn font-dmsans h-full">
      {/* Cabeçalho */}
      <div className="mb-10">
        <p className="text-secondary text-[14px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
          <BookOpen size={16} /> CONHECIMENTO QUE CURA
        </p>
        <h1 className="text-[32px] md:text-[40px] font-fraunces font-bold text-primary mb-2">Conteúdos e Biblioteca</h1>
        <p className="text-gray2 text-[18px]">Artigos, guias e leituras para a acompanhar nesta jornada.</p>
      </div>

      {/* Pesquisa */}
      <div className="relative mb-10 max-w-3xl">
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray3" size={20} />
        <input 
          type="text" 
          placeholder="Pesquisar artigos sobre puerpério, sono, autocuidado..." 
          className="w-full bg-white border border-gray5 rounded-2xl py-4 pl-14 pr-6 text-[16px] focus:outline-none focus:border-primary shadow-sm"
        />
      </div>

      {/* Grid de Artigos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { tag: 'Puerpério', title: 'Como lidar com a exaustão nos primeiros meses', desc: 'Pequenas dicas de autocuidado para momentos de sobrecarga mental e física.' },
          { tag: 'Sono', title: 'A privação de sono e o impacto nas emoções', desc: 'Compreender por que é que o cansaço afeta tanto o nosso humor e como pedir ajuda.' },
          { tag: 'Rede de Apoio', title: 'Como comunicar o que precisa à sua família', desc: 'Estratégias para estabelecer limites saudáveis e delegar tarefas no pós-parto.' },
          { tag: 'Saúde Mental', title: 'Baby Blues vs Depressão Pós-Parto', desc: 'Aprenda a identificar as diferenças e saiba qual é o momento certo para procurar ajuda.' },
          { tag: 'Autocuidado', title: 'Encontrar tempo para si em apenas 10 minutos', desc: 'Pequenas pausas reais que cabem na rotina imprevisível de uma mãe.' },
          { tag: 'Vínculo', title: 'A construção do amor não é sempre imediata', desc: 'Desmistificar a culpa quando a ligação com o bebé leva tempo a florescer.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-gray5 overflow-hidden hover:shadow-md transition cursor-pointer flex flex-col">
            {/* Placeholder para imagem usando as cores do sistema */}
            <div className="h-48 bg-superficie w-full flex items-center justify-center relative overflow-hidden">
               <span className="text-secondary font-fraunces text-xl opacity-40">Imagem do Artigo</span>
               <div className="absolute inset-0 bg-gradient-to-t from-fundo/40 to-transparent"></div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-wider text-apoio mb-3 block">{item.tag}</span>
                <h3 className="text-[20px] font-fraunces font-bold text-gray1 mb-3 leading-tight">{item.title}</h3>
                <p className="text-[15px] text-gray3 mb-6 leading-relaxed">{item.desc}</p>
              </div>
              <button className="text-[15px] font-bold text-primary flex items-center gap-1.5 hover:text-apoio transition">
                Ler artigo <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}