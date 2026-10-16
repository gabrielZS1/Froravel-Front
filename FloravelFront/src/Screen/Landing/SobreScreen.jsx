// src/pages/Sobre/Sobre.jsx
import Reveal from "../../Components/Reveal/Reveal";
import SplitText from "../../Components/SplitText/SplitText";

export default function Sobre() {
  return (
    <Reveal className="font-body mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-28 text-[#2f3a36] lg:grid-cols-12 lg:px-10">
      {/* Texto */}
      <div className="space-y-7 lg:col-span-7">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#5b6561]">
          <span className="grow-x h-px w-8 bg-[#c98a9d]" />
          <SplitText text="Sobre o Florável" delay={100} />
        </div>

        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.08]">
          <span className="block"><SplitText text="Um lugar para respirar," delay={300} /></span>
          <span className="block italic text-[#a8566f]"><SplitText text="no seu tempo." delay={900} /></span>
        </h2>

        <p className="max-w-xl text-[17px] leading-relaxed text-[#46504c]">
          <SplitText by="word" delay={1400}
            text="O Florável nasceu para acompanhar mães que estão passando pela depressão pós-parto. Aqui você encontra informação confiável, profissionais especializados e outras mães que entendem o que você sente, sem julgamentos e sem pressa." />
        </p>

        <div className="fade-up" style={{ "--d": "2600ms" }}>
          <a href="#recursos"
            className="group inline-flex items-center gap-3 rounded-full bg-[#2f3a36] px-9 py-4 text-white shadow-lg shadow-[#2f3a36]/25 transition duration-300 hover:-translate-y-0.5">
            Conhecer os recursos
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </div>
      </div>

      {/* Imagens: troque os blocos por <img src="..." className="h-full w-full object-cover" /> */}
      <div className="fade-left space-y-5 lg:col-span-5" style={{ "--d": "800ms" }}>
        <div className="float aspect-[4/3] w-full rounded-[28px] bg-gradient-to-br from-[#f6dfe6] to-[#fbd9c4] shadow-xl shadow-rose-200/50" />
        <div className="flex gap-4">
          <div className="h-24 w-24 rounded-2xl bg-[#f6e0e4] shadow-md" />
          <div className="h-24 w-24 rounded-2xl bg-[#fbe3d3] shadow-md" />
        </div>
      </div>
    </Reveal>
  );
}