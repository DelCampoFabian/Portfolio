import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Inicio from './components/main/Inicio';
import SobreMi from './components/sobreMi/SobreMi';
import Proyectos from './components/proyectos/Proyectos';
import Contacto from './components/contacto/Contacto';
import { useState } from 'react';

function App() {
  const [header, setHeader] = useState(false)

  const handleHeader = () => setHeader(!header)

  return (
    <>
    <BrowserRouter>
    <Header header={header}/>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/sobreMi' element={<SobreMi handleHeader={handleHeader}/>}/>
      <Route path='/proyectos' element={<Proyectos/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
