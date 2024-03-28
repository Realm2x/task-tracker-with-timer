import { SelectorChoiceWeek } from './SelectorChoiceWeek';
import { StatisticBlockContent } from './StatisticBlockContent';
import { StatisticDayInfo } from './StatisticDayInfo';
import styles from './statisticpage.module.css';

export function StatisticPage() {
  return (
    <div className={styles.statisticPage}>
      <div className={styles.statistickHead}>
        <h2 className={styles.statisticTitle}>Ваша активность</h2>
        <SelectorChoiceWeek />
      </div>
      <StatisticBlockContent />
      <StatisticDayInfo />
    </div>
  );
}
