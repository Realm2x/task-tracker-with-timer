import { Arrow } from '../../../../../../assets';
import './frequencypomidoroincrease.css';

interface IFrequencyPomidoroIncrease {
  onClick: () => void;
}

export function FrequencyPomidoroIncrease({onClick}: IFrequencyPomidoroIncrease) {
  return (
    <button className='buttonSettingsIncrease' onClick={onClick}>
      <Arrow />
    </button>
  );
}
