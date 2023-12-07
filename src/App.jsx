import './App.css'
import React, { useEffect, useState } from 'react';
import EjemploResize from './Components/EjemploResize';
import Formulario from './Components/Formulario';
import MouseOver from './Components/MouseOver';



const App = () => {
  const [toggle, setToggle] = useState(true)
  const [name, setName] = useState('Pablo')
  const [vowels, setVowels] = useState('')
  const handleKey = (e) => {
    console.log(e)

    if(e.key != 'a' && e.key != 'e'){
        setVowels(e.target.value)
    }
  }


  return (
    <div>
      <h2>Clase 10</h2>
      
      <h3>Ejemplo 1</h3>
      {toggle && <EjemploResize/>}
      <button onClick={() => setToggle(!toggle)}>{toggle ? 'Borrar' : 'Mostrar'} componente Resize</button>
      
      <h3>Ejemplo 2</h3>
      <button onClick={(event) => console.log(event.nativeEvent)}>Ver evento</button>
      
      <h3>Ejemplo 3</h3>
      {/* inconcluso */}
      <label>Nombre:</label>
      <input type="text" onChange={(event) => setName(event.target.value)}/> 
      {/* <input type="text" onBlur={(event) => setName(event.target.value)}/>  */}
      <h4>{name}</h4>

      <h3>Ejemplo 4</h3>
      <Formulario/>

      <h3>Ejemplo 5</h3>
      <MouseOver/>

      <h3>Ejemplo 6</h3>
      {/* A resolver */}
      <input type="text"  onKeyDown={handleKey} />
      {vowels}
    </div>
  );
};

export default App;
