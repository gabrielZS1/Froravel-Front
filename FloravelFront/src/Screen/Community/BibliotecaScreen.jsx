import React from 'react';

export default function BibliotecaScreen() {
  return (
    <div className="space-y-8 max-w-5xl">
      
      {/* Título Superior da Página */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-44"></div>
      </div>

      {/* Barra de Pesquisa / Input Largo */}
      <div className="w-full h-12 bg-white border border-gray-200 rounded-xl shadow-sm"></div>

      {/* Linha de 5 Botões de Filtro */}
      <div className="flex flex-wrap gap-3">
        {[1, 2, 3, 4, 5].map((btn) => (
          <div key={btn} className="h-9 w-28 bg-white border border-gray-200 rounded-full shadow-sm"></div>
        ))}
      </div>

      {/* Grade de 3 Cards Verticais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {[1, 2, 3].map((card) => (
          <div key={card} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-4 flex flex-col">
            
            {/* Bloco de Imagem Superior com o "X" simulado */}
            <div className="w-full h-40 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden">
              <svg className="w-10 h-10 text-gray-300 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>

            {/* Linhas de texto simuladas no card */}
            <div className="space-y-2.5 pt-1">
              <div className="h-3.5 bg-gray-300 rounded w-4/5"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-3/5"></div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}