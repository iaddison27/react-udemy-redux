import React from "react";
import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const logoutClickHandler = () => {
    dispatch(authActions.logout());
  };

  const menu = (isAuthenticated &&
      <nav>
          <ul>
              <li>
                <a href='/'>My Products</a>
              </li>
              <li>
                <a href='/'>My Sales</a>
              </li>
              <li>
                  <button onClick={logoutClickHandler}>Logout</button>
              </li>
          </ul>
      </nav>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {menu}
    </header>
  );
};

export default Header;
