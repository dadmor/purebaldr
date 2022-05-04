type Props = {
  className?:string
  actions?:any
};

export const BodyHeader: React.FC<Props> = ({className, children, actions}) => {
  return <div className={`flex items-center gap-10 mb-8 ${className}`}>
    <div className="">{children}</div>
    {actions && <div className="flex items-center gap-4 grow justify-end">{actions}</div>}
  </div>;
};