import './taskform.css';
import { ChangeEvent, useState } from "react";
import { AppDispatch } from "../../../../store/store";
import { useDispatch } from "react-redux";
import { taskAdded } from "../../../../store/task/taskSlice";

interface ITaskForm {
  taskNumber: number;
}

export function TaskForm({taskNumber}: ITaskForm) {
  const [taskDescription, setTaskDescription] = useState("");
  const [validate, setValidate] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    if (taskDescription.length < 3 || taskDescription.length > 20) return setValidate(true);

    dispatch(taskAdded(taskDescription, ++taskNumber));
    setTaskDescription("")
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(event.target.value)
    setValidate(false);
  }

  return (
    <form className='task-form' onSubmit={onSubmit} action="">
      {validate ? <span className='task-form__validate'>Нужно ввести от 3 до 20 символов</span> : null}
      <input onChange={onChange}
        value={taskDescription}
        id='task'
        className='task-form__input' placeholder='Название задачи' />
      <button className='task-form__button'>Добавить</button>
    </form>
  );
}
