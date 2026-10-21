import React, { useState } from 'react';
import { Search, Clock, ArrowRight, BookOpen, Star, PlayCircle } from 'lucide-react';

// Aqui no campo 'img', estou a usar os nomes exatos das fotos que vi no seu VSCode!
const ARTIGOS_MOCK = [
  { id: 1, cat: 'PUERPÉRIO', titulo: 'Como lidar com a exaustão nos primeiros meses', desc: 'Pequenas dicas de autocuidado para momentos de sobrecarga mental e física.', tempo: '3 min de leitura', img: '/img/maeexausta.jpg' },
  { id: 2, cat: 'SONO', titulo: 'A privação de sono e o impacto nas emoções', desc: 'Compreender porque é que o cansaço afeta tanto o nosso humor e como pedir ajuda.', tempo: '5 min de leitura', img: '/img/maesono.jpg' },
  { id: 3, cat: 'REDE DE APOIO', titulo: 'Como comunicar o que precisa à sua família', desc: 'Estratégias para estabelecer limites saudáveis e delegar tarefas no pós-parto.', tempo: '4 min de leitura', img: '/img/maeconversando.jpg' },
  { id: 4, cat: 'VÍNCULO', titulo: 'A pressão do amor à primeira vista pelo bebé', desc: 'Desmistificando a culpa: o vínculo é construído e não nasce pronto no bloco operatório.', tempo: '6 min de leitura', img: '/img/maternidadeSemFiltro.jpg' },
  { id: 5, cat: 'AUTOCUIDADO', titulo: 'Redescobrindo o seu corpo após a gravidez', desc: 'Um olhar gentil para as transformações físicas e o respeito pelo seu tempo.', tempo: '4 min de leitura', img: '/img/maeDescansando.jpg' },
  { id: 6, cat: 'ENTREVISTA', titulo: 'Roda de Conversa: Mães de múltiplas viagens', desc: 'Relatos reais de mulheres que já passaram pela montanha-russa do puerpério.', tempo: '10 min de vídeo', img: '/img/variasMaes.jpg', isVideo: true }
];

export default function BibliotecaScreen() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Puerpério', 'Autocuidado', 'Sono', 'Vínculo'];

  const filteredArticles = activeFilter === 'Todos' 
    ? ARTIGOS_MOCK 
    : ARTIGOS_MOCK.filter(a => a.cat.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="animate-fadeIn font-dmsans min-h-full pb-12">
      
      {/* CABEÇALHO */}
      <div className="mb-10">
        <p className="text-primary text-[14px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
          <BookOpen size={16} /> INFORMAÇÃO QUE CURA
        </p>
        <h1 className="text-[32px] md:text-[40px] font-fraunces font-bold text-gray1 mb-2">Conteúdos e Biblioteca</h1>
        <p className="text-gray2 text-[18px]">Artigos, vídeos e guias escritos por especialistas, para você ler no seu tempo.</p>
      </div>

      {/* BARRA DE PESQUISA E FILTROS */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray3" size={20} />
          <input 
            type="text" 
            placeholder="Buscar assunto (ex: sono, choro, alimentação)" 
            className="w-full bg-white border border-gray5 rounded-2xl py-4 pl-14 pr-6 text-[16px] focus:outline-none focus:border-primary shadow-sm transition"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide shrink-0">
          {filters.map(f => (
            <button 
              key={f} 
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-4 rounded-2xl text-[14px] font-bold whitespace-nowrap border transition ${
                activeFilter === f ? 'bg-primary text-white border-primary shadow-sm' : 'bg-white border-gray5 text-gray2 hover:bg-fundo'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* DESTAQUE DO DIA */}
      {activeFilter === 'Todos' && (
        <div className="mb-12 bg-white rounded-[32px] border border-gray5 overflow-hidden flex flex-col md:flex-row shadow-sm group cursor-pointer hover:border-primary/30 transition">
          <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
             {/* Note que aqui eu uso a foto 2.jpg que você tem na pasta img */}
            <img src="/img/2.jpg" alt="Destaque" className="w-full h-full object-cover object-[center_30%] transition duration-700 group-hover:scale-105" />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[12px] font-bold text-primary flex items-center gap-1">
              <Star size={14} /> Leitura Recomendada
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-[28px] font-fraunces font-bold text-gray1 mb-4 group-hover:text-primary transition">O mito da "Mãe Perfeita" e a cobrança social.</h2>
            <p className="text-[16px] text-gray3 leading-relaxed mb-8">Por que nos cobramos tanto? Um artigo sobre como baixar as expectativas e viver a maternidade de forma mais leve e compassiva.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[13px] text-gray4 font-medium flex items-center gap-2"><Clock size={16} /> 8 min de leitura</span>
              <span className="text-[15px] font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Ler artigo <ArrowRight size={18} /></span>
            </div>
          </div>
        </div>
      )}

      {/* GRELHA DE ARTIGOS COM AS FOTOS REAIS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((artigo) => (
          <div key={artigo.id} className="bg-white rounded-3xl border border-gray5 overflow-hidden flex flex-col hover:shadow-md transition group cursor-pointer">
            
            {/* ÁREA DA IMAGEM */}
            <div className="h-48 w-full relative overflow-hidden bg-fundo">
              {/* O SRC DA IMAGEM USA O CAMINHO DECLARADO NO ARRAY ACIMA */}
              <img 
                src={artigo.img} 
                alt={artigo.titulo} 
                className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Se a foto não existir na pasta, mostra um fundo rosa de segurança
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('bg-[#F8EAEA]');
                }}
              />
              {/* Se for vídeo, mostra um ícone de play em cima da foto */}
              {artigo.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition">
                  <PlayCircle size={48} className="text-white drop-shadow-md" />
                </div>
              )}
            </div>
            
            {/* ÁREA DO TEXTO */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-primary mb-3">{artigo.cat}</p>
                <h3 className="text-[20px] font-fraunces font-bold text-gray1 mb-3 leading-snug group-hover:text-primary transition">{artigo.titulo}</h3>
                <p className="text-[15px] text-gray3 leading-relaxed mb-6">{artigo.desc}</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray5 pt-6">
                <span className="flex items-center gap-2 text-[13px] text-gray4 font-medium"><Clock size={16} /> {artigo.tempo}</span>
                <span className="text-[14px] font-bold text-gray1 flex items-center gap-1 group-hover:text-primary group-hover:gap-2 transition-all">
                  Ler <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}