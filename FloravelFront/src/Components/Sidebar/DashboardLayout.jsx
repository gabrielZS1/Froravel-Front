import React from 'react';
import Sidebar from './Sidebar'; // Ajuste o caminho conforme o local onde salvou sua Sidebar

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex">
      {/* Barra lateral fixa em todas as telas do painel */}
      <Sidebar />

      {/* Conteúdo dinâmico da tela do painel entra aqui */}
      <main className="flex-1 p-8 max-w-7xl mx-auto overflow-y-auto">
        {children}
      </main>
    </div>
  );
}