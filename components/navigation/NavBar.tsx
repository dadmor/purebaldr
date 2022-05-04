import React from 'react';
import { FiMenu } from 'react-icons/fi';

type Props = {
  className?:string
  horizontal?:boolean
  gap?:string | null
};
export const NavBar: React.FC<Props> = ({className, horizontal, children, gap='base'}) => {
  switch(gap) {
    case "base": {
      gap = 'gap-4'
       break;
    }
    case "sm": {
      gap = 'gap-2'
       break;
    }
  }
  return <div>
    <div className="sm:hidden cursor-pointer border rounded-lg w-max p-3.5 text-sm flex gap-2 items-center"><FiMenu/>Context menu</div>
    <div className={`hidden ${gap} ${horizontal ? 'sm:flex' : 'sm:block p-4'}`}>
      {children}
    </div>
  </div>;
};
