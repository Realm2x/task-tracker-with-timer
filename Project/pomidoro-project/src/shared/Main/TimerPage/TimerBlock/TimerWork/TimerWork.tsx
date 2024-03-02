import { ButtonTimerContinue } from '../ButtonTimerContinue';
import { ButtonTimerDone } from '../ButtonTimerDone';
import { ButtonTimerPause } from '../ButtonTimerPause';
import { ButtonTimerStart } from '../ButtonTimerStart';
import { ButtonTimerStop } from '../ButtonTimerStop';
import timerBell from '../../../../../assets/timerBell.mp3';
import './timerwork.css';
import { TimerButton } from '../TimerButton';

interface ITimerWork {
  work: boolean;
  pause: boolean;
  text: string;
  minutes: string;
  seconds: string;
  taskNumber: number;
  setIsWork: (value: boolean) => void;
  setIsPause: (value: boolean) => void;
  setTimer: (value: number) => void;
  isCurrentPomidoro: number;
  id: string;
  isSound: boolean;
  pomidoro: number;
}

export function TimerWork({work, pause, text, minutes, seconds, taskNumber, setIsWork, setIsPause, setTimer, id, isCurrentPomidoro, isSound, pomidoro}: ITimerWork) {
  const soundTimer = <audio autoPlay src={timerBell} ></audio>

  return (
    <>
      {work || pause ?  
      <div className="timerTitle timerTitleActive">
        <h3 className='timerTitleTask'>{text}</h3>
        <p className='timerTitleNumber'>Помидор {isCurrentPomidoro}</p>
      </div>
        : 
      <div className="timerTitle">
        <h3 className='timerTitleTask'>{text}</h3>
        <p className='timerTitleNumber'>Помидор {isCurrentPomidoro}</p>
      </div>
      }
      <div className="timerCounter">
        <div className="timerTask">
          {work || pause ? 
          <p className="timerNumber timerNumberActive">{minutes}:{seconds} </p>
          :
          <p className="timerNumber">{minutes}:{seconds} </p>
          }
          <TimerButton id={id} pomidoro={pomidoro} />
        </div>
        <p className='timerTaskText'><span className='timerTaskNumber'>Задача {taskNumber} - </span>{text} </p>
        <div className="timerButtonGroup">
          {work ? <ButtonTimerPause setIsWork={setIsWork} setIsPause={setIsPause}/> : null}
          {work ? <ButtonTimerStop switches={work} setIsWork={setIsWork} setIsPause={setIsPause} setTimer={setTimer}/> : null}
          {!work && !pause ? <ButtonTimerStart setIsWork={setIsWork}/> : null}
          {!work && !pause ? <ButtonTimerStop switches={work} setIsWork={setIsWork} setIsPause={setIsPause} setTimer={setTimer}/> : null}
          {!work && pause ? <ButtonTimerContinue setIsWork={setIsWork} /> : null}
          {!work && pause ? <ButtonTimerDone setIsWork={setIsWork} setIsPause={setIsPause} setTimer={setTimer} id={id}/> : null}
          {isSound ? soundTimer : null}
        </div>
      </div>
    </>
  );
}
