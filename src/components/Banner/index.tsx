import React from 'react';

export function Banner(): React.ReactElement {
  return (
    <section className="banner" id="home">
      <h2>Olá, me chamo</h2>
      <h3>Pedro Nunes</h3>
      <p>
        Sou Desenvolvedor <span>Front-end</span>
      </p>
    </section>
  );
}