import { RightArrow } from '../../../../../../assets';
import './breakshortincrease.css';

interface IBreakShortIncrease {
  onClick: () => void;
}

export function BreakShortIncrease({onClick}: IBreakShortIncrease) {
  return (
    <button onClick={onClick}>
      <RightArrow />
    </button>
  );
}
