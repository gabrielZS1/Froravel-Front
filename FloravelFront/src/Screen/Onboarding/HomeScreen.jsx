import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Conteúdo Principal (Hero Section) */}
      <main className="max-w-7xl mx-auto px-6 py-12 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Lado Esquerdo: Textos e Botão Principal */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Acolhimento e suporte para a sua jornada
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Um espaço seguro projetado para oferecer orientação, apoio psicológico, recursos e uma comunidade acolhedora.
            </p>

            <div className="pt-2">
              <Link
                to="/cadastro"
                className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-medium px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 text-center"
              >
                Começar agora
              </Link>
            </div>
          </div>

          <div className="w-full h-80 sm:h-96 bg-gray-200 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative shadow-inner">
            <div className="text-center p-6">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-500">Imagem de Destaque</span>
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-600 font-bold">
              01
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg mb-1">Apoio contínuo</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Acesse conteúdos focados no bem-estar e saúde mental para o seu dia a dia.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-600 font-bold">
              02
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg mb-1">Profissionais</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Encontre profissionais especializados e agende seus atendimentos com facilidade.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-600 font-bold">
              03
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg mb-1">Comunidade</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Compartilhe experiências em um ambiente seguro e de escuta ativa.
              </p>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}