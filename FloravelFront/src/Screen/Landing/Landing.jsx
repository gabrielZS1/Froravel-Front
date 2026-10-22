import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import Sobre from "./SobreScreen";
import ComoFunciona from "./ComoFuncionaScreen";
import Recursos from "./RecursosScreen";
import Depoimentos from "./DepoimentosScreen";
import Contato from "./ContatoScreen";
import FlorFinal from "./Flor";
 
export default function Landing() {
  const { state } = useLocation();
 
  // Veio de /login ou /cadastro clicando no menu: rola até a seção pedida
  useEffect(() => {
    if (state?.scrollTo) document.getElementById(state.scrollTo)?.scrollIntoView();
  }, [state]);
 
  return (
    <>
      <div id="inicio"><HomeScreen /></div>
      <section id="sobre" className="bg-[#fbf1ee]"><Sobre /></section>
      <section id="como-funciona" className="bg-gradient-to-b from-[#fbf1ee] to-[#f7e3e6]"><ComoFunciona /></section>
      <section id="recursos" className="bg-[#f7e3e6]"><Recursos /></section>
      <section id="depoimentos" className="bg-gradient-to-b from-[#f7e3e6] to-[#fbf1ee]"><Depoimentos /></section>
      <section id="contato" className="bg-[#fbf1ee]"><Contato /></section>
      <FlorFinal />
    </>
  );
}
