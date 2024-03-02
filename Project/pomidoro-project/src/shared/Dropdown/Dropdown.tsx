import React, { useEffect, useRef, useState } from 'react';
import './dropdown.css';
import { createPortal } from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen); 
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const [position, setPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleOpen = (e: any) => {
    if (isOpen === undefined) {
      const bounds = e.currentTarget.getBoundingClientRect();
      setPosition({
        x: bounds.x -62,
        y: bounds.y + bounds.height + window.scrollY
      });
      setIsDropdownOpen(!isDropdownOpen);
    }
  }

  useEffect(() =>{
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return(
    <div ref={ref}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {
        isDropdownOpen && position && createPortal(
          <div >
            <div style={{position: 'absolute', left: position.x, top: position.y, zIndex: 20}} onClick={() => setIsDropdownOpen(false)}>
              {children}
            </div>
          </div>
        , node)
      }
    </div>
  );
}

