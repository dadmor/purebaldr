/* */
/* #MAIN template - dont remove # tags! */
/* */
/* #Imports */
import Image from 'next/image'
import { HomePageLayout, Title,Text } from "components/layouts"
import { CustomHeader, CustomFooter } from "components"

const mobile: React.FC = () => { 
/* */
/* #ComponentBody */
  return (<HomePageLayout 
    header={<CustomHeader/>}
    footer={<CustomFooter/>}>
    <div className="text-center py-20 ">
      <p>TODO: </p>
      <p>add WebBaseKit support layout </p>
      <p>to fastest create NativeBase app </p>
      
    </div>
  </HomePageLayout>);
};

/* */
/* #ComponentExport */
export default mobile;
