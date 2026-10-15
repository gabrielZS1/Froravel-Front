import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import ScrollToTop from './Layout/ScrollToTop';
import Layout from './Components/Layout'

import Cadastro from './Screen/Auth/CadastroScreen';
import Login from './Screen/Auth/LoginScreen';
// import ConsentPrivacy from './Screen/Auth/ConsentPrivacy';

// import Biblioteca from './Screen/Community/BibliotecaScreen';
// import Blog from './Screen/Community/BlogScreen';
// import Comunidade from './Screen/Community/ComunidadeScreen';

// import CheckIn from './Screen/Dashboard/CheckInScreen';
// import Painel from './Screen/Dashboard/PainelScreen';

// import Funcionalidade from './Screen/Onboarding/FuncionalidadesScreen';
import Home from './Screen/Onboarding/HomeScreen';
// import Necessidades from './Screen/Onboarding/NecessidadesScreen';
// import Sobre from './Screen/Onboarding/SobreScreen';

// import Pefil from './Screen/Profile/PerfilScreen';

// import Agendamento from './Screen/Services/AgendamentoScreen';
// import Ajuda from './Screen/Services/AjudaSreen';
// import Apoio from './Screen/Services/ApoioScreen';
// import Parceiros from './Screen/Services/ParceirosScreen';
// import Profissionais from './Screen/Services/ProfissionaisScreen';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />

          {/* Sem header/footer */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/cadastro" element={<Cadastro />} /> 

          

          {/* Com header/footer */}
          {/* <Route path="/home" element={<Layout><Home /></Layout>} /> */}

        </Routes>
    </BrowserRouter>

  );
}

export default App;


     