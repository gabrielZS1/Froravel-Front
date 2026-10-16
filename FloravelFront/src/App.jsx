import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './Components/Layout/ScrollToTop';
import Layout from './Components/Layout/Layout'
import DashboardLayout from './Components/Sidebar/DashboardLayout';

import Cadastro from './Screen/Auth/CadastroScreen';
import Login from './Screen/Auth/LoginScreen';
// import ConsentPrivacy from './Screen/Auth/ConsentPrivacy';

import Biblioteca from './Screen/Community/BibliotecaScreen';
import Blog from './Screen/Community/BlogScreen';
import Comunidade from './Screen/Community/ComunidadeScreen';
import Ajuda from './Screen/Services/AjudaSreen';
import Perfil from './Screen/Profile/PerfilScreen'


// import CheckIn from './Screen/Dashboard/CheckInScreen';
import Painel from './Screen/Dashboard/PainelScreen';

// import Funcionalidade from './Screen/Onboarding/FuncionalidadesScreen';
import Home from './Screen/Onboarding/HomeScreen';
// import Necessidades from './Screen/Onboarding/NecessidadesScreen';
// import Sobre from './Screen/Onboarding/SobreScreen';



// import Agendamento from './Screen/Services/AgendamentoScreen';
// import Apoio from './Screen/Services/ApoioScreen';
// import Parceiros from './Screen/Services/ParceirosScreen';
// import Profissionais from './Screen/Services/ProfissionaisScreen';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Páginas principais com Header e Footer gerais */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />

        {/* Telas sem header/footer (Apenas formulário centralizado) */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        
        

        {/*\rotas dentro do painel utilizando o DashboardLayout */}
        <Route
          path="/painel"
          element={<DashboardLayout><Painel /></DashboardLayout>}
        />
        <Route
          path="/comunidade"
          element={<DashboardLayout><Comunidade /></DashboardLayout>}
        />
        <Route
          path="/blog"
          element={<DashboardLayout><Blog /></DashboardLayout>}
        />
        <Route
          path="/biblioteca"
          element={<DashboardLayout><Biblioteca /></DashboardLayout>}
        />
        <Route
          path="/ajuda"
          element={<DashboardLayout><Ajuda /></DashboardLayout>}
        />
        <Route
          path="/perfil"
          element={<DashboardLayout><Perfil /></DashboardLayout>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


