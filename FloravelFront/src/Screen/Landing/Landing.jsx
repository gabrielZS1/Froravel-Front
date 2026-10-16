import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import Sobre from "./SobreScreen";
import Recursos from "./RecursosScreen";
import Contato from "./ContatoScreen";
 
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
      <section id="recursos" className="bg-gradient-to-b from-[#fbf1ee] to-[#f7e3e6]"><Recursos /></section>
      <section id="contato" className="bg-[#f7e3e6]"><Contato /></section>
    </>
  );
}
 