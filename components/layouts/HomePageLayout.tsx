import Image from 'next/image'
type Props = {
  footer?:any
  header?:any
  bg?:string
};

export const HomePageLayout: React.FC<Props> = ({footer, header, children, bg}) => {
  return <div className="flex flex-col min-h-screen bg-gray-50">
     <Image className="z-0 absolute" layout="fill" objectFit="cover" src="/bg1.svg"></Image>
    <div className="border-b z-10 bg-white">
      <div className="max-w-screen-2xl m-auto">{header}</div>
    </div>
    <div className="z-10 grow border-b flex flex-col">
      <div className="grow max-w-screen-2xl m-auto w-full sm:flex">
        <div className="px-8 w-full pb-8">{children}</div>
      </div>
    </div>
    {footer && <div className="bg-white">
      <div className="max-w-screen-2xl w-full m-auto p-4">{footer}</div>
    </div>}
  </div>

}
