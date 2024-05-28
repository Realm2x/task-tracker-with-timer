import { Arrow } from '../../../../../../assets';
import './breakshortincrease.css';

interface IBreakShortIncrease {
  onClick: () => void;
}

export function BreakShortIncrease({onClick}: IBreakShortIncrease) {
  return (
    <button className='buttonSettingsIncrease' onClick={onClick}>
      <Arrow />
    </button>
  );
}
