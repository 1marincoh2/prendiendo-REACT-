import React from 'react';



function practica1 () {
 
    const frutas={
        id: 0,
        fruta: 'platano',
        verduras: 'cebolla',
        legunbres: 'frijol',
        carne: 'cerdo',
        bebidas: 'refresco'
    }
   
    const frutdata=frutas.values(frutas)


    return (
        <div>
			 <table striped bordered hover>

<thead>
<tr>

    <th>Accion</th>
</tr>

</thead>

<tbody>

            <tr>
            <td>{frutdata().fruta}</td>
                  </tr>
</tbody>
</table>
		</div>
	);
}

export default practica1;