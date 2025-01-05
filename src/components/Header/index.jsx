export function Header(){
  function Toggle() {
    var header = document.querySelector('header');
    header.classList.toggle("active");
   } 
  return(
    
    <header id="header">
    <a href="#" className="logo">
      Pedro.dev
    </a>
    <ul>
      <li>
        <a href="#home" onClick={Toggle}>
          Início
        </a>
      </li>
      <li>
        <a href="#sobre" onClick={Toggle}>
          Sobre
        </a>
      </li>
      <li>
        <a href="#tecnologias" onClick={Toggle}>
          Tecnologias
        </a>
      </li>
      <li>
        <a href="#portifolio" onClick={Toggle}>
          Portifolio
        </a>
      </li>
      <li>
        <a href="#contato" onClick={Toggle}>
          Contato
        </a>
      </li>
    </ul>
    <div className="toggle" onClick={Toggle}></div>
  </header>
  )
} 