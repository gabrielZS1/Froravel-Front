import { useState, useEffect } from 'react';

const LOGIN_IMAGE = '/login-bg.png';
const LOGO = '/LogoFin.png';

const APPS = {
  mae: import.meta.env.VITE_MAE_APP_URL || 'http://localhost:5174',
  terapeuta: import.meta.env.VITE_TERAPEUTA_APP_URL || 'http://localhost:5175',
};

const PAPEIS = [
  { id: 'mae', label: 'Sou Mãe' },
  { id: 'terapeuta', label: 'Sou Terapeuta' },
];

export default function LoginScreen() {
  const [papel, setPapel] = useState('mae');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
  const handlePageShow = (e) => {
    if (e.persisted) {
      setCarregando(false);
      setErro('');
    }
  };
  window.addEventListener('pageshow', handlePageShow);
  return () => window.removeEventListener('pageshow', handlePageShow);
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);

    try {
      window.location.href = APPS[papel];
    } catch (err) {
      const msg =
        err?.response?.status === 401
          ? 'E-mail ou senha inválidos.'
          : 'Não foi possível conectar. Tente novamente.';
      setErro(msg);
      setCarregando(false);
    }
  };

  const handleGoogle = () => {
    console.log('Google login como:', papel);
  };

  const inputClass =
    'w-full px-4 py-2.5 text-sm rounded-xl bg-[#f1f0ed] border border-[#d9d6cf] text-gray-800 ' +
    'placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#56725a]/60 ' +
    'focus:border-transparent transition-all';

  return (
    <div className="h-dvh w-full overflow-hidden flex bg-[#faf8f4]">
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={LOGO} alt="Florável" className="h-12 w-12 object-contain drop-shadow-sm" />
            <h1 className="font-serif text-3xl font-bold text-[#1f2a22] tracking-tight">Entrar</h1>
          </div>

          <div
            role="tablist"
            aria-label="Tipo de acesso"
            className="relative grid grid-cols-2 p-1 mb-3 rounded-xl bg-[#ece8df]"
          >
            <div
              className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-lg bg-[#56725a] shadow-sm transition-transform duration-300 ease-out ${
                papel === 'terapeuta' ? 'translate-x-full' : 'translate-x-0'
              }`}
            />
            {PAPEIS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={papel === id}
                onClick={() => {
                  setPapel(id);
                  setCarregando(false);
                  setErro('');
                }}
                className={`relative z-10 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  papel === id ? 'text-white' : 'text-gray-600 hover:text-[#1f2a22]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <p className="text-xs text-gray-500 text-center mb-4">
            {papel === 'mae'
              ? 'Acesse seu espaço de cuidado e acolhimento.'
              : 'Acesse o painel de acompanhamento das suas pacientes.'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-xs font-medium text-gray-700 mb-1">
                Senha
              </label>
              <div className="relative">
                <input
                  id="senha"
                  type={mostrarSenha ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className={`${inputClass} pr-16`}
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#56725a] hover:text-[#2f4a36]"
                >
                  {mostrarSenha ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
              <div className="text-right mt-1.5">
                <a href="#esqueci-senha" className="text-xs font-medium text-[#1f2a22] hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            {erro && (
              <p role="alert" className="text-xs text-red-600 text-center">
                {erro}
              </p>
            )}

            <button
              type="submit"
              disabled={carregando}
              className="w-full py-2.5 text-sm rounded-xl bg-[#56725a] hover:bg-[#465e4a] active:scale-[0.99] disabled:opacity-60 text-white font-medium shadow-md shadow-[#56725a]/20 transition-all"
            >
              {carregando ? 'Entrando...' : `Entrar como ${papel === 'mae' ? 'Mãe' : 'Terapeuta'}`}
            </button>
          </form>

          <p className="text-xs text-center text-gray-600 mt-3">
            Não possui uma conta?{' '}
            <a href="/cadastro" className="font-semibold text-[#2f4a36] hover:underline">
              Criar Conta
            </a>
          </p>

          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-[#d9d6cf]" />
            <span className="text-[11px] text-gray-500">OU</span>
            <div className="flex-1 h-px bg-[#d9d6cf]" />
          </div>

          <button
            type="button"
            onClick={handleGoogle}
            aria-label="Entrar com Google"
            className="w-full py-2.5 rounded-xl bg-[#f1f0ed] hover:bg-white border border-[#e2dfd8] shadow-sm flex items-center justify-center transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
              <path fill="#FBBC05" d="M10.5 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z" />
              <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden lg:block w-1/2 h-full relative">
        <img src={LOGIN_IMAGE} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f4]/30 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
    </div>
  );
}