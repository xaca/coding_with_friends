import About from "../../ui/About/About";
import Agenda from "../../ui/Agenda/Agenda";
import Register from "../../ui/Register/Register";
import Speaker from "../../ui/Speaker/Speaker";
import Header from "../../ui/Header/Header";
import Menu from "../../ui/Menu/Menu";
import Footer from "../../ui/Footer/Footer";
import Info from "../../ui/Info/Info";
import PastEvent from "../../ui/PastEvent/PastEvent";
import logo_evento from "../../../assets/img/logo_evento_datasoul.svg";
import avatar_speaker_1 from "../../../assets/img/01_speaker.png";
import avatar_speaker_2 from "../../../assets/img/02_speaker.png";
import avatar_speaker_3 from "../../../assets/img/03_speaker.png";
import fondo_derecha from "../../../assets/img/esquina_derecha.png";
import fondo_izquierda from "../../../assets/img/cassete_izquierda.png";
import disco_top from "../../../assets/img/disco_top.png";
import disco_bottom from "../../../assets/img/disco_bottom.png";
import datasoul_retrato from "../../../assets/img/datasoul_retrato.jpg";
import datasoul_logo from "../../../assets/img/datasoul_logo.jpg";
import "./events.scss";
import "../../../css/speakers.scss";
import "../../../css/lista.scss";
/*
Identificadores imagenes redes:
    0 - linkedin
    1 - instagram
    2 - github
    3 - website
*/

function DecoracionDerecha(){
    const style = {
        position:"absolute",
        right:0,
        top:0,
        width:"567px",
        height:"136px",
        zIndex: "-1",
        backgroundImage: `url(${fondo_derecha})`
    }
    return (
        <div className="decoracion_derecha" style={style}>
        </div>
    );
}

function DecoracionIzquierda(){
    const style = {
        position:"absolute",
        bottom: "-260%",
        left: "-90px",
        width:"336px",
        height:"478px",
        zIndex: "-1",
        filter: "opacity(30%)",
        backgroundImage: `url(${fondo_izquierda})`
    }
    return (
        <div className="decoracion_izquierda" style={style}>
        </div>
    );
}


function InPersonEvent(){
    return (<>
        <section id="in_person_event">
        <DecoracionDerecha />
        <DecoracionIzquierda />
        <Header logoPersonalizado={logo_evento} />
        <Menu />
        <Info info={{
            logo:datasoul_logo,
            image:datasoul_retrato,
            date: `Jueves 5 de marzo de 2026`,
            venue: `Auditorio Ignacio Viera (Arquidiseño)`,
            time: `17:00 - 20:00`
        }} />
        <About />
        <Register />
        <img src={disco_top} alt="Disco top" />
        <Agenda />
        <section id="speakers">
        <h1>Biografías</h1>
        <section>
            <Speaker speaker={{
                name:"Valen Ariza Gómez",
                avatar:avatar_speaker_1,
                handles:[
                    {id:0, url:"https://www.linkedin.com/in/valearizag/"},
                    {id:1, url:"https://www.instagram.com/valearizag/"}
                ],
                is_alumni:true,
                graduation_year:2020,
                description:`Ingeniera en telecomunicaciones por profesión e ingeniera de datos por pasión, con +3 años de experiencia. Cuenta con habilidades para la construcción de pipelines (ETL) automatizadas mediante implementaciones end-to-end basadas en datos. Es capaz de entender las necesidades de sus clientes y a partir de ahí ha diseñado y aprovisionado arquitecturas en Microsoft Azure costo-eficientes. También cuenta con experiencia en Gobierno de datos relacionado con el framework DAMA usando la herramienta Microsoft Purview.`
            }} />
            <Speaker speaker={{
                name:"Laura López Bedoya",
                avatar:avatar_speaker_2,
                handles:[
                    {id:0, url:"https://www.linkedin.com/in/lauralpezb/"},
                    {id:1, url:"https://www.instagram.com/lauralpezb/"}
                ],
                is_alumni:true,
                graduation_year:2019,
                description:`Científico de datos. Estoy interesado en la comprensión y aplicación del aprendizaje automático y el análisis de datos para generar conocimientos y soluciones valiosas.`
            }} />
            <Speaker speaker={{
                name:"Ana Isabel Oviedo",
                avatar:avatar_speaker_3,
                handles:[
                    {id:0, url:"https://www.linkedin.com/in/ana-isabel-oviedo-carrascal-88808944/"},
                ],
                is_alumni:false,
                description:`PhD. Investigadora, Consultora y Docente con experiencia en proyectos de Ciencia de Datos. Áreas de interés en Analítica de datos, Minería de Datos, Aprendizaje de Máquinas, Procesamiento multimedia e Inteligencia Artificial. `
            }} />            
        </section>
        </section> 
        <img src={disco_bottom} alt="Disco bottom"  />
        <PastEvent />
    </section>
    <Footer />
    </>);
}
export default InPersonEvent;