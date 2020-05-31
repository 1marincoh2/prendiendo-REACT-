import React from 'react';

const IfComponent = () => {


const calificacion = (aprobado) => {

        let resultado= '';

    if (aprobado < 9) {
        resultado = "aprobado";
      } else if (aprobado <10) {
        resultado = "reprobado";
    } else  {
        resultado = " segunda oportunidad";
   
    };

    return resultado;	

};



function calificacion2 (aprobado) {

    let resultado= '';

if (aprobado < 7) {
    resultado = "aprobado";
  } else if (aprobado <9) {
    resultado = "reprobado";
} else  {
    resultado = " segunad oportunidad";

};

return resultado;	

};

return( 

<div>
El resultado es "{calificacion(8)}"
<br/>
El resultado es "{calificacion2(10)}"
</div>
)

};
export default IfComponent
  