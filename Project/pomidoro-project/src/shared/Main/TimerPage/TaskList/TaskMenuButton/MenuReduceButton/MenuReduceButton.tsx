import { useDispatch } from 'react-redux';
import { MenuReduce } from '../../../../../../assets';
import { AppDispatch } from '../../../../../../store/store';
import styles from './menureducebutton.module.css';
import { taskReduce } from '../../../../../../store/task/taskSlice';

interface IMenuReduceButton {
  id: string;
  pomidoro: number;
}

export function MenuReduceButton({id, pomidoro}: IMenuReduceButton) {
  const dispatch = useDispatch<AppDispatch>();
  const reduce = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (pomidoro > 1) {
      event.preventDefault();
      dispatch(taskReduce(id));
    }
  };

  return (
    <button className={`${styles.taskMenuReduce} ${styles.menuButton}`} onClick={reduce} >
      <MenuReduce/>
      Уменьшить
    </button>
  );
}
