import { MenuTask } from '../../../../../assets';
import './taskmenubutton.css';

export function TaskMenuButton() {
  return (
    <button className='task__menu-button' type="button">
      <MenuTask />
    </button>
  );
}
