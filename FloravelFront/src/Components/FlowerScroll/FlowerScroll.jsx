// src/components/FlowerScroll/FlowerScroll.jsx
import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 60; // quantidade real de arquivos em public/frames
const framePath = (i) =>
  `/frames/ezgif-frame-${String(i).padStart(3, "0")}.png`;

export default function FlowerScroll({ background, children }) {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const section = sectionRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const images = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onerror = () => console.error("Frame não encontrado:", framePath(i));
      img.src = framePath(i);
      images.push(img);
    }

    const draw = (index) => {
      const img = images[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    images[0].onload = () => {
      canvas.width = images[0].naturalWidth;
      canvas.height = images[0].naturalHeight;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      draw(reduceMotion ? TOTAL_FRAMES - 1 : 0);
    };

    if (reduceMotion) {
      section.style.setProperty("--p", 1);
      return;
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollable = section.offsetHeight - window.innerHeight;
        const progress = Math.min(
          Math.max(-section.getBoundingClientRect().top / scrollable, 0),
          1
        );
        section.style.setProperty("--p", progress); // 0 → 1, usado pelo CSS dos filhos
        draw(Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES)));
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[400vh]" style={{ "--p": 0 }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {background}

        {/* multiply: o fundo claro do vídeo some e só a flor aparece sobre o degradê */}
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Uma flor que se abre conforme você rola a página"
          className="absolute left-1/2 top-1/2 w-[min(110vw,1000px)] -translate-x-1/2 -translate-y-[58%] opacity-60 mix-blend-multiply lg:opacity-100"
          style={{
            WebkitMaskImage: "radial-gradient(circle at center, #000 42%, transparent 70%)",
            maskImage: "radial-gradient(circle at center, #000 42%, transparent 70%)",
          }}
        />

        <div className="relative z-10 h-full">{children}</div>
      </div>
    </section>
  );
}