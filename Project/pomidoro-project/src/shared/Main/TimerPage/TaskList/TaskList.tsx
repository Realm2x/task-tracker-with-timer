import { Dropdown } from '../../../Dropdown';
import { TaskMenu } from './TaskMenu';
import { TaskMenuButton } from './TaskMenuButton';
import './tasklist.css';

interface MyTaskList {
  text: string;
  id: string;
  pomidoro: number;
}

interface IListProps {
  list: MyTaskList[];
}

export function TaskList({list}: IListProps) {

  return (
    <>
      <ul className="tasksList">
        {list.map(({ text, id, pomidoro }) => (
          <li className='taskList' key={id}>
            <p className='taskListText'><span className='taskListNumber'>{pomidoro}</span>{text}</p>
            <Dropdown button={<TaskMenuButton />} >
              <TaskMenu id={id} pomidoro={pomidoro} text={text} />
            </Dropdown>
          </li>
        ))}
      </ul>
    </>
  );
}
