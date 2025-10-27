import MainLayout from '../../ui/MainLayout/MainLayout';
import '../../../css/variables.scss';
import '../../../css/generales.scss';
import '../../../css/mediaqueries/mobile.scss';
import '../../../css/mediaqueries/tablet.scss';
import '../../../css/mediaqueries/desktop.scss';
import './HacktoberFest.scss';

export default function HacktoberFest() {
  // Smooth scroll function
  const scrollToChallenges = () => {
    const challengesSection = document.getElementById('challenges');
    if (challengesSection) {
      challengesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Coding challenges data
  const challenges = [
    // Easy Level
    {
      id: 1,
      title: "Implementar Toggle de Modo Oscuro",
      description: "Agregar un interruptor de modo oscuro/claro al sitio web con transiciones suaves y persistencia de preferencias del usuario.",
      difficulty: "Fácil",
      tags: ["UI/UX", "CSS", "JavaScript"],
      href: 'https://github.com/xaca/coding_with_friends/issues/8',
      points: 15,
      example: "Crear un botón toggle que cambie entre temas claro y oscuro con persistencia en localStorage"
    },
    {
      id: 2,
      title: "Corregir Problemas de Responsive Móvil",
      description: "Resolver problemas de visualización de videos en iPhone mini y problemas de diseño móvil mencionados en la sección TODO.",
      difficulty: "Fácil",
      tags: ["Responsive", "Mobile", "CSS"],
      href: 'https://github.com/xaca/coding_with_friends/issues/9',
      points: 20,
      example: "Corregir problemas de tamaño de video y diseño en iPhone mini y otros dispositivos móviles pequeños"
    },
    {
      id: 3,
      title: "Agregar Integración de Feed de Instagram",
      description: "Crear una sección que muestre las últimas publicaciones de Instagram de CWF usando Instagram Basic Display API.",
      difficulty: "Fácil",
      tags: ["API", "Redes Sociales", "React"],
      href: 'https://github.com/xaca/coding_with_friends/issues/10',
      points: 25,
      example: "Mostrar las últimas 6 publicaciones de Instagram de la cuenta @coding.with.friends"
    },
    {
      id: 4,
      title: "Mejorar Diseño Responsive Móvil",
      description: "Revisar y corregir problemas de diseño responsive en todos los tamaños y orientaciones de dispositivos.",
      difficulty: "Fácil",
      tags: ["Responsive", "CSS", "Mobile"],
      href: 'https://github.com/xaca/coding_with_friends/issues/11',
      points: 18,
      example: "Asegurar que todos los componentes se vean bien en móvil, tablet y escritorio"
    },
    {
      id: 5,
      title: "Agregar Soporte de Traducción al Inglés",
      description: "Implementar Polyglot.js para cambio de idioma inglés/español en todo el sitio web.",
      difficulty: "Fácil",
      tags: ["i18n", "Traducción", "JavaScript"],
      href: 'https://github.com/xaca/coding_with_friends/issues/12',
      points: 22,
      example: "Agregar selector de idioma y traducir todo el contenido de texto al inglés"
    },
    // Medium Level
    {
      id: 6,
      title: "Crear Formulario de Llamada a Ponentes",
      description: "Diseñar e implementar una integración con Google Forms para aplicaciones de ponentes con estilos personalizados.",
      difficulty: "Medio",
      tags: ["Formularios", "Google Forms", "Integración"],
      href: 'https://github.com/xaca/coding_with_friends/issues/13',
      points: 30,
      example: "Crear un formulario estilizado que envíe a Google Forms para aplicaciones de ponentes"
    },
    {
      id: 7,
      title: "Implementar Optimización SEO",
      description: "Agregar meta tags, datos estructurados, sitemap y mejorar la visibilidad en motores de búsqueda.",
      difficulty: "Medio",
      tags: ["SEO", "Meta Tags", "Datos Estructurados"],
      href: 'https://github.com/xaca/coding_with_friends/issues/14',
      points: 35,
      example: "Agregar etiquetas Open Graph, Twitter cards y datos estructurados JSON-LD"
    },
    {
      id: 8,
      title: "Agregar Estados de Carga y Animaciones",
      description: "Implementar indicadores de carga suaves y micro-animaciones en todo el sitio.",
      difficulty: "Medio",
      tags: ["Animaciones", "UX", "CSS"],
      href: 'https://github.com/xaca/coding_with_friends/issues/15',
      points: 28,
      example: "Agregar skeleton loaders, efectos hover de botones y animaciones de transición de página"
    },
    {
      id: 9,
      title: "Mejorar Características de Accesibilidad",
      description: "Implementar etiquetas ARIA, navegación por teclado, soporte para lectores de pantalla y cumplimiento WCAG.",
      difficulty: "Medio",
      tags: ["Accesibilidad", "ARIA", "WCAG"],
      href: 'https://github.com/xaca/coding_with_friends/issues/16',
      points: 32,
      example: "Agregar etiquetas ARIA apropiadas, navegación por teclado y soporte para lectores de pantalla"
    },
    {
      id: 10,
      title: "Mejorar Compartir en Redes Sociales y Marca",
      description: "Agregar favicon personalizado, botones de compartir en redes sociales y mejorar la consistencia de marca.",
      difficulty: "Medio",
      tags: ["Marca", "Compartir Social", "Favicon"],
      href: 'https://github.com/xaca/coding_with_friends/issues/17',
      points: 25,
      example: "Crear favicon personalizado, agregar botones de compartir WhatsApp/Twitter, mejorar consistencia visual"
    },
    // Advanced Level
    {
      id: 11,
      title: "Diseñar Micro-interacciones Avanzadas",
      description: "Crear efectos hover sofisticados, animaciones de botones y sistemas de retroalimentación interactiva.",
      difficulty: "Avanzado",
      tags: ["Micro-interacciones", "CSS", "UX"],
      href: 'https://github.com/xaca/coding_with_friends/issues/18',
      points: 40,
      example: "Agregar efectos hover complejos, animaciones de estado de botones y retroalimentación interactiva"
    },
    {
      id: 12,
      title: "Agregar Transiciones Suaves de Página",
      description: "Implementar transiciones de página y animaciones de ruta para una mejor experiencia de navegación.",
      difficulty: "Avanzado",
      tags: ["Animaciones", "Routing", "UX"],
      href: 'https://github.com/xaca/coding_with_friends/issues/19',
      points: 35,
      example: "Agregar transiciones suaves entre páginas y cambios de ruta"
    },
    {
      id: 13,
      title: "Agregar Pruebas Unitarias e Integración",
      description: "Escribir suites de pruebas para componentes e interacciones de usuario usando Jest y React Testing Library.",
      difficulty: "Avanzado",
      tags: ["Testing", "Jest", "React Testing Library"],
      href: 'https://github.com/xaca/coding_with_friends/issues/20',
      points: 45,
      example: "Escribir pruebas comprensivas para componentes React e interacciones de usuario"
    },
    {
      id: 14,
      title: "Mejorar Estilos de Botones y Enlaces",
      description: "Mejorar estados hover de botones, indicadores de foco e interacciones de enlaces para mejor UX.",
      difficulty: "Avanzado",
      tags: ["CSS", "UX", "Estilos"],
      href: 'https://github.com/xaca/coding_with_friends/issues/21',
      points: 30,
      example: "Crear estilos de botones consistentes con estados hover, focus y active"
    },
    {
      id: 15,
      title: "Agregar Animaciones de Scroll",
      description: "Implementar animaciones activadas por scroll y efectos de revelado para secciones de contenido.",
      difficulty: "Avanzado",
      tags: ["Animaciones", "Scroll", "CSS"],
      href: 'https://github.com/xaca/coding_with_friends/issues/22',
      points: 38,
      example: "Agregar animaciones de fade-in y efectos de revelado mientras los usuarios hacen scroll por el contenido"
    }
  ];

  // Vibecoders community highlights
  const vibecodersHighlights = [
    {
      title: "Integración con Instagram",
      description: "Conéctate con nuestras últimas publicaciones y destacados de la comunidad",
      icon: "📸",
      action: "Seguir @coding.with.friends",
    },
    {
      title: "Llamada a Ponentes",
      description: "Comparte tu conocimiento y conviértete en ponente en nuestros eventos",
      icon: "🎤",
      action: "Aplicar para Hablar"
    },
    {
      title: "Logros de la Comunidad",
      description: "Celebra las contribuciones y logros de nuestros miembros",
      icon: "🏆",
      action: "Ver Logros"
    },
    {
      title: "Integración de Redes Sociales",
      description: "Mantente conectado a través de todas nuestras plataformas",
      icon: "🌐",
      action: "Unirse a la Comunidad"
    }
  ];

  // Vibecoders beginner challenges
  const vibecodersChallenges = [
    {
      id: 1,
      title: "Agregar Tu Nombre a Contribuidores",
      description: "Agrega tu nombre a nuestra lista de contribuidores para ser parte de la comunidad",
      difficulty: "Súper Fácil",
      time: "5 min",
      reward: "Insignia de Contribuidor",
      example: "Agregar tu nombre al archivo CONTRIBUTORS.md",
      href: 'https://github.com/xaca/coding_with_friends/issues/23'
    },
    {
      id: 2,
      title: "Mejorar Comentarios del Código",
      description: "Agrega comentarios útiles al código existente para hacerlo más legible",
      difficulty: "Fácil",
      time: "15-20 min",
      reward: "Insignia de Ayudante",
      example: "Agregar comentarios explicando qué hace una función",
      href: 'https://github.com/xaca/coding_with_friends/issues/26'
    },
    {
      id: 3,
      title: "Agregar Sonidos de Interacción",
      description: "Implementa sonidos sutiles para botones y hover effects",
      difficulty: "Fácil",
      time: "15-25 min",
      reward: "Insignia de Diseñador de Audio",
      example: "Sonido suave al hacer hover en botones o al hacer clic",
      href: 'https://github.com/xaca/coding_with_friends/issues/27'
    },
    {
      id: 4,
      title: "Corregir Errores en README",
      description: "Ayuda a mejorar la documentación de nuestro proyecto corrigiendo errores ortográficos",
      difficulty: "Súper Fácil",
      time: "5-10 min",
      reward: "Insignia de Comunidad",
      example: "Corregir 'recieve' por 'receive' en README.md",
      href: 'https://github.com/xaca/coding_with_friends/issues/24'
    },
    {
      id: 5,
      title: "Crear un Generador de Frases Motivacionales",
      description: "Agrega un botón que muestre frases motivacionales aleatorias para desarrolladores",
      difficulty: "Fácil",
      time: "15-20 min",
      reward: "Insignia de Motivador",
      example: "Botón que muestre '¡Sigue codificando! 💪' o 'Los errores son oportunidades de aprendizaje 🚀'",
      href: 'https://github.com/xaca/coding_with_friends/issues/28'
    },
    {
      id: 6,
      title: "Agregar Emojis a los Títulos",
      description: "Haz que los títulos sean más divertidos agregando emojis relevantes",
      difficulty: "Súper Fácil",
      time: "3-5 min",
      reward: "Insignia de Emoji Master",
      example: "Cambiar 'Eventos' por '🎉 Eventos' o 'Contacto' por '📞 Contacto'",
      href: 'https://github.com/xaca/coding_with_friends/issues/25'
    },
    {
      id: 7,
      title: "Crear un Componente de Carga Simple",
      description: "Construye un spinner de carga básico o indicador de progreso",
      difficulty: "Fácil",
      time: "25-30 min",
      reward: "Insignia de Constructor",
      example: "Crear una animación de círculo giratorio",
      href: 'https://github.com/xaca/coding_with_friends/issues/29'
    },
    {
      id: 8,
      title: "Implementar Efecto de 'Typing' en Texto",
      description: "Haz que algunos textos aparezcan como si se estuvieran escribiendo en tiempo real",
      difficulty: "Fácil",
      time: "20-30 min",
      reward: "Insignia de Escriba Digital",
      example: "El título principal aparece letra por letra con efecto de cursor parpadeante",
      href: 'https://github.com/xaca/coding_with_friends/issues/30'
    },
    {
      id: 9,
      title: "Agregar Enlaces de Redes Sociales",
      description: "Ayúdanos a conectar agregando enlaces de redes sociales a nuestras páginas",
      difficulty: "Fácil",
      time: "15-20 min",
      reward: "Insignia de Conector",
      example: "Agregar enlaces de Instagram, Twitter, LinkedIn",
      href: 'https://github.com/xaca/coding_with_friends/issues/31'
    }
  ];

  // PR Guide steps
  const prSteps = [
    {
      step: 1,
      title: "Hacer Fork del Repositorio",
      description: "Crea tu propia copia del proyecto en GitHub",
      details: "Haz clic en el botón 'Fork' en la página del repositorio para crear una copia en tu cuenta de GitHub."
    },
    {
      step: 2,
      title: "Clonar Tu Fork",
      description: "Descarga el repositorio a tu máquina local",
      details: "Usa 'git clone' para descargar tu repositorio bifurcado localmente."
    },
    {
      step: 3,
      title: "Crear una Rama",
      description: "Crea una nueva rama para tus cambios",
      details: "Usa 'git checkout -b feature/nombre-de-tu-funcionalidad' para crear y cambiar a una nueva rama."
    },
    {
      step: 4,
      title: "Hacer Tus Cambios",
      description: "Implementa tu contribución",
      details: "Escribe tu código, corrige errores o agrega funcionalidades siguiendo las pautas del proyecto."
    },
    {
      step: 5,
      title: "Confirmar Tus Cambios",
      description: "Guarda tu trabajo con mensajes de commit descriptivos",
      details: "Usa 'git add .' y 'git commit -m \"mensaje descriptivo\"' para guardar tus cambios."
    },
    {
      step: 6,
      title: "Subir a Tu Fork",
      description: "Sube tus cambios a tu fork de GitHub",
      details: "Usa 'git push origin feature/nombre-de-tu-funcionalidad' para subir tu rama."
    },
    {
      step: 7,
      title: "Crear Pull Request",
      description: "Envía tu contribución para revisión",
      details: "Haz clic en 'New Pull Request' en GitHub y proporciona una descripción clara de tus cambios."
    }
  ];

  return (
    <MainLayout>
      <div className="hacktoberfest">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="typewriter tw-medium1">🎃 HacktoberFest 2025</h1>
            <p className="hero-subtitle">Una celebración de un mes de todo lo relacionado con código abierto</p>
            <p className="hero-description">
              Únete a casi 90,000 desarrolladores en todo el mundo contribuyendo a proyectos de código abierto.
              ¡Obtén tu insignia digital y ayuda a construir el futuro del código abierto!
            </p>
            {/*<div className="hero-stats">
              <div className="stat">
                <span className="stat-number">90,000+</span>
                <span className="stat-label">Participants 2024</span>
              </div>
              <div className="stat">
                <span className="stat-number">4</span>
                <span className="stat-label">PRs Required</span>
              </div>
              <div className="stat">
                <span className="stat-number">31</span>
                <span className="stat-label">Days to Contribute</span>
              </div>
            </div>*/}
            <div className="hero-actions">
              <a
                href="https://hacktoberfest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Regístrate en HacktoberFest
              </a>
              <button
                onClick={scrollToChallenges}
                className="btn-secondary"
              >
                Ver Desafíos
              </button>
            </div>
          </div>
        </section>

        {/* What is HacktoberFest */}
        <section className="about">
          <h2 className="hero-subtitle">¿Qué es HacktoberFest?</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                HacktoberFest es una celebración de un mes del software de código abierto,
                patrocinado por DigitalOcean y MLH. Fomenta la participación en
                la comunidad de código abierto contribuyendo a proyectos en GitHub.
              </p>
              <p>
                Desde 2014, HacktoberFest ha crecido de 676 participantes a casi
                90,000 desarrolladores en todo el mundo. Este año, los participantes recibirán
                una insignia digital evolutiva por sus contribuciones.
              </p>
            </div>
            {/*<div className="sponsors">
              <h3>Powered by</h3>
              <div className="sponsor-logos">
                <span className="sponsor">DigitalOcean</span>
                <span className="sponsor">MLH</span>
              </div>
            </div>*/}
          </div>
        </section>

        {/* Coding Challenges */}
        <section id="challenges" className="challenges">
          <h2>🎯 Desafíos de Programación</h2>
          <p className="challenges-intro">
            Elige entre estos 15 desafíos para contribuir a proyectos de código abierto.
            Cada desafío está diseñado para ayudarte a aprender mientras generas un impacto real.
          </p>

          <div className="challenges-grid">
            {challenges.map((challenge) => (
              <div key={challenge.id} className={`challenge-card ${challenge.difficulty.toLowerCase()}`}>
                <div className="challenge-header">
                  <span className="difficulty-badge">{challenge.difficulty}</span>
                  {/*<span className="points">{challenge.points} pts</span>*/}
                </div>
                <h3 className="challenge-title">{challenge.title}</h3>
                <p className="challenge-description">{challenge.description}</p>
                <div className="challenge-tags">
                  {challenge.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="challenge-example">
                  <strong>Example:</strong> {challenge.example}
                </div>
                <button
                  onClick={() => { if (challenge.href) window.location.href = challenge.href }}
                  className="challenge-btn"
                >
                  Iniciar Desafío
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Vibecoders Section */}
        <section className="vibecoders">
          <h2>🌟 Comunidad Vibecoders</h2>
          <p className="vibecoders-intro">
            Únete a nuestra vibrante comunidad de desarrolladores y entusiastas de la tecnología.
            ¡Inspírate con nuestros destacados de la comunidad y participa!
          </p>

          <div className="vibecoders-grid">
            {vibecodersHighlights.map((highlight, index) => (
              <div key={index} className="vibecoder-card">
                <div className="vibecoder-icon">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
                <button className="vibecoder-btn">{highlight.action}</button>
              </div>
            ))}
          </div>

          {/* Vibecoders Beginner Challenges */}
          <div className="vibecoders-challenges">
            <h3>🎯 Desafíos para Principiantes</h3>
            <p className="challenges-intro">
              ¡Perfecto para nuevos miembros! Estas tareas fáciles te ayudan a comenzar contribuyendo a nuestra comunidad.
              Cada desafío está diseñado para completarse en menos de 30 minutos.
            </p>

            <div className="vibecoders-challenges-grid">
              {vibecodersChallenges.map((challenge) => (
                <div key={challenge.id} className="vibecoder-challenge-card">
                  <div className="challenge-content">
                    <div className="challenge-header">
                      <span className="difficulty-badge vibecoder">{challenge.difficulty}</span>
                      <span className="time-estimate">{challenge.time}</span>
                    </div>
                    <h4 className="challenge-title">{challenge.title}</h4>
                    <p className="challenge-description">{challenge.description}</p>
                    <div className="challenge-example">
                      <strong>Ejemplo:</strong> {challenge.example}
                    </div>
                    {/*<div className="challenge-reward">
                      <span className="reward-icon">🏆</span>
                      <span className="reward-text">{challenge.reward}</span>
                    </div>*/}
                  </div>
                  <button
                    onClick={() => { if (challenge.href) window.location.href = challenge.href }}
                    className="vibecoder-challenge-btn"
                  >
                    Iniciar Desafío
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/*<div className="community-features">
            <h3>Características de la Comunidad</h3>
            <ul>
              <li>📱 Integración de feed de Instagram para las últimas publicaciones de CWF</li>
              <li>🎤 Llamada a ponentes con integración de Google Forms</li>
              <li>🏆 Seguimiento de logros y hitos de la comunidad</li>
              <li>🌐 Integración de redes sociales multiplataforma</li>
              <li>📧 Notificaciones automáticas por email para eventos</li>
              <li>🌍 Soporte de traducción al inglés con Polyglot.js</li>
            </ul>
          </div>*/}
        </section>

        {/* Pull Request Guide */}
        <section className="pr-guide">
          <h2>📝 Guía de Pull Request</h2>
          <p className="pr-intro">
            ¿Nuevo en contribuir al código abierto? Sigue esta guía paso a paso
            para hacer tu primer pull request exitosamente.
          </p>

          <div className="pr-steps">
            {prSteps.map((step) => (
              <div key={step.step} className="pr-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <p className="step-details">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PR Explanation Video */}
        <section className="pr-video">
          <h2>🎥 Explicación Detallada de Pull Requests</h2>
          <p className="video-intro">
            Aprende paso a paso cómo crear y gestionar pull requests de manera efectiva.
            Este video tutorial te guiará a través del proceso completo con ejemplos prácticos.
          </p>

          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/8MQN0U1AwgU"
              title="Tutorial de Pull Requests - HacktoberFest 2025"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="youtube-player"
            ></iframe>
          </div>

          <div className="video-description">
            <h3>¿Qué aprenderás en este video?</h3>
            <ul className="video-benefits">
              <li>Cómo hacer fork de un repositorio correctamente</li>
              <li>Configuración del entorno de desarrollo local</li>
              <li>Creación y gestión de ramas de Git</li>
              <li>Mejores prácticas para commits descriptivos</li>
              <li>Proceso completo de creación de Pull Request</li>
              <li>Cómo responder a comentarios y revisiones</li>
              <li>Resolución de conflictos de merge</li>
              <li>Tips para PRs exitosos en HacktoberFest</li>
            </ul>
          </div>
        </section>

        {/* Community Partners */}
        <section className="partners">
          <h2>🤝 Socios de la Comunidad</h2>
          <div className="partners-content">
            <div className="partner-categories">
              <div className="partner-category">
                <h3>Socios de Plataforma</h3>
                <div className="ppartner-category">
                  <div className="partner-logos">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="partner-link"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://gitlab.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="partner-link"
                    >
                      GitLab
                    </a>
                    <a
                      href="https://education.github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="partner-link"
                    >
                      GitHub Education
                    </a>
                    <a
                      href="https://bitbucket.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="partner-link"
                    >
                      Bitbucket
                    </a>
                    <a
                      href="https://sourceforge.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="partner-link"
                    >
                      SourceForge
                    </a>
                  </div>
                </div>
              </div>
              <div className="partner-category">
                <h3>Organizaciones de la Comunidad</h3>
                <div className="partner-logos">
                  <a
                    href="https://cncf.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-link"
                  >
                    Cloud Native Computing Foundation
                  </a>
                  <a
                    href="https://opensource.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-link"
                  >
                    Open Source Initiative
                  </a>
                  <a
                    href="https://dev.to"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-link"
                  >
                    DEV Community
                  </a>
                  <a
                    href="https://stackoverflow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-link"
                  >
                    Stack Overflow
                  </a>
                  <a
                    href="https://www.freecodecamp.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-link"
                  >
                    freeCodeCamp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <h2>¿Listo para Empezar a Contribuir?</h2>
          <p>
            Únete a miles de desarrolladores en todo el mundo para hacer el código abierto mejor.
            Tus contribuciones importan y ayudan a construir el futuro de la tecnología.
          </p>
          <div className="cta-actions">
            <a
              href="https://hacktoberfest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Regístrate Ahora
            </a>
            <a
              href="https://discord.gg/hacktoberfest"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Únete a Discord
            </a>
          </div>
        </section>
        <section className="pr-guide">
          <div className="pr-resources">
            <h3>Recursos Adicionales</h3>
            <div className="resource-links">
              <a
                href="https://www.youtube.com/watch?v=8MQN0U1AwgU"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
              >
                📺 Video Tutorial Detallado de PR
              </a>
              <a
                href="https://docs.github.com/en/pull-requests"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
              >
                📚 Documentación de PR de GitHub
              </a>
              <a
                href="https://opensource.guide/how-to-contribute/"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
              >
                🚀 Guía de Contribución de Código Abierto
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}