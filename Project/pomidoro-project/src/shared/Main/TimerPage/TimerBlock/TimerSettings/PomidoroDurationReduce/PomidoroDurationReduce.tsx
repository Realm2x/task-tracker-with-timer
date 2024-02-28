import './settingsbuttonreduce.css';
import { LeftArrow } from '../../../../../../assets';

interface IPomidoroDurationReduce {
  onClick: () => void;
}

export function PomidoroDurationReduce({onClick}: IPomidoroDurationReduce) {

  return (
    <button onClick={onClick}>
      <LeftArrow />
    </button>
  );
}
