import { SelectorChoiceWeek } from './SelectorChoiceWeek';
import { StatisticBlockContent } from './StatisticBlockContent';
import { StatisticDayInfo } from './StatisticDayInfo';
import './statisticpage.css';

export function StatisticPage() {
  return (
    <div className='statisticPage'>
      <div className="statistickHead">
        <h2 className='statisticTitle'>Ваша активность</h2>
        <SelectorChoiceWeek />
      </div>
      <StatisticBlockContent />
      <StatisticDayInfo />
    </div>
  );
}
