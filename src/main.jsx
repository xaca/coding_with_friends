//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Ejemplo from './components/ui/Ejemplo/Ejemplo.jsx'

createRoot(document.getElementById('root')).render(
    <App />,
)

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

/*StrictMode hace que los componentes se rendericen dos veces en la fase de desarrollo por lo que se comenta para evitarlo*/
