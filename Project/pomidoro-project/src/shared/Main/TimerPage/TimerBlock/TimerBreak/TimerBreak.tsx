import { ButtonTimerContinue } from '../ButtonTimerContinue';
import { ButtonTimerPause } from '../ButtonTimerPause';
import { ButtonTimerSkip } from '../ButtonTimerSkip';
import { ButtonTimerStart } from '../ButtonTimerStart';
import timerBell from '../../../../../assets/timerBell.mp3';
import './timerbreak.css';
import { TimerButton } from '../TimerButton';

interface ITimerBreak {
  id: string;
  work: boolean;
  pause: boolean;
  text: string;
  pomidoro: number;
  isCurrentPomidoro: number;
  minutes: string;
  seconds: string;
  taskNumber: number;
  setIsWork: (value: boolean) => void;
  setIsPause: (value: boolean) => void;
  setTimer: (value: number) => void;
  setIsBreak: (value: boolean) => void;
  setIsCurrentPomidoro: (value: number) => void;
  isSound: boolean;
  setIsSound: (value: boolean) => void;
}

export function TimerBreak({id, work, pause, text, minutes, seconds, taskNumber, setIsWork, setIsPause, setTimer, setIsBreak, setIsCurrentPomidoro, isCurrentPomidoro, isSound, setIsSound, pomidoro}: ITimerBreak) {
  const soundTimer = <audio autoPlay src={timerBell}></audio>
  
  return (
    <>
      <div className="timerTitle timerTitleBreak">
        <h3 className='timerTitleTask'>{text}</h3>
        {work ? 
          <p className='timerTitleNumber'>Перерыв {isCurrentPomidoro}</p>
          :
          <p className='timerTitleNumber'>Помидор {isCurrentPomidoro}</p>
        }
      </div>
      <div className="timerCounter">
        <div className="timerTask">
          {work ? 
          <p className="timerNumber timerNumberBreak">{minutes}:{seconds} </p>
          :
          <p className="timerNumber">{minutes}:{seconds} </p>
          }
          <TimerButton id={id} pomidoro={pomidoro} />
        </div>
        <p className='timerTaskText'><span className='timerTaskNumber'>Задача {taskNumber} - </span>{text} </p>
        <div className="timerButtonGroup">
          {work ? <ButtonTimerPause setIsWork={setIsWork} setIsPause={setIsPause}/> : null}
          {work ? <ButtonTimerSkip setIsBreak={setIsBreak} setIsWork={setIsWork} setTimer={setTimer} setIsPomidoro={setIsCurrentPomidoro} isPomidoro={isCurrentPomidoro} setIsSound={setIsSound} />  : null}
          {!work && !pause ? <ButtonTimerStart setIsWork={setIsWork}/> : null}
          {!work && pause ? <ButtonTimerContinue setIsWork={setIsWork} /> : null}
          {!work && pause ? <ButtonTimerSkip setIsBreak={setIsBreak} setIsWork={setIsWork} setTimer={setTimer} setIsPomidoro={setIsCurrentPomidoro} isPomidoro={isCurrentPomidoro} setIsSound={setIsSound} /> : null}
          {isSound ? soundTimer : null}
        </div>
      </div>
    </>
  );
}
