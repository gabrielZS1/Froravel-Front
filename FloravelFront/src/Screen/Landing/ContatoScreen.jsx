// src/pages/Contato/Contato.jsx
import Reveal from "../../Components/Reveal/Reveal";
import SplitText from "../../Components/SplitText/SplitText";

const field = "w-full rounded-2xl border border-[#ead7d9] bg-white/80 px-5 py-3.5 outline-none transition focus:border-[#c98a9d] focus:ring-2 focus:ring-[#c98a9d]/30";

export default function Contato() {
  return (
    <Reveal className="font-body mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-28 text-[#2f3a36] lg:grid-cols-2 lg:px-10">
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#5b6561]">
          <span className="grow-x h-px w-8 bg-[#c98a9d]" />
          <SplitText text="Contato" delay={100} />
        </div>
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.08]">
          <SplitText text="Vamos conversar?" delay={300} />
        </h2>
        <p className="max-w-md text-[17px] leading-relaxed text-[#46504c]">
          <SplitText by="word" delay={900}
            text="Escreva para a gente. Cada mensagem é lida com cuidado e respondida com carinho." />
        </p>

        <div className="fade-up max-w-md rounded-2xl bg-white/70 p-5 text-sm leading-relaxed text-[#46504c]" style={{ "--d": "1800ms" }}>
          Se você está em sofrimento agora, não espere: o <strong>CVV</strong> atende 24h, de graça, pelo telefone <strong>188</strong>.
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()}
        className="fade-left space-y-4 rounded-[28px] bg-white/60 p-8 shadow-xl shadow-rose-200/40 backdrop-blur-md"
        style={{ "--d": "700ms" }}>
        <input className={field} placeholder="Seu nome" />
        <input className={field} type="email" placeholder="Seu e-mail" />
        <textarea className={`${field} h-36 resize-none`} placeholder="Como podemos te ajudar?" />
        <button type="submit"
          className="rounded-full bg-[#2f3a36] px-9 py-4 text-white shadow-lg shadow-[#2f3a36]/25 transition hover:-translate-y-0.5 hover:bg-[#46564e]">
          Enviar mensagem
        </button>
      </form>
    </Reveal>
  );
}