import MainLayout from '../../ui/MainLayout/MainLayout';
import '../../../css/variables.scss';
import '../../../css/generales.scss';
import '../../../css/mediaqueries/mobile.scss';
import '../../../css/mediaqueries/tablet.scss';
import '../../../css/mediaqueries/desktop.scss';
import './HacktoberFest.scss';

export default function HacktoberFest() {
  // Coding challenges data
  const challenges = [
    // Beginner Level
    {
      id: 1,
      title: "Corregir Errores de Documentación",
      description: "Ayuda a mejorar la documentación del proyecto corrigiendo errores ortográficos y gramaticales.",
      difficulty: "Principiante",
      tags: ["Documentación", "Escritura"],
      points: 10,
      example: "Corregir errores tipográficos en archivos README.md de varios repositorios"
    },
    {
      id: 2,
      title: "Agregar Traducciones Faltantes",
      description: "Contribuye con traducciones para hacer los proyectos accesibles a audiencias globales.",
      difficulty: "Principiante",
      tags: ["i18n", "Traducción"],
      points: 15,
      example: "Agregar traducciones al español a proyectos de código abierto"
    },
    {
      id: 3,
      title: "Mejorar Archivos README",
      description: "Mejora la documentación del proyecto con mejores descripciones, ejemplos e instrucciones de configuración.",
      difficulty: "Principiante",
      tags: ["Documentación", "README"],
      points: 12,
      example: "Agregar instrucciones de instalación y ejemplos de uso"
    },
    // Intermediate Level
    {
      id: 4,
      title: "Agregar Nuevas Funcionalidades",
      description: "Implementa funcionalidades solicitadas o mejoras a proyectos existentes.",
      difficulty: "Intermedio",
      tags: ["Funcionalidad", "Mejora"],
      points: 25,
      example: "Agregar un interruptor de modo oscuro a una aplicación web"
    },
    {
      id: 5,
      title: "Corregir Errores y Problemas",
      description: "Identifica y resuelve errores reportados en los rastreadores de problemas.",
      difficulty: "Intermedio",
      tags: ["Corrección de Errores", "Depuración"],
      points: 30,
      example: "Corregir problemas de diseño responsivo en dispositivos móviles"
    },
    {
      id: 6,
      title: "Mejorar Documentación del Código",
      description: "Agrega comentarios comprensivos y documentación a bases de código existentes.",
      difficulty: "Intermedio",
      tags: ["Documentación", "Calidad del Código"],
      points: 20,
      example: "Agregar comentarios JSDoc a funciones JavaScript"
    },
    {
      id: 7,
      title: "Crear Pruebas Unitarias",
      description: "Escribe suites de pruebas comprensivas para mejorar la confiabilidad del código.",
      difficulty: "Intermedio",
      tags: ["Pruebas", "Aseguramiento de Calidad"],
      points: 35,
      example: "Agregar pruebas Jest para componentes React"
    },
    // Advanced Level
    {
      id: 8,
      title: "Refactorizar Código Legacy",
      description: "Moderniza y mejora bases de código existentes manteniendo la funcionalidad.",
      difficulty: "Avanzado",
      tags: ["Refactorización", "Arquitectura"],
      points: 50,
      example: "Convertir componentes de clase a componentes funcionales con hooks"
    },
    {
      id: 9,
      title: "Implementar Nuevos Algoritmos",
      description: "Desarrolla e implementa algoritmos eficientes para problemas complejos.",
      difficulty: "Avanzado",
      tags: ["Algoritmos", "Rendimiento"],
      points: 60,
      example: "Implementar un nuevo algoritmo de ordenamiento con complejidad O(n log n)"
    },
    {
      id: 10,
      title: "Contribuir a Funcionalidad Principal",
      description: "Haz contribuciones significativas a las características principales de proyectos de código abierto.",
      difficulty: "Avanzado",
      tags: ["Núcleo", "Arquitectura"],
      points: 75,
      example: "Agregar soporte para nuevos formatos de datos en una librería de análisis"
    }
  ];

  // Vibecoders community highlights
  const vibecodersHighlights = [
    {
      title: "Integración con Instagram",
      description: "Conéctate con nuestras últimas publicaciones y destacados de la comunidad",
      icon: "📸",
      action: "Seguir @coding.with.friends"
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
      title: "Corregir Errores en README",
      description: "Ayuda a mejorar la documentación de nuestro proyecto corrigiendo errores ortográficos",
      difficulty: "Súper Fácil",
      time: "5-10 min",
      reward: "Insignia de Comunidad",
      example: "Corregir 'recieve' por 'receive' en README.md"
    },
    {
      id: 2,
      title: "Agregar Tu Nombre a Contribuidores",
      description: "Agrega tu nombre a nuestra lista de contribuidores para ser parte de la comunidad",
      difficulty: "Súper Fácil",
      time: "5 min",
      reward: "Insignia de Contribuidor",
      example: "Agregar tu nombre al archivo CONTRIBUTORS.md"
    },
    {
      id: 3,
      title: "Mejorar Comentarios del Código",
      description: "Agrega comentarios útiles al código existente para hacerlo más legible",
      difficulty: "Fácil",
      time: "15-20 min",
      reward: "Insignia de Ayudante",
      example: "Agregar comentarios explicando qué hace una función"
    },
    {
      id: 4,
      title: "Crear una Animación CSS Simple",
      description: "Agrega un efecto hover genial o animación a nuestro sitio web",
      difficulty: "Fácil",
      time: "20-30 min",
      reward: "Insignia de Diseñador",
      example: "Agregar una animación hover a un botón"
    },
    {
      id: 5,
      title: "Traducir Texto al Español",
      description: "Ayuda a hacer nuestro contenido accesible para hispanohablantes",
      difficulty: "Fácil",
      time: "10-15 min",
      reward: "Insignia de Traductor",
      example: "Traducir texto de botones o descripciones"
    },
    {
      id: 6,
      title: "Agregar Enlaces de Redes Sociales",
      description: "Ayúdanos a conectar agregando enlaces de redes sociales a nuestras páginas",
      difficulty: "Fácil",
      time: "15-20 min",
      reward: "Insignia de Conector",
      example: "Agregar enlaces de Instagram, Twitter, LinkedIn"
    },
    {
      id: 7,
      title: "Crear un Componente de Carga Simple",
      description: "Construye un spinner de carga básico o indicador de progreso",
      difficulty: "Fácil",
      time: "25-30 min",
      reward: "Insignia de Constructor",
      example: "Crear una animación de círculo giratorio"
    },
    {
      id: 8,
      title: "Mejorar Responsividad Móvil",
      description: "Corrige problemas de diseño en dispositivos móviles",
      difficulty: "Fácil",
      time: "20-25 min",
      reward: "Insignia de Experto Móvil",
      example: "Ajustar tamaños de botones para pantallas móviles"
    },
    {
      id: 9,
      title: "Agregar Mensajes de Error",
      description: "Crea mensajes de error amigables para formularios",
      difficulty: "Fácil",
      time: "15-20 min",
      reward: "Insignia de Ayudante UX",
      example: "Agregar mensajes de validación a campos de entrada"
    },
    {
      id: 10,
      title: "Crear un Componente de Pie Simple",
      description: "Diseña e implementa un pie de página para nuestro sitio web",
      difficulty: "Fácil",
      time: "20-25 min",
      reward: "Insignia de Maestro de Diseño",
      example: "Agregar información de copyright y enlaces"
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
            <h1>🎃 HacktoberFest 2025</h1>
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
              <a 
                href="#challenges" 
                className="btn-secondary"
              >
                Ver Desafíos
              </a>
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
            Elige entre estos 10 desafíos para contribuir a proyectos de código abierto. 
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
                <button className="challenge-btn">Iniciar Desafío</button>
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
                    <div className="challenge-reward">
                      <span className="reward-icon">🏆</span>
                      <span className="reward-text">{challenge.reward}</span>
                    </div>
                  </div>
                  <button className="vibecoder-challenge-btn">Iniciar Desafío</button>
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