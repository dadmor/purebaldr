import Link from "next/link";

type Props = {
  className?:string
  close?:string
};

export const ModalWrapper: React.FC<Props> = ({className, close = '/', children}) => {
  return <Link href={close}><div className={`${className} cursor-pointer bg-opacity-60 absolute top-0 left-0 bg-black w-full h-full`}>
    <div className="max-w-screen-lg m-auto mt-28 shadow-xl">
      {children}
    </div>
  </div></Link>;
};