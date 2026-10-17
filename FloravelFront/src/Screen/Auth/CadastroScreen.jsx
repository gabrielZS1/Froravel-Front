import { useState } from 'react';

export default function CadastroScreen() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados de cadastro:', formData);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        
        {/* Título e Subtítulo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            Crie sua conta
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Preencha seus dados para começar a usar o Florável
          </p>
        </div>

        {/* Formulário de Cadastro */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Campo Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
              Nome completo
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              placeholder="Digite seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-800"
            />
          </div>

          {/* Campo E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-800"
            />
          </div>

          {/* Campo Senha */}
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              required
              placeholder="Crie uma senha segura"
              value={formData.senha}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-800"
            />
          </div>

          {/* Botão de Cadastro Principal */}
          <button
            type="submit"
            className="w-full bg-slate-700 hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm mt-4"
          >
            Cadastrar
          </button>
        </form>

        {/* Botões Secundários */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-center text-gray-400 mb-4">Ou cadastre-se com</p>
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
              Já tenho conta
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}