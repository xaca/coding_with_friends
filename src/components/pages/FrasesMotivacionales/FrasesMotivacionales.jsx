import { useMemo, useState } from "react";
import MainLayout from "../../ui/MainLayout/MainLayout";
import "../../../css/variables.scss";
import "../../../css/generales.scss";
import "../../../css/mediaqueries/mobile.scss";
import "../../../css/mediaqueries/tablet.scss";
import "../../../css/mediaqueries/desktop.scss";
import "./FrasesMotivacionales.scss";

const FRASES = [
  "La disciplina tarde o temprano supera al talento.",
  "Cada línea de código te acerca a tu mejor versión.",
  "Pequeños pasos cada día crean grandes resultados.",
  "Si puedes imaginarlo, puedes programarlo.",
  "Fallar es parte del proceso; rendirse no es una opción.",
  "El enfoque es tu superpoder en tiempos de caos.",
  "Aprende algo nuevo hoy y enséñalo mañana.",
  "Construye hábitos, no excusas.",
  "La constancia vence lo imposible.",
  "La mejor forma de empezar es empezar ahora.",
  "Cada commit es un paso más lejos del miedo y más cerca del dominio.",
  "Primero entiéndelo, luego optimízalo.",
  "Menos magia, más claridad: el futuro te lo agradecerá.",
  "Hoy refactorizas; mañana escalas.",
  "Si el build falló, aprendiste algo nuevo.",
  "Un test que falla es una brújula, no un juicio.",
  "Tu foco es el framework más poderoso.",
  "Rompe el problema; no tu motivación.",
  "Lo perfecto no se mergea; lo bueno y probado, sí.",
  "La documentación es un regalo para tu yo del futuro.",
  "Un diff pequeño hoy evita una crisis mañana.",
  "La curiosidad compila en cualquier lenguaje.",
  "Menos reuniones, más pull requests.",
  "Si puedes medirlo, puedes mejorarlo.",
  "Lee el error: te está hablando.",
  "Tu stack no te define; tu criterio sí.",
  "Deja el teclado un minuto: pensar también es avanzar.",
  "La mejor abstracción es la que no necesitas explicar.",
  "Un buen nombre vale más que cien comentarios.",
  "Aprende a borrar: el código más rápido es el que no existe.",
  "La arquitectura empieza diciendo “no” a la complejidad innecesaria.",
  "El scope creep no es destino; es decisión.",
  "Automatiza lo repetitivo; reserva tu talento para lo creativo.",
  "Tu debugger interno mejora con cada bug.",
  "Nadie nace senior; se llega un commit a la vez.",
  "Cuando dudes, escribe un test.",
  "La performance viene después de la corrección y la claridad.",
  "Hazlo simple; luego hazlo elegante.",
  "Compite con tu versión de ayer, no con otros equipos.",
  "El mejor tutorial es el proyecto que aún no te atreves a empezar.",
  "Talk is cheap. Show me the code.” — Linus Torvalds",
  "Hablar es barato. Muéstrame el código.” — Linus Torvalds",
  "Programs must be written for people to read, and only incidentally for machines to execute.” — Harold Abelson",
  "Los programas deben escribirse para que los lean las personas y solo de manera incidental para que los ejecuten las máquinas.” — Harold Abelson",
  "Premature optimization is the root of all evil.” — Donald Knuth",
  "La optimización prematura es la raíz de todo mal.” — Donald Knuth",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” — Martin Fowler",
  "Simplicity is prerequisite for reliability.” — Edsger W. Dijkstra",
  "First, solve the problem. Then, write the code.” — John Johnson",
  "Make it work, make it right, make it fast.” — Kent Beck",
  "The best code is no code at all.” — Jeff Atwood",
  "Deleted code is debugged code.” — Jeff Sickel",
  "The only way to learn a new programming language is by writing programs in it.” — Dennis Ritchie",
  "Debugging is twice as hard as writing the code in the first place.” — Brian Kernighan",
  "Good code is its own best documentation.” — Steve McConnell",
  "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.” — Bill Gates",
  "Controlling complexity is the essence of computer programming.” — Brian Kernighan",
  "Beware of bugs in the above code; I have only proved it correct, not tried it.” — Donald Knuth",
  "Adding manpower to a late software project makes it later.” — Fred Brooks",
  "Given enough eyeballs, all bugs are shallow.” — Eric S. Raymond",
  "A language that doesn’t affect the way you think about programming is not worth knowing.” — Alan Perlis",
  "There are only two hard things in Computer Science: cache invalidation and naming things.” — Phil Karlton",
  "We can only see a short distance ahead, but we can see plenty there that needs to be done.” — Alan Turing",
  "It’s easier to ask forgiveness than it is to get permission.” — Grace Hopper",
  "There are only two kinds of languages: the ones people complain about and the ones nobody uses.” — Bjarne Stroustrup",
  "Truth can only be found in one place: the code.” — Robert C. Martin",
  "La simplicidad es la máxima sofisticación.” — Leonardo da Vinci",
  "De lo que ves créete la mitad; de lo que no ves, no te creas nada.” — Kase.O",
  "I only smile in the dark, I only smile when it’s complicated.” — Raybiez",
  "La perfección no se alcanza cuando no hay nada más que añadir, sino cuando no hay nada más que quitar.” — Antoine de Saint-Exupéry",
  "El secreto para salir adelante es empezar.” — Mark Twain",
"Nuestra mayor debilidad reside en rendirse. La forma más segura de tener éxito es intentarlo una vez más.” — Thomas A. Edison",
"No busques el éxito; busca ser de valor, y el éxito vendrá por sí solo.” — Albert Einstein",
"La disciplina es el puente entre las metas y los logros.” — Jim Rohn",
"La calidad no es un acto, es un hábito.” — Aristóteles",
"No cuentes los días, haz que los días cuenten.” — Muhammad Ali",
"El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el valor para continuar.” — Winston Churchill",
"Sé el cambio que deseas ver en el mundo.” — Mahatma Gandhi",
"La acción es la llave fundamental para todo éxito.” — Pablo Picasso",
"El único modo de hacer un gran trabajo es amar lo que haces.” — Steve Jobs",
"La vida es un 10% lo que te pasa y un 90% cómo reaccionas a ello.” — Charles R. Swindoll",
"Si quieres levantarte, levanta a alguien más.” — Booker T. Washington",
"Ve con confianza en la dirección de tus sueños. Vive la vida que has imaginado.” — Henry David Thoreau",
"No es la montaña que conquistamos, sino a nosotros mismos.” — Edmund Hillary",
"Un viaje de mil millas comienza con un solo paso.” — Lao Tzu",
"El mejor guerrero es el que nunca se enfada.” — Lao Tzu",
"La felicidad no es algo hecho. Viene de tus propias acciones.” — Dalai Lama",
"No se trata de si te derriban, se trata de si te levantas.” — Vince Lombardi",
"El éxito es la suma de pequeños esfuerzos repetidos día tras día.” — Robert Collier",
"La perseverancia es fallar 19 veces y tener éxito la vigésima.” — Julie Andrews",
"La mejor venganza es un éxito masivo.” — Frank Sinatra",
"Cree que puedes y ya estás a medio camino.” — Theodore Roosevelt",
"La inspiración existe, pero tiene que encontrarte trabajando.” — Pablo Picasso",
"No temas a la lentitud, teme solo a la quietud.” — Proverbio Chino",
"La diferencia entre una persona exitosa y otros no es la falta de fuerza, no la falta de conocimiento, sino más bien la falta de voluntad.” — Vince Lombardi",
"El arte de la vida consiste en hacer de un cálculo una oportunidad.” — John Galsworthy",
"El futuro pertenece a quienes creen en la belleza de sus sueños.” — Eleanor Roosevelt",
"Las grandes mentes discuten ideas; las mentes promedio discuten eventos; las mentes pequeñas discuten personas.” — Eleanor Roosevelt",
"Cambia tus pensamientos y cambiarás tu mundo.” — Norman Vincent Peale",
"Empieza donde estás. Usa lo que tienes. Haz lo que puedes.” — Arthur Ashe"
];

export default function FrasesMotivacionales() {
  // Frase inicial aleatoria estable
  const initialIndex = useMemo(
    () => Math.floor(Math.random() * FRASES.length),
    []
  );
  const [index, setIndex] = useState(initialIndex);

  const getNuevoIndex = () => {
    let nuevo = Math.floor(Math.random() * FRASES.length);
    if (FRASES.length > 1) {
      while (nuevo === index) nuevo = Math.floor(Math.random() * FRASES.length);
    }
    return nuevo;
  };

  const manejarNuevaFrase = () => setIndex(getNuevoIndex());

  return (
    <MainLayout>
      <div className="frases-page">
        {/* Hero / encabezado simple para consistencia visual */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="typewriter tw-medium2">✨ Frases Motivacionales</h1>
            <p className="hero-subtitle">
              Un pequeño empujón para tu día de código
            </p>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="frases">
          <div className="quote-box" aria-live="polite">
            <p key={index} className="quote-text">“{FRASES[index]}”</p>
          </div>

          <div className="actions">
            <button
              type="button"
              className="btn-primary quote-btn"
              onClick={manejarNuevaFrase}
            >
              Nueva frase
            </button>
          </div>

          <p className="mensaje_importante tip">
            Tip: presiona el botón cada vez que necesites un impulso ✨
          </p>
        </section>
      </div>
    </MainLayout>
  );
}
