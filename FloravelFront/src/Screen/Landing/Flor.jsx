// src/Screen/Landing/FlorFinal.jsx
// Flor animada no scroll como ÚLTIMO elemento da landing (depois do Contato).
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FlowerScroll from "../../Components/FlowerScroll/FlowerScroll";

// O degradê começa na cor do Contato (#f7e3e6) e termina na cor do footer (#f2ebe8): sem emenda
const fundo = (
  <div className="absolute inset-0 bg-gradient-to-b from-[#f7e3e6] via-[#fbe8e4] to-[#f2ebe8]">
    <div className="drift absolute -left-32 top-[10%] h-[55vh] w-[55vh] rounded-full bg-[#fbd9c4]/60 blur-3xl" />
    <div className="drift-rev absolute -right-32 bottom-[5%] h-[55vh] w-[55vh] rounded-full bg-[#f6c6d6]/60 blur-3xl" />
  </div>
);

// Aparece quando a flor já está quase toda aberta (--p vai de 0 a 1 conforme o scroll)
const conteudo = (
  <div
    className="font-body flex h-full flex-col items-center justify-end px-6 pb-10 text-center text-[#2f3a36]"
    style={{
      "--t": "clamp(0, calc((var(--p) - 0.55) * 4), 1)",
      opacity: "var(--t)",
      transform: "translateY(calc((1 - var(--t)) * 24px))",
    }}
  >
    <h2 className="font-display text-[clamp(1.8rem,3.4vw,3rem)] font-light leading-tight">
      Cada sentimento <span className="italic text-[#a8566f]">importa.</span>
    </h2>
    <p className="mt-2 max-w-md text-[#46504c]">
      Quando você estiver pronta, o Florável está aqui, no seu ritmo.
    </p>
    <Link
      to="/cadastro"
      className="mt-5 inline-flex rounded-full bg-[#2f3a36] px-9 py-3.5 text-white shadow-lg shadow-[#2f3a36]/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
    >
      Começar agora
    </Link>
  </div>
);

export default function FlorFinal() {
  const ref = useRef(null);
  const [perto, setPerto] = useState(false);

  // Só carrega os 60 frames quando o usuário chega perto: não disputa banda com o vídeo do topo
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setPerto(true); io.disconnect(); }
      },
      { rootMargin: "1500px 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {perto ? (
        <FlowerScroll background={fundo}>{conteudo}</FlowerScroll>
      ) : (
        <div className="h-[400vh] bg-gradient-to-b from-[#f7e3e6] to-[#f2ebe8]" /> // mesmo tamanho: a página não "pula"
      )}
    </div>
  );
}