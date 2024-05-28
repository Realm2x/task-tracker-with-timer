import './settingsbuttonincrease.css';
import { Arrow } from '../../../../../../assets';

interface IPomidoroDurationIncrease {
  onClick: () => void;
}

export function PomidoroDurationIncrease({onClick}: IPomidoroDurationIncrease) {
  return (
    <button className='buttonSettingsIncrease' onClick={onClick}>
      <Arrow />
    </button>
  );
}
