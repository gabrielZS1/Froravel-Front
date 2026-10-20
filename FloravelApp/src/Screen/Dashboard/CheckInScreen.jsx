import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, ShieldAlert } from 'lucide-react';

export default function CheckInScreen() {
  const [quizStep, setQuizStep] = useState(1);
  const totalSteps = 10;

  return (
    <div className="animate-fadeIn max-w-3xl mx-auto pt-4 font-dmsans h-full">
      {/* Cabeçalho do Quiz */}
      <div className="flex items-center justify-between text-[14px] font-medium text-gray3 mb-4">
        <span>Pergunta {quizStep} de {totalSteps}</span>
        <span>Cerca de 5 minutos</span>
      </div>

      {/* Barra de Progresso tracejada */}
      <div className="flex gap-2 mb-12">
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <div
            key={idx}
            className={`h-2 flex-1 rounded-full ${idx < quizStep ? 'bg-primary' : 'bg-gray5'}`}
          />
        ))}
      </div>

      {/* Título da Pergunta (Fonte Fraunces) */}
      <h2 className="text-[28px] md:text-[36px] font-fraunces font-bold text-primary mb-8 leading-snug">
        Nos últimos 7 dias, tenho sido capaz de rir e ver o lado divertido das coisas?
      </h2>

      {/* Opções de Resposta */}
      <div className="space-y-4 mb-10">
        {[
          'Tanto quanto antes',
          'Um pouco menos',
          'Muito menos',
          'Não, de jeito nenhum'
        ].map((option, idx) => (
          <button
            key={idx}
            onClick={() => quizStep < 10 && setQuizStep(quizStep + 1)}
            className="w-full bg-white border border-gray5 hover:border-primary hover:bg-fundo p-5 rounded-2xl flex items-center justify-between text-left transition group shadow-sm"
          >
            <span className="text-gray1 font-bold text-[16px]">{option}</span>
            <ChevronRight className="text-gray4 group-hover:text-primary" size={20} />
          </button>
        ))}
      </div>

      {/* Controles (Voltar) e Rodapé */}
      <div className="flex items-center justify-between border-t border-gray5 pt-6">
        <button
          disabled={quizStep === 1}
          onClick={() => setQuizStep(quizStep - 1)}
          className="flex items-center gap-2 text-gray3 hover:text-primary text-[15px] font-bold disabled:opacity-50 transition"
        >
          <ArrowLeft size={18} /> Pergunta anterior
        </button>
      </div>

      {/* Aviso de responsabilidade */}
      <p className="text-[12px] text-gray3 mt-8 flex flex-col md:flex-row items-center gap-2 text-center md:text-left bg-white p-4 rounded-xl border border-gray5">
        <ShieldAlert size={16} className="text-warning shrink-0" />
        Este quiz demonstrativo não é a Escala de Edimburgo validada, não fornece diagnóstico e não substitui uma avaliação profissional.
      </p>
    </div>
  );
}