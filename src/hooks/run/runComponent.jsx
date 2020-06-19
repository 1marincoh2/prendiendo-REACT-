import React, {createContext, useContext, useState} from 'react';
import RunContext from "./runContext";

export default props => {

    const [run, setRun] = useState(false);

    function clickRun(state = false) {
        console.log('amir')
        setRun(state);
    }


    return (
        <RunContext.Provider value={{run, clickRun}}>
            {props.children}
        </RunContext.Provider>
    );
};

