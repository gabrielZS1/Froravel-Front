import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop from './Components/Layout/ScrollToTop';
import Layout from './Components/Layout/Layout';
import DashboardLayout from './Components/Sidebar/DashboardLayout';

// Landing (Início, Sobre, Recursos e Contato numa página só)
import Landing from './Screen/Landing/Landing';

// Auth
import Cadastro from './Screen/Auth/CadastroScreen';
import Login from './Screen/Auth/LoginScreen';
// import ConsentPrivacy from './Screen/Auth/ConsentPrivacy';

// Dashboard
import Painel from './Screen/Dashboard/PainelScreen';
// import CheckIn from './Screen/Dashboard/CheckInScreen';

// Community
import Biblioteca from './Screen/Community/BibliotecaScreen';
import Blog from './Screen/Community/BlogScreen';
import Comunidade from './Screen/Community/ComunidadeScreen';

// Services e Profile
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
        {/* Landing page com Header e Footer gerais */}
        <Route path="/" element={<Layout><Landing /></Layout>} />

        {/* Telas sem header/footer (apenas formulário centralizado) */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rotas dentro do painel, usando o DashboardLayout */}
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