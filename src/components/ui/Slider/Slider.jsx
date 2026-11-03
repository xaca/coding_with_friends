import "./Slider.scss";
import { useEffect } from "react";
import SliderConfig from "./SliderConfig.js";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const FORM_CHARLA_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScxpw_pl_RGVQqzbIh2pkDP1Xy1qt04S7FwVGYDF_elii3XCQ/viewform?usp=header"; // Pega aquí el link del Google Forms

// Slider component displays a carousel of images or content
function Slider({ id_slider }) {
  useEffect(() => {
    new SliderConfig(document.getElementById(id_slider));
  }, [""]);

  return (
    <div className="carousel" id={id_slider}>
      <div className="carousel-prev">
        <MdKeyboardArrowLeft />
      </div>
      <div className="carousel-next">
        <MdKeyboardArrowRight />
      </div>
      <ul className="carousel-pagination"></ul>
      <ul className="carousel-container">
        <li className="carousel-item" id="banner_1">
          <section className="contenedor_texto">
            <h2>🎤 Charlas 🎤</h2>
            <p>
              Este semestre tendremos nuevas charlas, eventos especiales y
              actividades para toda la comunidad, no te las pierdas.
            </p>
            <a
              className="btn-postula"
              href={FORM_CHARLA_URL || undefined}
              target="_blank"
              rel="noopener noreferrer"
            >
              Postula tu charla
            </a>
          </section>
        </li>
        <li className="carousel-item" id="banner_2">
          <section className="contenedor_texto">
            <h2>Cine Club 🍿</h2>
            <p>
              Cada sabado organizamos una salida a cine, si quieres unirte a
              nosotros, no dudes en contactarnos.
            </p>
          </section>
        </li>
        <li className="carousel-item" id="banner_3">
          <section className="contenedor_texto">
            <h2>Deportes 🏀</h2>
            <p>
              Tenemos actividades deportivas y torneos en diferentes
              disciplinas, próximamente más información.
            </p>
          </section>
        </li>
      </ul>
    </div>
  );
}
export default Slider;
