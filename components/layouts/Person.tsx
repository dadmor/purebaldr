import Image from 'next/image'
type Props = {
    className?:string
    src:string
  };
  export const Person: React.FC<Props> = ({className, src, children}) => {
    return <div className={`${className} pb-5 block truncate gap-3 2xl:gap-6 flex items-start dark:bg-gray-800`}>
      <div className="w-16 h-16 2xl:w-20 2xl:h-20 relative rounded-full truncate">
        <Image objectFit='cover' width="120" height="120" priority src={src}></Image>
      </div>
      <div className="">{children}</div>
    </div>;
  };