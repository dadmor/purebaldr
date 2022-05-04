import Link from 'next/link';
import React from 'react';

type Props = {
  className?:string
  type?:string,
  to:string
};

export const NavButton: React.FC<Props> = ({className, type, to, children}) => {
  let color = 'bg-blue-700 hover:bg-blue-800 text-white '
  switch(type) {
    case "outline": {
      color = 'bg-white hover:bg-gray-100 text-gray-600 '
       break;
    }
    case "secondary": {
      color = 'bg-gray-700 hover:bg-gray-800 text-white '
       break;
    }
 }
  
  return <Link href={to}>
    <a className={`${className} ${color} text-sm px-5 py-3.5 cursor-pointer focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>{children}</a>
    </Link>;
};
