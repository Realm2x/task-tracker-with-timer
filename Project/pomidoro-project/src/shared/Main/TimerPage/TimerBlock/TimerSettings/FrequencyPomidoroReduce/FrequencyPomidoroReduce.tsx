import { LeftArrow } from '../../../../../../assets';
import './frequencypomidororeduce.css';

interface IFrequencyPomidoroReduce {
  onClick: () => void;
}

export function FrequencyPomidoroReduce({onClick}: IFrequencyPomidoroReduce) {
  return (
    <button onClick={onClick}>
      <LeftArrow />
    </button>
  );
}
