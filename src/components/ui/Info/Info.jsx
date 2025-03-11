function Intro({info}){
  return(<>
  <section className="intro_evento">
    <img src={info.logo} className="logo_evento" alt="" />
    <img src={info.image} className="imagen_intro_evento" alt="" />
    <br />
    <p>
      DataSoul: ¡Hola! Somos Valen y Lau, creadoras y hosts de DataSoul Podcast, un espacio seguro para compartir experiencias trabajando en la industria tech, así como hablar de temas de los que poco se habla pero que todos enfrentamos en algún momento.
    </p>
    <h2>Episodio:</h2>
    <p>
      <span>Más allá del código: docencia y liderazgo</span>
    </p>
    <p>
      En este episodio nos acompañará Cristina Gómez, DS Project Lead en Mercado Libre Colombia. Hablaremos sobre cómo las habilidades de docente pueden convertirse en una base sólida para el liderazgo de equipos. Nuestra invitada, nos contará su experiencia,  retos y aprendizajes sobre trabajar en la academia y en la industria tech.
    </p>
    <p> 
      ¡No te pierdas este episodio en vivo!
    </p>
</section>
  </>);
}
function Info({info})
{
    return (<>
    <Intro info={info} />
    <section id="info">
      <h1>Información sobre el evento</h1>
      <p className="fecha">
        <span>Fecha:</span> {info.date}</p>
      <br />
      <p>
        El evento se realizará en el campus laureles de la Universidad Pontificia Bolivariana de Medellín (clic  <a href="https://www.upb.edu.co/es/universidad/nuestro-campus/campus-medellin/laureles/como-llegar" target="_blank">aquí</a>  para ver como llegar).
      </p><br />
      <p className="fecha">
        <span>Lugar:</span> {info.venue}
      </p><br />
      <p className="fecha">
        <span>Hora:</span> {info.time}
      </p><br />
      <span className="mensaje_importante">
        * Traer documento de identidad para poder ingresar a la universidad.
      </span>
    </section>
    </>);
}
export default Info;