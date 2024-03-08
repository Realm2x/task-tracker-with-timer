import './logo.css';
import { Tomato } from '../../../assets';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <div className='headerLogo'>
      <Link to='/' className='logo'>
        <Tomato />
        <span className='headerLogoText'>pomodoro_box</span>
      </Link>
    </div>
  );
}
