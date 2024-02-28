import './logo.css';
import { Tomato } from '../../../assets';

export function Logo() {
  return (
    <div className='headerLogo'>
      <a href="/" className='logo'>
        <Tomato />
        <span className='headerLogoText'>pomodoro_box</span>
      </a>
    </div>
  );
}
