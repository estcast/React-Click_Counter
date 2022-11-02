
import './App.css';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import imagen_contador from './images/clicks.png';
import {useState} from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () =>{
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
        className='logo'
        src= {imagen_contador}
        alt='Logotipo' />
      </div>
      <div className='contenedor-principal'>
      <Contador numClics={numClics} />
        <Boton 
          texto='Click'
          esBotonClick={true}
          manejarClick={manejarClick} />
        <Boton 
        texto='Reiniciar'
        esBotonClick={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
