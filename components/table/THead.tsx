import React from 'react';

type Props = {
  className?:string
};

export const THead: React.FC<Props> = ({className = '', children}) => {
  return <thead className={`${className} bg-gray-100 dark:bg-gray-700 `}>{children}</thead>;
};
