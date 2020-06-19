import {useContext} from "react";
import RunContext from "./runContext";

export const useRun = () => {
    const {run, clickRun} = useContext(RunContext);
    return {
        run,
        clickRun
    }
}
