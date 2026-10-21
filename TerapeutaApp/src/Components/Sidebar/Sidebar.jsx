import { NavLink } from 'react-router-dom';
import {
  LayoutGrid,
  Calendar,
  Users,
  Video,
  Flower2,
  HeartHandshake,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { name: 'Visão geral', path: '/painel', icon: LayoutGrid },
  { name: 'Agenda', path: '/agenda', icon: Calendar },
  { name: 'Mães atendidas', path: '/maes', icon: Users },
  { name: 'Sala de acolhimento', path: '/sala', icon: Video },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-72 flex-shrink-0 flex-col justify-between bg-white border-r border-[#f0e4e4] px-6 py-8 sticky top-0 h-screen">
      <div>
        {/* Logo */}
        <div className="px-2 mb-10">
          <div className="flex items-center gap-2">
            <Flower2 className="w-7 h-7 text-[#9b4f55]" />
            <span className="text-2xl font-bold text-[#9b4f55] tracking-tight">
              florável
            </span>
            <span className="text-[10px] font-semibold bg-[#f3d5da] text-[#9b4f55] px-2 py-0.5 rounded-full">
              PSI
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1 ml-9">Área profissional</p>
        </div>

        {/* Menu */}
        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] px-2 mb-4">
          Seu consultório
        </p>

        <nav className="space-y-2">
          {menuItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-full text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#f3d5da] text-[#4a2327]'
                    : 'text-gray-600 hover:bg-[#faf3f3]'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Rodapé */}
      <div className="space-y-4">
        <div className="rounded-3xl bg-[#e1e8d5] p-4">
          <HeartHandshake className="w-5 h-5 text-[#4f6340] mb-2" />
          <p className="text-sm font-bold text-[#3b4a2f]">Cuidar de quem cuida</p>
          <p className="text-xs text-[#5c6b4f] mt-1 leading-relaxed">
            Ambiente demonstrativo com dados fictícios. Não use informações reais.
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-[#f0e4e4] pt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f3d5da] text-[#9b4f55] font-bold flex items-center justify-center text-sm">
              HS
            </div>
            <div>
              <p className="text-sm font-bold text-[#4a2327]">Dra. Helena Souza</p>
              <p className="text-xs text-gray-500">Psicóloga</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-[#9b4f55]" aria-label="Sair">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}