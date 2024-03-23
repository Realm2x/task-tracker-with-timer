import { useSelector } from 'react-redux';
import { TomatoStat } from '../../../../assets';
import { RootState } from '../../../../store/store';
import { DiagramWeek } from './DiagramWeek';
import './statisticblockcontent.css';
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
    <div className='statisticBlockContent'>
      <div className="statisticLeftBlock">
        <div className="statisticDayBlock">
          <h3 className='statisticDayTitle'>{dayOfWeek || 'Выберите день'}</h3>
          <p className='statisticDayDescr'>Вы работали над задачами в течение <span className='statisticDaySpan'>{activeDay.length > 0 ? activeDay[0].timeWorking : 0} минут</span></p>
        </div>
        <div className="statisticPomidoroDay">
          <p className='statisticPomidoroDayDescr'><span><TomatoStat /></span> x {activeDay.length > 0 ? activeDay[0].quantityPomidoro : 0}</p>
          <button className='statisticPomidoroDayButton'>{activeDay.length > 0 ? activeDay[0].quantityPomidoro : 0} помидор</button>
        </div>
      </div>
      <DiagramWeek />
    </div>
  );
}
