import styles from './carousel.module.css';


export function Carousel() {
    return (
        <div className="container">
          <div className="carousel">
            <div className="item">
              <div className="image">
                <img src="../../../assets/memoria.png" />
              </div>
              <div className="info">
              <span className="name">Jogo da Memoria</span>
              <span className="tecnologia">Html, Css e JS</span>
              <span className="link"><a href="2">link</a></span>
              </div>
            </div>
          </div>
        </div>
    )
}