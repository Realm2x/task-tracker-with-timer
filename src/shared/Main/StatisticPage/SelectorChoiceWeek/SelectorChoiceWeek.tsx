import { useEffect, useRef, useState } from 'react';
import styles from './selectorchoiceweek.module.css';
import { AppDispatch, RootState } from '../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { choosingTheWeek } from '../../../../store/choiceWeek/choiceWeekSlice';
import { motion } from "framer-motion";

export function SelectorChoiceWeek() {
  const choseWeek = useSelector((state: RootState) => state.choiceWeek);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const lists = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

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

  const list = chose.map((e) => <motion.button variants={item} className={styles.statisticSelectList} key={e.currentWeek} onClick={function handleChoise() { dispatch(choosingTheWeek(e.currentWeek)); setIsOpen(!isOpen) }} >{e.currentWeek}</motion.button>);
  
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div className={styles.statisticSelect} ref={ref}
      initial="hidden"
      animate="visible"
      variants={lists}
    >
      <button className={styles.statisticSelectButton} onClick={onClick}>{currentChose[0].currentWeek}</button>
      {isOpen ? <div className={styles.statisticSelectDropdown}>
        <div className={styles.statisticSelectOption}>
          {list}
        </div>
      </div> : null}
    </motion.div>
  );
}
