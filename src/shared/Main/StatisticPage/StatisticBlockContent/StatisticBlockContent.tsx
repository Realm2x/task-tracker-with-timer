import { useSelector } from 'react-redux';
import { TomatoStat } from '../../../../assets';
import { RootState } from '../../../../store/store';
import { DiagramWeek } from './DiagramWeek';
import styles from './statisticblockcontent.module.css';
import { useEffect, useState } from 'react';

export function StatisticBlockContent() {
  const statistic = useSelector((state: RootState) => state.statistic);
  const [activeDay, setActiveDay] = useState(statistic);

  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const date = new Date(activeDay.length > 0 ? activeDay[0].currentDate : '');
  const indexDay = date.getDay();
  const dayOfWeek = daysOfWeek[indexDay];
  
  useEffect(() => {
    if (statistic.length > 0) {
      const filteredActiveDay = statistic.filter((e) => e.activeDay);
      setActiveDay(filteredActiveDay);
    }
  }, [statistic]);
  
  return (  
    <div className={styles.statisticBlockContent}>
      <div className={styles.statisticLeftBlock}>
        <div className={styles.statisticDayBlock}>
          <h3 className={styles.statisticDayTitle}>{dayOfWeek || 'Выберите день'}</h3>
          <p className={styles.statisticDayDescr}>Вы работали над задачами в течение <span className='statisticDaySpan'>{activeDay.length > 0 ? activeDay[0].timeWorking : 0} минут</span></p>
        </div>
        <div className={styles.statisticPomidoroDay}>
          <p className={styles.statisticPomidoroDayDescr}><span><TomatoStat /></span> x {activeDay.length > 0 ? activeDay[0].quantityPomidoro : 0}</p>
          <div className={styles.statisticPomidoroDayButton}>{activeDay.length > 0 ? activeDay[0].quantityPomidoro : 0} помидор</div>
        </div>
      </div>
      <DiagramWeek />
    </div>
  );
}
