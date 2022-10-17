import React, { useContext } from 'react'
import { ThemeContext } from '../pages/api/context/themeContext'

const Button = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  const switchMode = () => {
    if (darkMode)
    theme.dispatch({type: 'LIGHTMODE'})
    else
    theme.dispatch({type: 'DARKMODE'})
  }

  return (
    <div>
      <button
        className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}
        onClick={switchMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Button
