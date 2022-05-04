type Props = {
  className?:string
  size?:string
};



export const Text: React.FC<Props> = ({className, children, size}) => {
  return <p className={`${className}  
  ${!size && 'xl:text-base text-sm text-gray-600'}
  ${size === 'sm' && 'text-xs xl:text-sm text-gray-500'}
  ${size === 'xs' && 'text-xs'}`}>{children}</p>;
};