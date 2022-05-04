import React from 'react';

type Props = {
  className?:string
};

export const Code: React.FC<Props> = ({children, className}) => {
  return <pre className={
    `${className+" "}border text-left font-mono font-semibold p-6 rounded-lg bg-gray-100 text-fuchsia-700 opacity-80`}>{children}</pre>;
};
