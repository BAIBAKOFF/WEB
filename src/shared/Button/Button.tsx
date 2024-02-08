import React from 'react';
import './button.css';

type Props = {
  text: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
};

export const Button = ({ text, style, onClick, href }: Props) => {
  return (
    <a target="_blank" href={href}>
      <button className="button" onClick={onClick} style={style}>
        {text}
      </button>
    </a>
  );
};
