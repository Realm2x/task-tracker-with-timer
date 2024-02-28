import { useDispatch } from 'react-redux';
import './buttonmodal.css';
import { AppDispatch } from '../../../store/store';
import { taskDelete } from '../../../store/task/taskSlice';
import { modalAdd, modalAddId } from '../../../store/modalDelete/modalSlice';

interface ButtonModal {
  id: string;
}

export function ButtonModalDelete({id}: ButtonModal) {
  const dispatch = useDispatch<AppDispatch>();
  const removeTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(taskDelete(id));
    dispatch(modalAdd(false));
    dispatch(modalAddId(''));
  };

  return (
    <button className='modalButtonDelete' onClick={removeTask}>Удалить</button>
  );
}
