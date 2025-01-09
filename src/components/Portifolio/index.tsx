import React, { useEffect, useState } from "react";
import { Slider } from "../carousel/Slider";
import { SwiperSlide } from "swiper/react";
import { BsGithub } from "react-icons/bs";
import memoria from "../../assets/memoria.svg";

type Repository = {
  id: number;
  name: string;
  description: string | null;
  homepage: string | null;
  html_url: string;
  language: string | null;
};

type SliderSettings = {
  slidesPerView: number;
  spaceBetween: number;
  navigation: boolean;
  pagination: {
    clickable: boolean;
  };
};

export function Portifolio() {
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

  return (
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
                  <p>{repository.description || "Sem descrição disponível"}</p>
                  Tecnologias: {repository.language || "Desconhecida"}
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
                <p>{repository.description || "Sem descrição disponível"}</p>
                {repository.homepage ? (
                  <a
                    href={repository.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Demo</button>
                  </a>
                ) : (
                  <button disabled>Demo Indisponível</button>
                )}
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
  );
}
