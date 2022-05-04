import React from 'react';

type Props = {
  className?:string
};

export const Td: React.FC<Props> = ({className, children}) => {
  return <td className={`py-4 px-6 text-sm text-gray-700 whitespace-nowrap dark:text-white ${className}`}>{children}</td>;
};
