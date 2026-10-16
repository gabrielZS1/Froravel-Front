import { Link, NavLink } from 'react-router-dom';

const nav = [
  ["Início", "/"],
  ["Sobre", "/sobre"],
  ["Recursos", "/recursos"],
  ["Contato", "/contato"],
];

export default function Header() {
  return (
    <header className="w-full bg-[#faf4f1] text-[#2f3a36]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          to="/"
          className="font-display text-3xl tracking-tight"
        >
          florável
        </Link>

        <nav className="hidden items-center gap-6 text-sm sm:flex lg:gap-9">
          {nav.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `relative py-1 transition-colors duration-300
                after:absolute after:-bottom-1 after:left-0
                after:h-px after:w-full after:origin-left
                after:bg-[#c98a9d] after:transition-transform
                after:duration-300 hover:text-[#c98a9d]
                ${
                  isActive
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <Link
            to="/login"
            className="transition-colors hover:text-[#c98a9d]"
          >
            Login
          </Link>

          <Link
            to="/cadastro"
            className="rounded-full bg-[#2f3a36] px-5 py-2.5 text-white transition-colors hover:bg-[#46564e]"
          >
            Começar
          </Link>
        </div>
      </div>
    </header>
  );
}