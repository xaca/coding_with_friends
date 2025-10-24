import About from "../../ui/About/About";
import Agenda from "../../ui/Agenda/Agenda";
import Register from "../../ui/Register/Register";
import Speaker from "../../ui/Speaker/Speaker";
import MainLayout from "../../ui/MainLayout/MainLayout";
import Info from "../../ui/Info/Info";
import PastEvent from "../../ui/PastEvent/PastEvent";
import avatar_speaker_1 from "../../../assets/img/alonso.jpg";
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
            <DecoracionDerecha />
            <DecoracionIzquierda />
        <MainLayout logoPersonalizado={logo_evento}>
            <section id="in_person_event">
            <Info info={{
                title:"Construyendo Full-Stack con Cursor: Un Nuevo Paradigma de Colaboración con tu Agente de Código",
            logo:talks_logo,
            image:"",
            date: `Jueves 23 de octubre de 2025`,
            venue: `Auditorio Ignacio Viera`,
            time: `05:30 - 8:00`,
            youtube_url: "",
            description: `En esta charla/demo compartiré cómo he estado usando Cursor como entorno principal para desarrollar aplicaciones full-stack. Durante los últimos 6 meses he reescrito proyectos completos mientras aprendía a acelerar el ciclo de feedback del agente para que trabaje de forma más autónoma y eficiente. Verás en vivo cómo estructuro un flujo de trabajo con que va más allá del autocomplete, y cerraré con 3 aprendizajes clave sobre por qué este enfoque realmente funciona.`
            }} />
            <About />
            <Register />
            <img src={disco_top} alt="Disco top" />
            {/*<Agenda />*/}
            <section id="speakers">
            <h1>Biografías</h1>
            <section>
            <Speaker speaker={{
                name:"Alonso Suarez ",
                avatar:avatar_speaker_1,
                handles:[
                    {id:0, url:"https://ca.linkedin.com/in/alonsosuarez"},
                    {id:2, url:"https://github.com/alonch"}
                ],
                is_alumni:false,
                graduation_year:0,
                description:`I'm someone who's lucky enough to genuinely love what I do. My journey with tech started back in high school, running my cousin’s cybercafé—hacking around with host files and connecting to pirate game servers (for educational purposes, of course 😅).
                
                These days, I’m focused on rethinking how we work. I believe a lot of the systems we rely on were designed for a different era—and I’m curious: how would we solve those same problems if we had today’s tools and knowledge?
                
                Outside of work, I’m a proud dad of two 👨‍👩‍👧‍👧, a maker at heart 🛠—currently combining electronics and wood—and I dream of a future where building software feels like snapping LEGO blocks together 🌈.`
            }} />                    
            </section>
            </section> 
            <img src={disco_bottom} alt="Disco bottom"  />
            {/*<PastEvent />*/}
            </section>
        </MainLayout>
    </>);
}
export default InPersonEvent;