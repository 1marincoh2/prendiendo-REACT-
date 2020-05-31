import React from 'react';

const IfComponent = () => {


const calificacion = (aprobado) => {

        let resultado= '';

    if (aprobado >6) {
        resultado = "aprobado";
      } else if (aprobado <6) {
        resultado = "reprobado";
    } else  {
        resultado = "regular ";
   
    };

    return resultado;	

};



function calificacion2 (aprobado) {

    let resultado= '';

if (aprobado < 10){
    resultado = "aprobado";
  } else if (aprobado <6) {
    resultado = "reprobado";
} else  {
    resultado = " regular";

};

return resultado;	

};

return( 

<div>
El resultado es "{calificacion(6)}"
<br/>
El resultado es "{calificacion2(7)}"
</div>
)

};
export default IfComponent
  