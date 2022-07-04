import React from 'react';

export interface Props {
  title: string;
}

const Button = (props: Props) => {
  return <button>{props.title}</button>;
};

export default Button;
