import React, { HTMLAttributes } from 'react';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  onClick,
  ...rest
}) => {
  return (
    <div className="card" onClick={onClick} {...rest}>
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-description">{description}</p>}
      {children && <div className="card-body">{children}</div>}
    </div>
  );
};
