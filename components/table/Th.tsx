import React from 'react';

type Props = {
  className?:string
};

export const Th: React.FC<Props> = ({className = '', children}) => {
  return <th className={`py-3 px-6 bg-gray-100  text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 ${className}`}>{children}</th>;
};
