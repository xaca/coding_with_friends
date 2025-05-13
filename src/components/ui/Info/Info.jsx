import { FaYoutube } from "react-icons/fa";
function Intro({info}){
    return(<>
    <section className="intro_evento">
      <img src={info.logo} className="logo_evento" alt="" />
      <img src={info.image} className="imagen_intro_evento" alt="" />
      <br />
      <p>
       {info.description}
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
        <div>
          {info.youtube_url === "" ? (
            <div>
              <p>
                El evento se realizará en el campus laureles de la Universidad Pontificia Bolivariana de Medellín (clic <a href="https://www.upb.edu.co/es/universidad/nuestro-campus/campus-medellin/laureles/como-llegar" target="_blank">aquí</a> para ver como llegar).
              </p>
              <br />
            </div>
          ) : (
            <div>
              <p className="enlace_evento">
                <strong>Lugar:</strong> &nbsp;
                <a href={info.youtube_url} target="_blank"><FaYoutube /> Online - youtube</a>
              </p>
              <br />
            </div>
          )}
        </div>
        <p className="fecha">
          <span>Hora:</span> {info.time}
        </p><br />
        {info.youtube_url === "" ? <span className="mensaje_importante">
          * Traer documento de identidad para poder ingresar a la universidad.
        </span> : ""}
      </section>
      </>);
  }
  export default Info;