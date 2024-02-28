import { LeftArrow } from '../../../../../../assets';
import './breaklongreduce.css';

interface IBreakLongReduce {
  onClick: () => void;
}

export function BreakLongReduce({onClick}: IBreakLongReduce) {
  return (
    <button onClick={onClick}>
      <LeftArrow />
    </button>
  );
}
