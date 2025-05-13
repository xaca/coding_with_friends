import About from "../../ui/About/About";
import Agenda from "../../ui/Agenda/Agenda";
import Register from "../../ui/Register/Register";
import Speaker from "../../ui/Speaker/Speaker";
import MainLayout from "../../ui/MainLayout/MainLayout";
import Info from "../../ui/Info/Info";
import PastEvent from "../../ui/PastEvent/PastEvent";
import avatar_speaker_1 from "../../../assets/img/speaker_01.jpg";
import avatar_speaker_2 from "../../../assets/img/speaker_02.jpg";
import fondo_derecha from "../../../assets/img/esquina_derecha.png";
import fondo_izquierda from "../../../assets/img/cassete_izquierda.png";
import disco_top from "../../../assets/img/disco_top.png";
import disco_bottom from "../../../assets/img/disco_bottom.png";
import logo_evento from "../../../assets/img/logo_talk.png";
import talks_logo from "../../../assets/img/talks_logo.png";
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
        width:"525px",
        height:"170px",
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
        <MainLayout logoPersonalizado={logo_evento}>
            <section id="in_person_event">
            <DecoracionDerecha />
            <DecoracionIzquierda />
            {/*<Header logoPersonalizado={logo_evento} />
            <Menu />*/}
            <Info info={{
            logo:talks_logo,
            image:"",
            date: `Miércoles 14 de mayo de 2025`,
            venue: `Online - youtube`,
            time: `10:00 - 12:00`,
            youtube_url: "https://youtube.com/live/5Fw5QuW0JT4",
            description: `La charla abordará los fundamentos de Git y cómo utilizarlo eficazmente para el control de versiones. Se explicarán distintas estrategias de branching como Git Flow, GitHub Flow y trunk-based development, destacando sus ventajas, desventajas y casos de uso. Además, se mostrará cómo sería un flujo de trabajo con un ejercicio práctico.`
            }} />
            <About />
            <Register />
            <img src={disco_top} alt="Disco top" />
            {/*<Agenda />*/}
            <section id="speakers">
            <h1>Biografías</h1>
            <section>
            <Speaker speaker={{
                name:"Stefany Cárdenas Martínez",
                avatar:avatar_speaker_1,
                handles:[
                    {id:0, url:"https://www.linkedin.com/in/stefacm/"},
                    {id:2, url:"https://www.github.com/stefacm/"}
                ],
                is_alumni:false,
                graduation_year:0,
                description:`Stefany Cárdenas Martínez es Ingeniera de Sistemas egresada de la Universidad de La Amazonia y actualmente se desempeña como Desarrolladora de Software en PRAGMA S.A., con más de tres años de experiencia en desarrollo frontend. Ha trabajado con tecnologías como React.js, TypeScript, Gatsby, Next.js y Contentful, participando en proyectos digitales en sectores educativos y corporativos.
Se caracteriza por ser una persona responsable, atenta al detalle y con buen desempeño en el trabajo en equipo, lo que le ha permitido adaptarse a diferentes entornos y aportar de manera efectiva en los proyectos en los que participa.`
            }} />
            <Speaker speaker={{
                name:"Santiago Quintero García",
                avatar:avatar_speaker_2,
                handles:[
                    {id:0, url:"https://www.linkedin.com/in/santiquinterog/"},
                    {id:2, url:"https://www.github.com/santiquinterog/"}
                ],
                is_alumni:true,
                graduation_year:2020,
                description:`Ingeniero de Sistemas e Informática orientado al Desarrollo Web como Front-end, con conocimientos básicos de inglés y manejo de aplicaciones informáticas. A lo largo de la carrera se ha adquirido disciplina y capacidad de comunicación asertiva. Conocimientos en Marketing Automation, manejo de plataformas de SMS Marketing, Email Marketing y construcción de correos HTML. Egresado de la Universidad Pontificia Bolivariana donde también se ha ejercido como docente, dictando un curso de Maquetador Web en varias ocasiones. Con alto grado de responsabilidad social y ética profesional, bases para una mejor investigación en la adquisición de nuevos conocimientos, trabajo en equipo e innovación.`
            }} />           
            </section>
            </section> 
            <img src={disco_bottom} alt="Disco bottom"  />
            <PastEvent />
            </section>
        </MainLayout>
    </>);
}
export default InPersonEvent;