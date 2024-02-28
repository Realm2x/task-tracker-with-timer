import { useDispatch } from 'react-redux';
import { MenuIncrease } from '../../../../../../assets';
import './menuincreasebutton.css';
import { AppDispatch } from '../../../../../../store/store';
import { taskIncrease } from '../../../../../../store/task/taskSlice';

interface IMenuDeleteButton {
  id: string;
  pomidoro: number;
}

export function MenuIncreaseButton({id, pomidoro}: IMenuDeleteButton) {
  const dispatch = useDispatch<AppDispatch>();
  const increase = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (pomidoro < 8) {
      event.preventDefault();
      dispatch(taskIncrease(id));
    }
  };

  return (
    <button className='taskNenuIncrease menuButton' onClick={increase}>
      <MenuIncrease />
      Увеличить
    </button>
  );
}
