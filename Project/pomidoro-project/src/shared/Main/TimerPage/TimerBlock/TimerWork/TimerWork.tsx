import { ButtonTimerContinue } from '../ButtonTimerContinue';
import { ButtonTimerDone } from '../ButtonTimerDone';
import { ButtonTimerPause } from '../ButtonTimerPause';
import { ButtonTimerStart } from '../ButtonTimerStart';
import { ButtonTimerStop } from '../ButtonTimerStop';
import timerBell from '../../../../../assets/timerBell.mp3';
import styles from './timerwork.module.css';
import { TimerButton } from '../TimerButton';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { Pomidor } from '../../../../../assets';
import { motion } from 'framer-motion';

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
  currentPomidoro: number;
  id: string;
  isSound: boolean;
  pomidoro: number;
  setIsSound: (value: boolean) => void;
}

export function TimerWork({work, pause, text, minutes, seconds, taskNumber, setIsWork, setIsPause, setTimer, id, currentPomidoro, isSound, setIsSound, pomidoro}: ITimerWork) {
  const {notification} = useSelector((state: RootState) => state.modalSettings);
  
  useEffect(() => {
    if (isSound === true && notification === true) {
      const playSoundAndAlert = () => {
        new Audio(timerBell).play();
      }
      setTimeout(() => {
        alert("Время отдохнуть!");
      }, 100);
      setIsSound(false);
      return playSoundAndAlert;
    } else if (isSound === true) {
      const playSoundAndAlert = () => {
        new Audio(timerBell).play();
      }
      return playSoundAndAlert;
    }
  }, [isSound])

  const variants = {
    active: {
      scale: [2],
      rotate: [0, 360],
    },
    pause: { scale: [1], },
  }

  return (
    <>
      {work || pause ?  
      <div className={`${styles.timerTitle} ${styles.timerTitleActive}`}>
        <h3 className={styles.timerTitleTask}>{text}</h3>
        <p className={styles.timerTitleNumber}>Помидор {currentPomidoro}</p>
      </div>
        : 
      <div className={styles.timerTitle}>
        <h3 className={styles.timerTitleTask}>{text}</h3>
        <p className={styles.timerTitleNumber}>Помидор {currentPomidoro}</p>
      </div>
      }
      <div className={styles.timerCounter}>
        <motion.div className={styles.timerPomidorImg}
          animate={work ? 'active' : 'pause'}
          variants={variants}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
          }}
          drag
          dragConstraints={{
            top: -20,
            left: -20,
            right: 20,
            bottom: 20,
          }}
        >
          <Pomidor />
        </motion.div>
        <div className={styles.timerTask}>
          {work || pause ? 
          <p className={`${styles.timerNumber} ${styles.timerNumberActive}`}>{minutes}:{seconds} </p>
          :
          <p className={styles.timerNumber}>{minutes}:{seconds} </p>
          }
          <TimerButton id={id} pomidoro={pomidoro} />
        </div>
        <p className={styles.timerTaskText}><span className={styles.timerTaskNumber}>Задача {taskNumber} - </span>{text} </p>
        <div className={styles.timerButtonGroup}>
          {work ? <ButtonTimerPause setIsWork={setIsWork} setIsPause={setIsPause}/> : null}
          {work ? <ButtonTimerStop switches={work} setIsWork={setIsWork} setIsPause={setIsPause} setTimer={setTimer}/> : null}
          {!work && !pause ? <ButtonTimerStart setIsWork={setIsWork}/> : null}
          {!work && !pause ? <ButtonTimerStop switches={work} setIsWork={setIsWork} setIsPause={setIsPause} setTimer={setTimer}/> : null}
          {!work && pause ? <ButtonTimerContinue setIsWork={setIsWork} /> : null}
          {!work && pause ? <ButtonTimerDone setIsWork={setIsWork} setIsPause={setIsPause} setTimer={setTimer} id={id}/> : null}
        </div>
      </div>
    </>
  );
}
