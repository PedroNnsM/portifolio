
import  react  from './assets/react.png';
import  html  from './assets/html.png';
import  css  from './assets/css.png';
import  js  from './assets/js.png';
import  github  from './assets/github.png';
import  linkedin  from './assets/linkedin.png';
import  codepen  from './assets/codepen.png';
import memoria from './assets/memoria.svg';
import tabela from './assets/tabela.svg';
import relogio from './assets/relogio.svg';
import imc from './assets/imc.svg';
import menu from './assets/menu.svg';
import menuSocial from './assets/menuRedSocial.svg';
import barbearia from './assets/barbearia.svg';
import foto   from './assets/foto.png';

import { useState, useEffect } from 'react';
import { Slider } from './components/carousel/Slider';
import { SwiperSlide } from 'swiper/react';
import './components/carousel/Slider.css';
import {BsGithub} from 'react-icons/bs';
import { Header } from './components/Header';




export function App() {
  const [show, setShow] = useState(true);
  const [repositories, setRepositories] = useState([]);
  
  useEffect(() =>{
    fetch('https://api.github.com/users/PedroNnsM/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  const repositoriesFilter = repositories.filter( repository => repository.homepage === null );
  
  const settings = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: {
      clickable: true, },
  };

  window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
    });
  
   

  return (
    <>
      <Header />

      <section className="banner" id="home">
        <h2>Olá, me chamo</h2>
        <h3>Pedro Nunes</h3>
        <br />
        <p>
          Sou Desenvolvedor <span> Front-end</span>
        </p>
      </section>

      <section className="sec" id="sobre">
        <div className="content">
          <div className="mxw800p">
            <h3>Sobre mim</h3>
            {show ? (
              <>
                <p>
                  Sou desenvolvedor Front-end, estudo e atuo em projetos
                  pessoais desde 2021.
                  <br />
                  Me interessei por desenvolver sites e aplicativos para a web,
                  e por isso voltei meus estudo para Front-end.
                  <br />
                  Atualmente estou cursando Análise e Desenvolvimento de
                  Sistemas na Estácio de Sá, e também estou cursando o curso de
                  Desenvolvimento Web na{" "}
                  <a href="https://www.alura.com.br/" target="_blanck">
                    Alura
                  </a>
                </p>
                <button className="btn" onClick={() => setShow(!show)}>
                  Ver mais
                </button>
              </>
            ) : (
              <div className="saibaMais">
                <div className="saibaContent">
                  <div className="saibaContent-text">
                    <img src={foto} alt="memoria" />
                    <p>
                      Sou natural de Porto Alegre RS, mas moro em Florianópolis
                      SC.
                      <br />
                      <br />
                      Sempre amei tecnologia e jogos eletrônicos. No entanto, eu
                      ainda não tinha conhecimento de programação e achava que a
                      área de tecnologia seria muito difícil para mim.
                      <br />
                      <br />
                      Com o nascimento do meu filho comecei a procurar mudanças
                      na minha vida e foi aí que ingressei na faculdade de
                      Análise e Desenvolvimento de Sistemas. Queria dar um
                      futuro melhor ao meu filho e mostrar que nunca é tarde
                      para aprender.
                      <br />
                      <br />
                      Com o tempo, entrei em comunidades de desenvolvimento e
                      conheci diversos profissionais que me ensinaram muito.
                      <br />
                      <br />
                      Hoje sou desenvolvedor Front-end e cada vez mais
                      apaixonado por essa área.
                      <br />
                      <br />
                      Gosto muito de aprender coisas novas e a área de
                      tecnologia me possibilita estar em constante aprendizado.
                      <br />
                      <br />
                      Tenho como objetivo estar sempre atualizado com as novas
                      tecnologias e ajudar os outros a aprender também.
                      <br />
                    </p>
                  </div>
                </div>

                <button className="btn bt2" onClick={() => setShow(!show)}>
                  Ver menos
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="sec" id="tecnologias">
        <div className="content">
          <div className="mxw800p center">
            <h3>Tecnologias que utilizo</h3>
            <p>Projetos realizados com as seguintes tecnologias:</p>
          </div>
          <div className="tec">
            <div className="box">
              <div className="iconBx">
                <img src={html} />
              </div>
              <div className="content">
                <h2>HTML</h2>
                <p>HTML é a linguagem de marcação de documentos web.</p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
                <img src={css} />
              </div>
              <div className="content">
                <h2>CSS</h2>
                <p>
                  Css é uma linguagem de estilo de programação que define o
                  estilo e o comportamento de um documento HTML.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
                <img src={js} />
              </div>
              <div className="content">
                <h2>Javascript</h2>
                <p>
                  JavaScript é uma linguagem de programação que segue a
                  linguagem de programação ECMAScript.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
                <img src={react} />
              </div>
              <div className="content">
                <h2>React.js</h2>
                <p>
                  React é uma biblioteca de JavaScript que permite a criação de
                  interfaces de usuário através de componentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec stats" id="">
        <div className="content">
          <div className="mxw800p center">
            <h3>Meus certificados</h3>
            <p>Certificados de formações front-end</p>
          </div>
          <div className="statsBox">
            <div className="box">
              <h2>Alura</h2>
              <a
                href="https://cursos.alura.com.br/certificate/0e73e370-7b32-4af8-b7bb-31dadad065b3"
                target="_blanck"
              >
                <h4>
                  Lógica de programação I: crie programas com Javascript e HTML
                </h4>
              </a>
            </div>
            <div className="box">
              <h2>Alura</h2>
              <a
                href="https://cursos.alura.com.br/certificate/94358eb1-6d02-4b67-846a-12e9ca68835d"
                target="_blanck"
              >
                <h4>HTML e CSS</h4>
              </a>
            </div>
            <div className="box">
              <h2>Rocketseat</h2>
              <h4>Trilha Fundamentar</h4>
            </div>
            <div className="box">
              <h2>Alura</h2>
              <a
                href="https://cursos.alura.com.br/certificate/pedronunes95/graphql-construindo-api-apollo-server"
                target="_blanck"
              >
                <h4>GRAPHQL: CONSTRUINDO UMA API COM APOLLO SERVER</h4>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sec work" id="portifolio">
        <div className="content">
          <div className="mxw800p center">
            <h3>Projetos recentes</h3>
            <p>Aqui são alguns dos meus projetos recentes.</p>
          </div>
          <div className="workBx">
          { repositories.map(repository =>{
            return (
              <div className="brand">
                <a
                  href={repository.html_url}
                >
                  <img src={memoria} />
                    <span>
                      <p>{repository.description}</p>
                      Tecnologias nesse projeto:
                      {repository.language}
                    </span>
                    <h2>{repository.name}</h2>
                  </a>
              </div>
             )})}
            <Slider settings={settings}>
            { repositories
            .map(repository => {
            return (
              <SwiperSlide className='teste'>
                
                <span>
                  <p>
                    {repository.description}
                  </p>
                  <a
                    href={repository.homepage}
                    target="_blanck"
                  >
                    <button>Demo</button>
                  </a>
                  <a href={repository.html_url}target="_blanck">
                    <BsGithub /> Github
                  </a>
                </span>
                <h2>{repository.name}</h2>
              </SwiperSlide>
              )})}
            </Slider>
          </div>
        </div>
      </section>
      <section className="sec contact" id="contato">
        <div className="content">
          <div className="mxw800p">
            <h3 className="">Entre em contato </h3>
            <p>
              Se preferir entre em contato prenchendo o formulário abaixo ou
              através das redes socias abaixo.
            </p>
          </div>
          <div className="contactForm">
            <form
              action="https://formsubmit.co/pedro.nunes.developer@gmail.com"
              method="POST"
            >
              <div className="row100">
                <div className="inputBx50">
                  <input type="text" name="nome" placeholder="Nome completo" />
                </div>
                <div className="inputBx50">
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="Mensagem recebida com sucesso, obrigado por entrar em contato e responderei em breve "
                  />
                  <input type="text" name="email" placeholder="Email" />
                </div>
              </div>
              <div className="row100">
                <div className="inputBx100">
                  <input name="assunto" placeholder="Assunto" />
                </div>
              </div>
              <div className="row100">
                <div className="inputBx100">
                  <textarea name="mensagem" placeholder="Mensagem" />
                </div>
              </div>
              <div className="row100">
                <div className="inputBx100">
                  <input type="submit" name value="send" />
                </div>
              </div>
            </form>
          </div>
          <div className="sci">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/pedro-nunes-m/"
                  target="_blank"
                >
                  <img src={linkedin} />
                </a>
              </li>
              <li>
                <a href="https://github.com/PedroNnsM" target="_blank">
                  <img src={github} />
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/pedro-nunes-the-lessful/"
                  target="_blank"
                >
                  <img src={codepen} />
                </a>
              </li>
            </ul>
          </div>
          <p className="copyright">
            Desenvolvido por <a href="#home">Pedro Nunes</a>
          </p>
        </div>
      </section>
    </>
  );  
}
