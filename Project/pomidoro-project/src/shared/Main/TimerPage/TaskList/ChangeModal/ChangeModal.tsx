import { useDispatch } from 'react-redux';
import './taskchangeinput.css';
import { useEffect, useRef } from 'react';
import { modalEditAdd, modalEditRemoveId, modalEditRemoveText } from '../../../../../store/modalEdit/modalEditSlice';
import { AppDispatch } from '../../../../../store/store';
import { ChangeForm } from '../ChangeForm';
import { createPortal } from 'react-dom';

interface IChangeForm {
  nodeRef: React.RefObject<HTMLDivElement>;
}

export function ChangeModal({nodeRef}: IChangeForm) {
  const dispatch = useDispatch<AppDispatch>();
  function onClose() {
    dispatch(modalEditAdd(false));
    dispatch(modalEditRemoveId(''));
    dispatch(modalEditRemoveText(''));
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
    <div className='modales modalWrapper' ref={nodeRef}>
      <div className='modalEdit' ref={ref}>
        <h2 className='changeTitle'>Редактирование</h2>
        <ChangeForm />
      </div>
    </div>
  ), node);
}
