import { useDispatch, useSelector } from 'react-redux';
import { SettingsSvg } from '../../../assets';
import { TimerSettings } from '../../Main/TimerPage/TimerBlock/TimerSettings';
import './settingsTimer.css';
import { useState, useEffect } from 'react';
import { modalActive } from '../../../store/modalSettings/modalSettings';
import { RootState, AppDispatch } from '../../../store/store';

export function SettingsTimer() {
  const {modal} = useSelector((state: RootState) => state.modalSettings);
  const [isModal, setIsModal] = useState(modal);
  const dispatch = useDispatch<AppDispatch>();

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(modalActive(true));
  }

  useEffect(() =>{
    setIsModal(modal)
  }, [modal, isModal])

  return (
    <>
      <button className="timerButtonSettings" onClick={onClick}>
        <SettingsSvg />
      </button>

      {isModal ? 
        <TimerSettings /> : null
      }
    </>
  );
}
