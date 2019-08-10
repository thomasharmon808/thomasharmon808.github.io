import { useState, useEffect } from 'react'

export default () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    console.log(`toggleTheme: ${theme}`)
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return [theme, toggleTheme]
}
