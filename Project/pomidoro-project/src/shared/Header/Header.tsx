import { ChangeTheme } from './ChangeTheme';
import styles from './header.module.css';
import { Logo } from './Logo'
import { SettingsTimer } from './SettingsTimer';
import { Statistic } from './Statistic/Statistic';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerContent}>
        <Statistic />
        <ChangeTheme />
        <SettingsTimer />
      </div>
    </header>
  );
}
