/* */
/* #MAIN template - dont remove # tags! */
/* */
/* #Imports */
import Image from 'next/image'
import { HomePageLayout, Title,Text } from "components/layouts"
import { CustomHeader, CustomFooter } from "components"

const frontend: React.FC = () => { 
/* */
/* #ComponentBody */
  return (<HomePageLayout 
    header={<CustomHeader/>}
    footer={<CustomFooter/>}>
    <div className="text-center py-20 ">
      <p>TODO: </p> add fronend examples
    </div>
  </HomePageLayout>);
};

/* */
/* #ComponentExport */
export default frontend;
