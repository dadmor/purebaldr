import React from 'react';

type Props = {
  className?:string
};

export const Tr: React.FC<Props> = ({className = '', children}) => {
  return <tr className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${className}`}>{children}</tr>;
};
