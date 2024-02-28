import './menueditbutton.css';
import { MenuEdit } from '../../../../../../assets';

export function MenuEditButton() {
  return (
    <button className='taskMenuEdit menuButton'>
      <MenuEdit />
      Редактировать
    </button>
  );
}
