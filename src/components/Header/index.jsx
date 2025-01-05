export function Header() {
  const menuItems = [
    { href: "#home", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#tecnologias", label: "Tecnologias" },
    { href: "#portifolio", label: "Portifolio" },
    { href: "#contato", label: "Contato" },
  ];

  function Toggle() {
    const header = document.querySelector('header');
    header.classList.toggle("active");
  }

  return (
    <header id="header">
      <a href="#" className="logo">
        Pedro.dev
      </a>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} onClick={Toggle}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="toggle" onClick={Toggle}></div>
    </header>
  );
}
