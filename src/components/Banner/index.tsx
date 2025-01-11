import React from "react";

export function Banner(): React.ReactElement {
  return (
    <section className="sec" id="home">
      <h2 className="text-center font-bold text-blue-600 uppercase text-[1.7em]">
        Olá, me chamo
      </h2>
      <h3 className="text-5xl font-bold text-white font-permanent-marker">
        Pedro Nunes
      </h3>
      <p className="font-bold text-blue-600 uppercase text-[1.8em]">
        Sou Desenvolvedor{" "}
        <span className="text-white border-r-2 border-white px-2">
          Front-end
        </span>
      </p>
    </section>
  );
}
