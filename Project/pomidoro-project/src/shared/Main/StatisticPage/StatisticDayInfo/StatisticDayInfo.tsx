import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import styles from './statisticdayinfo.module.css';

export function StatisticDayInfo() {
  const statistic = useSelector((state: RootState) => state.statistic);
  const [activeDay, setActiveDay] = useState(statistic);
  
  useEffect(() => {
    if (statistic.length > 0) {
      const filteredActiveDay = statistic.filter((e) => e.activeDay);
      setActiveDay(filteredActiveDay);
    }
  }, [statistic]);
  
  return (
    <div className={styles.statisticDay}>
      <div className={`${styles.statistickDayInfo} ${styles.statistickDayFocus}`}>
        <h3 className={styles.statisticInfoTitle}>Фокус</h3>
        <p className={styles.statisticInfoDescr}>{activeDay.length > 0 ? activeDay[0].focus : 0}%</p>
      </div>
      <div className={`${styles.statistickDayInfo} ${styles.statisticDayPause}`}>
        <h3 className={styles.statisticInfoTitle}>Время на паузе</h3>
        <p className={styles.statisticInfoDescr}>{activeDay.length > 0 ? activeDay[0].quantityTimeOnPause : 0}м</p>
      </div>
      <div className={`${styles.statistickDayInfo} ${styles.statisticDayStops}`}>
        <h3 className={styles.statisticInfoTitle}>Остановки</h3>
        <p className={styles.statisticInfoDescr}>{activeDay.length > 0 ? activeDay[0].stops : 0}</p>
      </div>
    </div>
  );
}
