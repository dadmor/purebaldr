type Props = {
  navBarLeft?:any
  navBarRight?:any
  footer?:any
  header?:any
};

export const BackOfficeLayout: React.FC<Props> = ({footer, header, navBarLeft, navBarRight, children}) => {
  return <div className="flex flex-col min-h-screen">
    <div className="border-b">
      <div className="max-w-screen-2xl m-auto">{header}</div>
    </div>
    <div className="grow border-b flex flex-col bg-gray-50">
      <div className="grow max-w-screen-2xl m-auto w-full sm:flex">
        {navBarLeft && <div className="sm:w-56 p-2 sm:p-0">
          <div className="sticky top-0">{navBarLeft}</div></div>} 
        <div className="px-8 w-full pb-8">{children}</div>
        {navBarRight && <div className="md:w-48 border-l">{navBarRight}</div>}
      </div>
    </div>
    {footer && <div className="bg-white">
      <div className="max-w-screen-2xl w-full m-auto p-4">{footer}</div>
    </div>}
   
  </div>

}
