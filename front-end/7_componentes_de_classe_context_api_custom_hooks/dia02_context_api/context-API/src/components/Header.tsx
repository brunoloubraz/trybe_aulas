import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  return (
    <header>
      <h1>Trybe</h1>
      <button onClick={ () => themeContext.toggleTheme()}>
        {themeContext.theme === 'dark' ? 'sol' : 'lua'}
      </button>
    </header>
  )
}