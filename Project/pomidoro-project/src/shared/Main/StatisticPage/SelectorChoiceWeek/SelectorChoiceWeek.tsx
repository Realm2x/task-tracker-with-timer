import { useEffect, useRef, useState } from 'react';
import './selectorchoiceweek.css';
import { AppDispatch, RootState } from '../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { choosingTheWeek } from '../../../../store/choiceWeek/choiceWeekSlice';

export function SelectorChoiceWeek() {
  const choseWeek = useSelector((state: RootState) => state.choiceWeek);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() =>{
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
  
  const chose = choseWeek.filter(e => !e.active);
  const currentChose = choseWeek.filter(e => e.active);

  const list = chose.map((e) => <button className='statisticSelectList' key={e.currentWeek} onClick={function handleChoise() { dispatch(choosingTheWeek(e.currentWeek)); setIsOpen(!isOpen) }} >{e.currentWeek}</button>);
  
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <div className='statisticSelect' ref={ref}>
      <button className='statisticSelectButton' onClick={onClick}>{currentChose[0].currentWeek}</button>
      {isOpen ? <div className='statisticSelectDropdown'>
        <div className='statisticSelectOption'>
          {list}
        </div>
      </div> : null}
    </div>
  );
}
