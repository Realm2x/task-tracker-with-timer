import './menueditbutton.css';
import { MenuEdit } from '../../../../../../assets';
import { AppDispatch } from '../../../../../../store/store';
import { useDispatch } from 'react-redux';
import { modalEditAdd, modalEditAddId, modalEditAddText } from '../../../../../../store/modalEdit/modalEditSlice';

interface MenuEdit {
  id: string;
  text: string;
}

export function MenuEditButton({id, text}: MenuEdit) {
  const dispatch = useDispatch<AppDispatch>();

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(modalEditAdd(true));
    dispatch(modalEditAddId(id));
    dispatch(modalEditAddText(text));
  }
  
  return (
    <button className='taskMenuEdit menuButton' onClick={onClick}>
      <MenuEdit />
      Редактировать
    </button>
  );
}
