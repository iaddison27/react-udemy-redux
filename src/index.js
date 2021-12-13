import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import Counter from "./components/Counter";
import store from "./store";
import storeToolkit from "./store/index-toolkit";


ReactDOM.render(
    <React.Fragment>
        <Provider store={storeToolkit}>
            <App />
        </Provider>
        <Provider store={store}>
            <Counter />
        </Provider>
    </React.Fragment>,
    document.getElementById('root')
);
