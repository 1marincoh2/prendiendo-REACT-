import React from 'react';
 
const Nombre4 = () => {
  const Nombre3 = 'PELUCHON';
 
  return <Headline Nom3={Nombre3} />;
};
 
const Headline = ({ Nom3 }) => {
  return <h1>{Nom3}</h1>;
};
 
export default Nombre4;