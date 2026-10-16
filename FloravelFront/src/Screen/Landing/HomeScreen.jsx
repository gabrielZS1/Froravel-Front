// src/pages/Home/HomeScreen.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FlowerScroll from "../../Components/FlowerScroll/FlowerScroll";
import SplitText from "../../Components/SplitText/SplitText";

const rose = "text-[#a8566f]";

const Arrow = () => (
  <svg width="22" height="12" viewBox="0 0 22 12" fill="none" stroke="currentColor"
    strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 6h19M15 1l5 5-5 5" />
  </svg>
);

const Leaf = () => (
  <svg width="34" height="44" viewBox="0 0 34 44" fill="none" stroke="#c98a9d"
    strokeWidth="1" strokeLinecap="round" aria-hidden="true">
    <path d="M30 3C14 6 5 18 8 34c14-1 22-12 22-31zM8 34 4 42M12 27c5-4 9-9 12-15" />
  </svg>
);

const Heart = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a8566f"
    strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 9.5c-.8-1.8-3.8-2.2-4.8-.2-1 2 .8 3.8 4.8 6.2 4-2.4 5.8-4.2 4.8-6.2-1-2-4-1.6-4.8.2zM3 18l3 .8 4 1.7h5.5c1 0 1.5-1 .8-1.6L14 17M3 15v5" />
  </svg>
);

// Número que "sobe" até o valor final
function CountUp({ to, prefix = "", suffix = "", delay = 2400, duration = 1800 }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf, start;
    const t = setTimeout(() => {
      const step = (ts) => {
        if (start === undefined) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [to, delay, duration]);
  return <>{prefix}{v.toLocaleString("pt-BR")}{suffix}</>;
}

const background = (
  <div className="absolute inset-0 bg-gradient-to-br from-[#fdf4ee] via-[#fbe8e4] to-[#f7dde6]">
    <div className="drift absolute -left-40 bottom-[-18%] h-[70vh] w-[70vh] rounded-full bg-[#fbd9c4]/70 blur-3xl" />
    <div className="drift-rev absolute -right-32 top-[-10%] h-[60vh] w-[60vh] rounded-full bg-[#f6c6d6]/60 blur-3xl" />
    <div className="absolute left-1/2 top-1/3 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />
  </div>
);

const stats = [
  { n: 10000, prefix: "+", text: "mães já se sentem mais acolhidas" },
  { n: 92, suffix: "%", text: "relatam melhora no bem-estar emocional" },
  { n: 24, suffix: "h", text: "de acesso a conteúdos e apoio especializado" },
];

export default function HomeScreen() {
  return (
    <FlowerScroll background={background}>
      <div className="font-body flex h-full flex-col pt-20 text-[#2f3a36]">
        {/* Centro */}
        <main className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-6 px-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)_minmax(0,1fr)] lg:px-10">
          <div>
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#5b6561]">
              <span className="grow-x h-px w-8 bg-[#c98a9d]" style={{ "--d": "200ms" }} />
              <SplitText text="Apoio real para mães reais" delay={300} />
            </div>

            <h1 className="font-display text-[clamp(2.2rem,min(3.9vw,7.5vh),4rem)] font-light leading-[1.05]">
              <span className="block">
                <SplitText text="Você" delay={600} />{" "}
                <SplitText text="não" delay={760} className="italic" />{" "}
                <SplitText text="precisa" delay={900} />
              </span>
              <span className="block"><SplitText text="enfrentar isso" delay={1150} /></span>
              <span className={`block italic ${rose}`}><SplitText text="sozinha." delay={1600} /></span>
            </h1>

            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[#46504c]">
              <SplitText by="word" delay={2000}
                text="O Florável é um espaço seguro e acolhedor para te apoiar na sua jornada da maternidade, com informação, escuta e cuidado." />
            </p>

            <div className="fade-up mt-8" style={{ "--d": "2900ms" }}>
              <Link to="/cadastro"
                className="group inline-flex items-center gap-3 rounded-full bg-[#2f3a36] px-9 py-4 text-white shadow-lg shadow-[#2f3a36]/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                Começar
                <span className="transition-transform duration-300 group-hover:translate-x-1.5"><Arrow /></span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block" /> {/* espaço onde fica a flor */}

          {/* Cartão */}
          <aside className="hidden justify-self-end lg:block">
            <div className="fade-left" style={{ "--d": "2200ms" }}>
              <div className="float w-[340px] rounded-[28px] bg-white/70 p-8 shadow-xl shadow-rose-200/50 backdrop-blur-md">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f6e0e4]"><Heart /></span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#6d7571]">Nosso principal serviço</span>
                </div>
                <h2 className="font-display text-[1.9rem] font-light leading-tight">
                  <SplitText text="Acompanhamento emocional" delay={2600} />
                </h2>
                <p className="mt-3 leading-relaxed text-[#6d7571]">
                  Converse com profissionais especializados e receba o suporte que você precisa, no seu ritmo.
                </p>
                <Link to="/sobre"
                  className={`group mt-6 inline-flex items-center gap-3 rounded-full border border-[#e6c3cd] px-7 py-3 text-sm transition hover:bg-[#f6e0e4] ${rose}`}>
                  Saiba mais
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5"><Arrow /></span>
                </Link>
              </div>
            </div>
          </aside>
        </main>

        {/* Dica de scroll: some conforme a flor abre */}
        <div className="pointer-events-none flex flex-col items-center gap-2 pb-3 text-[10px] uppercase tracking-[0.3em] text-[#8a6f78] [@media(max-height:760px)]:hidden"
          style={{ opacity: "calc(1 - var(--p) * 8)" }}>
          Role para a flor se abrir
          <span className="nudge h-8 w-px bg-[#c98a9d]" />
        </div>

        {/* Faixa inferior curva */}
        <footer className="fade-up bg-[#fbf1ee]/95 px-6 pb-8 pt-12 lg:px-10"
          style={{ "--d": "3100ms", borderRadius: "50% 50% 0 0 / 56px 56px 0 0" }}>
          <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div className="hidden items-center gap-4 lg:flex">
              <Leaf />
              <div>
                <p className="font-display text-xl italic">Aqui, cada sentimento importa.</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#6d7571]">Você também é importante.</p>
              </div>
            </div>
            {stats.map((s) => (
              <div key={s.text} className="border-l border-[#ead7d9] pl-4 lg:pl-8">
                <p className={`font-display text-2xl lg:text-3xl ${rose}`}>
                  <CountUp to={s.n} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs leading-snug text-[#5b6561] lg:text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </footer>
      </div>

      
    </FlowerScroll>

    
  );
}

