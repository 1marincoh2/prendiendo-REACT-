import React,{ useState }  from 'react';	
 
function reducer(){

const [search, setSearch]= useState('dsdf')

const enviar=(texto)=> {  
    setSearch(texto)

}

return search

}



export default reducer;