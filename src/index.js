import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./Store/vehicles.js";
import RunComponent from "./hooks/run/runComponent";
import RunAllInOneComponent from "./hooks/runAllInOne/useRunAllInOneState";


const vehicle = createStore(reducer);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={vehicle}>
            <RunAllInOneComponent>
                <RunComponent>
                    <App/>
                </RunComponent>
            </RunAllInOneComponent>
        </Provider>,
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
