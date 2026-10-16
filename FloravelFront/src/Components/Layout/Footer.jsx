// src/Components/Layout/Footer.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import Reveal from "../Reveal/Reveal";

const secoes = [["Início", "inicio"], ["Sobre", "sobre"], ["Recursos", "recursos"], ["Contato", "contato"]];
const comunidade = [["Biblioteca", "/biblioteca"], ["Blog", "/blog"], ["Comunidade", "/comunidade"], ["Central de ajuda", "/ajuda"]];
const servicos = [["Apoio emocional", "/apoio"], ["Profissionais", "/profissionais"], ["Parceiros", "/parceiros"], ["Agendamento", "/agendamento"]];

// Troque os "#" pelos links reais das redes
const redes = [
  { nome: "Instagram", href: "#", icone: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" /></>) },
  { nome: "LinkedIn", href: "#", icone: (<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>) },
  { nome: "WhatsApp", href: "#", icone: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" /> },
];

const link =
  "relative inline-block py-1 text-[15px] text-[#4a5a52] transition-colors duration-300 hover:text-[#a8566f] " +
  "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 " +
  "after:bg-[#e59bb0] after:transition-transform after:duration-300 hover:after:scale-x-100";

const Titulo = ({ children }) => (
  <div className="mb-5">
    <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#3b5646]">{children}</h3>
    <span className="mt-2 block h-px w-8 bg-[#e59bb0]" />
  </div>
);

const Flor = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <g fill="#e98aa3" opacity=".9">
      <ellipse cx="16" cy="9" rx="4" ry="7" />
      <ellipse cx="16" cy="9" rx="4" ry="7" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="9" rx="4" ry="7" transform="rotate(-60 16 16)" />
    </g>
    <circle cx="16" cy="16" r="3" fill="#f6c6d2" />
  </svg>
);

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Mesma lógica do Header: rola na landing, ou volta para "/" e rola
  const goTo = (id) => (e) => {
    e.preventDefault();
    if (pathname !== "/") return navigate("/", { state: { scrollTo: id } });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="font-body  bg-[#f2ebe8] text-[#2f3a36]">
      <Reveal className="mx-auto max-w-7xl px-6 pt-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr] lg:gap-8">
          {/* Marca */}
          <div className="fade-up space-y-5" style={{ "--d": "0ms" }}>
            <img src="/LogoFin.png" alt="Florável" className="h-14 w-auto" />
            <p className="max-w-[260px] text-[15px] leading-relaxed text-[#5b6561]">
              Um espaço seguro e acolhedor para te apoiar na sua jornada da maternidade, com informação, escuta e cuidado.
            </p>
            <p className="font-display text-lg italic text-[#e59bb0]">Você também é importante.</p>
            <div className="flex gap-3">
              {redes.map((r) => (
                <a key={r.nome} href={r.href} aria-label={r.nome}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#efc3cf] text-[#e59bb0] transition duration-300 hover:-translate-y-1 hover:bg-[#e59bb0] hover:text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{r.icone}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div className="fade-up" style={{ "--d": "150ms" }}>
            <Titulo>Navegação</Titulo>
            <ul className="space-y-2">
              {secoes.map(([label, id]) => (
                <li key={id}><a href={`#${id}`} onClick={goTo(id)} className={link}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Comunidade */}
          <div className="fade-up" style={{ "--d": "300ms" }}>
            <Titulo>Comunidade</Titulo>
            <ul className="space-y-2">
              {comunidade.map(([label, to]) => (
                <li key={to}><Link to={to} className={link}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div className="fade-up" style={{ "--d": "450ms" }}>
            <Titulo>Serviços</Titulo>
            <ul className="space-y-2">
              {servicos.map(([label, to]) => (
                <li key={to}><Link to={to} className={link}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Um espaço para você */}
          <div className="fade-up sm:col-span-2 lg:col-span-1 lg:border-l lg:border-[#efc3cf] lg:pl-8" style={{ "--d": "600ms" }}>
            <Flor size={34} />
            <h3 className="mt-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#3b5646]">Um espaço para você</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5b6561]">
              Cada experiência na maternidade é única. Aqui, você pode encontrar apoio e acolhimento no seu próprio ritmo.
            </p>
            <a href="#sobre" onClick={goTo("sobre")}
              className="group mt-4 inline-flex items-center gap-2 border-b border-[#efc3cf] pb-1 text-[15px] text-[#e59bb0] transition-colors hover:text-[#a8566f]">
              Conheça a Florável
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </div>

        {/* Linha final */}
        <div className="fade-up mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#efc3cf] py-7 text-sm text-[#5b6561] sm:flex-row"
          style={{ "--d": "800ms" }}>
          <p>© {new Date().getFullYear()} Florável. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2 text-xs">
            Com acolhimento, em cada etapa <Flor size={18} />
          </p>
        </div>
      </Reveal>
    </footer>
  );
}