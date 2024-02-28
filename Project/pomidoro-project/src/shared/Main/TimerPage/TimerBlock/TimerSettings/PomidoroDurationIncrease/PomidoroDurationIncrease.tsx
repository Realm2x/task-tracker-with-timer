import './settingsbuttonincrease.css';
import { RightArrow } from '../../../../../../assets';

interface IPomidoroDurationIncrease {
  onClick: () => void;
}

export function PomidoroDurationIncrease({onClick}: IPomidoroDurationIncrease) {
  return (
    <button onClick={onClick}>
      <RightArrow />
    </button>
  );
}
