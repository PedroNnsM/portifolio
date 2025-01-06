import React from "react";
import foto from "./assets/foto.png";

type SobreMimProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SobreMim({ show, setShow }: SobreMimProps) {
  return (
    <section className="sec" id="sobre">
      <div className="content">
        <div className="mxw800p">
          <h3>Sobre mim</h3>
          {show ? (
            <div>
              <p>
                Sou desenvolvedor Front-end, estudo e atuo em projetos pessoais
                desde 2021. Atualmente estou cursando Análise e Desenvolvimento
                de Sistemas e o curso de Desenvolvimento Web na{" "}
                <a
                  href="https://www.alura.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alura
                </a>
                .
              </p>
              <button className="btn" onClick={() => setShow(!show)}>
                Ver mais
              </button>
            </div>
          ) : (
            <div className="saibaMais">
              <img src={foto} alt="Pedro Nunes" />
              <p>
                Sou natural de Porto Alegre RS, mas moro em Florianópolis SC.
                Com o nascimento do meu filho comecei a procurar mudanças na
                minha vida e foi aí que ingressei na faculdade de Análise e
                Desenvolvimento de Sistemas.
              </p>
              <button className="btn bt2" onClick={() => setShow(!show)}>
                Ver menos
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
