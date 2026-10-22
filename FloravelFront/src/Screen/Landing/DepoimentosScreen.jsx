import Reveal from "../../Components/Reveal/Reveal";
import SplitText from "../../Components/SplitText/SplitText";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila, 28 anos",
    text: "Eu achava que era fraqueza minha. O Florável me mostrou que pedir ajuda é o ato mais corajoso que uma mãe pode ter.",
  },
  {
    name: "Renata, 34 anos",
    text: "Encontrei outras mães que sentiam o mesmo que eu. Pela primeira vez, não me senti sozinha nessa jornada.",
  },
  {
    name: "Juliana, 31 anos",
    text: "O quiz me ajudou a perceber que o que eu sentia tinha nome. Hoje, com acompanhamento, consigo sorrir de verdade.",
  },
];

function Stars() {
  return (
    <div className="mb-4 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-[#e2a84b] text-[#e2a84b]"
          strokeWidth={1.2}
        />
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <Reveal className="font-body mx-auto min-h-screen max-w-7xl px-6 py-28 text-[#2f3a36] lg:px-10">
      {/* Cabeçalho */}
      <div className="mb-16 text-center">
        <div className="mb-5 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#5b6561]">
          <span className="grow-x h-px w-8 bg-[#c98a9d]" />
          <SplitText text="Depoimentos" delay={100} />
          <span className="grow-x h-px w-8 bg-[#c98a9d]" />
        </div>
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.08]">
          <SplitText text="Histórias que" delay={300} />{" "}
          <span className="italic text-[#a8566f]">
            <SplitText text="inspiram." delay={900} />
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-[#46504c]">
          <SplitText
            by="word"
            delay={1200}
            text="Mães reais compartilham como o Florável transformou a relação delas com a maternidade."
          />
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <article
            key={t.name}
            className="fade-up rounded-[28px] border border-white/60 bg-white/50 p-8 shadow-xl shadow-rose-200/30 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{ "--d": `${1400 + i * 250}ms` }}
          >
            <Stars />

            <blockquote className="text-[17px] leading-relaxed text-[#38423e]">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            {/* Divisor */}
            <div className="my-5 h-px w-12 bg-[#e6c3cd]" />

            {/* Autora */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f6dfe6] to-[#fbd9c4] text-sm font-semibold text-[#a8566f]">
                {t.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-[#5b6561]">{t.name}</span>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

