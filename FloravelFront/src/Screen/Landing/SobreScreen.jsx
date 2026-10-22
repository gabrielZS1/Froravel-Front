import { ArrowRight } from "lucide-react";

export default function Sobre() {
  return (
    <div className="bg-[#fbf1ee]">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">

        {/* Coluna Esquerda — Texto */}
        <div className="flex-1 flex flex-col gap-7">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#E8A9B8]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#5b6561]">
              Sobre o Florável
            </span>
          </div>

          <h2
            className="text-[40px] md:text-[56px] leading-tight text-[#1F3224]"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Um lugar para respirar,{" "}
            <span className="italic text-[#E8A9B8]">no seu tempo.</span>
          </h2>

          <p className="text-[#4F4F4F] text-[18px] leading-relaxed max-w-xl">
            O Florável nasceu para acompanhar mães que estão passando pela
            depressão pós-parto. Aqui você encontra informação confiável,
            profissionais especializados e outras mães que entendem o que você
            sente, sem julgamentos e sem pressa.
          </p>

          <a
            href="#recursos"
            className="group inline-flex items-center gap-3 bg-[#1F3224] hover:bg-[#516B55] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#1F3224]/20 transition-all duration-300 w-fit"
          >
            Conhecer os recursos
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </a>
        </div>

        {/* Coluna Direita — Colagem de Imagens */}
        <div className="flex-1 relative w-full h-[450px] md:h-[550px]">

          <div className="absolute top-10 left-10 w-64 h-64 bg-[#E8A9B8]/30 rounded-full blur-3xl z-0" />

          <img
            src="/img/maeDescansando.jpg"
            alt="Mãe descansando"
            className="absolute top-0 right-0 w-[85%] h-[400px] md:h-[480px] object-cover rounded-[32px] shadow-2xl z-10 transition-transform duration-700 hover:scale-[1.02]"
          />

          <img
            src="/img/maeexausta.jpg"
            alt="Mãe acolhida"
            className="absolute bottom-0 left-0 w-[60%] h-[250px] md:h-[300px] object-cover rounded-[24px] shadow-xl z-20 border-8 border-[#fbf1ee] transition-transform duration-700 hover:-translate-y-2"
          />
        </div>

      </div>
    </div>
  );
}
