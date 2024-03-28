import { MenuTask } from '../../../../../assets';
import styles from './taskmenubutton.module.css';

export function TaskMenuButton() {
  return (
    <button className={styles.task__menuButton} type="button">
      <MenuTask />
    </button>
  );
}
