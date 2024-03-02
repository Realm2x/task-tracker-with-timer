import { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/store';
import './changeform.css';
import { taskChange } from '../../../../../store/task/taskSlice';
import { modalEditRemove, modalEditRemoveId } from '../../../../../store/modalEdit/modalEditSlice';

export function ChangeForm() {
  const {descr, id} = useSelector((state: RootState) => state.modalEdit);
  
  const [text, setText] = useState(descr);
  const [validate, setValidate] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    if (text.length < 3 || text.length > 20) return setValidate(true);

    dispatch(taskChange({text, id}));
    dispatch(modalEditRemove(false));
    dispatch(modalEditRemoveId(''));
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
    setValidate(false);
  }

  return (
    <form className='changeForm' action="" onSubmit={onSubmit}>
      {validate ? <span className='task-form__validate'>Нужно ввести от 3 до 20 символов</span> : null}
      <label htmlFor='editInput' className='changeFormLabel'>Редактирование</label>
      <input id='editInput' name='editInput' className='changeFormInput' type="text"
        onChange={onChange}
        value={text}
      />
      <button className='changeFormButton'>
        Изменить
      </button>
    </form>
  );
}
