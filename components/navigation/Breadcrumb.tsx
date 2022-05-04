import React from 'react';

type Props = {
  className?:string
};

export const Breadcrumb: React.FC<Props> = ({className, children}) => {
  return <div className={`${className} py-8 text-xs text-gray-600`}>{children}</div>;
};