import React from "react";

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

export function Contact() {
  return (
    <section className="sec contact" id="contato">
      <div className="content">
        <div className="mxw800p">
          <h3>Entre em contato </h3>
          <p>
            Para maiores duvidas envie um email bacana
          </p>
        </div>
        <div className="contactForm">
          <form action="#">
            <div className="row100">
              <div className="inputBx50">
                <input type="text" name="" placeholder="Nome completo" />
              </div>
              <div className="inputBx50">
                <input type="text" name="" placeholder="Email" />
              </div>
            </div>
            <div className="row100">
              <div className="inputBx100">
                <textarea name="" placeholder="Mensagem" />
              </div>
            </div>
            <div className="row100">
              <div className="inputBx100">
                <input type="submit" value="send" />
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
          </ul>
        </div>
        <p className="copyright">
          Desenvolvido por <a href="#home">Pedro Nunes</a>
        </p>
      </div>
    </section>
  );
}
