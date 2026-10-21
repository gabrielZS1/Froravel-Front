import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, CheckCircle, ArrowRight, Info, Loader2 } from 'lucide-react';

const QUIZ_QUESTIONS = [
  { id: 1, text: "Tenho conseguido rir e ver o lado divertido das coisas?" },
  { id: 2, text: "Tenho conseguido olhar para o futuro com esperança?" },
  { id: 3, text: "Tenho encontrado momentos para cuidar de mim?" },
  { id: 4, text: "Tenho me sentido acolhida pelas pessoas ao meu redor?" },
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
  const [isProcessing, setIsProcessing] = useState(false); // NOVO: Estado de carregamento

  const handleAnswer = (questionId, optionValue) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionValue }));
    
    // Aumentei o tempo para 600ms para a pessoa ver claramente a opção que clicou a piscar
    setTimeout(() => {
      if (currentStep < QUIZ_QUESTIONS.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        // NOVO: Em vez de ir direto para o fim, mostra o ecrã a carregar durante 2 segundos
        setIsProcessing(true);
        setTimeout(() => {
          setIsProcessing(false);
          setIsFinished(true);
        }, 2000);
      }
    }, 600);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  // NOVO: ECRÃ DE PROCESSAMENTO (Animação de Loading)
  if (isProcessing) {
    return (
      <div className="animate-fadeIn h-full flex flex-col items-center justify-center text-center">
        <Loader2 size={48} className="text-[#A87B7B] animate-spin mb-6" />
        <h2 className="text-[28px] font-fraunces font-bold text-gray1 mb-2">Analisando o seu sentir...</h2>
        <p className="text-gray3 text-[16px]">A organizar o seu espaço de cuidado.</p>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="animate-fadeIn font-dmsans min-h-full flex flex-col items-center justify-center max-w-3xl mx-auto text-center py-20">
        <div className="w-24 h-24 rounded-full bg-[#A87B7B]/10 text-[#A87B7B] flex items-center justify-center mb-8 mx-auto animate-[bounce_1s_ease-in-out_2]">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-[32px] md:text-[40px] font-fraunces font-bold text-gray1 mb-6">Obrigada por se escutar.</h2>
        <p className="text-[18px] text-gray3 leading-relaxed mb-12 max-w-2xl">
          Você reservou um momento importante para si. Qualquer que seja o seu sentir, há espaço para acolhimento. Um profissional pode ajudar você a entender e cuidar do que está vivendo.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full">
          {/* BOTÕES CORRIGIDOS QUE AGORA FUNCIONAM */}
          <button onClick={() => setActiveTab('network')} className="bg-[#A87B7B] hover:bg-[#9C7571] text-white px-8 py-4 rounded-full text-[16px] font-bold flex items-center justify-center gap-2 transition w-full sm:w-auto shadow-sm transform hover:scale-105">
            Encontrar acolhimento <ArrowRight size={18} />
          </button>
          <button onClick={() => setActiveTab('home')} className="text-gray2 hover:text-gray1 px-6 py-4 font-bold transition w-full sm:w-auto border border-transparent hover:border-gray5 rounded-full">
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  return (
    <div className="animate-fadeIn font-dmsans h-full max-w-4xl mx-auto pt-6">
      
      {currentStep === 0 && (
        <div className="bg-[#F8EAEA]/50 border border-[#F8EAEA] p-6 rounded-3xl mb-12 flex gap-4 items-start">
          <Info className="text-[#A87B7B] shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-fraunces font-bold text-gray1 text-[18px] mb-2">O seu espaço seguro</h3>
            <p className="text-gray2 text-[15px] leading-relaxed">
              Responda pensando em como você tem se sentido <b>nos últimos 7 dias</b>, não apenas hoje. Tente ser o mais honesta possível consigo mesma. Não há respostas certas ou erradas.
            </p>
          </div>
        </div>
      )}

      <div className="mb-12">
        <div className="flex justify-between items-center text-[13px] text-gray3 font-medium mb-4">
          <span>Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
          <span>Cerca de 5 minutos</span>
        </div>
        
        <div className="flex gap-2 w-full h-1.5 rounded-full overflow-hidden mb-12">
          {QUIZ_QUESTIONS.map((_, index) => (
            <div key={index} className={`flex-1 h-full rounded-full transition-all duration-500 ${index <= currentStep ? 'bg-[#A87B7B]' : 'bg-gray5'}`} />
          ))}
        </div>

        <h1 className="text-[28px] md:text-[36px] font-fraunces font-bold text-gray1 leading-tight">
          {currentQuestion.text}
        </h1>
      </div>

      <div className="space-y-4 mb-16">
        {OPTIONS.map((option) => {
          const isSelected = answers[currentQuestion.id] === option.value;
          return (
            <button
              key={option.value}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
              // NOVO: Quando clica, o botão ganha preenchimento total e o texto fica branco!
              className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 text-left group ${
                isSelected 
                  ? 'border-[#A87B7B] bg-[#A87B7B] text-white shadow-md transform scale-[1.02]' 
                  : 'border-gray5 bg-white hover:border-gray4 hover:shadow-sm hover:-translate-y-1'
              }`}
            >
              <span className={`text-[16px] font-medium ${isSelected ? 'text-white' : 'text-gray2 group-hover:text-gray1'}`}>
                {option.label}
              </span>
              {isSelected 
                ? <CheckCircle size={20} className="text-white animate-fadeIn" /> 
                : <ChevronRight size={20} className="text-gray4 group-hover:text-gray3" />
              }
            </button>
          )
        })}
      </div>

      <div className="flex justify-start">
        <button 
          onClick={handlePrevious} disabled={currentStep === 0}
          className={`flex items-center gap-2 text-[15px] font-bold transition ${currentStep === 0 ? 'text-gray5 cursor-not-allowed' : 'text-gray2 hover:text-gray1'}`}
        >
          <ArrowLeft size={18} /> Pergunta anterior
        </button>
      </div>

    </div>
  );
}