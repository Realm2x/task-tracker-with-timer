import './deletemodal.css';
import { createPortal } from 'react-dom';
import { ButtonModalDelete } from './ButtonModalDelete';
import { ButtonModalCancel } from './ButtonModalCancel';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { modalRemove, modalRemoveId } from '../../store/modalDelete/modalSlice';
import { AppDispatch } from '../../store/store';

interface IDeleteModal {
  id: string;
  nodeRef: React.RefObject<HTMLDivElement>;
}

export function DeleteModal({id, nodeRef}: IDeleteModal) {
  const dispatch = useDispatch<AppDispatch>();
  function onClose() {
    dispatch(modalRemove(false));
    dispatch(modalRemoveId(''));
  }

  useEffect(() =>{
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose()
      }
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const ref = useRef<HTMLDivElement>(null);

  const node = document.querySelector('#modal_root');
  if (!node) return null;
  
  return createPortal((
    <div className="modales modalWrapper" ref={nodeRef}>
      <div className="modal" ref={ref}>
        <p className='modalText'>
          Удалить задачу?
        </p>
        <ButtonModalDelete id={id} />
        <ButtonModalCancel />
      </div>
    </div>
  ), node)
}
