import React from 'react';

export default function ComunidadeScreen() {
  return (
    <div className="space-y-8 max-w-5xl">
      
      {/* Cabeçalho da Página (Título e Subtítulo simulados) */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 rounded w-40"></div>
        <div className="h-3 bg-gray-200 rounded w-72"></div>
      </div>

      {/* Linha de Botões de Filtro/Categorias superiores (5 botões) */}
      <div className="flex flex-wrap gap-3">
        {[1, 2, 3, 4, 5].map((btn) => (
          <div key={btn} className="h-9 w-28 bg-white border border-gray-200 rounded-full shadow-sm"></div>
        ))}
      </div>

      {/* Lista de Posts / Cards da Comunidade (3 blocos horizontais) */}
      <div className="space-y-5">
        {[1, 2, 3].map((post) => (
          <div key={post} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-4">
            {/* Avatar circular à esquerda */}
            <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
            
            {/* Linhas de texto simulando o conteúdo do post */}
            <div className="flex-1 space-y-3 pt-1">
              <div className="h-3 bg-gray-300 rounded w-1/4"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}