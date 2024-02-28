import { LeftArrow } from '../../../../../../assets';
import './breakshortreduce.css';

interface IBreakShortReduce {
  onClick: () => void;
}

export function BreakShortReduce({onClick}: IBreakShortReduce) {
  return (
    <button onClick={onClick}>
      <LeftArrow />
    </button>
  );
}
