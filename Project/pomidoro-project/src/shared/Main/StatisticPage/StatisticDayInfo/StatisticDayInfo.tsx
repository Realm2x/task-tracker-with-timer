import './statisticdayinfo.css';

export function StatisticDayInfo() {
  return (
    <div className="statisticDay">
      <div className='statistickDayInfo statistickDayFocus'>
        <h3 className='statisticInfoTitle'>Фокус</h3>
        <p className='statisticInfoDescr'>35%</p>
      </div>
      <div className="statistickDayInfo statisticDayPause">
        <h3 className="statisticInfoTitle">Время на паузе</h3>
        <p className="statisticInfoDescr">9 м</p>
      </div>
      <div className="statistickDayInfo statisticDayStops">
        <h3 className="statisticInfoTitle">Остановки</h3>
        <p className="statisticInfoDescr">2</p>
      </div>
    </div>
  );
}
