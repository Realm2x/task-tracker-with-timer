import './settingsbuttonreduce.css';
import { Arrow } from '../../../../../../assets';

interface IPomidoroDurationReduce {
  onClick: () => void;
}

export function PomidoroDurationReduce({onClick}: IPomidoroDurationReduce) {

  return (
    <button className='buttonSettingsReduce' onClick={onClick}>
      <Arrow />
    </button>
  );
}
