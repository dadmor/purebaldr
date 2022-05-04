import Link from "next/link";

type Props = {
  className?:string
  to:string
};

export const NavLink: React.FC<Props> = ({className, to, children}) => {
  return <Link href={to}>
    <a className={`${className} grow py-2 pr-4 pl-3 text-blue-500 hover:text-blue-700 rounded md:bg-transparent md:p-0 dark:text-white`}>
      {children}
    </a>
  </Link>;
};
