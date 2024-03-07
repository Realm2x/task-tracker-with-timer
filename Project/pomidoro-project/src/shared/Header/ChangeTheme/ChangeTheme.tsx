import { DarkTheme, LightTheme } from '../../../assets';
import { useTheme } from '../../../hooks/use-theme';
import './changetheme.css';

export function ChangeTheme() {
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <button className="changeThemeButton" onClick={handleLightThemeClick}>
      {theme === 'light' ? 
        <LightTheme />
          :
        <DarkTheme />
      }
    </button>
  );
}
