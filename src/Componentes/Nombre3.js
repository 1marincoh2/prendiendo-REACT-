import React from 'react';
 
function Nombre3() {
  const Nombres2 = 'Scooby dooby do';
 
  return <Headline Nom1={Nombres2} />;
}
 
function Headline({ Nom1 }) {
  return <h1>{Nom1}</h1>;
}
 
export default Nombre3;