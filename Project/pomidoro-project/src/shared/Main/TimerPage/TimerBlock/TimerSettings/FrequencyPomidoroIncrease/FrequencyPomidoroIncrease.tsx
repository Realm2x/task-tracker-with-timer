import { RightArrow } from '../../../../../../assets';
import './frequencypomidoroincrease.css';

interface IFrequencyPomidoroIncrease {
  onClick: () => void;
}

export function FrequencyPomidoroIncrease({onClick}: IFrequencyPomidoroIncrease) {
  return (
    <button onClick={onClick}>
      <RightArrow />
    </button>
  );
}
