type Props = {
  className?:string
  id?:string
};

export const SubTitle: React.FC<Props> = ({className, children, id}) => {
  return <div id={id} className={`${className} text-xl pb-4`}>{children}</div>;
};