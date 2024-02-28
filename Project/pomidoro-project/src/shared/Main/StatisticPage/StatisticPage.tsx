import { StatisticBlockContent } from './StatisticBlockContent';
import { StatisticDayInfo } from './StatisticDayInfo';
import './statisticpage.css';

export function StatisticPage() {
  return (
    <div className='statisticPage'>
      <div className="statistickHead">
        <h2 className='statisticTitle'>Ваша активность</h2>
        <div className='statisticSelector'>Селектор</div>
      </div>
      <StatisticBlockContent />
      <StatisticDayInfo />
    </div>
  );
}
