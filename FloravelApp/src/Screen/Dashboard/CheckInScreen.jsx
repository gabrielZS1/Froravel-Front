import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';// DADOS DO QUIZ (Baseado na Escala de Edimburgo)
const QUIZ_QUESTIONS = [
  { id: 1, text: "Tenho conseguido rir e ver o lado divertido das coisas?" },
  { id: 2, text: "Tenho conseguido olhar para o futuro com esperança?" },
  { id: 3, text: "Tenho encontrado momentos para cuidar de mim?" },
  { id: 4, text: "Tenho me sentido acolhida pelas pessoas ao meu redor?" } ,
  { id: 5, text: "Tenho conseguido compartilhar o que estou sentindo?" },
  { id: 6, text: "Tenho conseguido descansar quando surge uma oportunidade?" },
  { id: 7, text: "Tenho me sentido confiante para pedir ajuda?" },
  { id: 8, text: "Tenho encontrado pequenos momentos de tranquilidade?" },
  { id: 9, text: "Tenho sentido que não preciso enfrentar tudo sozinha?" },
  { id: 10, text: "Hoje, sinto que tenho o apoio de que preciso?" }
];

const OPTIONS = [
  { value: 0, label: "Tanto quanto antes" },
  { value: 1, label: "Um pouco menos" },
  { value: 2, label: "Muito menos" },
  { value: 3, label: "Não, de jeito nenhum" }
];

export default function CheckInScreen({ setActiveTab }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (questionId, optionValue) => {
    // Guarda a resposta
    setAnswers(prev => ({ ...prev, [questionId]: optionValue }));
    
    // Avança automaticamente para a próxima, ou finaliza
    setTimeout(() => {
      if (currentStep < QUIZ_QUESTIONS.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setIsFinished(true);
      }
    }, 400); // Pequeno atraso para a animação do clique
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // ECRÃ FINAL DE CONCLUSÃO
  if (isFinished) {
    return (
      <div className="animate-fadeIn font-dmsans h-full flex flex-col items-center justify-center max-w-3xl mx-auto text-center py-20">
        <div className="w-20 h-20 rounded-full border-4 border-[#9C7571] text-[#9C7571] flex items-center justify-center mb-10 mx-auto">
          <CheckCircle size={40} />
        </div>
        
        <h2 className="text-[32px] font-fraunces font-bold text-gray1 mb-6">Obrigada por se escutar.</h2>
        
        <p className="text-[18px] text-gray3 leading-relaxed mb-12 max-w-2xl">
          Você reservou um momento importante para si. Qualquer que seja o seu sentir, há espaço para acolhimento. Um profissional pode ajudar você a entender e cuidar do que está vivendo.
        </p>
        
        <div className="flex items-center gap-6 justify-center">
          <button 
            onClick={() => setActiveTab('network')} // Encaminha para a Rede de Apoio
            className="bg-[#A87B7B] hover:bg-[#9C7571] text-white px-8 py-4 rounded-full text-[16px] font-bold flex items-center gap-2 transition"
          >
            Encontrar acolhimento <ArrowRight size={18} />
          </button>
          
          <button 
            onClick={() => setActiveTab('home')} // Volta ao Início
            className="text-gray2 hover:text-gray1 px-6 py-4 font-bold transition"
          >
            Voltar ao início
          </button>
        </div>

        <div className="mt-20 pt-8 border-t border-gray5 w-full flex justify-between items-center text-[12px] text-gray4">
          <span>❀ Florável · Cuidar de você é cuidar da vida.</span>
          <span className="flex items-center gap-1">Ambiente de demonstração · Suas respostas não são salvas</span>
        </div>
      </div>
    );
  }

  // ECRÃ DAS PERGUNTAS DO QUIZ
  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const progressPercentage = ((currentStep) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="animate-fadeIn font-dmsans h-full max-w-4xl mx-auto pt-6">
      
      {/* BARRA DE PROGRESSO E HEADER */}
      <div className="mb-16">
        <div className="flex justify-between items-center text-[13px] text-gray3 font-medium mb-4">
          <span>Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
          <span>Cerca de 5 minutos</span>
        </div>
        
        {/* Barra Visual */}
        <div className="flex gap-2 w-full h-1.5 rounded-full overflow-hidden mb-16">
          {QUIZ_QUESTIONS.map((_, index) => (
            <div 
              key={index} 
              className={`flex-1 h-full rounded-full transition-all duration-500 ${
                index <= currentStep ? 'bg-[#A87B7B]' : 'bg-gray5'
              }`}
            />
          ))}
        </div>

        <h1 className="text-[28px] md:text-[36px] font-fraunces font-bold text-gray1 leading-tight">
          {currentQuestion.text}
        </h1>
      </div>

      {/* OPÇÕES DE RESPOSTA */}
      <div className="space-y-4 mb-16">
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(currentQuestion.id, option.value)}
            className={`w-full flex items-center justify-between p-6 rounded-2xl border transition text-left group ${
              answers[currentQuestion.id] === option.value 
                ? 'border-[#A87B7B] bg-[#A87B7B]/5' 
                : 'border-gray5 bg-white hover:border-gray4'
            }`}
          >
            <span className={`text-[16px] font-medium ${answers[currentQuestion.id] === option.value ? 'text-[#A87B7B]' : 'text-gray2'}`}>
              {option.label}
            </span>
            <ChevronRight size={20} className={answers[currentQuestion.id] === option.value ? 'text-[#A87B7B]' : 'text-gray4 group-hover:text-gray3'} />
          </button>
        ))}
      </div>

      {/* BOTÃO VOLTAR */}
      <div className="flex justify-start">
        <button 
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 text-[15px] font-bold transition ${
            currentStep === 0 ? 'text-gray4 cursor-not-allowed opacity-50' : 'text-gray2 hover:text-gray1'
          }`}
        >
          <ArrowLeft size={18} /> Pergunta anterior
        </button>
      </div>

      {/* FOOTER */}
      <div className="mt-20 pt-8 border-t border-gray5 w-full flex flex-col items-start gap-2 text-[12px] text-gray4">
        <p className="flex items-center gap-1">
           Este quiz demonstrativo não é a Escala de Edimburgo validada, não fornece diagnóstico e não substitui uma avaliação profissional.
        </p>
        <p>Suas respostas não são salvas.</p>
      </div>

    </div>
  );
}