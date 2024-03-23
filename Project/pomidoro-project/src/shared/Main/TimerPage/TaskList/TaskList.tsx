import { useEffect, useState } from 'react';
import { Dropdown } from '../../../Dropdown';
import { TaskMenu } from './TaskMenu';
import { TaskMenuButton } from './TaskMenuButton';
import './tasklist.css';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { taskFilter } from '../../../../store/task/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store/store';
import { DragVertical } from '../../../../assets';

const SortableTask = ({list}: any) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: list.id});
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  return (
    <li className='taskList' style={style} >
      <p className='taskListText'><span className='taskListNumber'>{list.pomidoro}</span>{list.text}</p>
      <button className='taskListButtonTap' ref={setNodeRef} {...attributes} {...listeners} ><DragVertical /></button>
      <Dropdown button={<TaskMenuButton />} >
        <TaskMenu id={list.id} pomidoro={list.pomidoro} text={list.text} />
      </Dropdown>
    </li>
  )
}

export function TaskList() {
  const lists = useSelector((state: RootState) => state.task);
  const [tasks, setTasks] = useState(lists);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(taskFilter(tasks))
  }, [tasks]);

  useEffect(() => {
    setTasks(lists);
  }, [lists]);
  
  const onDragEnd = (event: DragEndEvent): void => {
    const {active, over} = event;
    if (active.id === over?.id) {
      return;
    }
    if (over) {
      setTasks((tasks) => {
        const newTasks = arrayMove(tasks, tasks.findIndex((list) => list.id === active.id), tasks.findIndex((list) => list.id === over.id));
        dispatch(taskFilter(newTasks))
        return newTasks
      })
    }
  }
  
  return (
    <>
      <ul className="tasksList">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd} >
          <SortableContext items={tasks} strategy={verticalListSortingStrategy} >
            {tasks.map((list) => (
              <SortableTask key={list.id} list={list} />
            ))}
          </SortableContext>
        </DndContext>
      </ul>
    </>
  );
}