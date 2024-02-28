import './statistic.css';
import { Equalizer } from '../../../assets';
import { Link } from 'react-router-dom';

export function Statistic() {
  return (
    <div className='headerEqualizer'>
      <Link to="/stat" className='headerEqualizerLink'>
        <Equalizer />
        <p className='headerEqualizerText'>Статистика</p>
      </Link>
    </div>
  );
}
