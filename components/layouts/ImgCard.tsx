import Image from 'next/image'
type Props = {
    className?:string
    src:string
  };
  export const ImgCard: React.FC<Props> = ({className, src, children}) => {
    return <div className={`${className} block mb-4 overflow-hidden max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
      <div className="w-full relative ">
        <Image objectFit='cover' width="500" priority height="300" src={src}></Image>
      </div>
      <div className="p-6 block">{children}</div>
    </div>;
  };