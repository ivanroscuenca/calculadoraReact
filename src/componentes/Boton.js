import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  return (
    <div
      //onclick llamamos aun a funcion , utilizamos funcion flecha para que reconozca como funcion
      onClick={() => props.manejarClic(props.children)}
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
    >
      {props.children}
    </div>
  );
}
export default Boton;
