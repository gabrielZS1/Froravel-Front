import React from 'react';

export default function PainelScreen() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex">
      
      

      {/* Conteúdo Principal Central / Direito */}
      <main className="flex-1 p-8 space-y-8 max-w-7xl mx-auto">
        
        {/* Título Superior */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-48"></div>
          <div className="h-3 bg-gray-200 rounded w-72"></div>
        </div>

        {/* Seção Superior: Bloco Maior + Bloco Menor ao Lado */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Bloco Retangular Largo (2 colunas) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div className="flex-1 space-y-3 pt-1">
              <div className="h-3 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-2/5"></div>
            </div>
          </div>

          {/* Bloco Retangular Menor (1 coluna) */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm h-36 flex items-center justify-center">
            <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-xl"></div>
          </div>

        </div>

        {/* Seção Inferior: 4 Cards em Grade */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((card) => (
            <div key={card} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              {/* Ícone circular do card */}
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              {/* Linhas de texto simuladas */}
              <div className="space-y-2 pt-2">
                <div className="h-3 bg-gray-300 rounded w-4/5"></div>
                <div className="h-3 bg-gray-200 rounded w-3/5"></div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}