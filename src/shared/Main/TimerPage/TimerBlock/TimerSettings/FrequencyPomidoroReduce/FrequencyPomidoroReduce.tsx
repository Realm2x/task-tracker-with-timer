import { Arrow } from '../../../../../../assets';
import './frequencypomidororeduce.css';

interface IFrequencyPomidoroReduce {
  onClick: () => void;
}

export function FrequencyPomidoroReduce({onClick}: IFrequencyPomidoroReduce) {
  return (
    <button className='buttonSettingsReduce' onClick={onClick}>
      <Arrow />
    </button>
  );
}
