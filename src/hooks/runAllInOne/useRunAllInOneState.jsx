import React, {createContext, useContext, useState} from 'react';

const RunAllInOneContext = createContext({
    runAll: true,
    clickRunAll: (value) => {
    },
});


export default props => {

    const [runAll, setRunAll] = useState(false);

    function clickRunAll(state = false) {
        setRunAll(darkMode => state);
    }


    return (
        <RunAllInOneContext.Provider value={{runAll, clickRunAll}}>
            {props.children}
        </RunAllInOneContext.Provider>
    );
};

export const useRunAllInOne = () => {
    const {runAll, clickRunAll} = useContext(RunAllInOneContext);
    return {
        runAll,
        clickRunAll
    }
}
