import { DarkTheme, LightTheme } from '../../../assets';
import { useTheme } from '../../../hooks/use-theme';
import styles from './changetheme.module.css';

export function ChangeTheme() {
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <button className={styles.changeThemeButton} onClick={handleLightThemeClick}>
      {theme === 'light' ? 
        <LightTheme />
          :
        <DarkTheme />
      }
    </button>
  );
}
