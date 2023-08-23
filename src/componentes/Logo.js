import React from "react";
import FreeCodeCampLogo from "../imagenes/freecodecamp-logo.png";

//componentes sencillos con estilo flecha
const Logo = () => (
  <div className="freecodecamp-logo-contenedor">
    <img
      className="freecodecamp-logo"
      src={FreeCodeCampLogo}
      alt="Logo de freecodecamp"
    />
  </div>
);

export default Logo;
