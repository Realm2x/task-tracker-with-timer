import styles from './logo.module.css';
import { Tomato } from '../../../assets';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <div className={styles.headerLogo}>
      <Link to='/' className={styles.logo}>
        <Tomato />
        <span className={styles.headerLogoText}>pomodoro_box</span>
      </Link>
    </div>
  );
}
