import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const localTheme = localStorage.getItem('app-theme');
  const [theme, setTheme] = useState( localTheme || 'light'); 

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme])

  return {theme, setTheme};
}