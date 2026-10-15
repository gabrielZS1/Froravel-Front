import React from 'react';

export default function AjudaScreen() {
  return (
    <div className="space-y-8 max-w-5xl">
      
      {/* Bloco Superior de Destaque / Informações Importantes */}
      <div className="w-full bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center">
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>

      {/* Grade com os dois cards principais (CVV e SAMU) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        
        {/* Card 1: CVV */}
        <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center space-y-6">
          <span className="text-xs font-semibold text-gray-500">CVV Meio de Contato e Avisos</span>
          
          {/* Círculo Central */}
          <div className="w-16 h-16 rounded-full bg-white border border-gray-300 shadow-inner flex items-center justify-center"></div>

          {/* Linhas de Texto Simuladas */}
          <div className="w-full space-y-3 pt-2">
            <div className="h-3 bg-gray-300 rounded w-3/4 mx-auto"></div>
            <div className="h-2.5 bg-gray-300 rounded w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>

        {/* Card 2: SAMU */}
        <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center space-y-6">
          <span className="text-xs font-semibold text-gray-500">SAMU Meios de contato e Avisos</span>
          
          {/* Círculo Central */}
          <div className="w-16 h-16 rounded-full bg-white border border-gray-300 shadow-inner flex items-center justify-center"></div>

          {/* Linhas de Texto Simuladas */}
          <div className="w-full space-y-3 pt-2">
            <div className="h-3 bg-gray-300 rounded w-3/4 mx-auto"></div>
            <div className="h-2.5 bg-gray-300 rounded w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>

      </div>

    </div>
  );
}