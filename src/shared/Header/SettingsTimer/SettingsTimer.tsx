import { useDispatch, useSelector } from 'react-redux';
import { SettingsSvg } from '../../../assets';
import { TimerSettings } from '../../Main/TimerPage/TimerBlock/TimerSettings';
import './settingsTimer.css';
import { useState, useEffect, useRef } from 'react';
import { modalActive } from '../../../store/modalSettings/modalSettings';
import { RootState, AppDispatch } from '../../../store/store';
import { CSSTransition } from 'react-transition-group';

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

  const nodeSettingsRef = useRef(null);

  return (
    <>
      <button className="timerButtonSettings" onClick={onClick}>
        <SettingsSvg />
      </button>

      <CSSTransition
        in={isModal}
        timeout={300}
        classNames="modales"
        unmountOnExit
        nodeRef={nodeSettingsRef}
      >
        <TimerSettings nodeSettingsRef={nodeSettingsRef} />
      </CSSTransition>
    </>
  );
}
