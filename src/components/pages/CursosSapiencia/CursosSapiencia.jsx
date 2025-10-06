import MainLayout from '../../ui/MainLayout/MainLayout';
import '../../../css/variables.scss';
import '../../../css/generales.scss';
import '../../../css/mediaqueries/mobile.scss';
import '../../../css/mediaqueries/tablet.scss';
import '../../../css/mediaqueries/desktop.scss';
import './CursosSapiencia.scss';

export default function CursosSapiencia() {
  // Courses with links
  const coursesWithLinks = [
    {
      name: "Desarrollo Web Fullstack con React, Firebase y Javascript",
      url: "https://fondos.sapiencia.gov.co/convocatorias/acceso/index.php/Acceso_controller/fc_cargarvista?id=41&id_ruta=35",
      level: "Nivel inicial"
    },
    {
      name: "Lenguaje de Programación Javascript",
      url: "https://fondos.sapiencia.gov.co/convocatorias/acceso/index.php/Acceso_controller/fc_cargarvista?id=41&id_ruta=39",
      level: "Nivel inicial"
    },
    {
      name: "Programación Web",
      url: "https://fondos.sapiencia.gov.co/convocatorias/acceso/index.php/Acceso_controller/fc_cargarvista?id=41&id_ruta=98",
      level: "Nivel intermedio"
    }
  ];

  // Courses without links - Nivel inicial
  const coursesInitial = [
    "Animación 3D",
    "Ciencia de Datos para Contar Historias",
    "Creatividad, Innovación y Tecnologías 4.0",
    "Cultura Digital e Innovación Social",
    "Desarrollo de Aplicaciones Modernas con Kotlin",
    "Economía Digital",
    "Fotografía para las Industrias Creativas",
    "Maquillaje para Industrias Creativas",
    "Marketing Digital",
    "Minería de Datos",
    "Producción de Eventos Culturales y Creativos",
    "TIC en la Docencia"
  ];

  // Courses without links - Nivel intermedio
  const coursesIntermediate = [
    "Maquillaje para Industrias Creativas",
    "Fotografía para Industrias Creativas",
    "Estilismo de Moda para Industrias Creativas",
    "Alfabetización Digital"
  ];

  return (
    <MainLayout>
      <div className="cursos-sapiencia">
        <section className="intro">
          <h1>Programa ESTUD-IA de Sapiencia</h1>
          {/*<p className="mensaje_importante">
            Te recomendamos la ruta Desarrollo Web Fullstack con React, Firebase y Javascript para la creación de páginas web
          </p>*/}
          <p>
            La Universidad Pontificia Bolivariana (UPB) tendrá el honor de acompañarte en el desarrollo de varias rutas formativas durante el periodo octubre a diciembre de 2025, en modalidad mixta (clases presenciales en la UPB y telepresenciales).
          </p>
        </section>

        <section className="requirements">
          <h2>Pasos para inscribirte y requisitos</h2>
          <ol>
            <li>Ingresa al enlace de la ruta de formación de tu interés (listados más abajo).</li>
            <li>Diligencia el formulario de inscripción con tu información personal y académica.</li>
            <li>Finaliza el proceso y guarda el comprobante de inscripción.</li>
            <li>Revisa tu correo electrónico: allí recibirás confirmación y más detalles sobre horarios, fechas y asignación de clases.</li>
          </ol>

          <h3>Requisitos</h3>
          <ul>
            <li>Haber nacido en el Distrito de Medellín o demostrar residencia durante el último año previo a la convocatoria pública.</li>
            <li>Acreditar el grado de bachiller. Quienes no hayan culminado la educación media deberán acreditar la aprobación del grado 9° de la educación básica secundaria.</li>
            <li>No haber sido beneficiario de esta beca en convocatorias anteriores, exceptuando quienes deseen completar los tres niveles de su ruta formativa (inicial, intermedio y avanzado).</li>
          </ul>

          <h3>Documentos de inscripción</h3>
          <ul>
            <li><strong>Documento de identidad:</strong> Cédula de ciudadanía o tarjeta de identidad, PPT, según corresponda.</li>
            <li><strong>Factura de servicios públicos:</strong> Debe corresponder a la dirección de residencia que reportes en el formulario de inscripción.</li>
            <li><strong>Certificado académico:</strong> Acta de grado de bachiller, o certificado de aprobación de noveno grado y/o CLEI 4 si aún no eres bachiller.</li>
          </ul>
        </section>

        <section className="courses-with-links">
          <h2>Rutas de formación con enlaces de inscripción</h2>
          <div className="course-buttons">
            {coursesWithLinks.map((course, index) => (
              <div key={index} className="course-item">
                <span className="course-level">{course.level}</span>
                <a 
                  href={course.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="course-button"
                >
                  {course.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/*<section className="courses-without-links">
          <h2>Otras rutas de formación</h2>
          
          <div className="course-level-section">
            <h3>Nivel inicial</h3>
            <ul className="course-list">
              {coursesInitial.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>

          <div className="course-level-section">
            <h3>Nivel intermedio</h3>
            <ul className="course-list">
              {coursesIntermediate.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="general-info">
          <h2>Información general</h2>
          <div className="info-grid">
            <div className="info-item">
              <strong>Duración:</strong> Octubre a diciembre de 2025
            </div>
            <div className="info-item">
              <strong>Horario:</strong> Lunes a viernes, de 6:00 p.m. a 10:00 p.m.
            </div>
            <div className="info-item">
              <strong>Modalidad:</strong> Mixta (presencial + telepresencial)
            </div>
            <div className="info-item">
              <strong>Costo:</strong> 100% gratuito
            </div>
          </div>
        </section>*/}

        <section className="contact">
          <h2>Contacto</h2>
          <p>Para más información sobre el programa ESTUD-IA:</p>
          <div className="contact-info">
            <p><strong>Sitio web:</strong> <a href="https://sapiencia.gov.co" target="_blank" rel="noopener noreferrer">sapiencia.gov.co</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@sapiencia.gov.co">info@sapiencia.gov.co</a></p>
            <p><strong>Teléfono:</strong> (+57 4) 444 7947</p>
          </div>
          <p className="final-message">
            Te invitamos a no dejar pasar esta oportunidad para fortalecer tus conocimientos, crecer en tu perfil profesional y ser parte del talento que está transformando nuestra ciudad.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}