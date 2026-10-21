import React, { useState } from 'react';

import { Search, HeartHandshake, Video, ArrowRight, ArrowLeft, Calendar, Clock, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';


const PROFISSIONAIS_MOCK = [
  { id: 1, initials: 'HS', name: 'Dra. Helena Souza', spec: 'Psicologia Perinatal', desc: 'Um espaço de escuta para acolher você e as transformações da maternidade, respeitando o seu momento.', bgInitials: 'bg-superficie', colorInitials: 'text-secondary', preco: '0,00' },
  { id: 2, initials: 'CS', name: 'Dra. Camila Santos', spec: 'Acolhimento Luto', desc: 'Acolhimento sensível para atravessar perdas e encontrar apoio.', bgInitials: 'bg-[#EEF2E6]', colorInitials: 'text-apoio', preco: '45,00' },
  { id: 3, initials: 'RL', name: 'Dr. Rafael Lima', spec: 'Triagem', desc: 'Escuta inicial e direcionamento para sentimentos no puerpério.', bgInitials: 'bg-fundo', colorInitials: 'text-primary', preco: '0,00' },
];

const FilterPill = ({ text, active, onClick }) => (
  <button onClick={onClick} className={`px-6 py-2.5 rounded-full text-[14px] font-bold whitespace-nowrap border transition ${active ? 'bg-superficie border-superficie text-primary' : 'bg-white border-gray5 text-gray3 hover:border-gray4'}`}>
    {text}
  </button>
);

export default function ApoioScreen({ setActiveTab, adicionarAgendamento, profEmFoco, setProfEmFoco }) {
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [selectedDay, setSelectedDay] = useState(20);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const diasOutubro = Array.from({ length: 31 }, (_, i) => i + 1);

  const profissionaisFiltrados = activeFilter === 'Todas' 
    ? PROFISSIONAIS_MOCK 
    : PROFISSIONAIS_MOCK.filter(p => p.spec === activeFilter);

  const handleConfirmarAgendamento = () => {
    if (!selectedTime) return;
    
    const novoEncontro = {
      id: Date.now(),
      profId: profEmFoco.id,
      profName: profEmFoco.name,
      spec: profEmFoco.spec,
      date: `${selectedDay}/10/2026`,
      time: selectedTime,
      type: 'Consulta · Demonstração',
      status: 'CONFIRMADO'
    };

    adicionarAgendamento(novoEncontro); 
    setIsConfirmed(true);
    
    setTimeout(() => {
      setProfEmFoco(null);
      setIsConfirmed(false);
      setSelectedTime(null);
      setActiveTab('booking'); 
    }, 3000);
  };

  // TELA 2: CALENDÁRIO DA PSICÓLOGA (Abre quando clica em Ver Agenda)
  if (profEmFoco) {
    return (
      <div className="animate-fadeIn font-dmsans h-full max-w-5xl mx-auto">
        <button onClick={() => setProfEmFoco(null)} className="flex items-center gap-2 text-[14px] text-gray2 hover:text-primary transition mb-8 font-medium">
          <ArrowLeft size={16} /> Voltar para a rede de apoio
        </button>

        <h1 className="text-[32px] md:text-[40px] font-fraunces font-bold text-gray1 mb-2">Um encontro para cuidar de você</h1>
        <p className="text-gray3 text-[18px] mb-10">Escolha um dia e um horário que façam sentido na sua rotina.</p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-[28px] font-bold font-fraunces mb-6 ${profEmFoco.bgInitials} ${profEmFoco.colorInitials}`}>
              {profEmFoco.initials}
            </div>
            <h2 className="text-[24px] font-fraunces font-bold text-gray1 mb-1">{profEmFoco.name}</h2>
            <p className={`text-[14px] font-bold mb-6 ${profEmFoco.colorInitials}`}>{profEmFoco.spec}</p>
            <p className="text-[16px] text-gray3 leading-relaxed mb-6">{profEmFoco.desc}</p>
            <p className="text-[14px] text-gray2 flex items-center gap-2 font-medium mb-8">
              <Video size={18} /> Atendimento online · 50 minutos
            </p>

            <div className="bg-[#EEF2E6]/50 border border-[#EEF2E6] rounded-2xl p-6 mb-4">
               <p className="text-[14px] text-gray2 font-medium">Consulta social</p>
               <p className="text-[24px] font-bold text-apoio my-1">R$ {profEmFoco.preco}</p>
               <p className="text-[12px] text-gray3">Via encaminhamento SUS · demonstração</p>
            </div>
            <p className="text-[12px] text-gray4">Esta confirmação é simulada. Não gera atendimento real.</p>
          </div>

          <div className="lg:col-span-3 bg-white border border-gray5 rounded-3xl p-8 shadow-sm">
            {isConfirmed ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-[24px] font-fraunces font-bold text-gray1 mb-2">Encontro agendado!</h3>
                <p className="text-[16px] text-gray3">Estamos redirecionando você para a sua agenda...</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-8">
                  <ChevronLeft size={20} className="text-gray4 cursor-pointer hover:text-gray1" />
                  <span className="font-bold text-gray1">Outubro De 2026</span>
                  <ChevronRight size={20} className="text-gray4 cursor-pointer hover:text-gray1" />
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-[12px] font-bold text-gray3 uppercase mb-4">
                  {['D','S','T','Q','Q','S','S'].map(d => <div key={d}>{d}</div>)}
                </div>

                <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center mb-10">
                  <div className="col-span-4"></div> 
                  {diasOutubro.map(dia => (
                    <button 
                      key={dia} 
                      onClick={() => setSelectedDay(dia)}
                      className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-[15px] font-medium transition ${selectedDay === dia ? 'bg-[#9C7571] text-white shadow-md' : 'text-gray2 hover:bg-fundo'}`}
                    >
                      {dia}
                    </button>
                  ))}
                </div>

                <div className="border-t border-gray5 pt-8">
                  <h4 className="font-bold text-gray1 mb-4">Horários disponíveis · dia {selectedDay}</h4>
                  <div className="flex gap-3 mb-8">
                    {['09:00', '14:30', '16:00'].map(hora => (
                      <button 
                        key={hora} 
                        onClick={() => setSelectedTime(hora)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition ${selectedTime === hora ? 'border-primary bg-primary text-white' : 'border-gray5 text-gray2 hover:border-gray4'}`}
                      >
                        <Clock size={16} /> {hora}
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={handleConfirmarAgendamento}
                    disabled={!selectedTime}
                    className="w-full bg-[#E5C6C6] hover:bg-[#D5B6B6] text-white py-4 rounded-full text-[16px] font-bold transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Confirmar agendamento <CheckCircle size={18} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // TELA 1: LISTA DE PROFISSIONAIS
  return (
    <div className="animate-fadeIn font-dmsans h-full">
      <div className="mb-8">
        <p className="text-secondary text-[14px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
          <HeartHandshake size={16} /> ESCUTA QUE ACOLHE
        </p>
        <h1 className="text-[32px] md:text-[40px] font-fraunces font-bold text-primary mb-2">Sua rede de apoio</h1>
        <p className="text-gray2 text-[18px]">Encontre alguém para caminhar com você. No seu tempo, do seu jeito.</p>
      </div>

      <div className="relative mb-6 max-w-3xl">
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray3" size={20} />
        <input type="text" placeholder="Buscar por nome ou especialidade" className="w-full bg-white border border-gray5 rounded-2xl py-4 pl-14 pr-6 text-[16px] focus:outline-none focus:border-primary shadow-sm" />
      </div>

      <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {['Todas', 'Psicologia Perinatal', 'Acolhimento Luto', 'Triagem'].map(f => (
          <FilterPill key={f} text={f} active={activeFilter === f} onClick={() => setActiveFilter(f)} />
        ))}
      </div>

      <div className="space-y-4">
        {profissionaisFiltrados.map((prof) => (
          <div key={prof.id} className="bg-white p-8 rounded-[32px] border border-gray5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-sm transition">
            <div className="flex items-start gap-6">
              <div className={`w-[84px] h-[84px] rounded-full flex items-center justify-center text-[28px] font-bold font-fraunces shrink-0 ${prof.bgInitials} ${prof.colorInitials}`}>
                {prof.initials}
              </div>
              <div>
                <h3 className="text-[24px] font-fraunces font-bold text-gray1 mb-1">{prof.name}</h3>
                <p className={`text-[14px] font-bold mb-4 ${prof.colorInitials}`}>{prof.spec}</p>
                <p className="text-[16px] text-gray3 leading-relaxed max-w-2xl mb-4">{prof.desc}</p>
                <p className="text-[14px] text-gray4 flex items-center gap-1.5 font-medium">
                  <Video size={16} /> Online • Atendimento social via Florável
                </p>
              </div>
            </div>
            {/* ESTE É O BOTÃO QUE ESTAVA A FALTAR ATUALIZAR */}
            <button onClick={() => setProfEmFoco(prof)} className="px-6 py-2.5 rounded-full border border-gray4 text-gray1 text-[15px] font-bold flex items-center gap-2 hover:bg-fundo transition shrink-0">
              Ver agenda <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}