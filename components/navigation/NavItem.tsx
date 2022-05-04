import Link from "next/link";
import { useRouter } from "next/router";
type Props = {
  className?:string
  icon?:any
  navGroup?:boolean
  hideSelected?:boolean
  to?: string
  underline?:boolean
};

const style:any = {
  navGroupClass:"uppercase text-sm text-black pt-2 -ml-2",
  active:"uppercase text-sm text-black pt-2 ",
}


export const NavItem: React.FC<Props> = ({className, navGroup, icon, to, children, hideSelected=false, underline=false}) => {
  const router = useRouter();
  return <div className={`
    p-2.5 flex items-center gap-2 
    ${!hideSelected && to === router.asPath && style['active']} 
    ${navGroup ? style['navGroupClass'] : 'text-gray-600 px-2 text-sm'}`}>
    {to ? <Link href={to}>
      <a className={`
        ${className && className+''}
        ${underline && 'underline '}
        block grow py-2 hover:text-blue-700 rounded md:bg-transparent md:p-0 dark:text-white`}>
        {icon && <span>{icon}</span>} {children}
      </a>
    </Link> 
    : <>{icon && <span>{icon}</span>} {children}</>} 
  </div>;
};


