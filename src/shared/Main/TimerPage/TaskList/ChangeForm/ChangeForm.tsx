import { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/store';
import styles from './changeform.module.css';
import { taskChange } from '../../../../../store/task/taskSlice';
import { modalEditAdd, modalEditRemoveId } from '../../../../../store/modalEdit/modalEditSlice';

export function ChangeForm() {
  const {descr, id} = useSelector((state: RootState) => state.modalEdit);
  
  const [text, setText] = useState(descr);
  const [validate, setValidate] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    if (text.length < 3 || text.length > 20) return setValidate(true);

    dispatch(taskChange({text, id}));
    dispatch(modalEditAdd(false));
    dispatch(modalEditRemoveId(''));
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
    setValidate(false);
  }

  return (
    <form className={styles.changeForm} action="" onSubmit={onSubmit}>
      {validate ? <span className={styles.taskForm__validate}>Нужно ввести от 3 до 20 символов</span> : null}
      <label htmlFor='editInput' className={styles.changeFormLabel}>Редактирование</label>
      <input id='editInput' name='editInput' className={styles.changeFormInput} type="text"
        onChange={onChange}
        value={text}
      />
      <button className={styles.changeFormButton}>
        Изменить
      </button>
    </form>
  );
}
