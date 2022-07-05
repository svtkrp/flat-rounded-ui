import React from 'react';
import './Button.scss';

export interface Props {
  title: string;
  primary?: boolean;
  secondary?: boolean;
  accent?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outlined?: boolean;
}

const Button = (props: Props) => {
  return (
    <button className={
      (!!props.primary ? ' primary' : '')
    + (!!props.secondary ? ' secondary' : '')
    + (!!props.accent ? ' accent' : '')
    + (!!props.success ? ' success' : '')
    + (!!props.warning ? ' warning' : '')
    + (!!props.danger ? ' danger' : '')
    + (!!props.outlined ? ' outlined' : '')
    }>
      {props.title}
    </button>
  );
};

export default Button;
