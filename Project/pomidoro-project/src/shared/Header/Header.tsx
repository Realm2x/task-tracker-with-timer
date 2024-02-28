import './header.css';
import { Logo } from './Logo'
import { Statistic } from './Statistic/Statistic';

export function Header() {
  return (
    <header className='header'>
      <Logo />
      <Statistic />
    </header>
  );
}
