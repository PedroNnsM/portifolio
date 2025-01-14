import React from "react";

const Mockdata = [
  {
    nome: "Menu para redes sociais",
    link: `https://menu-social.vercel.app/`,
    descricao:
      "Uma aplicação para o menu social desenvolvida junto com a rocketseat utilizando html e css para montar um menu de links para redes sociais.",
  },
];

type ProjetosProps = {
  link: string;
  nome: string;
  descricao: string;
  imagem?: string;
};

export function Projetos({ link, nome, descricao, imagem }: ProjetosProps) {
  return (
    <div className="brand">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {imagem ? <img src={imagem} alt={nome} /> : null}
        <span>
          <p>{descricao}</p>
        </span>
        <h2>{nome}</h2>
      </a>
    </div>
  );
}
