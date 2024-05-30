import styles from './statistic.module.css';
import { Equalizer } from '../../../assets';
import { Link } from 'react-router-dom';

export function Statistic() {
  return (
    <div className={styles.headerEqualizer}>
      <Link to="/stat" className={styles.headerEqualizerLink}>
        <Equalizer />
        <p className={styles.headerEqualizerText}>Статистика</p>
      </Link>
    </div>
  );
}
