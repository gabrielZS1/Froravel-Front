// src/Components/Reveal/Reveal.jsx
// Envolve um bloco: letras e fade-ups dentro dele só animam quando ele aparece na tela.
import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setSeen(true); io.disconnect(); }
      },
      { threshold: 0.25 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal data-visible={seen ? "" : undefined} className={className}>
      {children}
    </div>
  );
}