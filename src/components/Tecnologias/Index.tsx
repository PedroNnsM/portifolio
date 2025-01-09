import React from "react";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";

const techs = [
  {
    img: html,
    name: "HTML",
    description: "HTML é a linguagem de marcação para documentos web.",
  },
  {
    img: css,
    name: "CSS",
    description: "CSS define o estilo e comportamento de documentos HTML.",
  },
  {
    img: js,
    name: "JavaScript",
    description: "JavaScript é uma linguagem de programação para web.",
  },
  {
    img: react,
    name: "React.js",
    description: "React cria interfaces através de componentes.",
  },
];
export function Tecnologias() {
  return (
    <section className="sec" id="tecnologias">
      <div className="content">
        <h3>Tecnologias que utilizo</h3>
        <div className="tec">
          {techs.map((tech, index) => (
            <div className="box" key={index}>
              <div className="iconBx">
                <img src={tech.img} alt={tech.name} />
              </div>
              <div className="content">
                <h2>{tech.name}</h2>
                <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
