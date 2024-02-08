import { ReactNode } from 'react';
import './modalWindow.css';

type Props = {
  children: ReactNode;
};

export const ModalWindow = ({ children }: Props) => {
  return (
    <div className="overlay">
      <div className="modal-content-block">{children}</div>
    </div>
  );
};
