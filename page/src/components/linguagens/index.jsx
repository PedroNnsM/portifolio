import React from "react";
import html from "../../assets/img/html.png";

const mockData = [
    {
        imagem: ,
        name: "HTML",
        descricao: "HTML é a linguagem de marcação de documentos web"
    }];

    




export function Tecnologias() {
   return (
    <div className="box">
    <div className="iconBx">
      <img src={html} />
    </div>
    <div className="content">
      <h2>HTML</h2>
      <p>HTML é a linguagem de marcação de documentos web.</p>
    </div>
  </div>
    )
}