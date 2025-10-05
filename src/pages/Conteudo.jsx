import Stepper from "../components/Carrer";
import Header from "../components/Header";
import MediaCard from "../components/MediaCard";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const useScrollToSection = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
};

const Conteudo = () => {

    useScrollToSection();

    return (
        <>
            <Header />
            <div id="home" className="conteudo-inicial">
                <p>Sou estudante de <strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> com foco em <strong>desenvolvimento front-end e mobile</strong>, utilizando <strong>React.js</strong> e <strong>Flutter/Dart.</strong><br />
                Apaixonado por resolver problemas e transformar ideias em interfaces funcionais e bem estruturadas.
                Atualmente busco minha primeira oportunidade como <strong>Desenvolvedor Júnior</strong>, aplicando meus conhecimentos em <strong>interfaces responsivas, consumo de APIs REST, versionamento com Git e boas práticas de código.</strong>
                </p>
                <img src="/foto.png" alt="foto de perfil" />
            </div>
            <div id="career" className="conteudo-carreira">
                <h1>Minha Carreira</h1>
                <Stepper />
            </div>
            <div id="projects" className="conteudo-projetos">
                <h1>Meus Projetos</h1>
                <MediaCard />
            </div>
            <div id="contact" className="conteudo-contato">
                <h1>Entre em Contato</h1>
                <Contact />
            </div>
            <div className="conteudo-footer">
                <p>Copyright 2025 Hélio Ferreira. Todos os direitos reservados</p>
            </div>
        </>
    )
}

export default Conteudo;