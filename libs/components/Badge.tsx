import React, { HTMLAttributes } from 'react';
import './Badge.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'info',
  ...rest
}) => {
  return (
    <span className={`badge badge-${variant}`} {...rest}>
      {label}
    </span>
  );
};
