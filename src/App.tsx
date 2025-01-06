import React, { useState, useEffect } from "react";
import { Slider } from "./components/carousel/Slider";
import { SwiperSlide } from "swiper/react";
import { BsGithub } from 'react-icons/bs';
import { Header } from "./components/Header";
import "./components/carousel/Slider.css";

import memoria from "./assets/memoria.svg";

import foto from "./assets/foto.png";

type Repository = {
  id: number;
  name: string;
  description: string;
  homepage: string | null;
  html_url: string;
  language: string;
};

type SliderSettings = {
  slidesPerView: number;
  spaceBetween: number;
  navigation: boolean;
  pagination: {
    clickable: boolean;
  };
};

export function App() {
  const [show, setShow] = useState<boolean>(true);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/PedroNnsM/repos")
      .then((response) => response.json())
      .then((data: Repository[]) => setRepositories(data));
  }, []);

  const repositoriesFilter = repositories.filter(
    (repository) => repository.homepage === null
  );

  const settings: SliderSettings = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (header) {
      header.classList.toggle("sticky", window.scrollY > 0);
    }
  });

  return (
    <>
      <Header />

     <Banner />

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
                  e por isso voltei meus estudos para Front-end.
                  <br />
                  Atualmente estou cursando Análise e Desenvolvimento de
                  Sistemas na Estácio de Sá, e também estou cursando o curso de
                  Desenvolvimento Web na{" "}
                  <a
                    href="https://www.alura.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                    <img src={foto} alt="Minha foto" />
                    <p>
                      Sou natural de Porto Alegre RS, mas moro em Florianópolis
                      SC.
                      <br />
                      Sempre amei tecnologia e jogos eletrônicos...
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
        {/* ... seção de tecnologias */}
      </section>

      <section className="sec work" id="portifolio">
        <div className="content">
          <h3>Projetos Recentes</h3>
          <div className="workBx">
            {repositories.map((repository) => (
              <div className="brand" key={repository.id}>
                <a
                  href={repository.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={memoria} alt="Projeto" />
                  <span>
                    <p>{repository.description}</p>
                    Tecnologias: {repository.language}
                  </span>
                  <h2>{repository.name}</h2>
                </a>
              </div>
            ))}
          </div>
          <Slider settings={settings}>
            {repositories.map((repository) => (
              <SwiperSlide className="teste" key={repository.id}>
                <span>
                  <p>{repository.description}</p>
                  <a
                    href={repository.homepage ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Demo</button>
                  </a>
                  <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub /> Github
                  </a>
                </span>
                <h2>{repository.name}</h2>
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </section>
     
    </Banner>
  );
}
