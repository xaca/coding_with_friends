import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Router from './components/ui/Menu/Router.jsx';
import './css/variables.scss';
import './css/generales.scss';
import './css/mediaqueries/mobile.scss';
import './css/mediaqueries/tablet.scss';
import './css/mediaqueries/desktop.scss';

function App() {
  
  return(<>
    <Router />
  </>);
}

export default App
