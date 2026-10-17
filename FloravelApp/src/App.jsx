import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop from './Components/Layout/ScrollToTop';
import DashboardLayout from './Components/Sidebar/DashboardLayout';



// Dashboard
import Painel from './Screen/Dashboard/PainelScreen';
import Biblioteca from './Screen/Community/BibliotecaScreen';
import Blog from './Screen/Community/BlogScreen';
import Comunidade from './Screen/Community/ComunidadeScreen';
import Ajuda from './Screen/Services/AjudaSreen';
import Perfil from './Screen/Profile/PerfilScreen';
// import Agendamento from './Screen/Services/AgendamentoScreen';
// import Apoio from './Screen/Services/ApoioScreen';
// import Parceiros from './Screen/Services/ParceirosScreen';
// import Profissionais from './Screen/Services/ProfissionaisScreen';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Rotas dentro do painel, usando o DashboardLayout */}
        <Route path="/" element={<DashboardLayout><Painel /></DashboardLayout>} />
        <Route path="/painel" element={<DashboardLayout><Painel /></DashboardLayout>} />
        <Route path="/comunidade" element={<DashboardLayout><Comunidade /></DashboardLayout>} />
        <Route path="/blog" element={<DashboardLayout><Blog /></DashboardLayout>} />
        <Route path="/biblioteca" element={<DashboardLayout><Biblioteca /></DashboardLayout>} />
        <Route path="/ajuda" element={<DashboardLayout><Ajuda /></DashboardLayout>} />
        <Route path="/perfil" element={<DashboardLayout><Perfil /></DashboardLayout>} />

        {/* Qualquer endereço inexistente (ex.: o antigo /sobre) volta para a landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;