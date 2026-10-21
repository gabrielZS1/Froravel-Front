import { Link } from 'react-router-dom';
import { Users, User, ExternalLink } from 'lucide-react';

/* ---------- Dados fictícios ---------- */
const sessao = {
  titulo: 'Roda: os primeiros meses',
  tipo: 'grupo', // 'grupo' | 'individual'
  status: 'Agendada',
  data: '2026-10-23',
  inicio: '18:00',
  fim: '19:30',
  vagas: 5,
  participantes: ['Mariana Silva', 'Beatriz Santos', 'Larissa Oliveira'],
  linkSala: '#', // troque pelo link real da videochamada
};

/* ---------- Helpers ---------- */
const DIAS = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

const formatarData = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  const data = new Date(y, m - 1, d);
  return `${DIAS[data.getDay()]}, ${data.getDate()} de ${MESES[data.getMonth()]}`;
};

/* ---------- Tela ---------- */
export default function SalaAcolhimento() {
  const ehGrupo = sessao.tipo === 'grupo';
  const total = sessao.participantes.length;
  const restantes = sessao.vagas - total;

  return (
    <div className="w-full">
      {/* Cabeçalho */}
      <header>
        <p className="text-xs font-bold tracking-[0.2em] text-[#7a4a4e] uppercase">
          Sala de acolhimento
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-[#4a2327]">{sessao.titulo}</h1>
        <p className="mt-2 text-gray-500">
          {formatarData(sessao.data)} · {sessao.inicio}–{sessao.fim}
        </p>
      </header>

      {/* Card */}
      <section className="mt-8 rounded-3xl border border-[#f0e4e4] bg-white p-6 shadow-sm">
        {/* Selos */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-600">
            {ehGrupo ? <Users className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
            {ehGrupo ? `Grupo · ${total}/${sessao.vagas}` : 'Individual'}
          </span>
          <span className="rounded-full bg-[#f3e9e9] px-3 py-0.5 text-xs font-medium text-[#7a5a4e]">
            {sessao.status}
          </span>
        </div>

        <p className="mt-4 text-[#4a2327]">{sessao.titulo}</p>

        {/* Participantes */}
        {ehGrupo && (
          <div className="mt-6">
            <h2 className="text-sm font-bold text-[#4a2327]">
              Participantes · {total}/{sessao.vagas} ({restantes} {restantes === 1 ? 'vaga' : 'vagas'})
            </h2>
            <ul className="mt-3 space-y-1 text-sm text-gray-600">
              {sessao.participantes.map((nome) => (
                <li key={nome}>{nome}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Aviso */}
        <div className="mt-6 rounded-full bg-[#e1e8d5] px-5 py-3 text-sm text-[#3b4a2f]">
          Chegue alguns minutos antes, acolha com calma e lembre as participantes sobre o sigilo do
          encontro.
        </div>

        {/* Ações */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={sessao.linkSala}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#9b4f55] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#873f46]"
          >
            <ExternalLink className="h-4 w-4" />
            Entrar na sala
          </a>

          <Link
            to="/agenda"
            className="rounded-full border border-[#e6d6d6] bg-white px-5 py-2.5 text-sm font-medium text-[#4a2327] transition-colors hover:bg-[#faf3f3]"
          >
            Voltar à agenda
          </Link>
        </div>
      </section>
    </div>
  );
}