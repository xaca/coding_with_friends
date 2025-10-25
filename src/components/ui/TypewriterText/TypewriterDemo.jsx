import { useState } from 'react';
import TypewriterText from './TypewriterText';
import './TypewriterText.scss';


function TypewriterDemo() {
  const [restart, setRestart] = useState(false);

  const handleRestart = () => {
    setRestart(prev => !prev);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>
        <TypewriterText 
          text="Efecto Máquina de Escribir" 
          speed={100} 
          delay={500}
        />
      </h1>
      
      <h2>
        <TypewriterText 
          text="Título con velocidad rápida" 
          speed={50} 
          delay={1000}
        />
      </h2>
      
      <h3>
        <TypewriterText 
          text="Texto lento y pausado" 
          speed={200} 
          delay={1500}
        />
      </h3>
      
      <p>
        <TypewriterText 
          text="Este es un párrafo completo que se escribe letra por letra con un cursor parpadeante. ¡Mira cómo funciona!" 
          speed={80} 
          delay={2000}
        />
      </p>
      
      <button onClick={handleRestart} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Reiniciar Animaciones
      </button>
      
      <div style={{ marginTop: '20px' }}>
        <TypewriterText 
          text="Texto que se reinicia" 
          speed={100} 
          delay={500}
          restart={restart}
        />
      </div>
    </div>
  );
}

export default TypewriterDemo;
