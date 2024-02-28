import { useDispatch, useSelector } from 'react-redux';
import { TimerSettingsSvg } from '../../../../../assets';
import { AppDispatch, RootState } from '../../../../../store/store';
import { TimerSettings } from '../TimerSettings';
import './timerbuttonsettings.css';
import { useEffect, useState } from 'react';
import {  modalActive } from '../../../../../store/modalSettings/modalSettings';

export function TimerButtonSettings() {
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
        <TimerSettingsSvg />
      </button>

      {isModal ? 
        <TimerSettings /> : null
      }
    </>
  );
}
