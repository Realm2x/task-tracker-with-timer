import { MenuDeleteButton } from '../TaskMenuButton/MenuDeleteButton';
import { MenuEditButton } from '../TaskMenuButton/MenuEditButton';
import { MenuIncreaseButton } from '../TaskMenuButton/MenuIncreaseButton';
import { MenuReduceButton } from '../TaskMenuButton/MenuReduceButton';
import './taskmenu.css';

interface ITaskMenu {
  id: string
  pomidoro: number;
}

export function TaskMenu({id, pomidoro}: ITaskMenu) {

  return (
    <div className='taskMenu'>
      <MenuIncreaseButton id={id} pomidoro={pomidoro} />
      <MenuReduceButton id={id} pomidoro={pomidoro} />
      <MenuEditButton />
      <MenuDeleteButton id={id} />
    </div>
  );
}
