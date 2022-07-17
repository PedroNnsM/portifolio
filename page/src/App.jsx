
import  react  from './public/react.png';
import  html  from './public/html.png';
import  css  from './public/css.png';
import  js  from './public/js.png';
import  github  from './public/github.png';
import  linkedin  from './public/linkedin.png';
import  codepen  from './public/codepen.png';



export function App() {
  

  window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
    });
  
   function Toggle() {
    var header = document.querySelector('header');
    header.classList.toggle("active");
   } 
  
  return (
    <>
      <header id="header">
        <a href="#" className="logo">
          Pedro.dev
        </a>
        <ul>
          <li>
            <a href="#home" onClick={Toggle}>Home</a>
          </li>
          <li>
            <a href="#sobre" onClick={Toggle}>Sobre</a>
          </li>
          <li>
            <a href="#tecnologias" onClick={Toggle}>Tecnologias</a>
          </li>
          <li>
            <a href="#portifolio" onClick={Toggle}>Portifolio</a>
          </li>
          <li>
            <a href="#contato" onClick={Toggle}>Contato</a>
          </li> 
          <li>
            <a href="#social" onClick={Toggle}>Redes</a>
          </li>
        </ul>
        <div className="toggle" onClick={Toggle}></div>
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
            <p>Projetos realizados com as seguintes tecnologias:</p>
          </div>
          <div className="services">
            <div className="box">
              <div className="iconBx">
                <img src={html} />
              </div>
              <div className="content">
                <h2>HTML</h2>
                <p>Lorem ipsum dolor sit amet repudiandae beatae ratione?</p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
                <img src={css} />
              </div>
              <div className="content">
                <h2>CSS</h2>
                <p>Lorem ipsum dolor sit amet repudiandae beatae ratione?</p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
                <img src={js} />
              </div>
              <div className="content">
                <h2>Javascript</h2>
                <p>
                  Lorem ipsum dolor sit amet repudiandae beatae ratione? Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  consectetur animi error, tenetur consequatur sit enim
                  laboriosam quis exercitationem laborum consequuntur. Quisquam
                  voluptatum error iure quod tempora perferendis, quidem
                  quaerat?
                </p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
                <img src={react} />
              </div>
              <div className="content">
                <h2>React.js</h2>
                <p>
                  Lorem ipsum dolor sit amet repudiandae beatae ratione? Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  consectetur animi error, tenetur consequatur sit enim
                  laboriosam quis exercitationem laborum consequuntur. Quisquam
                  voluptatum error iure quod tempora perferendis, quidem
                  quaerat?
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
              <a href="#">
                <h2>Brand</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand</h2>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec contact" id="contato">
        <div className="content">
          <div className="mxw800p">
            <h3>Entre em contato </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis corporis
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
                  <input type="submit" name value="send" />
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
              <li>
                <a
                  href="https://codepen.io/pedro-nunes-the-lessful/"
                  target="_blank"
                >
                  <img src={codepen} />
                </a>
              </li>
            </ul>
          </div>
          <p className="copyright">
            Desenvolvido por <a href="#home">Pedro Nunes</a>
          </p>
        </div>
      </section>
    </>
  );  
}
