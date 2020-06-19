import {createContext} from "react";

const RunContext = createContext({
    run: true,
    clickRun: (value) => {
    },
});
export default RunContext