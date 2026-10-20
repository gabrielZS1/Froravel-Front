import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function AgendamentoScreen({ setActiveTab }) {
  return (
    <div className="animate-fadeIn font-dmsans h-full">
      {/* Cabeçalho */}
      <div className="mb-12">
        <p className="text-apoio text-[14px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
          <Calendar size={16} /> SEU TEMPO DE CUIDADO
        </p>
        <h1 className="text-[32px] md:text-[40px] font-fraunces font-bold text-primary mb-2">Meus agendamentos</h1>
        <p className="text-gray2 text-[18px]">Seus próximos encontros de escuta e acolhimento.</p>
      </div>

      {/* Estado Vazio (Empty State) */}
      <div className="flex flex-col items-center justify-center text-center mt-20">
        <div className="w-20 h-20 rounded-3xl bg-superficie text-primary flex items-center justify-center mb-6 shadow-sm">
          <Calendar size={40} />
        </div>
        <h3 className="text-[24px] font-fraunces font-bold text-primary mb-2">Seu próximo cuidado começa aqui</h3>
        <p className="text-[16px] text-gray2 mb-8 max-w-sm leading-relaxed">
          Você ainda não tem encontros agendados. Quando estiver pronta, sua rede está por perto.
        </p>
        
        {/* Botão que redireciona a mãe para a Rede de Apoio */}
        <button
          onClick={() => setActiveTab('network')}
          className="bg-primary hover:bg-apoio text-fundo px-8 py-4 rounded-full text-[16px] font-bold flex items-center gap-2 transition shadow-sm"
        >
          Agendar acolhimento <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}