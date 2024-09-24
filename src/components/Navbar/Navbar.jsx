import React from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../constants/routes';
import { useAppContext } from '../../context/AppContextProvider';
import { signOut } from '../../context/appActionCreators';
import logo from '../../assets/logo.jpeg';
import './navbar.scss';

const displayNames = {
  home: "HOME",
  signUp: "SIGN UP",
  signIn: "SIGN IN",
  recipes: "RECIPES",
  favouriteRecipes: "FAVORITES",
  about: "ABOUT US",
};

const Navbar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <header>
      <div className="header-block">
        <button className="logo" onClick={() => navigate(routes.home)}>
          <img src={logo} alt="Logo" />
        </button>
        <nav>
          {Object.entries(routes).map(([key, value]) => {
            if (
              (state.user?.userName && (key === 'signOut' && key === 'favouriteRecipes')) ||
              (!state.user?.userName && (key === 'signUp' || key === 'signIn')) ||
              (key === 'recipes' || key === 'about' || key === 'home')
            ) {
              return (
                <a key={key} href={value} className="list-items">
                  {displayNames[key]}
                </a>
              );
            }
            return null;
          })}
          {state.user?.userName && (
            <div className="dropdown">
              <button className="list-items">
                Hello {state.user.userName}
              </button>
              <div className="dropdown-content">
                <a href={routes.favouriteRecipes} className="dropdown-item">
                  FAVORITES
                </a>
                <button className="dropdown-item" onClick={handleSignOut}>
                  SIGN OUT
                </button>
              </div>
            </div>
          )}
        </nav>
        <div className="second-dropdown dropdown">
          <button className="list-items">
            MENU
          </button>
          <div className="dropdown-content">
            <a href={routes.home} className="dropdown-item">
              HOME
            </a>
            <a href={routes.about} className="dropdown-item">
              ABOUT US
            </a>
            {state.user?.userName && (
              <button className="dropdown-item" onClick={handleSignOut}>
                SIGN OUT
              </button>
            )}
            {!state.user?.userName && (
              <>
                <a href={routes.signUp} className="dropdown-item">
                  SIGN UP
                </a>
                <a href={routes.signIn} className="dropdown-item">
                  SIGN IN
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
