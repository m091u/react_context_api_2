// src/context/theme.context.jsx

import { createContext , useState} from "react";

const ThemeContext = createContext();

// CREATE A WRAPPER COMPONENT
function ThemeProviderWrapper(props) {
    const [ theme, setTheme] = useState("light")

    const toggleTheme =()=> {
        if (theme==="light"){
            setTheme("dark")
        } else {
            setTheme("light")
        }
    };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProviderWrapper }; // <== UPDATE
