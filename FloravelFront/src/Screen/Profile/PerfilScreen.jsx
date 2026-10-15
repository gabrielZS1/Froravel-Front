import React from 'react';

export default function PerfilScreen() {
  return (
    <div className="space-y-8 max-w-5xl">
      
      {/* Cabeçalho da Página e Botão Superior Direito */}
      <div className="flex items-center justify-between">
        <div className="h-4 bg-gray-300 rounded w-36"></div>
        <div className="h-10 w-28 bg-gray-100 border border-gray-200 rounded-xl"></div>
      </div>

      {/* Seção do Perfil: Avatar grande e linhas de identificação */}
      <div className="flex items-center space-x-6 pt-2">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0"></div>
        <div className="space-y-3 flex-1">
          <div className="h-3.5 bg-gray-300 rounded w-48"></div>
          <div className="h-3 bg-gray-200 rounded w-72"></div>
        </div>
      </div>

      {/* Lista de Opções / Configurações do Perfil */}
      <div className="space-y-4 pt-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            
            {/* Ícone pequeno à esquerda + Linha de texto principal */}
            <div className="flex items-center space-x-4 flex-1">
              <div className="w-6 h-6 rounded-lg bg-gray-200 flex-shrink-0"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>

            {/* Marcador / Seta à direita */}
            <div className="h-3 bg-gray-200 rounded w-10 flex-shrink-0"></div>

          </div>
        ))}
      </div>

    </div>
  );
}