import { TomatoStat } from '../../../../assets';
import { DiagramWeek } from './DiagramWeek';
import './statisticblockcontent.css';

export function StatisticBlockContent() {

  return (  
    <div className='statisticBlockContent'>
      <div className="statisticLeftBlock">
        <div className="statisticDayBlock">
          <h3 className='statisticDayTitle'>Понедельник</h3>
          <p className='statisticDayDescr'>Вы работали над задачами в течение <span className='statisticDaySpan'>{51} минуты</span></p>
        </div>
        <div className="statisticPomidoroDay">
          <p className='statisticPomidoroDayDescr'><span><TomatoStat /></span> x 2</p>
          <button className='statisticPomidoroDayButton'>(2) помидора</button>
        </div>
      </div>
      <DiagramWeek />
    </div>
  );
}
