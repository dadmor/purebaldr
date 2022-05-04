import { Card } from 'components/layouts';
import React from 'react';

type Props = {
    legend?:string
};

export const FieldSet: React.FC<Props> = ({children, legend}) => {
  return <Card>
    <fieldset>
      {legend && <legend className="block float-left pb-4 text-xl">{legend}</legend>}
      {children}
    </fieldset>
  </Card>;
};
