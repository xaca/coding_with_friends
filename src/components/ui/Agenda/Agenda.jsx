import { v4 as uuidv4 } from 'uuid';

function Agenda() {
  return (
    <section id="agenda">
    <h1>Agenda</h1>
    <ul>
      <li className="item" key={uuidv4()}>
        <span>[17:00 - 17:30]</span> 
        <span>Llegada de participantes, espacio de networking</span>
        <br />
      </li>
      <li className="item" key={uuidv4()}>
        <span>[17:40 - 18:30]</span>
        <span>Lightning talk - Aprendiendo, creciendo y liderando: Cómo construí mi propia carrera</span>
        <span className="speaker">
          / Valeria Moreno Zapata
        </span>
      </li>
      <li className="item" key={uuidv4()}>
        <span>[18:40 - 19:20]</span> 
        <span>Podcast en vivo - Más allá del código:docencia y liderazgo</span> 
        <span className="speaker">
          / Cristina Gómez Santamaría / Valen Ariza Gómez / Laura López Bedoya 
        </span>
      </li>
      <li className="item" key={uuidv4()}>
        <span>[19:30 - 20:00]</span> 
        <span>Actividad de cierre</span> 
        <span className="speaker">
          / Valiente
        </span>
      </li>
    </ul>
    </section>
  );
}
export default Agenda;