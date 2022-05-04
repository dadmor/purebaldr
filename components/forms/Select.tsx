type Props = {
    className:string
};

export const Select: React.FC<Props> = ({className, children}) => {
  return <select className={`${className}`}>{children}</select>;
};
