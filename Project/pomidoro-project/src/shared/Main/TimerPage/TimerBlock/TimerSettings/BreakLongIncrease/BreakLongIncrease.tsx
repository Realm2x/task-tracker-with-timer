import { RightArrow } from '../../../../../../assets';
import './breaklongincrease.css';

interface IBreakLongIncrease {
  onClick: () => void;
}

export function BreakLongIncrease({onClick}: IBreakLongIncrease) {
  return (
    <button onClick={onClick}>
      <RightArrow />
    </button>
  );
}
