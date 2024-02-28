import './buttontimerpause.css';

interface IButtonTimerPause {
  setIsWork: (value: boolean) => void;
  setIsPause: (value: boolean) => void;
}

export function ButtonTimerPause({setIsWork, setIsPause}: IButtonTimerPause) {
  const handlePause = () => {
    setIsWork(false);
    setIsPause(true);
  };

  return (
    <button className="timerButton timerButtonLeft timerButtonPause" onClick={handlePause}>Пауза</button>
  );
}
