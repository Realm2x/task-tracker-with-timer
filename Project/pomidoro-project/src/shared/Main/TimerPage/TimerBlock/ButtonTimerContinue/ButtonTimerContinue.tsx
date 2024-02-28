import './buttontimercontinue.css';

interface IButtonTimerContinue {
  setIsWork: (value: boolean) => void;
}

export function ButtonTimerContinue({setIsWork}: IButtonTimerContinue) {
  const handleContinue = () => {
    setIsWork(true);
  };

  return (
    <button className="timerButton timerButtonLeft timerButtonStart" onClick={handleContinue}>Продолжить</button>
  );
}
