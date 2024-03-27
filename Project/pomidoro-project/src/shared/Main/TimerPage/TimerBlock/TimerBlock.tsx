import { useState, useEffect } from 'react';
import { getPadTime } from '../../../../helpers/getPadTimes';
import './timerblock.css';
import { TimerBreak } from './TimerBreak';
import { TimerWork } from './TimerWork';
import { AppDispatch, RootState } from '../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { taskDone } from '../../../../store/task/taskSlice';
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
  const [timer, setTimer] = useState(60 * pomidoroDuration);
  const [timeBreak, setTimeBreak] = useState(60 * shortBreakDuration);
  const [isWork, setIsWork] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [isSound, setIsSound] = useState(false);
  const [isCurrentPomidoro, setIsCurrentPomidoro] = useState(currentPomidoro);
  const minutes = getPadTime(Math.floor(timer / 60));
  const seconds = getPadTime(timer - parseInt(minutes) * 60);
  const minutesBreak = getPadTime(Math.floor(timeBreak / 60));
  const secondsBreak = getPadTime(timeBreak - parseInt(minutesBreak) * 60);
  
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];
  
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!isWork && !isPause && !isBreak) {
      setTimer(60 * pomidoroDuration)
      setTimeBreak(60 * shortBreakDuration)
      if (isCurrentPomidoro % longBreakFrequency === 0) {
        setTimeBreak(60 * longBreakDuration);
      } else {
        setTimeBreak(60 * shortBreakDuration);
      }
    }
  }, [pomidoroDuration, shortBreakDuration, longBreakDuration, longBreakFrequency])

  useEffect(() => {
    setIsSound(false);
    if (pomidoro >= 1 && isWork && !isBreak) {
      const interval = setInterval(() => {
        setTimer((timer) => timer >= 0 ? --timer : 0);
      }, 1000)
      if (timer < 0) {
        setIsSound(true);
        dispatch(timeWorking({formattedDate, pomidoroDuration}));
        dispatch(timeQuantityPomidoro(formattedDate));
        dispatch(timeFocus(formattedDate));
        setIsWork(false);
        setIsBreak(true);
        if (isCurrentPomidoro % longBreakFrequency === 0) {
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
        if (isCurrentPomidoro < pomidoro) {
          setIsCurrentPomidoro(isCurrentPomidoro + 1)
        } else {
          setIsCurrentPomidoro(1)
          dispatch(taskDone(id));
        }
      }
      return () => {
        clearInterval(interval);
      }
    }
  }, [isBreak, timeBreak, isWork])

  return (
    <div className="timerBlock">
      {!isBreak ?
        <TimerWork
          work={isWork}
          pause={isPause}
          text={taskText}
          isCurrentPomidoro={isCurrentPomidoro}
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
          isCurrentPomidoro={isCurrentPomidoro}
          minutes={minutesBreak}
          seconds={secondsBreak}
          taskNumber={taskNumber}
          setIsWork={setIsWork}
          setIsPause={setIsPause}
          setTimer={setTimer}
          setIsBreak={setIsBreak}
          setIsCurrentPomidoro={setIsCurrentPomidoro}
          isSound={isSound}
          setIsSound={setIsSound}
        />
      }
    </div>
  );
}

