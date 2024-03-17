import './timerpage.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList';
import { TimerBlock } from './TimerBlock/TimerBlock';
import { DeleteModal } from '../../DeleteModal';
import { useEffect, useState } from 'react';
import { ChangeModal } from './TaskList/ChangeModal';

export function TimerPage() {
  const taskList = useSelector((state: RootState) => state.task);
  const modalStateDelete = useSelector((state: RootState) => state.modalDelete);
  const modalStateEdit = useSelector((state: RootState) => state.modalEdit);
  const modalSettings = useSelector((state: RootState) => state.modalSettings);
  const taskListDone = taskList.filter((task) => task.taskDone !== true ? task : null);
  const [isModal, setIsModal] = useState(modalStateDelete.modal);
  const [isEditModal, setIsEditModal] = useState(modalStateEdit.modal);
  const quantityPomidoro = taskListDone.map((task) => task.pomidoro);
  let sum = quantityPomidoro.reduce(function (x, y) {
    return x + y;
  }, 0);
  const pomidoroDuration = modalSettings.pomidoroDuration * sum;
  const taskNumber = taskListDone.length;


  useEffect(() =>{
    setIsModal(modalStateDelete.modal)
    setIsEditModal(modalStateEdit.modal)
  }, [modalStateDelete, isModal, isEditModal, modalStateEdit])
  
  return (
    <>
      <div className="left-content">
        <div className="manual">
          <h2 className='maunal__title'>Ура! Теперь можно начать работать:</h2>
          <ul className="manual__checklist">
            <li className="manual__list"><span>Выберите категорию и напишите название текущей задачи</span></li>
            <li className="manual__list"><span>Запустите таймер («помидор»)</span></li>
            <li className="manual__list"><span>Работайте пока «помидор» не прозвонит</span></li>
            <li className="manual__list"><span>Сделайте короткий перерыв (3-5 минут)</span></li>
            <li className="manual__list"><span>Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).</span></li>
          </ul>
        </div>
        <TaskForm taskNumber={taskNumber}/>
        <TaskList list={taskListDone} />
        <div className="tasks__time">
          {pomidoroDuration} минут
        </div>
      </div>
      <div className='right-content'>
        {taskListDone.length > 0 ? 
          <TimerBlock
            pomidoro={taskListDone[0].pomidoro}
            taskText={taskListDone[0].text}
            taskNumber={taskListDone[0].taskNumber}
            id={taskListDone[0].id} 
            currentPomidoro={taskListDone[0].currentPomidoro}
          />
          :
          null
        }
      </div>
      {isModal ? 
        <DeleteModal id={modalStateDelete.id} /> : null
      }
      {isEditModal ? 
        <ChangeModal /> : null
      }
    </>
  );
}
