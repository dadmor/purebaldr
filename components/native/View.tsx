import React from 'react';

type Props = {
  attrs:any
};

export const View: React.FC<Props> = ({attrs, children}) => {
  return <div className={attrs.className}>{children}</div>;
};
