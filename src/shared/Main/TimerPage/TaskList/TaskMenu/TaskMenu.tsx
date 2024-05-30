import { MenuDeleteButton } from '../TaskMenuButton/MenuDeleteButton';
import { MenuEditButton } from '../TaskMenuButton/MenuEditButton';
import { MenuIncreaseButton } from '../TaskMenuButton/MenuIncreaseButton';
import { MenuReduceButton } from '../TaskMenuButton/MenuReduceButton';
import styles from './taskmenu.module.css';

interface ITaskMenu {
  id: string
  pomidoro: number;
  text: string;
}

export function TaskMenu({id, pomidoro, text}: ITaskMenu) {

  return (
    <div className={styles.taskMenu}>
      <MenuIncreaseButton id={id} pomidoro={pomidoro} />
      <MenuReduceButton id={id} pomidoro={pomidoro} />
      <MenuEditButton id={id} text={text} />
      <MenuDeleteButton id={id} />
    </div>
  );
}
