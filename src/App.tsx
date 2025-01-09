import React, { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { SobreMim } from "./components/SobreMim";
import "./components/carousel/Slider.css";

import { Banner } from "./components/Banner";
import { Tecnologias } from "./components/Tecnologias/Index";
import { Portifolio } from "./components/Portifolio";

type Repository = {
  id: number;
  name: string;
  description: string;
  homepage: string | null;
  html_url: string;
  language: string;
};

type SliderSettings = {
  slidesPerView: number;
  spaceBetween: number;
  navigation: boolean;
  pagination: {
    clickable: boolean;
  };
};

export function App() {
  const [show, setShow] = useState<boolean>(true);

  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (header) {
      header.classList.toggle("sticky", window.scrollY > 0);
    }
  });

  return (
    <>
      <Header />
      <Banner />
      <SobreMim show={show} setShow={setShow} />
      <Tecnologias />
      <Portifolio />
    </>
  );
}
