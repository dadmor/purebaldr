type Props = {
    className?:string
  };
  export const Card: React.FC<Props> = ({className, children}) => {
    return <p className={`${className} block mb-4 p-5 2xl:p-6 bg-gray-25 rounded-lg bg-white shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>{children}</p>;
  };