import React, { useState, useEffect } from "react";
import { Slider } from "./components/carousel/Slider";
import { SwiperSlide } from "swiper/react";
import { BsGithub } from 'react-icons/bs';
import { Header } from "./components/Header";
import { SobreMim } from "./components/SobreMim";
import "./components/carousel/Slider.css";

import memoria from "./assets/memoria.svg";
import { Banner } from "./components/Banner";



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

     <SobreMim show={show} setShow={setShow} />

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
     
    </>
  );
}
