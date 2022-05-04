type Props = {
  className?:string
};

export const Title: React.FC<Props> = ({className, children}) => {
  return <h1 className={`${className} text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 inline-block `}>{children}</h1>;
};