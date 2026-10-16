// src/Components/Layout/Header.jsx
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const nav = [
  ["Início", "inicio"],
  ["Sobre", "sobre"],
  ["Recursos", "recursos"],
  ["Contato", "contato"],
];

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("inicio");

  // Descobre qual seção está no meio da tela para destacar no menu
  useEffect(() => {
    if (pathname !== "/") return;
    const els = nav.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Na landing rola até a seção; em /login ou /cadastro volta para "/" e rola
  const goTo = (id) => (e) => {
    e.preventDefault();
    if (pathname !== "/") return navigate("/", { state: { scrollTo: id } });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-[#faf4f1]/95 via-[#faf4f1]/60 to-transparent text-[#2f3a36]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#inicio" onClick={goTo("inicio")} className="font-display text-3xl tracking-tight">
          florável
        </a>

        <nav className="hidden items-center gap-6 text-sm sm:flex lg:gap-9">
          {nav.map(([label, id]) => {
            const isActive = pathname === "/" && active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={goTo(id)}
                className={`relative py-1 transition-colors duration-300 hover:text-[#c98a9d]
                  after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full
                  after:origin-left after:bg-[#c98a9d] after:transition-transform after:duration-300
                  ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <Link to="/login" className="transition-colors hover:text-[#c98a9d]">Login</Link>
          <Link to="/cadastro" className="rounded-full bg-[#2f3a36] px-5 py-2.5 text-white transition-colors hover:bg-[#46564e]">
            Começar
          </Link>
        </div>
      </div>
    </header>
  );
}