import React from 'react';
import { ShieldAlert, PhoneCall, HeartHandshake } from 'lucide-react';

export default function AjudaScreen() {
  return (
    <div className="animate-fadeIn font-dmsans max-w-5xl h-full">
      {/* Cabeçalho */}
      <div className="mb-10">
        <p className="text-error text-[14px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
          <ShieldAlert size={16} /> APOIO IMEDIATO
        </p>
        <h1 className="text-[32px] md:text-[40px] font-fraunces font-bold text-gray1 mb-2">Preciso de Ajuda</h1>
        <p className="text-gray2 text-[18px]">Se está em crise ou sente que não aguenta mais, por favor, procure ajuda imediata. Não está sozinha.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        
        {/* Cartão CVV (Centro de Valorização da Vida) */}
        <div className="bg-white p-10 rounded-3xl border border-error/20 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
          <div className="w-24 h-24 rounded-full bg-error/10 text-error flex items-center justify-center mb-8">
            <PhoneCall size={40} />
          </div>
          <h3 className="text-[24px] font-fraunces font-bold text-gray1 mb-4">CVV - Centro de Valorização da Vida</h3>
          <p className="text-[16px] text-gray3 mb-8 leading-relaxed max-w-sm">
            Apoio emocional e prevenção do suicídio, com atendimento voluntário e gratuito a todas as pessoas, 24 horas por dia.
          </p>
          <a href="tel:188" className="w-full bg-error hover:bg-error/90 text-white py-4 rounded-full text-[16px] font-bold transition shadow-sm">
            Ligar 188 agora
          </a>
        </div>

        {/* Cartão Atenção Básica (UBS) */}
        <div className="bg-white p-10 rounded-3xl border border-apoio/20 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
          <div className="w-24 h-24 rounded-full bg-superficie text-primary flex items-center justify-center mb-8">
            <HeartHandshake size={40} />
          </div>
          <h3 className="text-[24px] font-fraunces font-bold text-gray1 mb-4">Atenção Básica e UBS</h3>
          <p className="text-[16px] text-gray3 mb-8 leading-relaxed max-w-sm">
            Encontre o posto de saúde (UBS) mais próximo da sua residência para buscar apoio presencial e acolhimento materno na sua comunidade.
          </p>
          <button className="w-full bg-primary hover:bg-apoio text-fundo py-4 rounded-full text-[16px] font-bold transition shadow-sm">
            Procurar UBS mais próxima
          </button>
        </div>

      </div>
    </div>
  );
}