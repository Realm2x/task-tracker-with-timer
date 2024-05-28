import { ButtonTimerContinue } from '../ButtonTimerContinue';
import { ButtonTimerPause } from '../ButtonTimerPause';
import { ButtonTimerSkip } from '../ButtonTimerSkip';
import { ButtonTimerStart } from '../ButtonTimerStart';
import timerBell from '../../../../../assets/timerBell.mp3';
import styles from './timerbreak.module.css';
import { TimerButton } from '../TimerButton';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { motion } from 'framer-motion';
import { Pomidor } from '../../../../../assets';

interface ITimerBreak {
  id: string;
  work: boolean;
  pause: boolean;
  timerBreak: number;
  setTimerBreak: (value: number) => void;
  text: string;
  isBreak: boolean;
  pomidoro: number;
  currentPomidoro: number;
  minutes: string;
  seconds: string;
  taskNumber: number;
  setIsWork: (value: boolean) => void;
  setIsPause: (value: boolean) => void;
  timer: number;
  setTimer: (value: number) => void;
  setIsBreak: (value: boolean) => void;
  isSound: boolean;
  setIsSound: (value: boolean) => void;
}

export function TimerBreak({id, work, pause, isBreak, timerBreak, setTimerBreak, text, minutes, seconds, taskNumber, setIsWork, setIsPause, setTimer, timer, setIsBreak, currentPomidoro, isSound, setIsSound}: ITimerBreak) {
  const {notification} = useSelector((state: RootState) => state.modalSettings);
  
  useEffect(() => {
    if (isSound === true && notification === true) {
      const playSoundAndAlert = () => {
        new Audio(timerBell).play();
      }
      setTimeout(() => {
        alert("Пора приступить к работе!");
      }, 100);
      setIsSound(false);
      return playSoundAndAlert
    } else if (isSound === true) {
      const playSoundAndAlert = () => {
        new Audio(timerBell).play();
      }
      return playSoundAndAlert
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
      <div className={`${styles.timerTitle} ${styles.timerTitleBreak}`}>
        <h3 className={styles.timerTitleTask}>{text}</h3>
        {work ? 
          <p className={styles.timerTitleNumber}>Перерыв {currentPomidoro - 1}</p>
          :
          <p className={styles.timerTitleNumber}>Перерыв {currentPomidoro - 1}</p>
        }
      </div>
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
          {work ? 
          <p className={`${styles.timerNumber} ${styles.timerNumberBreak}`}>{minutes}:{seconds} </p>
          :
          <p className={styles.timerNumber}>{minutes}:{seconds} </p>
          }
          <TimerButton timer={timer} setTimer={setTimer} isBreak={isBreak} isWork={work} timerBreak={timerBreak} setTimerBreak={setTimerBreak} />
        </div>
        <p className={styles.timerTaskText}><span className={styles.timerTaskNumber}>Задача {taskNumber} - </span>{text} </p>
        <div className={styles.timerButtonGroup}>
          {work ? <ButtonTimerPause setIsWork={setIsWork} setIsPause={setIsPause}/> : null}
          {work ? <ButtonTimerSkip id={id} setIsBreak={setIsBreak} setIsWork={setIsWork} setTimer={setTimer} setIsSound={setIsSound} />  : null}
          {!work && !pause ? <ButtonTimerStart setIsWork={setIsWork}/> : null}
          {!work && !pause ? <ButtonTimerSkip id={id} setIsBreak={setIsBreak} setIsWork={setIsWork} setTimer={setTimer} setIsSound={setIsSound} /> : null}
          {!work && pause ? <ButtonTimerContinue setIsWork={setIsWork} /> : null}
          {!work && pause ? <ButtonTimerSkip id={id} setIsBreak={setIsBreak} setIsWork={setIsWork} setTimer={setTimer} setIsSound={setIsSound} /> : null}
        </div>
      </div>
    </>
  );
}
