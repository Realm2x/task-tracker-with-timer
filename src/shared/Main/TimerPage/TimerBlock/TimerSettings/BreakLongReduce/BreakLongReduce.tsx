import { Arrow } from '../../../../../../assets';
import './breaklongreduce.css';

interface IBreakLongReduce {
  onClick: () => void;
}

export function BreakLongReduce({onClick}: IBreakLongReduce) {
  return (
    <button className='buttonSettingsReduce' onClick={onClick}>
      <Arrow />
    </button>
  );
}
