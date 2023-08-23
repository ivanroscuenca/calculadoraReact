import "./App.css";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";
import Logo from "./componentes/Logo";
function App() {
  //creamos un estado
  const [input, setInput] = useState("");
  // Agregar input
  const agregarInput = (val) => {
    setInput(input + val);
  };
  //funcion calcular resultado
  const calcularResultado = () => {
    try {
      if (input) {
        setInput(evaluate(input));
      } else {
        alert("No hay números");
      }
    } catch (error) {
      alert("Operación incorrecta");
    }
  };

  return (
    <div className="App">
      <Logo />
      <div className="contenedor-calculadora">
        {/* atributo de componente pantalla es igual a input del estado */}
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>CLEAR</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
