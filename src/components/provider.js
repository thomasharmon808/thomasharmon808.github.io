import React from "react"
import { DarkModeContext } from "@components"
import useDarkMode from "../hooks/useDarkMode"

const Provider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <DarkModeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export default Provider
