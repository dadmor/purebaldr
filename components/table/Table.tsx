import React from 'react';

type Props = {
  className?:string
};

export const Table: React.FC<Props> = ({className = '', children}) => {
  return <table className={`${className} min-w-full overflow-hidden shadow sm:rounded-lg`}>{children}</table>;
};
