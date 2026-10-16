// src/Components/HeroVideo/HeroVideo.jsx
import { useEffect, useRef, useState } from "react";

// true  = o vídeo tem fundo claro (como o da flor): o fundo some e o degradê rosa da página aparece
// false = vídeo em tela cheia normal (paisagem, textura...), com um véu claro para o texto ler bem
const FUNDO_CLARO = true;

export default function HeroVideo({ background, children }) {
  const videoRef = useRef(null);

  // Quem prefere menos movimento ou usa "economia de dados" vê só a imagem
  const [semVideo] = useState(
    () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      navigator.connection?.saveData === true
  );
  const [ehMobile] = useState(() => window.matchMedia("(max-width: 767px)").matches);

  // Pausa o vídeo quando sai da tela (economiza bateria e processamento)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.1 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

 const estilo = FUNDO_CLARO
  ? "mix-blend-multiply"
  : "";
  const filtro = FUNDO_CLARO ? { filter: "brightness(1.03) contrast(1.25)" } : undefined;

  return (
    <section className="relative h-screen overflow-hidden" style={{ "--p": 0 }}>
      {background}

      {semVideo ? (
        <img src="/video/hero-poster.webp" alt=""
          className={`absolute inset-0 h-full w-full object-cover ${estilo}`} style={filtro} />
      ) : (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover ${estilo}`}
          style={filtro}
          autoPlay muted loop playsInline
          preload="metadata"
          poster="/video/hero-poster.webp"
          aria-hidden="true"
          tabIndex={-1}
        >
          {ehMobile ? (
            <source src="/video/hero-mobile.mp4" type="video/mp4" />
          ) : (
            <>
              <source src="/video/hero.webm" type="video/webm" />
              <source src="/video/hero.mp4" type="video/mp4" />
            </>
          )}
        </video>
      )}

      {!FUNDO_CLARO && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdf4ee]/85 via-[#fdf4ee]/40 to-transparent" />
      )}

      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
}