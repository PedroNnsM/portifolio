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

      <section className="sec" id="portifolio">
        <div className="content">
          <div className="mxw800p">
            <h3>Sobre mim</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         
            </p>

          </div>
          <div className="services">
            <div className="box">
              <div className="iconBx">
              <img src={ img }/>
              </div>
              <div className="content">
                <h2>Desing</h2>
                <p>Lorem ipsum dolor sit amet repudiandae beatae ratione?</p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
                <img src={ img }/>
              </div>
              <div className="content">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet repudiandae beatae ratione?</p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
              <img src={ img }/>
              </div>
              <div className="content">
                <h2>Desenvolvedor</h2>
                <p>Lorem ipsum dolor sit amet repudiandae beatae ratione?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );  
}
