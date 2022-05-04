import { Label } from "./Label";

type Props = {
  className?:string
  label?:string
  htmlFor?:string
};

export const InputItem: React.FC<Props> = ({className, label, htmlFor, children}) => {
  return <div className={`mb-6 ${className}`}>
    {label && <Label htmlFor={htmlFor}>{label}</Label>}
    {children}
  </div>;
};
