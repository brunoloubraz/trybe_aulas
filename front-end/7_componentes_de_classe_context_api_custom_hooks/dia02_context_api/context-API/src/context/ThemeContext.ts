import { createContext } from "react";

type themeContextType = {
  theme: 'dark'| 'light';
  toggleTheme: () => void
}

const ThemeContext = createContext( {} as themeContextType)

export default ThemeContext;