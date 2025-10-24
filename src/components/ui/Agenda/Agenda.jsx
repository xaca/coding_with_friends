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
        <span>Construyendo Full-Stack con Cursor: Un Nuevo Paradigma de Colaboración con tu Agente de Código</span>
        <span className="speaker">
          / Alonso Suarez
        </span>
      </li>
      <li className="item">
        <span>[19:10 - 20:00]</span> 
        <span>Repositorio review - Participantes que esten en busqueda de empleo como full-stack developers</span> 
        <span className="speaker">
          Realsense Solutions - Canadá 🇨🇦 
        </span>
      </li>
    </ul>
    <br />
    </section>
  );
}
export default Agenda;