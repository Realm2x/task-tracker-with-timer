import './buttontimerstart.css';

interface IButtonTimerStart {
  setIsWork: (value: boolean) => void;
}

export function ButtonTimerStart({setIsWork}: IButtonTimerStart) {
  const handleStart = () => {
    setIsWork(true);
  };

  return (
    <button className="timerButton timerButtonLeft timerButtonStart" onClick={handleStart}>Старт</button>
  );
}
