import React from 'react';
import { inputTextClass } from "styles/webBaseForm"

type Props = {
    onChange?:any
    onBlur?: any
    value?: string
    name?: string 
    ref?: any
    type?: string
    id?: string
};

export const Input: React.FC<Props> = (props) => {
  return <input className={inputTextClass} {...props}/>;
};
