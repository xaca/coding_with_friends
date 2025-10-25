import "./Slider.scss";
import { useEffect, useState } from "react";
import SliderConfig from "./SliderConfig.js";
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";
import TypewriterText from "../TypewriterText/TypewriterText";


function Slider({id_slider}){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [typewriterKeys, setTypewriterKeys] = useState([0, 0, 0]);

    useEffect(() => {
        const sliderInstance = new SliderConfig(document.getElementById(id_slider)); 
        
    
        const originalSlideTo = sliderInstance.slideTo.bind(sliderInstance);
        sliderInstance.slideTo = (index) => {
            originalSlideTo(index);
            setCurrentSlide(index);
            
            setTypewriterKeys(prev => {
                const newKeys = [...prev];
                newKeys[index] = prev[index] + 1;
                return newKeys;
            });
        };
    },[""]);

    return(
        <> 
        <div className="carousel" id={id_slider}>
            <div className="carousel-prev">
                <MdKeyboardArrowLeft />
            </div>
            <div className="carousel-next">
                <MdKeyboardArrowRight />
            </div>
            <ul className="carousel-pagination">
            </ul>
            <ul className="carousel-container">
                <a href="#">
                <li className="carousel-item" id="banner_1"> 
                <section className="contenedor_texto">
                    <h2>
                        <TypewriterText 
                            key={`banner_1_${typewriterKeys[0]}`}
                            text="Charlas 🎤" 
                            speed={80} 
                            delay={currentSlide === 0 ? 500 : 200}
                        />
                    </h2>
                    <p>
                    Este semestre tendremos nuevas charlas, eventos especiales y actividades para toda la comunidad, no te las pierdas.
                    </p>
                </section>
                </li>
                </a> 
                <a href="#">
                <li className="carousel-item" id="banner_2">
                <section className="contenedor_texto">
                    <h2>
                        <TypewriterText 
                            key={`banner_2_${typewriterKeys[1]}`}
                            text="Cine Club 🍿" 
                            speed={80} 
                            delay={currentSlide === 1 ? 500 : 200}
                        />
                    </h2>
                    <p>
                        Cada sabado organizamos una salida a cine, si quieres unirte a nosotros, no dudes en contactarnos.
                    </p>
                </section>
                </li>
                </a>
                <a href="#">
                <li className="carousel-item" id="banner_3">
                <section className="contenedor_texto">
                    <h2>
                        <TypewriterText 
                            key={`banner_3_${typewriterKeys[2]}`}
                            text="Deportes 🏀" 
                            speed={80} 
                            delay={currentSlide === 2 ? 500 : 200}
                        />
                    </h2>
                    <p>
                    Tenemos actividades deportivas y torneos en diferentes disciplinas, próximamente más información.
                    </p>
                </section>
                </li>
                </a>            
            </ul>
        </div>
        </>
    );
}
export default Slider;