type Props = {
    className?:string
    onSubmit?:any
};



export const Form: React.FC<Props> = ({className,onSubmit, children}) => {
  return <form onSubmit={e=>onSubmit(e)} className={`max-w-screen-lg pb-4 ${className}`}>{children}</form>;
};
