import React from 'react';

type Props = {
    status?:string
};
export const InputMessage: React.FC<Props> = ({children, status="warning"}) => {
  const types:any = {
    warning: 'border-yellow-400 text-yellow-700 bg-yellow-300',
    error: 'border-red-400 text-red-700 bg-red-300'
  }

  return <div className={`border rounded-lg p-2 mt-px relative opacity-80 ${types[status]}`} >
    {children}
</div>;
};
