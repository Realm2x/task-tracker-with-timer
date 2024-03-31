import { useState, useEffect } from 'react';
import { getPadTime } from '../../../../helpers/getPadTimes';
import styles from './timerblock.module.css';
import { TimerBreak } from './TimerBreak';
import { TimerWork } from './TimerWork';
import { AppDispatch, RootState } from '../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { taskCurrentPomidoro, taskDelete, taskReduce } from '../../../../store/task/taskSlice';
import { timeFocus, timeQuantityPomidoro, timeWorking } from '../../../../store/statisticData/statisticData';

interface ITimerBlock {
  pomidoro: number;
  taskText: string;
  taskNumber: number;
  id: string;
  currentPomidoro: number;
}

export function TimerBlock({pomidoro, taskText, taskNumber, id, currentPomidoro}: ITimerBlock) {
  const {pomidoroDuration, shortBreakDuration, longBreakDuration, longBreakFrequency} = useSelector((state: RootState) => state.modalSettings);
  const [isWork, setIsWork] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [isSound, setIsSound] = useState(false);
  const [timer, setTimer] = useState(60 * pomidoroDuration);
  const [timeBreak, setTimeBreak] = useState(60 * shortBreakDuration);
  const minutes = getPadTime(Math.floor(timer / 60));
  const seconds = getPadTime(timer - parseInt(minutes) * 60);
  const minutesBreak = getPadTime(Math.floor(timeBreak / 60));
  const secondsBreak = getPadTime(timeBreak - parseInt(minutesBreak) * 60);
  
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];
  
  const dispatch = useDispatch<AppDispatch>();

  // Для того, чтобы настройки таймера не применялись во время работы таймера
  useEffect(() => {
    if (!isWork && !isPause && !isBreak) {
      setTimer(60 * pomidoroDuration)
      setTimeBreak(60 * shortBreakDuration)
      if (currentPomidoro % longBreakFrequency === 0) {
        setTimeBreak(60 * longBreakDuration);
      } else {
        setTimeBreak(60 * shortBreakDuration);
      }
    }
  }, [pomidoroDuration, shortBreakDuration, longBreakDuration, longBreakFrequency])

  // Логика таймера во время работы
  useEffect(() => {
    setIsSound(false);
    if (pomidoro >= 1 && isWork && !isBreak) {
      const interval = setInterval(() => {
        setTimer((timer) => timer >= 0 ? --timer : 0);
      }, 1000)
      if (timer % 60 === 0 && timer < pomidoroDuration * 60) {
        dispatch(timeWorking(formattedDate));
      };
      if (timer < 0) {
        setIsSound(true);
        dispatch(timeQuantityPomidoro(formattedDate));
        dispatch(timeFocus(formattedDate));
        setIsWork(false);
        setIsBreak(true);
        if (pomidoro > 1) {
          dispatch(taskReduce(id));
          dispatch(taskCurrentPomidoro(id));
        } else {
          setIsBreak(false);
          setIsWork(false);
          setTimer(60 * pomidoroDuration);
          dispatch(timeFocus(formattedDate));
          const deleteTask = () => dispatch(taskDelete(id));
          setTimeout(deleteTask, 100);
        }
        if (currentPomidoro % longBreakFrequency === 0) {
          setTimeBreak(60 * longBreakDuration);
        } else {
          setTimeBreak(60 * shortBreakDuration);
        }
      }
      return () => {
        clearInterval(interval);
      }
    }
  }, [isWork, timer, isBreak])

  // Логика таймера во время перерыва
  useEffect(() => {
    setIsSound(false);
    if (isBreak && isWork) {
      const interval = setInterval(() => {
        setTimeBreak((timeBreak) => timeBreak >= 0 ? --timeBreak : 0);
      }, 1000)
      if (timeBreak < 0) {
        setIsSound(true);
        setIsBreak(false);
        setIsWork(false);
        setTimer(60 * pomidoroDuration);
        dispatch(timeFocus(formattedDate));
      }
      return () => {
        clearInterval(interval);
      }
    }
  }, [isBreak, timeBreak, isWork])

  return (
    <div className={styles.timerBlock}>
      {!isBreak ?
        <TimerWork
          work={isWork}
          pause={isPause}
          text={taskText}
          currentPomidoro={currentPomidoro}
          minutes={minutes}
          seconds={seconds}
          taskNumber={taskNumber}
          setIsWork={setIsWork}
          setIsPause={setIsPause}
          setTimer={setTimer}
          id={id}
          isSound={isSound}
          setIsSound={setIsSound}
          pomidoro={pomidoro}
        />
        :
        <TimerBreak
          id={id}
          work={isWork}
          pause={isPause}
          text={taskText}
          pomidoro={pomidoro}
          currentPomidoro={currentPomidoro}
          minutes={minutesBreak}
          seconds={secondsBreak}
          taskNumber={taskNumber}
          setIsWork={setIsWork}
          setIsPause={setIsPause}
          setTimer={setTimer}
          setIsBreak={setIsBreak}
          isSound={isSound}
          setIsSound={setIsSound}
        />
      }
    </div>
  );
}

