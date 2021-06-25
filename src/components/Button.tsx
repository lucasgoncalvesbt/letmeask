import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOulined?: boolean;
};

export function Button({ isOulined, ...props }: ButtonProps) {
  return (
    <button
      className={`button ${isOulined ? 'outlined' : ''}`}
      {...props}
    />
  )
}