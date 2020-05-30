import React from 'react';

const IfComponent = () => {


const calificacion = (aprobado= 10 ) => {

        let resultado= '';

    if (aprobado < 5) {
        resultado = "si paso el examen";
      } else if (aprobado <9) {
        resultado = "no paso el examen";
    } else  {
        resultado = " paso el examen";
   
    };

    return resultado;	

};



function calificacion2 (aprobado= 8 ) {

    let resultado= '';

if (aprobado < 7) {
    resultado = "si paso el examen";
  } else if (aprobado <9) {
    resultado = "no paso el examen";
} else  {
    resultado = " paso el examen";

};

return resultado;	

};

return( 

<div>
El resultado es "{calificacion()}"
<br/>
El resultado es "{calificacion2()}"
</div>
)

};
export default IfComponent
  