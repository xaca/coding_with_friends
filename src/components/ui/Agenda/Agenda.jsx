import { v4 as uuidv4 } from 'uuid';

// Agenda component displays the schedule of events
function Agenda() {
  return (
    <section id="agenda">
    <h1>Agenda</h1>
    <ul>
      <li className="item">
        <span>[17:00 - 17:40]</span> 
        <span>Llegada de participantes, espacio de networking</span>
        <br />
      </li>
      <li className="item">
        <span>[18:00 - 19:00]</span>
        <span>Episodio en vivo DataSoul Podcast </span>
        <span className="speaker">
          / Ana Isabel Oviedo
        </span>
      </li>
      <li className="item">
        <span>[19:10 - 20:00]</span> 
        <span>Rifas, networking y foto del evento</span> 
      </li>
    </ul>
    <br />
    </section>
  );
}
export default Agenda;