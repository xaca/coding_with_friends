import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './components/ui/Menu/Router.jsx'
import MainLayout from './components/ui/MainLayout/MainLayout'
import { ThemeProvider } from './components/ui/Theme/ThemeProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </StrictMode>,
)

/*StrictMode hace que los componentes se rendericen dos veces en la fase de desarrollo por lo que se comenta para evitarlo*/
