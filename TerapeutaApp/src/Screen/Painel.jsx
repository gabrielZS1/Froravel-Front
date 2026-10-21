import { Plus, CalendarClock, Calendar, Users, User, Video, ChevronRight } from 'lucide-react';

const stats = [
  { icon: CalendarClock, value: '2', label: 'Atendimentos hoje' },
  { icon: Calendar, value: '3', label: 'Próximas sessões' },
  { icon: Users, value: '7', label: 'Mães acompanhadas' },
  { icon: Users, value: '23/10', label: 'Próximo grupo', extra: '18:00 · 3/5 vagas' },
];

const appointments = [
  { hora: '18:00', dia: 'Sexta 23/10', titulo: 'Roda: os primeiros meses', tipo: 'Grupo', info: '3/5', grupo: true },
  { hora: '10:00', dia: 'Sábado 24/10', titulo: 'Juliana Costa', tipo: 'Individual', info: 'Escuta e acolhimento', grupo: false },
  { hora: '19:00', dia: 'Quarta 28/10', titulo: 'Roda: rede de apoio', tipo: 'Grupo', info: '4/10', grupo: true },
];

function getSaudacao() {
  const h = new Date().getHours();
  if (h < 12) return 'Bom dia';
  if (h < 18) return 'Boa tarde';
  return 'Boa noite';
}

export default function Painel() {
  const dataHoje = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="w-full">
      {/* Cabeçalho */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[#7a4a4e] uppercase">
            {dataHoje}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-[#4a2327]">
            {getSaudacao()}, Dra. Helena Souza
          </h1>
          <p className="mt-2 text-gray-500">Veja o que pede sua atenção hoje.</p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-full bg-[#9b4f55] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#873f46] transition-colors">
          <Plus className="w-4 h-4" />
          Nova sessão
        </button>
      </header>

      {/* Cards */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ icon: Icon, value, label, extra }) => (
          <div
            key={label}
            className="rounded-3xl bg-white border border-[#f0e4e4] p-5 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#f3d5da] flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#9b4f55]" />
            </div>
            <p className="mt-4 text-3xl font-extrabold text-[#4a2327]">{value}</p>
            <p className="text-sm text-gray-600">{label}</p>
            {extra && <p className="text-xs text-gray-500 mt-1">{extra}</p>}
          </div>
        ))}
      </section>

      {/* Próximos atendimentos */}
      <section className="mt-8 rounded-3xl bg-white border border-[#f0e4e4] shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-[#4a2327]">Próximos atendimentos</h2>
            <p className="text-xs text-gray-500">Dados fictícios de demonstração</p>
          </div>
          <button className="rounded-full bg-[#f3d5da] px-4 py-1.5 text-xs font-semibold text-[#9b4f55] hover:bg-[#ecc4cb]">
            Ver agenda
          </button>
        </div>

        <ul className="divide-y divide-[#f0e4e4] border-t border-[#f0e4e4]">
          {appointments.map((a) => (
            <li
              key={a.titulo}
              className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="w-24">
                  <p className="text-lg font-bold text-[#4a2327]">{a.hora}</p>
                  <p className="text-xs text-gray-500">{a.dia}</p>
                </div>
                <div>
                  <p className="font-bold text-[#4a2327]">{a.titulo}</p>
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    {a.grupo ? <Users className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                    {a.tipo} · {a.info}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#f3e9e4] px-3 py-1 text-xs font-medium text-[#7a5a4e]">
                  Agendada
                </span>
                <button className="inline-flex items-center gap-1.5 rounded-full bg-[#e1e8d5] px-3 py-1.5 text-xs font-semibold text-[#4f6340]">
                  <Video className="w-3.5 h-3.5" />
                  Sala
                </button>
                <button className="inline-flex items-center gap-1 text-xs font-medium text-[#4a2327] hover:text-[#9b4f55]">
                  Detalhes <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}