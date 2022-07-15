import { FaCode } from 'react-icons/fa';
import img from './public/img.png';

export function App() {

  window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
    });
  
  return (
    <>
      <header id='header'>
        <a href="#" className="logo">
          Pedro.dev
        </a>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#tecnologias">Tecnologias</a>
          </li>
          <li>
            <a href="#portifolio">Portifolio</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
          <li>
            <a href="#social">Redes</a>
          </li>
        </ul>
      </header>

      <section className="banner" id="home">
        <h2>
          Desenvolvedor <span>Front-end</span>{" "}
        </h2>
      </section>

      <section className="sec" id="sobre">
        <div className="content">
          <div className="mxw800p">
            <h3>Sobre mim</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis corporis quis culpa quaerat dolor ut. Consectetur,
              dolore ipsam placeat quam aut ullam similique mollitia,
              aspernatur, non ratione officia corporis aliquid.
            </p>
            <a href="#" className="btn">
              Ver mais
            </a>
          </div>
        </div>
      </section>

      <section className="sec" id="tecnologias">
        <div className="content">
          <div className="mxw800p">
            <h3>Tecnologias que utilizo</h3>
            <p>
             Projetos realizados com as seguintes tecnologias:         
            </p>

          </div>
          <div className="services">
            <div className="box">
              <div className="iconBx">
              <img src={ img }/>
              </div>
              <div className="content">
                <h2>HTML</h2>
                <p>Lorem ipsum dolor sit amet repudiandae beatae ratione?</p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
                <img src={ img }/>
              </div>
              <div className="content">
                <h2>CSS</h2>
                <p>Lorem ipsum dolor sit amet repudiandae beatae ratione?</p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
              <img src={ img }/>
              </div>
              <div className="content">
                <h2>Javascript</h2>
                <p>Lorem ipsum dolor sit amet repudiandae beatae ratione?
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad consectetur animi error, tenetur consequatur sit enim laboriosam quis exercitationem laborum consequuntur. Quisquam voluptatum error iure quod tempora perferendis, quidem quaerat?
                </p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
              <img src={ img }/>
              </div>
              <div className="content">
                <h2>React.js</h2>
                <p>Lorem ipsum dolor sit amet repudiandae beatae ratione?
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad consectetur animi error, tenetur consequatur sit enim laboriosam quis exercitationem laborum consequuntur. Quisquam voluptatum error iure quod tempora perferendis, quidem quaerat?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec stats" id="">
        <div className="content">
          <div className="mxw800p">
            <h3>Meus trabalhos</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis corporis quis culpa qua
            </p>      
          </div>
          <div className="statsBox">
          <div className="box">
              <h2>1200+</h2>
              <h4>Projects</h4>
            </div>
            <div className="box">
              <h2>800+</h2>
              <h4>Happy clients</h4>
            </div>
            <div className="box">
              <h2>150+</h2>
              <h4>Countries</h4>
            </div>
            <div className="box">
              <h2>50+</h2>
              <h4>Awards</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="sec work" id="portifolio">
        <div className="content">
          <div className="mxw800p">
            <h3>Projetos recentes</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis corporis quis culpa 
            </p>
          </div>
          <div className="workBx">
            <div className="brand">
              <a href="#"><h2>Brand</h2></a>
            </div>
            <div className="brand">
              <a href="#"><h2>Brand</h2></a>
            </div>
            <div className="brand">
              <a href="#"><h2>Brand</h2></a>
            </div>
            <div className="brand">
              <a href="#"><h2>Brand</h2></a>
            </div>
            <div className="brand">
              <a href="#"><h2>Brand</h2></a>
            </div>
            <div className="brand">
              <a href="#"><h2>Brand</h2></a>
            </div>
            <div className="brand">
              <a href="#"><h2>Brand</h2></a>
            </div>
            <div className="brand">
              <a href="#"><h2>Brand</h2></a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="contat">
        <div className="content">
          <div className="mxw800p">
            <h3>Sobre mim</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis corporis quis culpa quaerat dolor ut. Consectetur,
              dolore ipsam placeat quam aut ullam similique mollitia,
              aspernatur, non ratione officia corporis aliquid.
            </p>
            <a href="#" className="btn">
              Ver mais
            </a>
          </div>
        </div>
      </section>
      
    </>
  );  
}
