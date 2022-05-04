import React from 'react';

type Props = {
    right?:boolean
};

export const Button: React.FC<Props> = ({children, right}) => {
    const style = `mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`
  return <button type="submit" className={`${style}${right?' float-right':''}`}>
      {children}
  </button>;
};
