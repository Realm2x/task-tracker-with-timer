import { Arrow } from '../../../../../../assets';
import './breaklongincrease.css';

interface IBreakLongIncrease {
  onClick: () => void;
}

export function BreakLongIncrease({onClick}: IBreakLongIncrease) {
  return (
    <button className='buttonSettingsIncrease' onClick={onClick}>
      <Arrow />
    </button>
  );
}
