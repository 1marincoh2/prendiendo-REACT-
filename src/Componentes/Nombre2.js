import React from 'react';
 
function Nombre2() {
  const Nombres1 = 'TEQUILA';
 
  return <Headline Nom={Nombres1} />;
}
 
function Headline(props) {
  return <h1>{props.Nom}</h1>;
}
 
export default Nombre2;