import './header.css';
import { Logo } from './Logo'
import { SettingsTimer } from './SettingsTimer';
import { Statistic } from './Statistic/Statistic';

export function Header() {
  return (
    <header className='header'>
      <Logo />
      <div className='headerContent'>
        <Statistic />
        <SettingsTimer />
      </div>
    </header>
  );
}
