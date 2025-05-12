import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './components/ui/Menu/Router.jsx'
import MainLayout from './components/ui/MainLayout/MainLayout'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)

/*StrictMode hace que los componentes se rendericen dos veces en la fase de desarrollo por lo que se comenta para evitarlo*/
