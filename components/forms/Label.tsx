type Props = {
    className?:string
    htmlFor?:string
};

export const Label: React.FC<Props> = ({className, children, htmlFor}) => {
  return <label htmlFor={htmlFor} className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${className}`}>{children}</label>;
};
