import { useEffect, useRef } from 'react';
import './timersettings.css';
import { createPortal } from 'react-dom';
import { PomidoroDurationReduce } from './PomidoroDurationReduce';
import { PomidoroDurationIncrease } from './PomidoroDurationIncrease';
import { changesLongBreakDuration, changesLongBreakFrequency, changesPomidoroDuration, changesShortBreakDuration, modalActive } from '../../../../../store/modalSettings/modalSettings';
import { AppDispatch, RootState } from '../../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { BreakLongIncrease } from './BreakLongIncrease';
import { BreakLongReduce } from './BreakLongReduce';
import { BreakShortIncrease } from './BreakShortIncrease';
import { BreakShortReduce } from './BreakShortReduce';
import { FrequencyPomidoroReduce } from './FrequencyPomidoroReduce';
import { FrequencyPomidoroIncrease } from './FrequencyPomidoroIncrease';
import { ButtonNotification } from './ButtonNotification';

interface ITimerSettings {
  nodeSettingsRef: React.RefObject<HTMLDivElement>;
}

export function TimerSettings({nodeSettingsRef}: ITimerSettings) {
  const {pomidoroDuration, shortBreakDuration, longBreakDuration, longBreakFrequency} = useSelector((state: RootState) => state.modalSettings);
  const dispatch = useDispatch<AppDispatch>();

  function onClose() {
    dispatch(modalActive(false));
  }

  useEffect(() =>{
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose()
      }
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const pomidoroDurationReduce = () => {
    if (pomidoroDuration > 1) {
      dispatch(changesPomidoroDuration(pomidoroDuration - 1))
    }
  }

  const pomidoroDurationIncrease = () => {
    if (pomidoroDuration < 30) {
      dispatch(changesPomidoroDuration(pomidoroDuration + 1))
    }
  }

  const breakShortReduce = () => {
    if (shortBreakDuration > 1) {
      dispatch(changesShortBreakDuration(shortBreakDuration - 1))
    }
  }

  const breakShortIncrease = () => {
    if (shortBreakDuration < 5) {
      dispatch(changesShortBreakDuration(shortBreakDuration + 1))
    }
  }

  const breakLongReduce = () => {
    if (longBreakDuration > 1) {
      dispatch(changesLongBreakDuration(longBreakDuration - 1))
    }
  }

  const breakLongIncrease = () => {
    if (longBreakDuration < 30) {
      dispatch(changesLongBreakDuration(longBreakDuration + 1))
    }
  }

  const frequencyTomatoReduce = () => {
    if (longBreakFrequency > 1) {
      dispatch(changesLongBreakFrequency(longBreakFrequency - 1))
    }
  }

  const frequencyTomatoIncrease = () => {
    if (longBreakFrequency < 6) {
      dispatch(changesLongBreakFrequency(longBreakFrequency + 1))
    }
  }

  const ref = useRef<HTMLDivElement>(null);

  const node = document.querySelector('#modal_root');
  if (!node) return null;
  
  return createPortal((
    <div className='modalWrapperSettings modales' ref={nodeSettingsRef}>
      <div className='modalSettings' ref={ref}>
        <h2 className='modalTitleSettings'>Настройка таймера</h2>
        <div className='buttonPomidoroSetting buttonSettings'>
          <p className='buttonTitleName'>Длительность помидора</p>
          <div className='buttonSettingsGroup'>
            <PomidoroDurationReduce onClick={pomidoroDurationReduce} />
            <span className='buttonSettingsText'>
              {pomidoroDuration}
            </span>
            <PomidoroDurationIncrease onClick={pomidoroDurationIncrease} />
          </div>
        </div>
        <div className='buttonBreakShortSetting buttonSettings'>
          <p className='buttonTitleName'>Длительность короткого перерыва</p>
          <div className='buttonSettingsGroup'>
            <BreakShortReduce onClick={breakShortReduce}  />
            <span className='buttonSettingsText'>
              {shortBreakDuration}
            </span>
            <BreakShortIncrease onClick={breakShortIncrease}  />
          </div>
        </div>
        <div className='buttonBreakLongSetting buttonSettings'>
          <p className='buttonTitleName'>Длительность длинного перерыва</p>
          <div className='buttonSettingsGroup'>
            <BreakLongReduce onClick={breakLongReduce} />
            <span className='buttonSettingsText'>
              {longBreakDuration}
            </span>
            <BreakLongIncrease onClick={breakLongIncrease} />
          </div>
        </div>
        <div className='buttonFrequencyBreakSetting buttonSettings'>
          <p className='buttonTitleName'>Кол-во помидоров до длинного перерыва</p>
          <div className='buttonSettingsGroup'>
            <FrequencyPomidoroReduce onClick={frequencyTomatoReduce} />
            <span className='buttonSettingsText'>
              {longBreakFrequency}
            </span>
            <FrequencyPomidoroIncrease onClick={frequencyTomatoIncrease} />
          </div>
        </div>
        <div className='buttonNotificationSetting'>
          <p className='buttonTitleName'>Уведомления</p>
          <ButtonNotification />
        </div>
      </div>
    </div>
  ), node)
}
