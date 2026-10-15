import React, { useState } from 'react';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submetido:', { email, senha });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        
        {/* Título e Subtítulo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            Bem-vinda de volta
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Acesse sua conta para continuar no Florável
          </p>
        </div>

        {/* Formulário de Login */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Campo E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-800"
            />
          </div>

          {/* Campo Senha */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <a href="#esqueci-senha" className="text-xs text-purple-600 hover:underline">
                Esqueceu a senha?
              </a>
            </div>
            <input
              id="senha"
              type="password"
              required
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-800"
            />
          </div>

          {/* Botão de Entrar */}
          <button
            type="submit"
            className="w-full bg-slate-700 hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm mt-2"
          >
            Entrar
          </button>
        </form>

        {/* Botões Secundários / Login Social */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-center text-gray-400 mb-4">Ou acesse com</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full py-2.5 px-4 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-medium text-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              Google
            </button>
            <button
              type="button"
              className="w-full py-2.5 px-4 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-medium text-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              Cadastrar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}