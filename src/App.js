import React from "react";
import {Provider, useSelector} from 'react-redux';

import storeToolkit from './store/index-toolkit.js';
import CounterToolkit from "./components/CounterToolkit";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
      <React.Fragment>
          <Provider store={storeToolkit}>
              <Header />
              {!isAuthenticated && <Auth />}
              {isAuthenticated && <UserProfile />}
          </Provider>
          <Provider store={storeToolkit}>
                <CounterToolkit />
          </Provider>
      </React.Fragment>
  );
}

export default App;
