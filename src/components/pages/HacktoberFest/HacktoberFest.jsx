import { useState, useEffect } from 'react';
import MainLayout from '../../ui/MainLayout/MainLayout';
import '../../../css/variables.scss';
import '../../../css/generales.scss';
import '../../../css/mediaqueries/mobile.scss';
import '../../../css/mediaqueries/tablet.scss';
import '../../../css/mediaqueries/desktop.scss';
import './HacktoberFest.scss';

export default function HacktoberFest() {
  const [challenges, setChallenges] = useState([]);
  const [vibecodersChallenges, setVibecodersChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch issues from JSON
  useEffect(() => {
    fetch('/issues.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch issues');
        }
        return response.json();
      })
      .then(data => {
        setChallenges(data.challenges || []);
        setVibecodersChallenges(data.vibecodersChallenges || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching issues:', err);
        setError(err.message);
        setLoading(false);
        // Fallback to empty arrays
        setChallenges([]);
        setVibecodersChallenges([]);
      });
  }, []);

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
            Elige entre estos desafíos para contribuir a proyectos de código abierto. 
            Cada desafío está diseñado para ayudarte a aprender mientras generas un impacto real.
          </p>
          
          {loading && (
            <div className="loading-state">
              <p>⏳ Cargando desafíos...</p>
            </div>
          )}

          {error && (
            <div className="error-state">
              <p>⚠️ Error al cargar desafíos. Por favor, intenta más tarde.</p>
            </div>
          )}

          {!loading && !error && challenges.length === 0 && (
            <div className="empty-state">
              <p>📭 No hay desafíos disponibles en este momento.</p>
            </div>
          )}

          <div className="challenges-grid">
            {challenges.map((challenge) => (
              <div key={challenge.id} className={`challenge-card ${challenge.difficulty ? challenge.difficulty.toLowerCase().replace(/\s+/g, '-') : ''}`}>
                <div className="challenge-header">
                  <span className="difficulty-badge">{challenge.difficulty || 'N/A'}</span>
                  {challenge.points && <span className="points">{challenge.points} pts</span>}
                </div>
                <h3 className="challenge-title">{challenge.title}</h3>
                <p className="challenge-description">{challenge.description}</p>
                {challenge.tags && challenge.tags.length > 0 && (
                  <div className="challenge-tags">
                    {challenge.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
                {challenge.example && (
                  <div className="challenge-example">
                    <strong>Example:</strong> {challenge.example}
                  </div>
                )}
                <button
                  onClick={() => { if (challenge.url) window.open(challenge.url, '_blank') }}
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

            {loading && (
              <div className="loading-state">
                <p>⏳ Cargando desafíos...</p>
              </div>
            )}
            
            <div className="vibecoders-challenges-grid">
              {vibecodersChallenges.map((challenge) => (
                <div key={challenge.id} className="vibecoder-challenge-card">
                  <div className="challenge-content">
                    <div className="challenge-header">
                      <span className="difficulty-badge vibecoder">{challenge.difficulty || 'N/A'}</span>
                      {challenge.time && <span className="time-estimate">{challenge.time}</span>}
                      {challenge.estimatedTime && <span className="time-estimate">{challenge.estimatedTime}</span>}
                    </div>
                    <h4 className="challenge-title">{challenge.title}</h4>
                    <p className="challenge-description">{challenge.description}</p>
                    {challenge.example && (
                      <div className="challenge-example">
                        <strong>Ejemplo:</strong> {challenge.example}
                      </div>
                    )}
                    {challenge.reward && (
                      <div className="challenge-reward">
                        <span className="reward-icon">🏆</span>
                        <span className="reward-text">{challenge.reward}</span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => { if (challenge.url) window.open(challenge.url, '_blank') }}
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