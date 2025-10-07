// Entry point for the React application
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './components/ui/Menu/Router.jsx'
import MainLayout from './components/ui/MainLayout/MainLayout'
// Render the main Router inside StrictMode for development checks
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
