import { Arrow } from '../../../../../../assets';
import './breakshortreduce.css';

interface IBreakShortReduce {
  onClick: () => void;
}

export function BreakShortReduce({onClick}: IBreakShortReduce) {
  return (
    <button className='buttonSettingsReduce' onClick={onClick}>
      <Arrow />
    </button>
  );
}
