import React from 'react';


function Practica1() {

    const list = ['casa', 'caro', 'tele', 'radio', 'ventilador', 'mesa', 'silla', 'baño'];


    return (
        <div>
            {list.map((obj) =>
                <li key={obj}>{obj}</li>
            )}
        </div>
    )

}

export default Practica1;
